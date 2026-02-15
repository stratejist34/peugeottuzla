'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import MagneticButton from '@/components/premium/MagneticButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
            <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-700 ${isNavbarDark ? 'py-3' : 'py-4'}`}>
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
                            href="https://web.whatsapp.com/send?phone=905421985134"
                            onClick={(event) => {
                                event.preventDefault();
                                openContactIntent({
                                    type: 'whatsapp',
                                    href: 'https://web.whatsapp.com/send?phone=905421985134',
                                    source: `${getPagePrefix()}_navbar`
                                });
                            }}
                            className="relative flex items-center gap-2 bg-[#0a0c10] text-white px-7 py-3 rounded-full font-bold text-sm transition-all border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-white/20 overflow-hidden"
                        >
                            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.16),transparent_60%)]" />
                            <span className="pointer-events-none absolute -top-4 right-6 h-16 w-16 rounded-full bg-[#25D366]/10 blur-[18px]" />
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" width="14" height="14" className="fill-black">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884"></path>
                                    </svg>
                                </span>
                                <span>WhatsApp</span>
                            </span>
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
                            <span>Ara ve Randevu</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
