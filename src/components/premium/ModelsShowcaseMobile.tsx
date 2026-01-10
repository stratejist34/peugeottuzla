'use client';
import React from 'react';
import Image from 'next/image';
import { trackEvent } from '@/lib/gtag';

const popularModels = [
    {
        id: '208',
        name: 'Peugeot 208',
        img: '/images/Peugeot-208.jpg',
        tagline: 'Şehir İkonu'
    },
    {
        id: '2008',
        name: 'Peugeot 2008',
        img: '/images/Peugeot_2008-Bakim-Fiyatlari.jpg',
        tagline: 'Kompakt SUV'
    },
    {
        id: '308',
        name: 'Peugeot 308',
        img: '/images/Peugeot-308-Periyodik-Bakim.jpg',
        tagline: 'Avrupa\'nın Favorisi'
    },
    {
        id: '508',
        name: 'Peugeot 508',
        img: '/images/2021-peugeot-508-sedan-1-1536x864.jpg',
        tagline: 'Premium Sedan'
    },
    {
        id: 'c3',
        name: 'Citroën C3',
        img: '/images/C3airMain.jpg',
        tagline: 'Konforlu Şehirli'
    },
    {
        id: 'c4',
        name: 'Citroën C4',
        img: '/images/Citroen-C4-Cactus.jpg',
        tagline: 'Modern Tasarım'
    },
];

const ModelsShowcaseMobile = () => {
    return (
        <section className="py-16 bg-[#07090f] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-amber-custom font-medium tracking-wide text-xs">Model Bazlı Uzmanlık</span>
                    <h2 className="font-heading text-3xl mt-3 mb-2 text-white">
                        Peugeot & Citroën<br />
                        <span className="text-gray-400 text-2xl">Tüm Modeller</span>
                    </h2>
                    <div className="h-1 w-12 bg-amber-custom mx-auto rounded-full mt-3" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-3">
                    {popularModels.map((model) => (
                        <div
                            key={model.id}
                            className="bg-neutral-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-amber-custom/30 transition-all"
                        >
                            {/* Image */}
                            <div className="relative h-32 w-full bg-neutral-800/50">
                                <Image
                                    src={model.img}
                                    alt={model.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 200px"
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-3">
                                <h3 className="font-heading text-sm font-bold text-white mb-0.5">
                                    {model.name}
                                </h3>
                                <p className="text-[10px] text-gray-500 mb-2">
                                    {model.tagline}
                                </p>

                                {/* CTA */}
                                <a
                                    href="tel:05421985134"
                                    onClick={() => trackEvent(`mobile_model_randevu_${model.id}`)}
                                    className="text-xs text-amber-custom font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Randevu Al
                                    <span className="text-[10px]">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <p className="text-center text-xs text-gray-500 mt-6">
                    Tüm Peugeot ve Citroën modelleri için uzman servis hizmeti
                </p>
            </div>
        </section>
    );
};

export default ModelsShowcaseMobile;
