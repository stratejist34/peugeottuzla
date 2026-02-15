import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'İletişim | Klas Oto Tuzla Servisi',
    description: 'Tuzla Aydıntepe Sanayi Sitesi. Randevu: 0542 198 51 34. Yol tarifi ve iletişim bilgileri.',
    alternates: {
        canonical: '/iletisim',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
