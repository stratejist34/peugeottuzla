import { MetadataRoute } from 'next';
import wpContent from '@/data/wp_content.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://peugeottuzla.com';

    const blogPosts = wpContent
        .filter((item) => item.type === 'post')
        .map((post) => ({
            url: `${baseUrl}/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    const pages = wpContent
        .filter((item) => item.type === 'page' && item.slug !== 'home')
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
        ...pages,
        ...blogPosts,
    ];
}
