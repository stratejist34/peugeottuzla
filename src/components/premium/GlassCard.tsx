'use client';
import React from 'react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
    return (
        <div className={`
      relative group overflow-hidden
      bg-neutral-900 border border-white/10 
      shadow-xl shadow-black/20 
      hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] hover:border-white/20 hover:bg-neutral-800
      transition-all duration-500 ease-out
      rounded-3xl p-6 md:p-8
      ${className}
    `}>
            {/* Glow Effect on Hover */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/0 group-hover:bg-amber-500/10 rounded-full blur-[50px] transition-all duration-700 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-full blur-[50px] transition-all duration-700 pointer-events-none" />

            {children}
        </div>
    );
};

export default GlassCard;
