'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

const diagnosticData = [
    { label: 'Sistem Durumu', value: 'OPTIMAL', color: 'text-cyan-400' },
    { label: 'Motor Verimi', value: '%98', color: 'text-amber-custom' },
    { label: 'Fren Balata', value: 'YENİ', color: 'text-blue-400' },
    { label: 'EAT8 Şanzıman', value: 'AKTİF', color: 'text-cyan-400' }
];

const DiagnosticXray = () => {
    const scanLineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scanLineRef.current) {
            gsap.to(scanLineRef.current, {
                top: '100%',
                duration: 3,
                repeat: -1,
                ease: "power1.inOut",
                yoyo: true
            });
        }

        // Floating diagnostic panels animation
        const panels = gsap.utils.toArray<HTMLElement>('.diag-panel');
        panels.forEach((panel, i) => {
            gsap.to(panel, {
                y: '+=15',
                duration: 2 + i,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }, []);

    return (
        <div ref={containerRef} className="relative w-full max-w-2xl aspect-square flex items-center justify-center p-4">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full animate-pulse-slow" />

            {/* Main X-Ray Image Container */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/5 bg-black/10 backdrop-blur-[2px] group">
                <Image
                    src="/images/premium/car_diagnostic_cyan.png"
                    alt="Diagnostic Car X-Ray"
                    fill
                    className="object-contain opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />

                {/* Animated Scan Line */}
                <div
                    ref={scanLineRef}
                    className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.8)] z-10 will-change-[top]"
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30" />
            </div>

            {/* Floating Info Panels */}
            {diagnosticData.map((data, idx) => (
                <div
                    key={idx}
                    className={`diag-panel absolute w-32 md:w-40 p-3 rounded-xl bg-black/40 border border-white/5 backdrop-blur-md z-20 shadow-2xl will-change-transform ${idx === 0 ? '-top-4 -left-4' :
                        idx === 1 ? '-top-4 -right-4' :
                            idx === 2 ? '-bottom-4 -left-4' :
                                '-bottom-4 -right-4'
                        }`}
                >
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{data.label}</div>
                    <div className={`text-[10px] md:text-xs font-manifold font-normal tracking-widest ${data.color}`}>{data.value}</div>
                    <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "80%" }}
                            transition={{ duration: 2, delay: idx * 0.5 }}
                            className={`h-full ${data.color.replace('text-', 'bg-')}`}
                        />
                    </div>
                </div>
            ))}

            {/* Decorative Tech Elements */}
            <div className="absolute -inset-10 border border-cyan-500/10 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-20 border border-dashed border-white/5 rounded-full animate-reverse-spin pointer-events-none" />
        </div>
    );
};

export default DiagnosticXray;
