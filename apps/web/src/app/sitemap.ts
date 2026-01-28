import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getPosts();

    const blogUrls = posts.map((post) => ({
        url: `https://drselamibalci.com/blog/${post.slug}`,
        lastModified: new Date(post.published_at || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const routes = [
        '',
        '/hakkinda',
        '/uzmanlik-alanlari',
        '/yurtdisi-faaliyetler',
        '/yayinlar-ve-basin',
        '/iletisim',
        '/blog',
    ].map((route) => ({
        url: `https://drselamibalci.com${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes, ...blogUrls];
}
