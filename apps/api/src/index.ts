/// <reference types="@cloudflare/workers-types" />
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { jwt, sign } from 'hono/jwt';
import { zValidator } from '@hono/zod-validator';
import { ContactFormSchema } from '@repo/shared';
import type { Post, ContactMessage, ApiResponse, Video, Activity, PageContent, ResumeItem } from '@repo/shared';

type Bindings = {
  DB: D1Database;
  TURNSTILE_SECRET: string;
  ADMIN_PASSWORD: string;
  JWT_SECRET: string;
  ALLOWED_ORIGINS: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// Enable CORS
app.use('/api/*', async (c, next) => {
  const corsMiddleware = cors({
    origin: (origin) => {
      const allowed = (c.env.ALLOWED_ORIGINS || '').split(',');
      if (allowed.includes('*')) return origin;
      if (allowed.includes(origin)) return origin;
      return allowed[0] || origin; // Fallback to origin for simpler local dev if empty
    },
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  });
  return corsMiddleware(c, next);
});

// Middleware for Admin Routes
const adminMiddleware = async (c: any, next: any) => {
  const jwtMiddleware = jwt({
    secret: c.env.JWT_SECRET || 'fallback-secret-dev',
    alg: 'HS256',
  });
  return jwtMiddleware(c, next);
};

// --- PUBLIC ROUTES ---

// GET /api/posts - List published posts
app.get('/api/posts', async (c) => {
  const { results } = await c.env.DB.prepare(
    "SELECT * FROM posts WHERE published = 1 ORDER BY published_at DESC"
  ).all<Post>();

  // Parse tags_json
  const posts = results.map((p: Post) => ({
    ...p,
    tags: p.tags_json ? JSON.parse(p.tags_json) : [],
  }));

  return c.json({ success: true, data: posts });
});

// GET /api/posts/:slug - Get single post
app.get('/api/posts/:slug', async (c) => {
  const slug = c.req.param('slug');
  const post = await c.env.DB.prepare(
    "SELECT * FROM posts WHERE slug = ? AND published = 1"
  ).bind(slug).first<Post>();

  if (!post) {
    return c.json({ success: false, error: 'Post not found' }, 404);
  }

  return c.json({
    success: true, data: {
      ...post,
      tags: post.tags_json ? JSON.parse(post.tags_json) : []
    }
  });
});

// GET /api/videos - List public videos
app.get('/api/videos', async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM videos WHERE published = 1 ORDER BY id DESC").all<Video>();
  return c.json({ success: true, data: results });
});

// GET /api/activities - List activities
app.get('/api/activities', async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM activities ORDER BY sort_order ASC").all<Activity>();
  return c.json({ success: true, data: results });
});

// GET /api/content/:slug - Get static page content
app.get('/api/content/:slug', async (c) => {
  const slug = c.req.param('slug');
  const page = await c.env.DB.prepare("SELECT * FROM pages WHERE slug = ?").bind(slug).first<PageContent>();

  if (!page) return c.json({ success: false, error: 'Page not found' }, 404);
  return c.json({ success: true, data: page });
});


// GET /api/resume - List resume items
app.get('/api/resume', async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM resume_items ORDER BY sort_order ASC, start_date DESC").all<ResumeItem>();
  return c.json({ success: true, data: results });
});

// POST /api/contact - Submit contact form
app.post('/api/contact', zValidator('json', ContactFormSchema), async (c) => {
  const data = c.req.valid('json');

  // Verify Turnstile
  const formData = new FormData();
  formData.append('secret', c.env.TURNSTILE_SECRET);
  formData.append('response', data.token);
  formData.append('remoteip', c.req.header('CF-Connecting-IP') || '');

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  const result = await fetch(url, {
    body: formData,
    method: 'POST',
  });

  const outcome = await result.json() as any;
  if (!outcome.success) {
    return c.json({ success: false, error: 'Turnstile verification failed' }, 403);
  }

  // Insert into D1
  const info = await c.env.DB.prepare(
    "INSERT INTO contact_messages (name, email, phone, message, ip, user_agent) VALUES (?, ?, ?, ?, ?, ?)"
  ).bind(
    data.name,
    data.email,
    data.phone || null,
    data.message,
    c.req.header('CF-Connecting-IP'),
    c.req.header('User-Agent')
  ).run();

  if (!info.success) {
    return c.json({ success: false, error: 'Database error' }, 500);
  }

  return c.json({ success: true });
});

// --- ADMIN ROUTES ---

// POST /api/admin/login
app.post('/api/admin/login', async (c) => {
  const { password } = await c.req.json();
  if (password !== c.env.ADMIN_PASSWORD) {
    return c.json({ success: false, error: 'Invalid password' }, 401);
  }

  // Generate JWT
  const token = await sign({ role: 'admin', exp: Math.floor(Date.now() / 1000) + 7200 }, c.env.JWT_SECRET || 'fallback-secret-dev');
  return c.json({ success: true, token });
});

// Admin group
const admin = new Hono<{ Bindings: Bindings }>();
admin.use('*', adminMiddleware);

