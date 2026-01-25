-- Migration number: 0002 	 2026-01-14T12:00:00.000Z
-- Videos Table
CREATE TABLE IF NOT EXISTS videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    url TEXT NOT NULL, -- YouTube or other URL
    thumbnail_url TEXT,
    category TEXT DEFAULT 'general', -- 'tv', 'short', 'general'
    published INTEGER DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_videos_category ON videos(category);

-- Activities Table (Yurtdışı Faaliyetler)
CREATE TABLE IF NOT EXISTS activities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    country TEXT NOT NULL,
    city TEXT,
    description TEXT NOT NULL,
    year TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
);

-- Pages Table (Statik Sayfalar: Hakkında, Uzmanlık vb.)
CREATE TABLE IF NOT EXISTS pages (
    slug TEXT PRIMARY KEY, -- 'about', 'expertise', 'publications'
    title TEXT NOT NULL,
    content TEXT, -- HTML content
    image_url TEXT,
    meta_description TEXT,
    updated_at TEXT DEFAULT (datetime('now'))
);
