'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const parts = [
    {
        name: 'Piston Grubu',
        image: '/images/premium/piston.png',
        desc: 'Yüksek basınç ve sıcaklık toleranslı, %100 orijinal Peugeot parçaları.',
        pos: { top: '0%', left: '-5%' }
    },
    {
        name: 'Şanzıman Dişli',
        image: '/images/premium/gear.png',
        desc: 'EAT6/EAT8 şanzımanlar için hassas ayarlı, dayanıklı dişli sistemleri.',
        pos: { top: '20%', right: '-5%' }
    },
    {
        name: 'Fren Sistemi',
        image: '/images/premium/brake.png',
        desc: 'Maksimum duruş güvenliği için performanslı hava kanallı diskler.',
        pos: { bottom: '0%', left: '5%' }
    },
    {
        name: 'Turboşarj',
        image: '/images/premium/turbo.png',
        desc: 'PureTech ve BlueHDI motorlar için optimize edilmiş yüksek verimli turbo.',
        pos: { top: '50%', left: '25%' }
    },
    {
        name: 'Amortisör Grubu',
        image: '/images/premium/shock.png',
        desc: 'Sürüş konforu ve yol tutuşu için geliştirilmiş süspansiyon elemanları.',
        pos: { bottom: '10%', right: '5%' }
    }
];

const ExplodedParts = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-20 text-center">
                    <span className="text-blue-500 font-tag tracking-[0.3em] uppercase text-[10px] mb-4 block">Mekanik Detay</span>
                    <h2 className="text-4xl md:text-7xl font-display text-white mb-6 tracking-normal">
                        KATMAN KATMAN <br />
                        <span className="text-gray-500">MÜKEMMELLİK.</span>
                    </h2>
                    <p className="max-w-xl text-gray-500 font-body text-sm leading-relaxed">
                        Aracınızın kalbindeki her parça, uzman ellerde en ince ayrıntısına kadar incelenir ve orijinaline sadık kalınarak onarılır.
                    </p>
                </div>

                <div className="relative min-h-[700px] md:min-h-[900px] w-full flex items-center justify-center">
                    {/* Background Central Glow */}
                    <div className="absolute inset-0 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

                    {/* Exploded Parts Container */}
                    <div className="relative w-full h-full max-w-6xl">
                        {parts.map((part, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.8 }}
                                style={{ ...part.pos }}
                                className="absolute z-20 group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? 5 : -5 }}
                                    className="relative cursor-pointer"
                                >
                                    <div className="w-40 h-40 md:w-56 md:h-56 relative">
                                        <Image
                                            src={part.image}
                                            alt={part.name}
                                            fill
                                            className="object-contain drop-shadow-[0_0_30px_rgba(37,99,235,0.2)] group-hover:drop-shadow-[0_0_50px_rgba(37,99,235,0.4)] transition-all duration-500"
                                        />
                                    </div>

                                    {/* Info Tooltip/Label */}
                                    <div className={`absolute top-1/2 ${idx % 2 === 0 ? 'left-full ml-6' : 'right-full mr-6'} opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none w-48 md:w-60 z-30`}>
                                        <div className="p-4 bg-neutral-900/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl">
                                            <h4 className="text-blue-400 font-black text-sm uppercase mb-1">{part.name}</h4>
                                            <p className="text-gray-400 text-[10px] leading-relaxed italic">{part.desc}</p>
                                        </div>
                                    </div>

                                    {/* Connecting Line (Decorative) */}
                                    <div className={`absolute top-1/2 ${idx % 2 === 0 ? 'left-full' : 'right-full'} w-6 h-px bg-gradient-to-r from-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Central Technical Hub (Faded Background) */}
                        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
                            <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-blue-500/30 rounded-full animate-pulse-slow" />
                            <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] border border-dashed border-blue-400/20 rounded-full animate-reverse-spin" />
                            <div className="absolute w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rotate-45" />
                            <div className="absolute w-[800px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -rotate-45" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExplodedParts;
