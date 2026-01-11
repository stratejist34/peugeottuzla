'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = magnetic.current;
        if (!currentRef) return;

        const xTo = gsap.quickTo(currentRef, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(currentRef, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = currentRef.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        currentRef.addEventListener("mousemove", mouseMove);
        currentRef.addEventListener("mouseleave", mouseLeave);

        return () => {
            currentRef.removeEventListener("mousemove", mouseMove);
            currentRef.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <div ref={magnetic} className={`cursor-pointer ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default MagneticButton;
