'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

interface GoogleRatingBadgeProps {
    rating?: number;
    reviewCount?: number;
    variant?: 'hero' | 'compact';
    className?: string;
}

const GoogleRatingBadge: React.FC<GoogleRatingBadgeProps> = ({
    rating = 4.6,
    reviewCount = 50,
    variant = 'hero',
    className = ''
}) => {
    const renderStars = () => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                    >
                        <Star
                            size={variant === 'hero' ? 16 : 12}
                            className={`${i < fullStars
                                ? 'fill-amber-custom text-amber-custom'
                                : i === fullStars && hasHalfStar
                                    ? 'fill-amber-custom/50 text-amber-custom'
                                    : 'fill-gray-700 text-gray-700'
                                } transition-all duration-300`}
                        />
                    </motion.div>
                ))}
            </div>
        );
    };

    if (variant === 'compact') {
        return (
            <a
                href="https://www.google.com/search?q=klas+oto+peugeot+tuzla"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group ${className}`}
            >
                {renderStars()}
                <span className="text-xs font-black text-white">{rating}</span>
                <span className="text-[9px] text-gray-500 font-bold">({reviewCount}+)</span>
                <ExternalLink size={10} className="text-gray-600 group-hover:text-amber-custom transition-colors" />
            </a>
        );
    }

    return (
        <motion.a
            href="https://www.google.com/search?q=klas+oto+peugeot+tuzla"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 hover:border-amber-custom/30 transition-all duration-300 group ${className}`}
        >
            <div className="flex items-center gap-2">
                {renderStars()}
            </div>

            <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-white">{rating}</span>
                    <span className="text-[9px] text-gray-500 font-black uppercase tracking-wider">Google</span>
                </div>
                <span className="text-[10px] text-gray-500 font-bold">
                    {reviewCount}+ Müşteri Yorumu
                </span>
            </div>

            <ExternalLink
                size={14}
                className="text-gray-600 group-hover:text-amber-custom group-hover:translate-x-1 transition-all ml-2"
            />
        </motion.a>
    );
};

export default GoogleRatingBadge;
