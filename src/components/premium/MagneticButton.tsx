'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
    const magneticRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const rectRef = useRef<DOMRect | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isMobile || !rectRef.current) return;

        const { clientX, clientY } = e;
        const centerX = rectRef.current.left + rectRef.current.width / 2;
        const centerY = rectRef.current.top + rectRef.current.height / 2;

        const dx = clientX - centerX;
        const dy = clientY - centerY;

        x.set(dx * 0.4);
        y.set(dy * 0.4);
    };

    const handleMouseEnter = () => {
        if (!isMobile && magneticRef.current) {
            rectRef.current = magneticRef.current.getBoundingClientRect();
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        rectRef.current = null;
    };

    return (
        <motion.div
            ref={magneticRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`inline-block cursor-pointer ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
