'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Wrench,
    Zap,
    ShieldCheck,
    Gauge,
    Search,
    Settings,
    CheckCircle2,
    Phone,
    Clock,
    UserCheck,
    Wind
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MagneticButton from '@/components/premium/MagneticButton';
import Partners from '@/components/premium/Partners';
import TechnicalDNA from '@/components/premium/TechnicalDNA';

const ServicesPage = () => {
    const services = [
        {
            title: 'Bilgisayarlı Arıza Tespit',
            desc: 'Peugeot ve Citroen orijinal diyagnoz cihazlarıyla nokta atışı arıza tespiti ve yazılım güncellemeleri.',
            icon: <Search className="text-blue-500" size={32} />,
            image: '/images/Ariza-Tespiti.jpg'
        },
        {
            title: 'Motor & Mekanik Tamir',
            desc: 'Motor yenileme, triger seti değişimi ve her türlü mekanik aksam onarımı uzman teknisyenlerimizce yapılır.',
            icon: <Wrench className="text-blue-500" size={32} />,
            image: '/images/Motor-Tamiri.jpg'
        },
        {
            title: 'Şanzıman Bakım & Onarım',
            desc: 'AL4, EAT6 ve EAT8 şanzımanlarda selenoid valf değişimi, beyin tamiri ve revizyon işlemleri.',
            icon: <Settings className="text-blue-500" size={32} />,
            image: '/images/Peugeot-Sanziman-AL4-EAT8-Tamir-Bakim.jpg'
        },
        {
            title: 'Periyodik Bakım',
            desc: 'Yağ, filtre değişimleri ve 32 nokta kontrolü ile aracınızın performansını ve ömrünü koruyoruz.',
            icon: <Clock className="text-blue-500" size={32} />,
            image: '/images/Peugeot-Ozel-Servis-Tuzla_15-1024x576.avif'
        },
        {
            title: 'Klima Gazı & Bakımı',
            desc: 'Klima gazı dolumu, kaçak tespiti ve dezenfeksiyon işlemleri ile temiz bir sürüş keyfi.',
            icon: <Wind className="text-blue-500" size={32} />,
            image: '/images/Klima-Gazi-Dolumu.jpg'
        },
        {
            title: 'DPF & EGR Temizliği',
            desc: 'Dizel Partikül Filtresi ve EGR valfi temizliği ile yakıt tasarrufu ve emisyon kontrolü.',
            icon: <Zap className="text-blue-500" size={32} />,
            image: '/images/Peugeot-HDI-Motor-DPF-Temizleme.jpg'
        },
        {
            title: 'Fren & Güvenlik Sistemleri',
            desc: 'Fren balata, disk değişimi ve ABS/ESP sistem hatalarının giderilmesi.',
            icon: <ShieldCheck className="text-blue-500" size={32} />,
            image: '/images/fren-diski.webp'
        },
        {
            title: 'Ön Takım & Süspansiyon',
            desc: 'Amortisör, rot başı ve salıncak kontrolleri ile konforlu ve güvenli sürüş.',
            icon: <Gauge className="text-blue-500" size={32} />,
            image: '/images/Suspansiyon.jpg'
        }
    ];

    const steps = [
        { id: '01', title: 'Randevu', desc: 'Online veya telefonla size en uygun saati belirleyelim.' },
        { id: '02', title: 'Karşılama', desc: 'Aracınızı uzman teknisyenlerimiz kapıda güler yüzle karşılar.' },
        { id: '03', title: 'Detaylı İnceleme', desc: 'Bilgisayarlı sistemlerle tüm aksamlar titizlikle taranır.' },
        { id: '04', title: 'Şeffaf Bilgilendirme', desc: 'Yapılacak işlemler ve maliyet hakkında detaylı rapor sunulur.' },
        { id: '05', title: 'Profesyonel Servis', desc: 'Onayınızla birlikte uzman ekibimiz işe koyulur.' },
        { id: '06', title: 'Kalite Kontrol', desc: 'İşlem sonrası araç test sürüşüne ve son kontrole alınır.' },
        { id: '07', title: 'Teslim', desc: 'İç-dış dezenfekte edilmiş aracınızı güvenle teslim alın.' }
    ];

    return (
        <main className="min-h-screen bg-[#07090f] overflow-hidden pt-20 selection:bg-amber-custom selection:text-black">
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.6 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/images/Klas-Oto-Peugeot-Servis.jpg"
                            alt="Servis Kapak"
                            fill
                            className="object-cover saturate-[0.8]"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#07090f] via-transparent to-[#07090f] opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#07090f] via-transparent to-[#07090f] opacity-40" />
                    </motion.div>

                    {/* Dynamic HUD Lines */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-full h-full max-w-7xl max-h-[60vh] border border-blue-500/30 rounded-[4rem] relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-500/50" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-500/50" />
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-blue-500/50" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-blue-500/50" />
                        </div>
                    </div>

                    {/* Centered Pulsing Tech Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto py-20"
                    >
                        <span className="text-blue-500 font-tag tracking-[0.5em] uppercase text-[10px] mb-8 block">Teknik Uzmanlık</span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-8 leading-[1.2] tracking-normal text-shadow-premium">
                            PROFESYONEL <br />
                            <span className="text-outline-lg font-display tracking-wider opacity-90">SERVİS ÇÖZÜMLERİ.</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-gray-400 font-body text-base md:text-lg leading-relaxed">
                            Peugeot ve Citroen uzmanlığımızla, aracınız için yetkili servis standartlarında,
                            şeffaf ve garantili bakım hizmetleri sunuyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- TECHNICAL DNA SECTION --- */}
            <TechnicalDNA />

            {/* --- SERVICES GRID --- */}
            <section className="py-32 px-6 bg-black relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group relative glass-card p-4 rounded-[2.5rem] overflow-hidden"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden rounded-[1.8rem]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                                    <div className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                                        <div className="text-white group-hover:text-black">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-heading text-white mb-3 group-hover:text-blue-500 transition-colors">{service.title}</h3>
                                    <p className="text-gray-500 text-[13px] leading-relaxed font-body">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- HOW WE WORK (HORIZONTAL STEPS) --- */}
            <section className="py-32 bg-[#0c0e16] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-blue-500 font-tag tracking-[0.3em] uppercase text-[10px] mb-4 block">Süreç Yönetimi</span>
                        <h2 className="text-4xl md:text-7xl font-display text-white mt-4 tracking-normal">NASIL ÇALIŞIYORUZ?</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-px bg-white/5 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-12 relative z-10">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mx-auto mb-8 relative group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                                        <span className="text-xl font-display text-white group-hover:text-black">{step.id}</span>
                                        <div className="absolute -inset-2 bg-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h4 className="text-white font-heading mb-3 text-sm uppercase tracking-widest">{step.title}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed font-body px-2">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- WHY US / EXPERTISE --- */}
            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <div className="bg-neutral-900/30 rounded-[4rem] border border-white/5 p-8 md:p-20 relative overflow-hidden">
                        {/* Decorative Background Element */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-blue-500 font-tag tracking-[0.3em] uppercase text-[10px] mb-6 block">Neden Klas Oto?</span>
                                <h2 className="text-3xl md:text-6xl font-display text-white mb-8 leading-[1.2] tracking-normal text-shadow-premium">
                                    PEUGEOT & CITROEN <br />
                                    <span className="text-gray-500">PROFESYONEL UZMANLIK.</span>
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-12 font-body max-w-xl">
                                    20 yıllık tecrübemizle Tuzla, Gebze ve Pendik bölgelerinde binlerce Peugeot ve Citroen sahibine güven verdik.
                                    Sadece bir tamirhane değil, aracınızın sağlığı için profesyonel bir çözüm ortağıyız.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        { icon: <CheckCircle2 className="text-blue-500" />, title: 'Orijinal Yedek Parça', desc: 'Sadece onaylı ve garantili parça kullanımı.' },
                                        { icon: <UserCheck className="text-blue-500" />, title: 'Uzman Teknisyenler', desc: 'Markaya özel eğitimli usta kadrosu.' },
                                        { icon: <Zap className="text-blue-500" />, title: 'Modern Ekipman', desc: 'En yeni diyagnoz ve tamir teknolojileri.' },
                                        { icon: <ShieldCheck className="text-blue-500" />, title: '6 Ay Garanti', desc: 'Tüm işçilik ve parçalarda servis güvencesi.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="shrink-0">{item.icon}</div>
                                            <div>
                                                <h4 className="text-white font-heading text-sm mb-1">{item.title}</h4>
                                                <p className="text-gray-500 text-[11px] leading-relaxed font-body">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <Image
                                        src="/images/master-man-image.webp"
                                        alt="Uzman Usta"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                <div className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-[2rem] shadow-2xl hidden md:block">
                                    <div className="text-4xl font-black text-black mb-1">20+</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-black/80">Yıllık Tecrübe</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PARTNERS --- */}
            <Partners />

            {/* --- CALL TO ACTION --- */}
            <section className="py-32 text-center relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-display text-white mb-12 leading-[1.2] tracking-normal text-shadow-premium">
                            Aracınız İçin <br />
                            <span className="text-outline-lg font-display tracking-widest opacity-90">EN İYİSİNİ İSTEYİN.</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <MagneticButton>
                                <a
                                    href="tel:05421985134"
                                    className="flex items-center gap-3 bg-amber-custom hover:bg-[#d97706] text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_50px_rgba(251,191,36,0.3)]"
                                >
                                    <Phone size={20} className="fill-black" />
                                    <span>Aracını Kontrole Al</span>
                                </a>
                            </MagneticButton>

                            <Link
                                href="/iletisim"
                                className="text-white font-black text-sm uppercase tracking-[0.3em] hover:text-blue-500 transition-colors py-4 px-6 underline decoration-blue-600 underline-offset-8"
                            >
                                Bize Ulaşın
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main >
    );
};

export default ServicesPage;
