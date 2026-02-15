'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useContactIntent } from '@/components/analytics/ContactIntentProvider';

const Footer = () => {
    const { openContactIntent } = useContactIntent();
    const handleFooterPhoneClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        openContactIntent({
            type: 'phone',
            href: 'tel:05421985134',
            source: 'footer'
        });
    };
    return (
        <footer className="bg-[#07090f] border-t border-white/5 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <Image
                                src="/images/klas-oto-peugeot-tuzla.webp"
                                width={180}
                                height={50}
                                className="object-contain"
                                alt="Klas Oto Logo"
                            />
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 font-medium">
                            Peugeot ve Citroen araçlarınız için yetkili servis standartlarında hizmet sunuyoruz. 20 yıllık uzmanlık tecrübemiz ile yanınızdayız.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-8 text-base tracking-normal border-l-2 border-amber-custom pl-4">Hızlı Erişim</h3>
                        <ul className="space-y-4 text-gray-400 font-normal text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Anasayfa</Link></li>
                            <li><Link href="/servisler" className="hover:text-white transition-colors">Servisler</Link></li>
                            <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/rehber" className="hover:text-white transition-colors">Rehber</Link></li>
                            <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-8 text-base tracking-normal border-l-2 border-amber-custom pl-4">Servis Bölgeleri</h3>
                        <ul className="space-y-4 text-gray-400 font-normal text-sm">
                            <li className="flex items-center gap-2 hover:text-white transition-colors"><MapPin size={14} className="text-amber-custom" /> Tuzla Sanayi Sitesi</li>
                            <li className="flex items-center gap-2 hover:text-white transition-colors"><MapPin size={14} className="text-amber-custom" /> Gebze Oto Sanayi</li>
                            <li className="flex items-center gap-2 hover:text-white transition-colors"><MapPin size={14} className="text-amber-custom" /> Pendik Bölgesi</li>
                            <li className="flex items-center gap-2 hover:text-white transition-colors"><MapPin size={14} className="text-amber-custom" /> Kartal & Maltepe</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-8 text-base tracking-normal border-l-2 border-amber-custom pl-4">İletişim</h3>
                        <p className="text-gray-400 text-sm font-normal leading-relaxed mb-6">
                            Aydıntepe, Fedakar Sokağı Tuzla oto Sanayi Sitesi B-2 Blok No:39/123, 34903 Tuzla/İstanbul
                        </p>
                        <a
                            href="tel:05421985134"
                            onClick={handleFooterPhoneClick}
                            className="block text-xl font-black text-white mb-2 hover:text-amber-custom transition-colors"
                        >
                            0542 198 51 34
                        </a>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8">
                    <p className="text-white/90 text-xs font-normal tracking-normal">
                        © 2025 Klas Oto Peugeot & Citroen Özel Servis. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-8 text-xs font-normal text-white/80 tracking-normal">
                        <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
