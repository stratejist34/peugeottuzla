import type { Metadata } from "next";
import { Archivo_Black, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from '@/components/premium/SmoothScroll';



const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
});

const outfit = Outfit({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Klas Oto | Peugeot & Citroen Özel Servisi Tuzla",
  description: "Tuzla'da profesyonel Peugeot ve Citroen özel servisi. Orijinal parça garantisi ve hızlı çözüm.",
  verification: {
    google: "WyhAS5JfhhBBu_D_JJ-8JIMOjwHckFZHYGYpCq6xbPo",
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Schema from "@/components/layout/Schema";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MobileActionBar from "@/components/layout/MobileActionBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-mobile.png"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${archivoBlack.variable} ${outfit.variable} ${plusJakartaSans.variable} antialiased bg-[#050505] text-white`}
      >
        <GoogleAnalytics GA_MEASUREMENT_ID="G-V329GE6W72" />
        <SmoothScroll>
          <Navbar />
          <Schema />
          {children}
          <Footer />
          <MobileActionBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
