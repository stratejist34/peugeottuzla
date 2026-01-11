'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import CorporateIdentity from '@/components/premium/CorporateIdentity';
import SafetyCTA from '@/components/premium/SafetyCTA';
import Partners from '@/components/premium/Partners';
import PartnersCarousel from '@/components/premium/PartnersCarousel';
import ModelsShowcase from '@/components/premium/ModelsShowcase';
import ModelsShowcaseMobile from '@/components/premium/ModelsShowcaseMobile';
import Testimonials from '@/components/premium/Testimonials';
import KnowledgeBase from '@/components/premium/KnowledgeBase';
import Localization from '@/components/premium/Localization';
import GoogleRatingBadge from '@/components/premium/GoogleRatingBadge';
import FAQSection from '@/components/premium/FAQSection';
import QuickPriceForm from '@/components/premium/QuickPriceForm';
import StatsSection from '@/components/premium/StatsSection';
import ServiceDeck from '@/components/premium/ServiceDeck';
import BrandTrustBar from '@/components/premium/BrandTrustBar';
import DiagnosticXray from '@/components/premium/DiagnosticXray';
import { trackEvent } from '@/lib/gtag';

const KlasOtoPremium = () => {
  const [isPriceFormOpen, setIsPriceFormOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Delay slightly to avoid direct setState in effect warning
    const timer = setTimeout(() => setIsMounted(true), 0);
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07090f] text-white font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">


      {/* --- HERO SECTION --- */}
      <header className="relative min-h-[95vh] flex items-center pt-0 overflow-hidden">
        {/* Animated Background Elements */}
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Removed framer-motion wrapper for performance */}
          <div className="absolute inset-0 w-full h-full">
            {/* Mobile: Pure Gradient Background (NO IMAGE for LCP performance) */}
            <div className="block md:hidden absolute inset-0 w-full h-full">
              {/* Rich gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#07090f] via-blue-950/30 to-[#07090f]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent" />
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
              />
            </div>

            {/* Desktop Image (>= 768px) - Conditional render to prevent mobile download */}
            {isMounted && isDesktop && (
              <div className="hidden md:block absolute inset-0 w-full h-full">
                <Image
                  src="/images/2022_peugeot_308_7_2560x1440.jpg"
                  alt="Peugeot 308 Hero Background"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-cover opacity-40"
                  sizes="100vw"
                  quality={75}
                />
              </div>
            )}

            {/* Gradients - Desktop only */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#07090f] via-[#07090f]/70 to-transparent z-10" />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#07090f] via-transparent to-transparent z-10" />
          </div>

          {/* Top Right Navy Glow - Kept separate/floating */}
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse-slow pointer-events-none" />
        </div>

        {/* Removed ghost text as per user request */}

        <div className="container mx-auto px-6 relative">
          <div className="pt-40 pb-10 md:pt-64 md:pb-32 lg:pt-48 lg:pb-32 min-h-[100vh] flex flex-col lg:flex-row items-center relative z-10">
            {/* Left Column: Content */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">

              <h1 className="text-4xl md:text-7xl lg:text-8xl font-display tracking-tighter leading-[0.95] mb-8 py-2 uppercase max-w-[78vw]">
                <span className="block text-gray-500 overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-manifold text-outline md:text-outline-lg tracking-[-0.01em] py-1 relative -top-[2px]"
                  >
                    KUSURSUZ
                  </motion.span>
                </span>
                <span className="block text-white overflow-hidden">
                  <motion.span
                    initial={isMounted ? { y: "100%" } : { y: 0 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-premium-gradient tracking-[-0.015em] py-1 block"
                  >
                    PERFORMANS.
                  </motion.span>
                </span>
              </h1>
              <p
                className="font-body text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-8 border-l-4 border-amber-custom pl-8"
              >
                Tuzla, Gebze ve Pendik ilçeleri için 20 yıldır, en yüksek teknoloji ve şeffaf servis anlayışıyla hizmet veriyoruz.
              </p>

              {/* Google Rating Badge */}
              <div className="mb-12">
                <GoogleRatingBadge rating={4.9} reviewCount={250} variant="hero" />
              </div>

              {/* Trust Badges Row (Relocated below content to avoid logo collision) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <div
                  className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] md:text-[11px] font-semibold text-cyan-400 uppercase tracking-[0.2em] backdrop-blur-md"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  7/24 Destek
                </div>

                <div
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-custom/10 border border-amber-custom/20 font-tag text-[10px] md:text-[11px] text-amber-custom backdrop-blur-md"
                >
                  <ShieldCheck size={14} />
                  Garanti Desteği
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a
                  href="tel:05421985134"
                  onClick={() => trackEvent('anasayfa_hero_tel_arama_butonu_tiklamasi')}
                  className="btn-premium-primary"
                >
                  <span>Aracını Kontrole Al</span>
                  <ArrowRight className="ml-2 relative z-10 transition-transform group-hover:translate-x-1" size={18} />
                </a>

                <div className="hidden md:block">
                  <button
                    onClick={() => {
                      setIsPriceFormOpen(true);
                      trackEvent('anasayfa_hero_fiyat_teklifi_butonu_tiklamasi');
                    }}
                    className="btn-premium-secondary"
                  >
                    <MessageCircle className="mr-2 text-amber-custom" size={18} />
                    FİYAT TEKLİFİ AL
                  </button>
                </div>

                <button
                  onClick={() => {
                    window.open('https://maps.app.goo.gl/bze2NgSC2xgxw5LL9', '_blank');
                    trackEvent('anasayfa_hero_konum_butonu_tiklamasi');
                  }}
                  className="btn-premium-secondary"
                >
                  <MapPin className="mr-2 text-amber-custom" size={18} />
                  Konum Al
                </button>
              </motion.div>

              <BrandTrustBar />
            </div>

            {/* Right Column: Diagnostic System */}
            <div className="hidden lg:flex flex-1 flex-col items-center justify-center relative mt-0 lg:mt-0">
              <DiagnosticXray />
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] vertical-text">Kaydır</span>
              <div className="w-px h-16 bg-gradient-to-b from-amber-custom to-transparent relative overflow-hidden">
                <motion.div
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-full bg-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </header >

      {/* --- STATS SECTION --- Desktop only for performance */}
      <div className="hidden md:block">
        <StatsSection />
      </div>

      {/* --- CORPORATE IDENTITY --- */}
      <div id="hakkımızda">
        <CorporateIdentity />
      </div>

      {/* --- MODELS SHOWCASE --- Separate mobile/desktop */}
      <div id="modeller">
        {/* Mobile: Simplified 6-model grid */}
        <div className="block md:hidden">
          <ModelsShowcaseMobile />
        </div>
        {/* Desktop: Full showcase with tabs */}
        <div className="hidden md:block">
          <ModelsShowcase />
        </div>
      </div>

      {/* --- PARTNERS --- Separate mobile/desktop */}
      {/* Mobile: 4-item static carousel */}
      <div className="block md:hidden">
        <PartnersCarousel />
      </div>
      {/* Desktop: Full marquee */}
      <div className="hidden md:block">
        <Partners />
      </div>

      {/* --- SERVICES GRID --- */}
      < section id="hizmetler" className="py-32 px-6 relative bg-gradient-to-b from-[#07090f] to-[#0c0e16]" >
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-custom font-medium tracking-wide text-sm">Neler Yapıyoruz?</span>
              <h2 className="font-heading text-5xl md:text-7xl mt-4 mb-6 text-white leading-tight">Profesyonel <br /><span className="text-gray-400">Çözümlerimiz.</span></h2>
              <div className="h-1.5 w-32 bg-amber-custom mx-auto rounded-full" />
            </motion.div>
          </div>

          {/* New Interactive Service Deck */}
          <ServiceDeck />

        </div>
      </section>

      {/* --- KNOWLEDGE BASE --- */}
      < KnowledgeBase />

      {/* --- TESTIMONIALS --- */}
      < Testimonials />

      {/* --- FAQ SECTION --- */}
      < FAQSection />

      {/* --- TEAM SHOWCASE (Hidden for now) --- */}
      {/* < TeamShowcase /> */}

      {/* --- LOCALIZATION & TRUST --- */}
      < Localization />

      <SafetyCTA />

      {/* --- QUICK PRICE FORM MODAL --- */}
      < QuickPriceForm isOpen={isPriceFormOpen} onClose={() => setIsPriceFormOpen(false)} />
    </div >
  );
};

export default KlasOtoPremium;

