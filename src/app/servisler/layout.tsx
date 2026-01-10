import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | Peugeot & Citroen Bakım Onarım',
    description: 'Periyodik bakım, motor mekanik, şanzıman tamiri, fren sistemleri ve bilgisayarlı arıza tespit hizmetleri.',
    alternates: {
        canonical: '/servisler',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
