'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Wrench, Clock, Star, Activity, CheckCircle } from 'lucide-react';

// Modern, temiz ve endüstriyel bir tasarım
const CorporateIdentity = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#07090f]" id="kurumsal">
            {/* Arka Plan Desenleri - Minimal */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Üst Başlık */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-md bg-white/5 border border-white/10 text-amber-custom text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Neden Biz?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
                    >
                        Teknoloji ve Ustalığın <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-custom to-amber-700">Kusursuz Uyumu</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* SOL SÜTUN - İSTATİSTİKLER VE DETAYLAR (Grid 5) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Ana Metin Kartı */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Peugeot & Citroën Uzmanlığı</h3>
                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                Klas Oto, sadece parça değiştiren bir servis değil; aracınızın DNA'sını analiz eden bir teknoloji merkezidir. 20 yılı aşkın süredir Tuzla'da, yetkili servis standartlarını butik hizmet anlayışıyla birleştiriyoruz.
                            </p>
                        </motion.div>

                        {/* İstatistikler Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-500/20 p-6 rounded-3xl flex flex-col justify-between h-40 group hover:border-blue-500/40 transition-colors"
                            >
                                <div className="p-3 bg-blue-500/10 rounded-xl w-fit text-blue-400 group-hover:scale-110 transition-transform">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white mb-1">20+</div>
                                    <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">Yıllık Tecrübe</div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-amber-900/20 to-amber-900/5 border border-amber-500/20 p-6 rounded-3xl flex flex-col justify-between h-40 group hover:border-amber-500/40 transition-colors"
                            >
                                <div className="p-3 bg-amber-500/10 rounded-xl w-fit text-amber-custom group-hover:scale-110 transition-transform">
                                    <Star size={24} />
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-white mb-1">%99</div>
                                    <div className="text-xs font-bold text-amber-custom/80 uppercase tracking-wider">Müşteri Memnuniyeti</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Liste Özellikleri */}
                        <div className="space-y-3">
                            {[
                                "Orijinal Yedek Parça Garantisi",
                                "Şeffaf Fiyat Politikası",
                                "Elektronik Arıza Tespit Cihazları"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                                >
                                    <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                                    <span className="text-gray-300 font-medium text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* SAĞ SÜTUN - GÖRSEL VİTRİN (Grid 7) */}
                    <div className="lg:col-span-7 relative h-[500px] lg:h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 group"
                        >
                            {/* Ana Görsel */}
                            <Image
                                src="/images/Klas-Oto-Peugeot-Servis.jpg"
                                alt="Modern Servis Alanı"
                                fill
                                className="object-cover saturate-[0.8] transition-all duration-700 group-hover:saturate-100 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/20 to-transparent" />

                            {/* Görsel Üzeri Yüzen Kartlar */}
                            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row gap-4">
                                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 transition-colors">
                                    <div className="flex items-start justify-between mb-2">
                                        <Shield className="text-white" size={24} />
                                        <span className="text-[10px] font-bold bg-green-500/20 text-green-400 px-2 py-1 rounded">ONAYLI</span>
                                    </div>
                                    <h4 className="text-white font-bold text-lg">1 Yıl Garanti</h4>
                                    <p className="text-gray-300 text-xs mt-1">Tüm işçilik ve parçalarda sorgusuz garanti.</p>
                                </div>

                                <div className="flex-1 bg-amber-custom/10 backdrop-blur-md border border-amber-500/20 p-5 rounded-2xl hover:bg-amber-custom/20 transition-colors">
                                    <div className="flex items-start justify-between mb-2">
                                        <Wrench className="text-amber-custom" size={24} />
                                        <span className="text-[10px] font-bold bg-amber-500/20 text-amber-custom px-2 py-1 rounded">HIZLI</span>
                                    </div>
                                    <h4 className="text-white font-bold text-lg">Hızlı Teslimat</h4>
                                    <p className="text-gray-300 text-xs mt-1">Aynı gün arıza tespiti ve hızlı onarım süreci.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CorporateIdentity;
