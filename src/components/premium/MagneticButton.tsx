'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
    const magneticRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const [rect, setRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isMobile || !rect) return;

        const { clientX, clientY } = e;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = clientX - centerX;
        const y = clientY - centerY;

        setPosition({ x: x * 0.4, y: y * 0.4 });
    };

    const handleMouseEnter = () => {
        if (!isMobile && magneticRef.current) {
            setRect(magneticRef.current.getBoundingClientRect());
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setRect(null);
    };

    return (
        <motion.div
            ref={magneticRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`inline-block cursor-pointer ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
