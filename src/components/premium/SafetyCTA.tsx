'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Shield, DollarSign } from 'lucide-react';
import Image from 'next/image';
import MagneticButton from './MagneticButton';
import { trackEvent } from '@/lib/gtag';
import { useContactIntent } from '@/components/analytics/ContactIntentProvider';
import { usePathname } from 'next/navigation';

const SafetyCTA = () => {
    const pathname = usePathname();
    const { openContactIntent } = useContactIntent();
    const getPagePrefix = () => {
        if (pathname === '/') return 'anasayfa';
        if (pathname.includes('/iletisim')) return 'iletisim_sayfasi';
        return 'diger_sayfalar';
    };
    return (
        <section className="relative py-48 overflow-hidden">
            {/* Background Image Optimization */}
            <Image
                src="/images/yol-yardim.jpg"
                alt="Yol Yardım"
                fill
                className="object-cover"
            />
            {/* Using solid-ish overlay instead of backdrop-blur on a large fixed background */}
            <div className="absolute inset-0 bg-[#07090f]/90 z-[1]"></div>

            {/* Animated glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-pulse" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                        Yolda Kalmayın, <br />
                        <span className="text-amber-custom bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">Güvende Kalın.</span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-medium">
                        Profesyonel ekibimiz ve modern yol yardım ekipmanlarımızla 7/24 yanınızdayız.
                        Bir telefonla en hızlı çözümü kapınıza getiriyoruz.
                    </p>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md"
                        >
                            <Shield className="text-amber-custom" size={18} />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Şeffaf Fiyatlandırma</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md"
                        >
                            <DollarSign className="text-amber-custom" size={18} />
                            <span className="text-xs font-semibold text-white uppercase tracking-wider">Ekonomik Çözümler</span>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {[
                        {
                            icon: <Phone size={48} />,
                            label: '0542 198 51 34',
                            sub: '7/24 Destek Hattı',
                            color: 'text-amber-custom',
                            href: 'tel:05421985134',
                            eventName: 'tel_aramasi'
                        },
                        {
                            icon: <MessageCircle size={48} />,
                            label: 'WhatsApp',
                            sub: 'Hızlı Mesaj Gönder',
                            color: 'text-green-500',
                            href: 'https://wa.me/905421985134',
                            eventName: 'whatsapp_yazanlar'
                        },
                        {
                            icon: <MapPin size={48} />,
                            label: 'Yol Tarifi Al',
                            sub: 'Tuzla Sanayi Sitesi',
                            color: 'text-amber-custom/80',
                            href: 'https://maps.app.goo.gl/bze2NgSC2xgxw5LL9',
                            eventName: 'konum_tiklandi'
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <MagneticButton>
                                <a
                                    href={item.href}
                                    onClick={(event) => {
                                        if (item.eventName === 'tel_aramasi') {
                                            event.preventDefault();
                                            openContactIntent({
                                                type: 'phone',
                                                href: 'tel:05421985134',
                                                source: `${getPagePrefix()}_safety_cta`
                                            });
                                            return;
                                        }
                                        if (item.eventName === 'whatsapp_yazanlar') {
                                            event.preventDefault();
                                            openContactIntent({
                                                type: 'whatsapp',
                                                href: 'https://wa.me/905421985134',
                                                source: `${getPagePrefix()}_safety_cta`
                                            });
                                            return;
                                        }
                                        if (item.eventName === 'konum_tiklandi') {
                                            trackEvent('konum_tiklandi', { source: `${getPagePrefix()}_safety_cta` });
                                            return;
                                        }
                                        trackEvent(`${getPagePrefix()}_safety_cta_${item.label.toLowerCase().replace(/ /g, '_')}_tiklamasi`);
                                    }}
                                    className="block bg-neutral-900/60 border border-white/10 shadow-2xl px-12 py-10 rounded-[2.5rem] flex flex-col items-center gap-4 hover:bg-neutral-800/80 transition-all group min-w-[280px]"
                                >
                                    <div className={`${item.color} group-hover:scale-110 transition-transform duration-500`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-xl font-black text-white">{item.label}</span>
                                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{item.sub}</span>
                                </a>
                            </MagneticButton>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SafetyCTA;
