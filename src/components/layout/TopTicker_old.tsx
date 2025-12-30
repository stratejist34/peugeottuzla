'use client';
import React from 'react';

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

const TopTicker = () => {
    return (
        <div className="w-full bg-black border-b border-emerald-500/20 py-2 overflow-hidden">
            <div className="flex w-max whitespace-nowrap animate-ticker items-center gap-16 text-base font-digital tracking-[0.1em] text-emerald-400">
                {/* 3 sets for smooth looping with -33.33% translate */}
                {[...processedItems, ...processedItems, ...processedItems].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                        <span className="uppercase">{text}</span>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .animate-ticker {
                    animation: ticker-turbo 20s linear infinite;
                    will-change: transform;
                }
                /* Mobile optimization */
                @media (max-width: 768px) {
                    .animate-ticker {
                         animation-duration: 35s;
                    }
                }
                @keyframes ticker-turbo {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }
            `}</style>
        </div>
    );
};

export default TopTicker;
