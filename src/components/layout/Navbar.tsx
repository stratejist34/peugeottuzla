'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import MagneticButton from '@/components/premium/MagneticButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TopTicker from './TopTicker';
import { useContactIntent } from '@/components/analytics/ContactIntentProvider';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { openContactIntent } = useContactIntent();
    const isHome = pathname === '/';

    const getPagePrefix = () => {
        if (pathname === '/') return 'anasayfa';
        if (pathname.includes('/iletisim')) return 'iletisim_sayfasi';
        return 'diger_sayfalar';
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: 'Anasayfa', href: '/' },
        { name: 'Servisler', href: '/servisler' },
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'Rehber', href: '/rehber' },
        { name: 'İletişim', href: '/iletisim' }
    ];

    const isNavbarDark = isScrolled || !isHome || isMobileMenuOpen;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isNavbarDark ? 'bg-[#07090f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
            <TopTicker />
            <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-700 ${isNavbarDark ? 'py-3' : 'py-8'}`}>
                <Link href="/" className="z-50 relative">
                    <motion.div
                        initial={false}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <div className="relative py-1">
                            <Image
                                src="/images/klas-oto-peugeot-tuzla.webp"
                                alt="Klas Oto Logo"
                                width={180}
                                height={50}
                                priority
                                className="object-contain transition-all duration-500 group-hover:scale-105 w-24 md:w-36 lg:w-[180px]"
                            />
                            <div className="absolute -inset-4 bg-amber-custom/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-10 text-sm font-medium text-gray-400 tracking-normal">
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className={`relative hover:text-white transition-colors group ${pathname === item.href ? 'text-white' : ''}`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-amber-custom transition-all duration-300 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}
                </div>

                {/* Desktop Action Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <MagneticButton>
                        <a
                            href="tel:05421985134"
                            onClick={(event) => {
                                event.preventDefault();
                                openContactIntent({
                                    type: 'phone',
                                    href: 'tel:05421985134',
                                    source: `${getPagePrefix()}_navbar`
                                });
                            }}
                            className="flex items-center gap-2 bg-amber-custom hover:bg-amber-custom/90 text-black px-7 py-3 rounded-full font-bold text-sm transition-all shadow-[0_0_30px_rgba(255,179,0,0.3)]"
                        >
                            <Phone size={14} className="fill-black" />
                            <span>Randevu Al</span>
                        </a>
                    </MagneticButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Mobil Menüyü Aç/Kapat"
                    className="lg:hidden z-[10000] relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
                >
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-1 bg-white rounded-full transition-colors group-hover:bg-amber-custom"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-8 h-1 bg-white rounded-full transition-colors group-hover:bg-amber-custom"
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-8 h-1 bg-white rounded-full transition-colors group-hover:bg-amber-custom"
                    />
                </button>

                {/* Mobile Menu Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: -20, pointerEvents: 'none' }}
                    animate={isMobileMenuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -20, pointerEvents: 'none' }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 w-screen h-screen bg-[#07090f] z-[9999] flex flex-col pt-32 px-6 lg:hidden overflow-y-auto"
                >
                    <div className="flex flex-col gap-6 text-xl font-medium text-gray-400">
                        {navItems.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-4 py-2 border-b border-white/5 ${pathname === item.href ? 'text-white border-amber-custom/30' : ''}`}
                            >
                                <span className={`w-2 h-2 rounded-full ${pathname === item.href ? 'bg-amber-custom' : 'bg-gray-700'}`} />
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8">
                        <a
                            href="tel:05421985134"
                            onClick={(event) => {
                                event.preventDefault();
                                openContactIntent({
                                    type: 'phone',
                                    href: 'tel:05421985134',
                                    source: 'mobil_menu_navbar'
                                });
                            }}
                            className="w-full flex items-center justify-center gap-2 bg-amber-custom text-black px-7 py-4 rounded-xl font-bold text-base transition-all shadow-[0_0_30px_rgba(255,179,0,0.3)]"
                        >
                            <Phone size={18} className="fill-black" />
                            <span>Hemen Ara & Randevu</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
