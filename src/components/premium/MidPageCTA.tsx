'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useContactIntent } from '@/components/analytics/ContactIntentProvider';
import { usePathname } from 'next/navigation';

const MidPageCTA = () => {
    const pathname = usePathname();
    const { openContactIntent } = useContactIntent();

    const getPagePrefix = () => {
        if (pathname === '/') return 'anasayfa';
        if (pathname.includes('/iletisim')) return 'iletisim_sayfasi';
        return 'diger_sayfalar';
    };

    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e16] via-[#0a1628] to-[#0c0e16]" />
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Aracınız İçin Hemen
                        <span className="text-amber-custom"> Randevu Alın</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg mb-8">
                        Ücretsiz arıza tespiti. Orijinal parça garantisi. Aynı gün teslim.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <a
                            href="tel:05421985134"
                            onClick={(event) => {
                                event.preventDefault();
                                openContactIntent({
                                    type: 'phone',
                                    href: 'tel:05421985134',
                                    source: `${getPagePrefix()}_midpage_cta`
                                });
                            }}
                            className="flex items-center gap-3 bg-amber-custom text-black px-8 py-4 rounded-2xl font-black text-base transition-all hover:shadow-[0_10px_40px_rgba(255,179,0,0.3)] active:scale-95"
                        >
                            <Phone size={20} className="fill-black" />
                            <span>ŞİMDİ ARA — 0542 198 51 34</span>
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="https://wa.me/905421985134"
                            onClick={(event) => {
                                event.preventDefault();
                                openContactIntent({
                                    type: 'whatsapp',
                                    href: 'https://wa.me/905421985134',
                                    source: `${getPagePrefix()}_midpage_cta`
                                });
                            }}
                            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black text-base transition-all hover:shadow-[0_10px_40px_rgba(37,211,102,0.25)] active:scale-95"
                        >
                            <MessageCircle size={20} />
                            <span>WhatsApp ile Yaz</span>
                        </a>
                    </div>

                    <p className="text-gray-600 text-xs mt-6 font-medium">
                        Özel servis hizmeti • Yetkili servis değiliz • Tuzla, Pendik, Gebze
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MidPageCTA;