// GET /api/admin/posts
admin.get('/posts', async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM posts ORDER BY created_at DESC").all<Post>();
  return c.json({ success: true, data: results });
});

// POST /api/admin/posts
admin.post('/posts', async (c) => {
  const body = await c.req.json();
  // Simplified validation/insertion for brevity. In real app use Zod.
  const { title, slug, content, excerpt, published } = body;

  try {
    await c.env.DB.prepare(
      "INSERT INTO posts (title, slug, content, excerpt, published, published_at) VALUES (?, ?, ?, ?, ?, ?)"
    ).bind(title, slug, content, excerpt, published ? 1 : 0, published ? new Date().toISOString() : null).run();
    return c.json({ success: true });
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500);
  }
});

// PUT /api/admin/posts/:slug
admin.put('/posts/:slug', async (c) => {
  const slug = c.req.param('slug');
  const body = await c.req.json();
  const { title, content, excerpt, published } = body;

  try {
    // Check if post exists
    const post = await c.env.DB.prepare("SELECT * FROM posts WHERE slug = ?").bind(slug).first();
    if (!post) return c.json({ success: false, error: 'Post not found' }, 404);

    await c.env.DB.prepare(
      "UPDATE posts SET title = ?, content = ?, excerpt = ?, published = ?, updated_at = ? WHERE slug = ?"
    ).bind(title, content, excerpt, published ? 1 : 0, new Date().toISOString(), slug).run();
    return c.json({ success: true });
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500);
  }
});

// DELETE /api/admin/posts/:slug
admin.delete('/posts/:slug', async (c) => {
  const slug = c.req.param('slug');
  await c.env.DB.prepare("DELETE FROM posts WHERE slug = ?").bind(slug).run();
  return c.json({ success: true });
});

// GET /api/admin/messages
admin.get('/messages', async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM contact_messages ORDER BY created_at DESC").all<ContactMessage>();
  return c.json({ success: true, data: results });
});

// PUT /api/admin/messages/:id/status
admin.put('/messages/:id/status', async (c) => {
  const id = c.req.param('id');
  const { status } = await c.req.json();
  await c.env.DB.prepare("UPDATE contact_messages SET status = ? WHERE id = ?").bind(status, id).run();
  return c.json({ success: true });
});

// DELETE /api/admin/messages/:id
admin.delete('/messages/:id', async (c) => {
  const id = c.req.param('id');
  await c.env.DB.prepare("DELETE FROM contact_messages WHERE id = ?").bind(id).run();
  return c.json({ success: true });
});

// --- RESUME CRUD ---
admin.post('/resume', async (c) => {
  const body = await c.req.json();
  const { type, title, organization, start_date, end_date, description, sort_order } = body;
  await c.env.DB.prepare(
    "INSERT INTO resume_items (type, title, organization, start_date, end_date, description, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)"
  ).bind(type, title, organization, start_date, end_date, description, sort_order || 0).run();
  return c.json({ success: true });
});

admin.put('/resume/:id', async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const { type, title, organization, start_date, end_date, description, sort_order } = body;
  await c.env.DB.prepare(
    "UPDATE resume_items SET type=?, title=?, organization=?, start_date=?, end_date=?, description=?, sort_order=? WHERE id=?"
  ).bind(type, title, organization, start_date, end_date, description, sort_order, id).run();
  return c.json({ success: true });
});

admin.delete('/resume/:id', async (c) => {
  const id = c.req.param('id');
  await c.env.DB.prepare("DELETE FROM resume_items WHERE id = ?").bind(id).run();
  return c.json({ success: true });
});

// --- VIDEOS CRUD ---
admin.post('/videos', async (c) => {
  const body = await c.req.json();
  const { title, url, category } = body;
  // Basic youtube thumbnail logic
  let thumbnail_url = null;
  try {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      const cleanId = videoId?.split('&')[0];
      thumbnail_url = `https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`;
    }
  } catch (e) { }

  await c.env.DB.prepare(
    "INSERT INTO videos (title, url, thumbnail_url, category, published) VALUES (?, ?, ?, ?, 1)"
  ).bind(title, url, thumbnail_url, category).run();
  return c.json({ success: true });
});

admin.delete('/videos/:id', async (c) => {
  const id = c.req.param('id');
  await c.env.DB.prepare("DELETE FROM videos WHERE id = ?").bind(id).run();
  return c.json({ success: true });
});

// --- ACTIVITIES CRUD ---
admin.post('/activities', async (c) => {
  const body = await c.req.json();
  const { country, city, description, year, sort_order } = body;
  await c.env.DB.prepare(
    "INSERT INTO activities (country, city, description, year, sort_order) VALUES (?, ?, ?, ?, ?)"
  ).bind(country, city, description, year, sort_order || 0).run();
  return c.json({ success: true });
});

admin.delete('/activities/:id', async (c) => {
  const id = c.req.param('id');
  await c.env.DB.prepare("DELETE FROM activities WHERE id = ?").bind(id).run();
  return c.json({ success: true });
});

app.route('/api/admin', admin);

export default app;
