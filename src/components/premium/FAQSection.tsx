'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { useContactIntent } from '@/components/analytics/ContactIntentProvider';

const faqs = [
    {
        q: "Fiyatlarınız yetkili servise oranla nasıl?",
        a: "Kesinlikle hayır. Yetkili servis kalitesini ve uzmanlığını, özel servis maliyetleriyle sunuyoruz. Şeffaf fiyat politikamız sayesinde sürpriz maliyetlerle karşılaşmazsınız."
    },
    {
        q: "Hangi marka araçlara hizmet veriyorsunuz?",
        a: "Peugeot ve Citroën markalarında 20 yıllık derin teknik uzmanlığa sahibiz. Tüm model ve yaşlardaki Peugeot & Citroën araçlarınız için profesyonel çözümler üretiyoruz."
    },
    {
        q: "Orijinal yedek parça mı kullanıyorsunuz?",
        a: "Evet. Güvenliğiniz ve aracınızın ömrü için orijinal yedek parça veya PSA onaylı (Bosch, Valeo vb.) en üst kalite ekipmanları tercih ediyoruz. Tüm parçalarımız garantilidir."
    },
    {
        q: "Randevusuz araç kabul ediyor musunuz?",
        a: "Acil durumlar ve yol yardım ihtiyaçları için her zaman hazırız. Ancak periyodik bakımlar ve detaylı onarımlar için size daha kaliteli zaman ayırabilmemiz adına randevu almanızı öneririz."
    },
    {
        q: "Yapılan işlemler garantili mi?",
        a: "Klas Oto bünyesinde yapılan tüm mekanik ve elektronik onarımlar ile parça değişimleri işçilik ve parça garantisi altındadır. Güveniniz bizim en değerli sermayemizdir."
    }
];

const FAQSection = () => {
    const { openContactIntent } = useContactIntent();
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-black" id="faq">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-amber-custom font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
                    >
                        Merak Edilenler
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading text-white mb-8 uppercase"
                    >
                        SIKÇA SORULAN <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">SORULAR.</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className={`group cursor-pointer rounded-3xl border transition-all duration-500 overflow-hidden ${activeIndex === index
                                    ? 'bg-neutral-900/80 border-amber-custom/30 shadow-[0_20px_40px_rgba(0,0,0,0.3)]'
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                    }`}
                            >
                                <div className="p-6 md:p-8 flex items-center justify-between gap-6">
                                    <div className="flex items-start gap-5">
                                        <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-colors duration-500 ${activeIndex === index ? 'text-amber-custom' : 'text-gray-500'
                                            }`}>
                                            <HelpCircle size={22} />
                                        </div>
                                        <h3 className={`text-lg md:text-xl font-bold font-body leading-snug transition-colors duration-500 ${activeIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <div className={`flex-shrink-0 transition-transform duration-500 ${activeIndex === index ? 'rotate-180 text-amber-custom' : 'text-gray-500'}`}>
                                        {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-6 md:px-8 pb-8 pt-2 ml-11">
                                                <div className="h-px w-full bg-white/5 mb-6" />
                                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl font-body">
                                                    {faq.a}
                                                </p>

                                                {index === 0 && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="mt-8 flex items-center gap-2 text-amber-custom font-bold text-xs uppercase tracking-widest group/link"
                                                    >
                                                        <a
                                                            href="tel:05421985134"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                openContactIntent({
                                                                    type: 'phone',
                                                                    href: 'tel:05421985134',
                                                                    source: 'faq_tel'
                                                                });
                                                            }}
                                                            className="flex items-center gap-2"
                                                        >
                                                            Fiyat Teklifi Al <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                                        </a>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest font-bold">Başka bir sorunuz mu var?</p>
                    <a
                        href="https://wa.me/905421985134"
                        onClick={(event) => {
                            event.preventDefault();
                            openContactIntent({
                                type: 'whatsapp',
                                href: 'https://wa.me/905421985134',
                                source: 'faq_whatsapp_cta'
                            });
                        }}
                        className="inline-flex items-center gap-3 bg-white/5 hover:bg-amber-custom hover:text-black border border-white/10 hover:border-amber-custom px-8 py-4 rounded-full text-white font-black text-xs uppercase tracking-widest transition-all duration-500 group"
                    >
                        <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                        WhatsApp ile Sorun
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
