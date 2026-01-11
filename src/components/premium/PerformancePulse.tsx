'use client';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

const PerformancePulse = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX / innerWidth - 0.5) * 50);
            mouseY.set((clientY / innerHeight - 0.5) * 50);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const [particles, setParticles] = useState<{ id: number; left: string; top: string; duration: number; delay: number }[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setIsMounted(true);
            const newParticles = [...Array(20)].map((_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 2
            }));
            setParticles(newParticles);
        });
        return () => cancelAnimationFrame(frame);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Radial Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent pointer-events-none" />

            {/* Pulsing Energy Waves */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [1, 2],
                        opacity: [0.5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeOut"
                    }}
                    className="absolute w-[300px] h-[300px] border border-amber-custom/20 rounded-full pointer-events-none will-change-transform"
                />
            ))}

            {/* Parallax Container */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="relative z-10 will-change-transform"
            >
                {/* Center Peugeot Logo */}
                <div className="relative w-40 h-40 md:w-56 md:h-56 p-8 bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_0_100px_rgba(255,179,0,0.15)] flex items-center justify-center group">
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/images/logolar/Peugeot-logo.webp"
                            alt="Peugeot Core"
                            fill
                            className="object-contain drop-shadow-[0_0_20px_rgba(255,179,0,0.5)] group-hover:drop-shadow-[0_0_40px_rgba(255,179,0,0.7)] transition-all duration-700"
                        />
                    </motion.div>

                    {/* Technical HUD Elements */}
                    <div className="absolute inset-x-[-20%] inset-y-[-20%] border border-amber-custom/10 rounded-full animate-spin-slow pointer-events-none" />
                    <div className="absolute inset-x-[-10%] inset-y-[-10%] border border-dashed border-white/5 rounded-full animate-reverse-spin pointer-events-none" />
                </div>

                {/* Floating Tags */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute -top-10 -right-20 px-4 py-2 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black text-amber-custom uppercase tracking-widest shadow-2xl"
                >
                    Mükemmel Odak
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute -bottom-10 -left-20 px-4 py-2 bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-2xl"
                >
                    Sürdürülebilir Güç
                </motion.div>
            </motion.div>

            {/* Particles/Digital Dust */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            y: [0, -100]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay
                        }}
                        style={{
                            left: p.left,
                            top: p.top
                        }}
                        className="absolute w-1 h-1 bg-amber-custom/30 rounded-full"
                    />
                ))}
            </div>
        </div>
    );
};

export default PerformancePulse;
