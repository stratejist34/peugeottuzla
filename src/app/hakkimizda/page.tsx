import type { Metadata } from 'next';
import HakkimizdaClient from './HakkimizdaClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: "Hakkımızda | Klas Oto Peugeot & Citroen Özel Servisi Tuzla",
    description: "20 yıllık Peugeot ve Citroen uzmanlığıyla Tuzla'da hizmet veriyoruz. Orijinal parça garantisi, şeffaf fiyatlandırma ve uzman kadromuzla tanışın.",
    alternates: { canonical: '/hakkimizda' },
    openGraph: {
        title: "Hakkımızda | Klas Oto Peugeot & Citroen Özel Servisi Tuzla",
        description: "20 yıllık Peugeot ve Citroen uzmanlığıyla Tuzla'da hizmet veriyoruz. Orijinal parça garantisi ve uzman kadro.",
        url: "https://peugeottuzla.com/hakkimizda",
        images: [{ url: "/images/Klas-Oto-Giris-1024x577.png", width: 1024, height: 577, alt: "Klas Oto Tuzla Servisi" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hakkımızda | Klas Oto Peugeot & Citroen Özel Servisi Tuzla",
        description: "20 yıllık Peugeot ve Citroen uzmanlığıyla Tuzla'da hizmet veriyoruz.",
        images: ["/images/Klas-Oto-Giris-1024x577.png"],
    },
};

export default function HakkimizdaPage() {
    return <HakkimizdaClient />;
}
