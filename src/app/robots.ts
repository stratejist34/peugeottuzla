import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/private/',
                    '/wp-admin/',
                    '/wp-content/',
                    '/wp-includes/',
                    '/tag/',
                    '/author/',
                    '/search/',
                    '/feed/',
                    '/comments/',
                    '/*?*',
                ],
            },
        ],
        sitemap: 'https://peugeottuzla.com/sitemap.xml',
    };
}
