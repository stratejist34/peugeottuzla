import type { Metadata } from "next";
import { Archivo_Black, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import SmoothScroll from '@/components/premium/SmoothScroll';

// --- GOOGLE FONTS ---
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

// --- LOCAL FONTS (Optimized) ---
const peugeotNew = localFont({
  src: [
    { path: '../../public/fonts/peugeot-new/PeugeotNewRegular.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/peugeot-new/PeugeotNewBold.otf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/peugeot-new/PeugeotNewBlack.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-peugeot',
  display: 'swap',
});

const digital7 = localFont({
  src: '../../public/fonts/digital_7/digital-7.ttf',
  variable: '--font-digital',
  display: 'swap',
});

const manifold = localFont({
  src: [
    { path: '../../public/fonts/manifold-extended/ManifoldExtendedCF-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/manifold-extended/ManifoldExtendedCF-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-manifold',
  display: 'swap',
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
      <body
        className={`
          ${archivoBlack.variable} 
          ${outfit.variable} 
          ${plusJakartaSans.variable} 
          ${peugeotNew.variable} 
          ${digital7.variable} 
          ${manifold.variable}
          antialiased bg-[#050505] text-white
        `}
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
