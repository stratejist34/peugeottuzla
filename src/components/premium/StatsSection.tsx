'use client';

import React, { useEffect, useRef } from 'react';
import { motion, animate, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Clock, Wrench, Star, ShieldCheck } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);

    // Parse the number part (e.g., "20+" -> 20, "15K" -> 15, "%100" -> 100)
    const numericPart = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const suffix = value.replace(/[0-9.]/g, '');
    const isPrefix = value.startsWith('%');

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericPart, {
                duration: duration,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, count, numericPart, duration]);

    const display = useTransform(count, (latest) => {
        const rounded = Math.round(latest);
        return isPrefix ? `${suffix}${rounded}` : `${rounded}${suffix}`;
    });

    return (
        <motion.span ref={ref} className="font-manifold font-bold tracking-tight inline-block min-w-[1.2ch]">
            {display}
        </motion.span>
    );
};

const stats = [
    {
        val: '20+',
        label: 'Yıllık Tecrübe',
        icon: <Clock size={20} />,
        bgText: '2005',
        desc: 'Sektörün mutfağından gelen teknik ustalık.'
    },
    {
        val: '15K',
        label: 'Servis Saati',
        icon: <Wrench size={20} />,
        bgText: 'TEKNİK',
        desc: 'Binlerce araçta uygulanan mekanik hassasiyet.'
    },
    {
        val: '%100',
        label: 'Memnuniyet',
        icon: <Star size={20} />,
        bgText: '%100',
        desc: 'Her teslimatta kusursuz müşteri deneyimi.'
    },
    {
        val: '2.5K',
        label: 'Mutlu Müşteri',
        icon: <ShieldCheck size={20} />,
        bgText: 'GÜVEN',
        desc: 'Güvenle yoluna devam eden ailemiz.'
    }
];

const StatsSection = () => {
    return (
        <section className="relative py-24 bg-[#050505] overflow-hidden">
            {/* Background Texture & Depth */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group relative"
                        >
                            {/* Large Background Outlined Text - Localized & Visible */}
                            <div className="absolute -top-10 left-6 text-6xl font-manifold font-black text-white/[0.1] select-none tracking-tighter transition-all duration-700 group-hover:text-amber-custom/20 group-hover:-translate-y-4">
                                {stat.bgText}
                            </div>

                            <div className="h-full p-8 rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/5 hover:border-amber-custom/30 transition-all duration-500 flex flex-col items-start gap-6 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                {/* Icon Header */}
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-custom group-hover:bg-amber-custom group-hover:text-black transition-all duration-500 shadow-inner">
                                    {stat.icon}
                                </div>

                                {/* Value & Label */}
                                <div className="space-y-1">
                                    <div className="text-4xl md:text-5xl font-black text-white flex items-baseline gap-1">
                                        <AnimatedCounter value={stat.val} />
                                    </div>
                                    <div className="text-[10px] font-body font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors">
                                        {stat.label}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {stat.desc}
                                </p>

                                {/* Accent Line */}
                                <div className="absolute bottom-6 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-amber-custom/30 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Global Accent Meshes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-custom/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </section>
    );
};

export default StatsSection;
