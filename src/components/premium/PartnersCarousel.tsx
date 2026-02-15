'use client';
import React from 'react';
import Image from 'next/image';

const partners = [
    { name: 'Stellantis', logo: '/images/Stellantis.png' },
    { name: 'Bosch', logo: '/images/Bosch.png' },
    { name: 'Continental', logo: '/images/Continental.png' },
    { name: 'Valeo', logo: '/images/Valeo-Logo.png' },
    { name: 'Magneti Marelli', logo: '/images/Magnetti-marelli.png' },
    { name: 'LUK', logo: '/images/LUK.png' },
];

const PartnersCarousel = () => {
    return (
        <section className="py-12 bg-[#05060a] border-y border-white/5 relative overflow-hidden">
            {/* Minimal Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                    <span className="text-amber-custom font-medium tracking-wide text-sm">Markalar</span>
                    <h2 className="font-heading text-5xl md:text-7xl mt-4 mb-6 text-white leading-tight">
                    YEDEK  <br />
                        <span className="text-gray-400">PARÇA.</span>
                    </h2>
                    <div className="h-1.5 w-32 bg-amber-custom/30 rounded-full mx-auto" />
                </div>

                {/* Grid - 2x3 */}
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.name}
                            className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center h-20 p-3"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={90}
                                height={35}
                                loading={index < 2 ? "eager" : "lazy"}
                                className="max-h-10 w-auto object-contain brightness-0 invert opacity-70"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersCarousel;
