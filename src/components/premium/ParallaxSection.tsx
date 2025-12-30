'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
    image: string;
    title: string;
    subtitle: string;
    height?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    image,
    title,
    subtitle,
    height = '60vh'
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!imageRef.current || !containerRef.current) return;

        gsap.fromTo(imageRef.current,
            { y: 0 },
            {
                y: '20%', // Move image down slightly as we scroll
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            }
        );
    }, []);

    return (
        <div ref={containerRef} className="relative overflow-hidden w-full flex items-center justify-center p-6 rounded-3xl my-10" style={{ height }}>
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    ref={imageRef as any}
                    style={{ height: '120%', marginTop: '-10%' }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center text-white">
                <p className="text-blue-300 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">{subtitle}</p>
                <h2 className="text-4xl md:text-6xl font-bold">{title}</h2>
            </div>
        </div>
    );
};

export default ParallaxSection;
