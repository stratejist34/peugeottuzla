'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    MapPin,
    Clock,
    MessageCircle,
    Send,
    Car,
    ArrowRight
} from 'lucide-react';
import { trackEvent } from '@/lib/gtag';
import { useContactIntent } from '@/components/analytics/ContactIntentProvider';

const ContactPage = () => {
    const { openContactIntent } = useContactIntent();
    const handleContactClick = (type: string, value: string) => {
        trackEvent(`iletisim_sayfasi_${type}_butonu_tiklamasi`, { value });
    };
    return (
        <main className="min-h-screen bg-[#07090f] pt-20 selection:bg-cyan-500 selection:text-white">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(6,182,212,0.15),transparent)] pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-cyan-500 font-tag tracking-[0.5em] uppercase text-[10px] mb-6 block">İletişim & Lokasyon</span>
                        <h1 className="text-5xl md:text-8xl font-display text-white mb-4 tracking-normal uppercase leading-tight">
                            BİZE <br />
                            <span className="text-outline-lg opacity-80">ULAŞIN.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="pb-32 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* --- CONTACT INFO --- */}
                        <div className="lg:col-span-4 space-y-4">
                            {[
                                {
                                    icon: <Phone size={22} />,
                                    title: 'Hızlı Destek',
                                    value: '0542 198 51 34',
                                    sub: '7/24 Randevu ve Danışmanlık',
                                    link: 'tel:05421985134',
                                    color: 'group-hover:text-cyan-400',
                                    eventName: 'tel_aramasi'
                                },

                                {
                                    icon: <MapPin size={22} />,
                                    title: 'Adres',
                                    value: 'Tuzla Sanayi Sitesi',
                                    sub: 'Aydıntepe, Fedakar Sokağı Tuzla oto Sanayi Sitesi B-2 Blok No:39/123, 34903 Tuzla/İstanbul',
                                    link: 'https://maps.app.goo.gl/bze2NgSC2xgxw5LL9',
                                    color: 'group-hover:text-cyan-400'
                                },
                                {
                                    icon: <Clock size={22} />,
                                    title: 'Çalışma Saatleri',
                                    value: '08:30 - 19:00',
                                    sub: 'Pazartesi - Cumartesi',
                                    link: '#',
                                    color: 'group-hover:text-white'
                                }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    onClick={(event) => {
                                        if (item.eventName === 'tel_aramasi') {
                                            event.preventDefault();
                                            openContactIntent({
                                                type: 'phone',
                                                href: 'tel:05421985134',
                                                source: 'iletisim_kart'
                                            });
                                            return;
                                        }
                                        handleContactClick(item.title.toLowerCase().replace(' ', '_'), item.value);
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="block p-7 bg-neutral-900/30 border border-white/5 rounded-[2rem] hover:border-cyan-500/30 transition-all group backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-all duration-500">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-1">{item.title}</p>
                                            <p className={`text-white font-display text-lg tracking-tight transition-colors duration-500 ${item.color}`}>{item.value}</p>
                                            <p className="text-gray-600 text-[11px] font-medium font-body">{item.sub}</p>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}

                            {/* WhatsApp Floating CTA */}
                            <a
                                href="https://wa.me/905421985134"
                                onClick={(event) => {
                                    event.preventDefault();
                                    openContactIntent({
                                        type: 'whatsapp',
                                        href: 'https://wa.me/905421985134',
                                        source: 'iletisim_whatsapp_cta'
                                    });
                                }}
                                className="flex items-center justify-between p-7 bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem] hover:bg-emerald-500/10 transition-all group"
                            >
                                <div className="flex items-center gap-4 text-emerald-500">
                                    <MessageCircle size={28} />
                                    <span className="font-manifold text-[11px] uppercase tracking-[0.2em] text-emerald-400">WhatsApp Canlı Destek</span>
                                </div>
                                <Send size={18} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* --- MAP & CTAs --- */}
                        <div className="lg:col-span-8 space-y-8">
                            {/* Google Maps Embed */}
                            <div className="w-full h-[550px] rounded-[3rem] overflow-hidden border border-white/5 relative group shadow-2xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.9427920174044!2d29.303818399999997!3d40.8511798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadda898056a21%3A0xda4a34066adfe388!2sPeugeot%20Citroen%20Servis%20Klas%20Oto!5e0!3m2!1str!2str!4v1767080147901!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                                />

                                {/* Float Overlays */}
                                <div className="absolute top-8 left-8 right-8 flex justify-between pointer-events-none">
                                    <div className="px-5 py-2 rounded-full bg-cyan-600 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 ">
                                        Canlı Konum İzleme
                                    </div>
                                    <a
                                        href="https://maps.app.goo.gl/bze2NgSC2xgxw5LL9"
                                        target="_blank"
                                        onClick={() => handleContactClick('konum_yol_tarifi', 'google_maps')}
                                        className="bg-white text-black px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-2xl hover:bg-cyan-500 hover:text-white transition-all pointer-events-auto"
                                    >
                                        Yol Tarifi Al
                                    </a>
                                </div>
                            </div>

                            {/* Service CTA Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-10 bg-neutral-900/30 rounded-[3.5rem] border border-white/5 flex flex-col justify-center relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
                                        <Car size={160} className="text-white" />
                                    </div>
                                    <h3 className="text-white font-display text-2xl mb-2 relative z-10 leading-none">TEKNİK DESTEK</h3>
                                    <p className="text-gray-500 text-sm mb-8 relative z-10 font-body">Her türlü mekanik ve elektronik arıza için uzman ekibimize danışın.</p>
                                    <div className="flex gap-4">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                        <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest leading-none">Şu an Aktif</span>
                                    </div>
                                </div>

                                <div className="p-10 bg-amber-custom rounded-[3.5rem] flex flex-col justify-center relative overflow-hidden group cursor-pointer" onClick={() => {
                                    openContactIntent({
                                        type: 'phone',
                                        href: 'tel:05421985134',
                                        source: 'iletisim_randevu_karti'
                                    });
                                }}>
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                                    <h3 className="text-black font-display text-4xl mb-2 relative z-10 leading-none uppercase tracking-tighter">RANDEVU AL</h3>
                                    <p className="text-black/70 text-[13px] mb-8 relative z-10 font-medium">Sıra beklemeden, zamanında servis hizmeti için.</p>
                                    <div className="flex items-center gap-2 group">
                                        <span className="text-[11px] font-black text-black uppercase tracking-[0.2em] border-b-2 border-black/30 group-hover:border-black transition-all">0542 198 51 34</span>
                                        <ArrowRight size={14} className="text-black transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
