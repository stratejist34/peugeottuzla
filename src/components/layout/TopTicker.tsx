'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tickerItems = [
    "İSTANBUL / TUZLA PEUGEOT & CITROËN ÖZEL SERVİSİ",
    "ÜCRETSİZ ARIZA TESPİT HİZMETİ",
    "ŞEFFAF FİYAT GARANTİSİ",
    "ORİJİNAL YEDEK PARÇA",
    "7/24 ACİL YOL YARDIM",
    "GARANTİLİ İŞÇİLİK",
    "KLAS OTO TUZLA SANAYİ",
    "UYGUN FİYAT, YÜKSEK KALİTE",
    "PERİYODİK BAKIM VE ONARIM"
];

// Helper to replace Turkish characters with digital-font friendly English equivalents
const normalizeForDigitalFont = (text: string) => {
    const charMap: { [key: string]: string } = {
        'İ': 'I', 'ı': 'i',
        'Ş': 'S', 'ş': 's',
        'Ğ': 'G', 'ğ': 'g',
        'Ü': 'U', 'ü': 'u',
        'Ö': 'O', 'ö': 'o',
        'Ç': 'C', 'ç': 'c',
        'ë': 'e', 'Ë': 'E'
    };
    return text.replace(/[İıŞşĞğÜüÖöÇçëË]/g, (char) => charMap[char] || char);
};

const processedItems = tickerItems.map(normalizeForDigitalFont);

const TypewriterText = ({ text, delay = 0, onComplete }: { text: string, delay?: number, onComplete?: () => void }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        setDisplayedText(""); // Reset text when input changes
        let timeout: NodeJS.Timeout;
        let currentIndex = 0;

        const startTyping = () => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
                // Slowed down by 30% (from 30-80ms to ~40-105ms)
                const randomSpeed = 40 + Math.random() * 65;
                timeout = setTimeout(startTyping, randomSpeed);
            } else {
                if (onComplete) onComplete();
            }
        };

        const initialDelay = setTimeout(startTyping, delay);
        return () => {
            clearTimeout(initialDelay);
            clearTimeout(timeout);
        };
    }, [text, delay, onComplete]);

    return (
        <span className="inline-block min-w-[20px]">
            {displayedText}
            {displayedText.length < text.length && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                    className="inline-block w-0.5 h-4 bg-cyan-500 ml-0.5 align-middle"
                />
            )}
        </span>
    );
};

const TopTicker = () => {
    const [groupIndex, setGroupIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [readyToSlide, setReadyToSlide] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const itemsPerGroup = isMobile ? 1 : 3;
    const currentGroup = [];
    for (let i = 0; i < itemsPerGroup; i++) {
        currentGroup.push(processedItems[(groupIndex * itemsPerGroup + i) % processedItems.length]);
    }

    const handleComplete = useCallback(() => {
        // Only trigger slide when the "last" item in current group is done
        setReadyToSlide(true);
    }, []);

    useEffect(() => {
        if (readyToSlide) {
            const timer = setTimeout(() => {
                setIsAnimating(true);
                setReadyToSlide(false);
            }, 2600); // Increased pause from 2000 to 2600 (30%)
            return () => clearTimeout(timer);
        }
    }, [readyToSlide]);

    const handleExitComplete = () => {
        setGroupIndex((prev) => (prev + 1) % Math.ceil(processedItems.length / itemsPerGroup));
        setIsAnimating(false);
    };

    return (
        <div className="w-full bg-black border-b border-cyan-500/20 py-2.5 overflow-hidden h-10 md:h-12 flex items-center justify-center relative">
            <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
                {!isAnimating && (
                    <motion.div
                        key={groupIndex}
                        initial={false}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 120 }}
                        className="flex items-center gap-12 md:gap-24 text-sm md:text-base font-digital tracking-[0.1em] text-cyan-200 absolute whitespace-nowrap"
                    >
                        {currentGroup.map((text, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                <TypewriterText
                                    text={text}
                                    delay={idx * 2000} // Increased from 1500 to 2000 (33%)
                                    onComplete={idx === itemsPerGroup - 1 ? handleComplete : undefined}
                                />
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TopTicker;
