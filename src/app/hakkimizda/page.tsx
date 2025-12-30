'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Award,
    Target,
    History,
    CheckCircle2,
    ShieldCheck,
    Star,
    Heart,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import CorporateIdentity from '@/components/premium/CorporateIdentity';
import Partners from '@/components/premium/Partners';
import PerformancePulse from '@/components/premium/PerformancePulse';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-[#07090f] pt-20">
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-20 lg:py-0">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left z-20"
                        >
                            <span className="text-amber-custom font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Teknik Mükemmeliyet & Miras</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                                GELECEĞİN <br />
                                <span className="text-gray-500">MİRASI.</span>
                            </h1>
                            <p className="max-w-xl mx-auto lg:mx-0 text-gray-500 font-medium text-lg leading-relaxed">
                                Klas Oto, Peugeot teknik uzmanlığını estetik ve teknolojiyle birleştirerek otomobil servis anlayışını yeniden tanımlıyor.
                            </p>
                        </motion.div>

                        {/* Right Column: Pulse Animation */}
                        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                            <PerformancePulse />
                        </div>
                    </div>
                </div>

                {/* Background Ambient Elements */}
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-amber-custom/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            </section>

            {/* --- STORY SECTION --- */}
            <section className="py-32 bg-[#07090f]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-tight uppercase leading-[1.1]">
                                Peugeot ve Citroen <br />
                                <span className="text-gray-500">Tutkusuyla Kurulduk.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                2005 yılında Tuzla'da temelleri atılan Klas Oto, otomotiv sektöründeki derin tecrübesini Peugeot ve Citroen markalarına olan uzmanlığıyla birleştirdi.
                                Kurulduğumuz günden bu yana, sadece araç tamiri değil, sürüş güvenliği ve kullanıcı memnuniyeti odaklı bir vizyonla hareket ediyoruz.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-12">
                                Bugün Tuzla Sanayi Sitesi'ndeki modern servisimizde, en son teknoloji diyagnoz cihazları ve uzman usta kadromuzla,
                                yetkili servis kalitesini ulaşılabilir fiyatlarla sunuyoruz.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <Award className="text-amber-custom" />, title: 'Kalite Standartları', desc: 'Sertifikalı ekipman ve orijinal parça kullanımı.' },
                                    { icon: <Target className="text-amber-custom" />, title: 'Müşteri Odaklılık', desc: 'Her araç için özel bakım ve raporlama.' },
                                    { icon: <History className="text-amber-custom" />, title: 'Süreklilik', desc: '20 yıldır değişmeyen güven ve şeffaflık.' },
                                    { icon: <Users className="text-amber-custom" />, title: 'Uzman Kadro', desc: 'Marka spesifik eğitimli usta teknisyenler.' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-neutral-900/40 p-6 rounded-3xl border border-white/5">
                                        <div className="mb-4">{item.icon}</div>
                                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                        <p className="text-gray-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="/images/about-us-page-mechanic.webp"
                                    alt="Servisimizden Görüntü"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Stats Float Card */}
                            <div className="absolute -bottom-10 -left-10 bg-blue-600 p-10 rounded-[2.5rem] shadow-2xl hidden xl:block">
                                <div className="flex items-center gap-4 text-white">
                                    <Star size={40} className="fill-white" />
                                    <div>
                                        <div className="text-4xl font-black">15.000+</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-white/80">Tamamlanan Servis</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- CORPORATE IDENTITY COMPONENT --- */}
            <CorporateIdentity />

            {/* --- CORE VALUES --- */}
            <section className="py-32 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">Değerlerimiz</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mt-4 tracking-tight">Neye İnanıyoruz?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <ShieldCheck size={48} className="text-amber-custom mb-6" />,
                                title: 'Güvenilirlik',
                                desc: 'Aracınızda yapılan her işlemin arkasındayız. Şeffaf fiyatlandırma ve garantili işçilik temel kuralımızdır.'
                            },
                            {
                                icon: <Zap size={48} className="text-amber-custom mb-6" />,
                                title: 'Hız ve Hassasiyet',
                                desc: 'Zamanınız değerlidir. Arıza tespitinden teslime kadar her süreci en optimize şekilde yönetiyoruz.'
                            },
                            {
                                icon: <Heart size={48} className="text-amber-custom mb-6" />,
                                title: 'Memnuniyet',
                                desc: 'Sadece arıza gidermiyoruz; güvenli ve keyifli bir sürüş deneyimi için aracınıza sevgiyle bakıyoruz.'
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-12 bg-neutral-900/30 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all group"
                            >
                                {value.icon}
                                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">{value.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed italic">"{value.desc}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PARTNERS --- */}
            <Partners />
        </main>
    );
};

export default AboutPage;
