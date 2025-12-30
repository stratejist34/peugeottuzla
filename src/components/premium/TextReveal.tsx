'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
    children: string;
    className?: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className = '' }) => {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const words = textRef.current.innerText.split(' ');
        textRef.current.innerHTML = '';

        words.forEach((word) => {
            const span = document.createElement('span');
            span.innerText = word + ' ';
            span.style.display = 'inline-block';
            span.style.opacity = '0.1'; // Start dim
            span.style.transform = 'translateY(20px)';
            textRef.current?.appendChild(span);
        });

        const spans = textRef.current.querySelectorAll('span');

        gsap.to(spans, {
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
                end: 'bottom 50%',
                scrub: 1,
            },
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: 'power4.out',
        });
    }, [children]);

    return (
        <span ref={textRef} className={`reveal-text inline-block ${className}`}>
            {children}
        </span>
    );
};

export default TextReveal;
