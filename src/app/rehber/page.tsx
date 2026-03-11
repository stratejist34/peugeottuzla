import type { Metadata } from 'next';
import wpContent from '@/data/wp_content.json';
import RehberClient from './RehberClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: "Rehber | Peugeot & Citroen Teknik Yazıları | Klas Oto Tuzla",
    description: "Peugeot ve Citroen araçlarınız için bakım rehberleri, arıza çözümleri ve teknik ipuçları. Uzman mekaniklerimizin hazırladığı kapsamlı içerikler.",
    alternates: { canonical: '/rehber' },
    openGraph: {
        title: "Rehber | Peugeot & Citroen Teknik Yazıları | Klas Oto Tuzla",
        description: "Peugeot ve Citroen araçlarınız için bakım rehberleri, arıza çözümleri ve teknik ipuçları.",
        url: "https://peugeottuzla.com/rehber",
        images: [{ url: "/images/Klas-Oto-Tuzla-Peugeot-Servis-1024x650.jpg", width: 1024, height: 650, alt: "Klas Oto Peugeot Rehber" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rehber | Peugeot & Citroen Teknik Yazıları | Klas Oto Tuzla",
        description: "Peugeot ve Citroen araçlarınız için bakım rehberleri ve teknik ipuçları.",
        images: ["/images/Klas-Oto-Tuzla-Peugeot-Servis-1024x650.jpg"],
    },
};

export default function BlogIndexPage() {
    const posts = wpContent
        .filter((item) => item.type === 'post')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return <RehberClient posts={posts} />;
}
