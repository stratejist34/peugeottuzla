'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, ShieldCheck, Banknote, Wrench } from 'lucide-react';
import MagneticButton from './MagneticButton';

const trustSignals = [
    {
        icon: <ShieldCheck className="text-amber-custom" size={32} />,
        title: "Garantili İşçilik",
        desc: "Tüm mekanik onarımlarımızda parça ve işçilik garantisi sunuyoruz."
    },
    {
        icon: <Banknote className="text-amber-custom" size={32} />,
        title: "Şeffaf Fiyatlandırma",
        desc: "Sürpriz maliyetler yok. İşlem öncesi onayınız alınır, detaylı döküm sunulur."
    },
    {
        icon: <Wrench className="text-amber-custom" size={32} />,
        title: "Uzman Kadro",
        desc: "20 yıllık Peugeot & Citroen saha tecrübesiyle kesin çözümler üretiyoruz."
    }
];

const Localization = () => {
    return (
        <section className="py-24 bg-[#07090f] relative overflow-hidden">
            {/* Background Light */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Info & Trust */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-amber-custom mb-6 uppercase tracking-[0.4em] text-[10px] font-black"
                        >
                            <span className="w-8 h-px bg-amber-custom" />
                            İLETİŞİM & LOKASYON
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-heading text-white leading-tight mb-8"
                        >
                            <span className="text-gray-400">İletişim</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-custom group-hover:bg-amber-custom group-hover:text-black transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">ADRES</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Aydınlı, Tuzla Sanayi Sitesi, 34947 <br /> Tuzla / İstanbul</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-custom group-hover:bg-amber-custom group-hover:text-black transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">TELEFON</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">+90 (542) 198 51 34</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-custom group-hover:bg-amber-custom group-hover:text-black transition-all">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">MESAİ</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Pzt - Cmt: 08:30 - 19:00 <br /> Pazar: Kapalı</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Signals Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5">
                            {trustSignals.map((signal, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    {signal.icon}
                                    <h5 className="text-white font-bold text-xs uppercase tracking-widest">{signal.title}</h5>
                                    <p className="text-gray-500 text-[10px] leading-relaxed">{signal.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-amber-custom/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 h-[500px] w-full shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.3753381665493!2d29.378!3d40.855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUxJzE4LjAiTiAyOcKwMjInNDAuOCJF!5e0!3m2!1str!2str!4v1703623123456!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Klas Oto Servis Konumu"
                            ></iframe>

                            {/* Overlay Button */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <MagneticButton>
                                    <button
                                        onClick={() => window.open('https://maps.app.goo.gl/bze2NgSC2xgxw5LL9', '_blank')}
                                        className="w-full bg-white text-black font-black text-xs uppercase tracking-[0.2em] py-5 rounded-xl shadow-2xl flex items-center justify-center gap-3 hover:bg-amber-custom transition-colors"
                                    >
                                        <Navigation size={18} />
                                        YOL TARİFİ AL
                                    </button>
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Localization;
