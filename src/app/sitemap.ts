import { MetadataRoute } from 'next';
import wpContent from '@/data/wp_content.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://peugeottuzla.com';

    // Exclude these slugs from sitemap
    const excludeSlugs = ['home', 'blog', 'site-map', 'rehber', 'iletisim', 'hakkimizda', 'servisler'];

    const blogPosts = wpContent
        .filter((item) => item.type === 'post')
        .filter((item) => item.content && item.content.length > 100)
        .map((post) => ({
            url: `${baseUrl}/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    const pages = wpContent
        .filter((item) => item.type === 'page' && !excludeSlugs.includes(item.slug))
        .filter((item) => item.content && item.content.length > 100)
        .map((page) => ({
            url: `${baseUrl}/${page.slug}`,
            lastModified: new Date(page.date),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/rehber`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/hakkimizda`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/iletisim`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/servisler`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...pages,
        ...blogPosts,
    ];
}
