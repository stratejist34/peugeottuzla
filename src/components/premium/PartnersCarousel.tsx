'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const partnersSet1 = [
    { name: 'Peugeot', logo: '/images/Peugeot-logo.png' },
    { name: 'Citroen', logo: '/images/Citroen-PNG-Transparent-Image.png' },
    { name: 'Bosch', logo: '/images/Bosch.png' },
    { name: 'Continental', logo: '/images/Continental.png' },
];

const partnersSet2 = [
    { name: 'Stellantis', logo: '/images/Stellantis.png' },
    { name: 'Valeo', logo: '/images/Valeo-Logo.png' },
    { name: 'Magneti Marelli', logo: '/images/Magnetti-marelli.png' },
    { name: 'LUK', logo: '/images/LUK.png' },
];

const PartnersCarousel = () => {
    const [showFirst, setShowFirst] = useState(true);
    const currentSet = showFirst ? partnersSet1 : partnersSet2;

    return (
        <section className="py-12 bg-[#05060a] border-y border-white/5 relative overflow-hidden">
            {/* Minimal Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                    <span className="text-amber-custom font-medium tracking-wide text-xs">
                        Güvenilir Çözüm Ortaklarımız
                    </span>
                    <div className="h-0.5 w-8 bg-amber-custom/30 rounded-full mx-auto mt-2" />
                </div>

                {/* Grid - 2x2 */}
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                    {currentSet.map((partner, index) => (
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

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-5">
                    <button
                        onClick={() => setShowFirst(true)}
                        aria-label="İlk grup"
                        className={`w-2 h-2 rounded-full transition-all ${showFirst ? 'bg-amber-custom w-6' : 'bg-gray-600'
                            }`}
                    />
                    <button
                        onClick={() => setShowFirst(false)}
                        aria-label="İkinci grup"
                        className={`w-2 h-2 rounded-full transition-all ${!showFirst ? 'bg-amber-custom w-6' : 'bg-gray-600'
                            }`}
                    />
                </div>

                {/* Footer indicator */}
                <p className="text-center text-[10px] text-gray-600 mt-4">
                    {showFirst ? '1/2' : '2/2'}
                </p>
            </div>
        </section>
    );
};

export default PartnersCarousel;
