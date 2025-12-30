'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
    { name: 'Peugeot', logo: '/images/logolar/Peugeot-logo.webp', width: 45, height: 45 },
    { name: 'Citroën', logo: '/images/logolar/Citroen-logo.webp', width: 45, height: 45 },
    { name: 'DS Automobiles', logo: '/images/logolar/DS-logo.webp', width: 50, height: 50 }
];

const BrandTrustBar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 lg:mt-16 flex flex-col items-center lg:items-start gap-6"
        >
            <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-amber-custom/30" />
                <span className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.4em]">Uzmanlık Alanımız</span>
                <div className="h-px w-8 bg-amber-custom/30" />
            </div>

            <div className="flex items-center gap-8 md:gap-12 px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl group hover:border-amber-custom/20 transition-all duration-500">
                {brands.map((brand, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="relative"
                    >
                        <Image
                            src={brand.logo}
                            alt={brand.name}
                            width={brand.width}
                            height={brand.height}
                            className="object-contain filter transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(255,179,0,0.4)]"
                        />
                        {/* Subtle glow behind logos */}
                        <div className="absolute inset-0 bg-amber-custom/5 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default BrandTrustBar;
