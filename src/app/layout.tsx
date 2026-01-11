import type { Metadata } from "next";
import { Archivo_Black, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from '@/components/premium/SmoothScroll';
import Script from 'next/script';

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
  preload: true, // Preload critical hero font
});

const outfit = Outfit({
  weight: ['400', '600', '800'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'optional', // Non-critical, use optional to prevent blocking
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'optional', // Non-critical, use optional to prevent blocking
});

export const metadata: Metadata = {
  metadataBase: new URL('https://peugeottuzla.com'),
  title: "Klas Oto | Peugeot & Citroen Özel Servisi Tuzla",
  description: "Tuzla'da profesyonel Peugeot ve Citroen özel servisi. Orijinal parça garantisi ve hızlı çözüm.",
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "WyhAS5JfhhBBu_D_JJ-8JIMOjwHckFZHYGYpCq6xbPo",
  },
};

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Schema from '@/components/layout/Schema';
import MobileActionBar from '@/components/layout/MobileActionBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload CRITICAL fonts only */}
        <link
          rel="preload"
          href="/fonts/manifold-extended/ManifoldExtendedCF-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/peugeot-new/PeugeotNewBold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${archivoBlack.variable} ${outfit.variable} ${plusJakartaSans.variable} antialiased bg-[#050505] text-white`}
      >
        {/* Google Analytics - DEFERRED for performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V329GE6W72"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V329GE6W72');
          `}
        </Script>

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
