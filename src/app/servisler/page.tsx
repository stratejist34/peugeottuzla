import type { Metadata } from 'next';
import ServislerClient from './ServislerClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: "Servisler | Klas Oto Peugeot & Citroen Özel Servisi Tuzla",
    description: "Motor, şanzıman, fren, klima, elektronik arıza tespiti ve daha fazlası. Peugeot ve Citroen araçlarınız için uzman servis hizmeti Tuzla'da.",
    alternates: { canonical: '/servisler' },
    openGraph: {
        title: "Servisler | Klas Oto Peugeot & Citroen Özel Servisi Tuzla",
        description: "Motor, şanzıman, fren, klima, elektronik arıza tespiti. Peugeot & Citroen uzman servis hizmeti Tuzla'da.",
        url: "https://peugeottuzla.com/servisler",
        images: [{ url: "/images/Klas-Oto-Peugeot-Servis-1024x650.jpg", width: 1024, height: 650, alt: "Klas Oto Peugeot Servis Hizmetleri" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Servisler | Klas Oto Peugeot & Citroen Özel Servisi Tuzla",
        description: "Motor, şanzıman, fren, klima, elektronik arıza tespiti. Peugeot & Citroen uzman servis.",
        images: ["/images/Klas-Oto-Peugeot-Servis-1024x650.jpg"],
    },
};

export default function ServislerPage() {
    return <ServislerClient />;
}
