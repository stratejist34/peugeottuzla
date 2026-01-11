'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Gauge, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import { trackEvent } from '@/lib/gtag';

const brands = [
    { id: 'peugeot', name: 'Peugeot' },
    { id: 'citroen', name: 'Citroën' },
    { id: 'ds', name: 'DS Automobiles' }
];

const modelData = {
    peugeot: [
        { id: '208', name: 'Peugeot 208', tagline: 'Şehir İkonu', img: '/images/Peugeot-208.jpg' },
        { id: '2008', name: 'Peugeot 2008', tagline: 'Kompakt SUV', img: '/images/Peugeot_2008-Bakim-Fiyatlari.jpg' },
        { id: '308', name: 'Peugeot 308', tagline: 'Göz Alıcı Hatchback', img: '/images/2022_peugeot_308_7_2560x1440.jpg' },
        { id: '408', name: 'Peugeot 408', tagline: 'Beklenmedik Siluet', img: '/images/Peugeot-Ozel-Servis-Tuzla_34.avif' },
        { id: '508', name: 'Peugeot 508', tagline: 'Dinamik Sedan', img: '/images/Peugeot-Ozel-Servis-Tuzla_18.avif' },
        { id: '3008', name: 'Peugeot 3008', tagline: 'Lider SUV', img: '/images/Peugeot_2008-Bakim-Fiyatlari.jpg' },
        { id: '5008', name: 'Peugeot 5008', tagline: 'Geniş Aile SUV', img: '/images/Peugeot-Ozel-Servis-Tuzla_20.avif' },
        { id: '301', name: 'Peugeot 301', tagline: 'Ekonomik & Dayanıklı', img: '/images/Peugeot-301-triger-degisimi-maliyeti-scaled.jpg' },
    ],
    citroen: [
        { id: 'c3', name: 'Citroën C3', tagline: 'Konforlu Şehirli', img: '/images/C3airMain.jpg' },
        { id: 'c4c', name: 'Citroën C4 Cactus', tagline: 'Farklı Bir Deneyim', img: '/images/Citroen-C4-Periyodik-Bakim-Fiyatlari.jpg' },
        { id: 'c4p', name: 'Citroën C4 Picasso', tagline: 'Geniş İç Hacim', img: '/images/Citroen-periyodik-bakimlari.jpg' },
        { id: 'c4x', name: 'Citroën C4 X', tagline: 'Yenilikçi Tasarım', img: '/images/Citroen-cekici-Citroen-acil-servis-yol-yardim-Tuzla-Citroen-cekici-Gebze-Citroen-yardim-Pendik.jpg' },
        { id: 'c5a', name: 'Citroën C5 Aircross', tagline: 'Konforun Zirvesi', img: '/images/C5-Aircross-Bakim-FIyatlari-2.jpeg' },
        { id: 'celysee', name: 'Citroën C-Elysée', tagline: 'Verimli & Şık', img: '/images/citroen-c-elysee.jpg' },
        { id: 'c5', name: 'Citroën C5', tagline: 'Prestijli Sürüş', img: '/images/Tuzla-Citroen-servisi.jpg' },
    ],
    ds: [
        { id: 'ds3', name: 'DS 3', tagline: 'Avant-Garde Stil', img: '/images/Peugeot-Ozel-Servis-Tuzla_11.avif' },
        { id: 'ds4', name: 'DS 4', tagline: 'Teknolojik Zarafet', img: '/images/Peugeot-Ozel-Servis-Tuzla_15.avif' },
        { id: 'ds5', name: 'DS 5', tagline: 'Modern Sanat', img: '/images/Peugeot-Ozel-Servis-Tuzla_16.avif' },
        { id: 'ds9', name: 'DS 9', tagline: 'Lüksün Yeni Seviyesi', img: '/images/Peugeot-Ozel-Servis-Tuzla_17.avif' },
    ]
};

const ModelsShowcase = () => {
    const [activeBrand, setActiveBrand] = useState('peugeot');
    const [activeModel, setActiveModel] = useState(0);

    const currentModels = modelData[activeBrand as keyof typeof modelData];

    return (
        <section className="py-32 bg-gradient-to-b from-[#07090f] via-[#0c0e16] to-[#07090f] relative overflow-hidden">
            {/* Center Glow Technique */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none opacity-40 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-stretch">

                    {/* Left Side: Brand & Models Index */}
                    <div className="lg:w-2/5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-3 text-amber-custom mb-4">
                                <div className="w-8 h-px bg-amber-custom" />
                                <span className="text-sm font-medium tracking-wide">Model Bazlı Uzmanlık</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-heading text-white leading-[1.1]">
                                <span className="text-gray-400">Model Bazlı Uzmanlık</span>
                            </h2>
                        </motion.div>

                        {/* Brand Tabs */}
                        <div className="flex gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl mb-8 w-fit">
                            {brands.map((brand) => (
                                <button
                                    key={brand.id}
                                    onClick={() => {
                                        setActiveBrand(brand.id);
                                        setActiveModel(0);
                                    }}
                                    className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeBrand === brand.id
                                        ? 'bg-amber-custom text-black shadow-lg shadow-amber-500/20'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {brand.name}
                                </button>
                            ))}
                        </div>

                        {/* Models Grid/List - No scroll, auto height for all models */}
                        <div className="grid grid-cols-2 gap-3">
                            {currentModels.map((model, idx) => (
                                <button
                                    key={model.id}
                                    onClick={() => setActiveModel(idx)}
                                    className={`text-left p-4 rounded-2xl transition-all duration-300 border ${activeModel === idx
                                        ? 'bg-white/10 border-amber-custom/50 shadow-xl'
                                        : 'bg-white/5 border-transparent hover:bg-white/10'
                                        }`}
                                >
                                    <p className={`text-sm font-bold ${activeModel === idx ? 'text-white' : 'text-gray-400'}`}>
                                        {model.name}
                                    </p>
                                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">{model.tagline}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Active Model Visual */}
                    <div className="lg:w-3/5 relative min-h-[450px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeBrand}-${activeModel}`}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl"
                            >
                                <Image
                                    src={currentModels[activeModel].img}
                                    alt={currentModels[activeModel].name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 contrast-[1.1]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 800px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="flex gap-10 mb-8">
                                        {[
                                            { icon: <Gauge size={20} />, label: 'Performans Optimize' },
                                            { icon: <Shield size={20} />, label: 'Orijinal Yedek Parça' },
                                            { icon: <Zap size={20} />, label: 'Hızlı Teslimat' }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex flex-col gap-2">
                                                <div className="text-amber-custom">{stat.icon}</div>
                                                <p className="text-[10px] font-bold text-white uppercase tracking-widest">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <h3 className="text-4xl font-black text-white mb-4">
                                        {currentModels[activeModel].name} <span className="text-amber-custom">Uzmanlığı.</span>
                                    </h3>

                                    <a
                                        href="tel:05421985134"
                                        onClick={() => trackEvent('anasayfa_model_randevu_tiklamasi', { model_name: currentModels[activeModel].name })}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-amber-custom text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-black transition-all"
                                    >
                                        RANDEVU OLUŞTUR <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ModelsShowcase;
