import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Hakkımızda | Klas Oto Peugeot & Citroen Servisi',
    description: '20 yıllık tecrübe ile Tuzla, Gebzeb ve Pendik bölgesinde profesyonel Peugeot ve Citroen özel servisi.',
    alternates: {
        canonical: '/hakkimizda',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
