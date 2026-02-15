'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useContactIntent } from '@/components/analytics/ContactIntentProvider';
import { usePathname } from 'next/navigation';

const MobileActionBar = () => {
    const pathname = usePathname();
    const { openContactIntent } = useContactIntent();
    const [isVisible, setIsVisible] = useState(false);

    // Sayfa adına göre event ismini belirle
    const getPagePrefix = () => {
        if (pathname === '/') return 'anasayfa';
        if (pathname.includes('/iletisim')) return 'iletisim_sayfasi';
        if (pathname.includes('/hizmetler')) return 'hizmetler_sayfasi';
        return 'diger_sayfalar';
    };

    const handlePhoneClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        openContactIntent({
            type: 'phone',
            href: 'tel:05421985134',
            source: `${getPagePrefix()}_sticky`
        });
    };

    const handleWhatsAppClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        openContactIntent({
            type: 'whatsapp',
            href: 'https://wa.me/905421985134',
            source: `${getPagePrefix()}_sticky`
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 140);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden px-2 pb-2 pointer-events-none">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-[#07090f]/95 backdrop-blur-xl border border-white/10 p-2 rounded-3xl flex gap-2 shadow-[0_-10px_50px_rgba(0,0,0,0.5)] pointer-events-auto"
            >
                <a
                    href="tel:05421985134"
                    onClick={handlePhoneClick}
                    className="flex-1 bg-amber-custom text-black py-4 rounded-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest active:scale-95 transition-transform"
                >
                    <Phone size={18} className="fill-black" /> ARA
                </a>
                <a
                    href="https://wa.me/905421985134"
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest active:scale-95 transition-transform"
                >
                    <MessageCircle size={18} /> WHATSAPP
                </a>
            </motion.div>
        </div>
    );
};

export default MobileActionBar;
