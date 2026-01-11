'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Search, ShieldCheck, Zap, Cpu } from 'lucide-react';

const techPoints = [
    {
        title: 'BİLGİSAYARLI DİAGNOSTİK',
        desc: 'Peugeot & Citroen orijinal yazılım altyapısı ile hata tespiti.',
        icon: <Search className="w-5 h-5" />,
        pos: { top: '15%', left: '10%' }
    },
    {
        title: 'ELEKTRONİK SİSTEM ANALİZİ',
        desc: 'BSI, ECU ve şanzıman beyni kontrolleri.',
        icon: <Cpu className="w-5 h-5" />,
        pos: { top: '45%', right: '5%' }
    },
    {
        title: 'PERFORMANS OPTİMİZASYONU',
        desc: 'Motor verimliliği ve yakıt tüketimi analizi.',
        icon: <Zap className="w-5 h-5" />,
        pos: { bottom: '20%', left: '5%' }
    },
    {
        title: 'GARANTİLİ İŞÇİLİK',
        desc: 'Yapılan her işlem servisimiz garantisi altındadır.',
        icon: <ShieldCheck className="w-5 h-5" />,
        pos: { bottom: '15%', right: '15%' }
    }
];

const TechnicalDNA = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-blue-500 font-tag tracking-[0.4em] uppercase text-[10px] mb-4 block">Teknik Altyapı</span>
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-6 leading-[1.2] tracking-normal text-shadow-premium">
                        MEKANİK <br />
                        <span className="text-gray-500">DİJİTAL DNA.</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-gray-500 font-body text-sm leading-relaxed">
                        Sadece tamir etmiyoruz; aracınızın dijital ve mekanik verilerini analiz ederek en doğru çözümü üretiyoruz.
                    </p>
                </div>

                <div className="relative min-h-[600px] flex items-center justify-center">
                    {/* Central High-Tech Core */}
                    <div className="relative z-10 group">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 -m-20 border border-blue-500/20 rounded-full border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 -m-10 border border-amber-custom/10 rounded-full"
                        />

                        <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
                            <Image
                                src="/images/Klas-Oto-Peugeot-Servis.jpg"
                                alt="Technical Core"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-full grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay rounded-full" />
                            <div className="absolute inset-0 border-[20px] border-black rounded-full" />

                            {/* Scanning Line */}
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-0 right-0 h-px bg-blue-500 shadow-[0_0_15px_#3b82f6] z-20"
                            />
                        </div>
                    </div>

                    {/* Technical Data Points */}
                    {techPoints.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            style={{ ...point.pos }}
                            className="absolute z-20 w-64 md:w-72"
                        >
                            <div className="group flex items-start gap-4 p-4 bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-500">
                                <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    {point.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-heading text-xs mb-1 tracking-wider">{point.title}</h3>
                                    <p className="text-gray-500 text-[10px] leading-relaxed font-body">
                                        {point.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalDNA;
