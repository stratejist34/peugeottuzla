import type { Metadata } from 'next';
import IletisimClient from './IletisimClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: "İletişim & Konum | Klas Oto Peugeot & Citroen Servisi Tuzla",
    description: "Klas Oto Tuzla servisimize ulaşın. Aydıntepe, Fedakar Sokağı Tuzla Oto Sanayi Sitesi B-2 Blok No:39/123. Randevu ve bilgi için 0542 198 51 34.",
    alternates: { canonical: '/iletisim' },
    openGraph: {
        title: "İletişim & Konum | Klas Oto Peugeot & Citroen Servisi Tuzla",
        description: "Klas Oto Tuzla servisimize ulaşın. Aydıntepe, Fedakar Sokağı Tuzla Oto Sanayi Sitesi B-2 Blok No:39/123. Randevu için 0542 198 51 34.",
        url: "https://peugeottuzla.com/iletisim",
        images: [{ url: "/images/Klas-Oto-Tuzla-Peugeot-Servis-1024x650.jpg", width: 1024, height: 650, alt: "Klas Oto Tuzla Servis" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "İletişim & Konum | Klas Oto Peugeot & Citroen Servisi Tuzla",
        description: "Klas Oto Tuzla servisimize ulaşın. Randevu için 0542 198 51 34.",
        images: ["/images/Klas-Oto-Tuzla-Peugeot-Servis-1024x650.jpg"],
    },
};

export default function IletisimPage() {
    return <IletisimClient />;
}
