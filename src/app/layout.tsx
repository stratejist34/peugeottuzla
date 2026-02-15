import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from '@/components/premium/SmoothScroll';
import { GoogleAnalytics } from '@next/third-parties/google';

const peugeotNew = localFont({
  src: [
    {
      path: './fonts/peugeotnew/PeugeotNew-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/peugeotnew/PeugeotNew-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/peugeotnew/PeugeotNew-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-peugeot',
  display: 'swap',
});

const manifoldExtended = localFont({
  src: [
    {
      path: './fonts/manifoldextended/ManifoldExtendedCF-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/manifoldextended/ManifoldExtendedCF-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-manifold',
  display: 'swap',
});

const digital7 = localFont({
  src: [
    {
      path: './fonts/digital7/digital7.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-digital',
  display: 'swap',
});

const dsDigital = localFont({
  src: [
    {
      path: './fonts/dsdigital/dsdigi.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-ds-digital',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'optional',
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
import ContactIntentProvider from '@/components/analytics/ContactIntentProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${peugeotNew.variable} ${manifoldExtended.variable} ${plusJakartaSans.variable} ${digital7.variable} ${dsDigital.variable}`}>
      <body
        className="antialiased bg-[#050505] text-white"
      >
        <GoogleAnalytics gaId="G-V329GE6W72" />

        <ContactIntentProvider>
          <SmoothScroll>
            <Navbar />
            <Schema />
            {children}
            <Footer />
            <MobileActionBar />
          </SmoothScroll>
        </ContactIntentProvider>
      </body>
    </html>
  );
}
