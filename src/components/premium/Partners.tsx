'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
    { name: 'Peugeot', logo: '/images/logolar/Peugeot-logo.webp', invert: false },
    { name: 'Citroen', logo: '/images/Citroen-PNG-Transparent-Image.png' },
    { name: 'Stellantis', logo: '/images/Stellantis.png' },
    { name: 'Bosch', logo: '/images/Bosch.png' },
    { name: 'Continental', logo: '/images/Continental.png' },
    { name: 'Sachs', logo: '/images/Sachs-Logo.png' },
    { name: 'Valeo', logo: '/images/Valeo-Logo.png' },
    { name: 'Magneti Marelli', logo: '/images/Magnetti-marelli.png' },
    { name: 'LUK', logo: '/images/LUK.png' },
];

const Partners = () => {
    return (
        <section className="py-24 bg-[#05060a] relative border-y border-white/5 overflow-hidden">
            {/* Background Texture & Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Subtle Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)]" />

                {/* Fine Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

                {/* Floating Blobs - More Visible & Focused */}
                <motion.div
                    animate={{
                        x: [-20, 40, -20],
                        y: [-20, 30, -20],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        x: [20, -40, 20],
                        y: [20, 50, 20],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-custom/15 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4"
                >
                    <span className="text-amber-custom font-medium tracking-wide text-sm">Güvenilir Çözüm Ortaklarımız</span>
                    <div className="h-1 w-12 bg-amber-custom/30 rounded-full" />
                </motion.div>
            </div>

            <div className="relative flex overflow-x-hidden z-10">
                {/* First Marquee Set */}
                <div className="animate-marquee flex whitespace-nowrap items-center py-4 min-w-max will-change-transform">
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="mx-8 group">
                            <div className="bg-white/5 backdrop-blur-md px-10 py-6 rounded-2xl border border-white/10 flex items-center justify-center min-w-[200px] h-[100px] transition-all duration-500 hover:border-amber-custom/50 hover:bg-white/10">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={140}
                                    height={50}
                                    className={`max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity ${partner.invert === false ? 'brightness-100 invert-0' : 'brightness-0 invert'}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Marquee Set for Seamless Loop */}
                <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap items-center py-4 min-w-max will-change-transform">
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="mx-8 group">
                            <div className="bg-white/5 backdrop-blur-md px-10 py-6 rounded-2xl border border-white/10 flex items-center justify-center min-w-[200px] h-[100px] transition-all duration-500 hover:border-amber-custom/50 hover:bg-white/10">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={140}
                                    height={50}
                                    className={`max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity ${partner.invert === false ? 'brightness-100 invert-0' : 'brightness-0 invert'}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Partners;
