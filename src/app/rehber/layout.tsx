import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Peugeot & Citroen Teknik Rehber | Klas Oto',
    description: 'Peugeot ve Citroen araçları için teknik makaleler, bakım rehberleri ve kronik sorun çözümleri.',
    alternates: {
        canonical: '/rehber',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
