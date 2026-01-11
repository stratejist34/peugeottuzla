'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const reviews = [
    {
        name: 'Mustafa Yılmaz',
        role: 'Peugeot 3008',
        text: 'Tuzla bölgesinde Peugeot servisi ararken Klas Oto’yu buldum. Şeffaf fiyat politikasından ve güler yüzlü hizmetten çok memnun kaldım. Teknik donanımları çok iyi.',
        rating: 5,
        date: '2 hafta önce'
    },
    {
        name: 'Canan Demir',
        role: 'Citroën C3',
        text: 'Aracımın triger değişimi ve periyodik bakımı için tercih ettim. Yetkili servis kalitesinde, çok daha makul fiyatlarla hizmet aldım. Her aşamada bilgilendirdiler.',
        rating: 5,
        date: '1 ay önce'
    },
    {
        name: 'Ahmet Karakaş',
        role: 'Peugeot 508',
        text: 'Nokta atışı arıza tespiti yapıyorlar. Boş yere parça değişimi yaptırmayan, dürüst bir esnaf. Aracımdaki kronik şanzıman sorununu kısa sürede çözdüler.',
        rating: 5,
        date: '3 ay önce'
    }
];

const Testimonials = () => {
    return (
        <section className="py-32 bg-[#07090f] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-amber-custom/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-amber-custom mb-6 uppercase tracking-[0.4em] text-[10px] font-black"
                        >
                            <span className="w-8 h-px bg-amber-custom" />
                            MÜŞTERİ DENEYİMLERİ
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-white leading-tight"
                        >
                            Mutlu Müşteri <br />
                            <span className="text-white md:text-outline">Yorumları.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-10 md:mt-0 flex flex-col items-center md:items-end gap-3"
                    >
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width={20} height={20} className="w-5 h-5" />
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-amber-custom text-amber-custom" />
                                ))}
                            </div>
                            <span className="text-white font-black ml-2">4.9/5</span>
                        </div>
                        <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Google İşletme Puanımız</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-[#0c0e16] border border-white/5 p-10 rounded-[2.5rem] transition-all duration-700 hover:border-amber-custom/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                        >
                            <Quote className="absolute top-8 right-8 text-amber-custom/10 group-hover:text-amber-custom/20 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12" size={48} />

                            <div className="flex items-center gap-1 mb-8">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-amber-custom text-amber-custom shadow-[0_0_10px_rgba(255,179,0,0.3)]" />
                                ))}
                                <span className="ml-3 text-[10px] text-gray-600 font-bold uppercase tracking-widest">{review.date}</span>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed mb-10 group-hover:text-gray-200 transition-colors">
                                &quot;{review.text}&quot;
                            </p>

                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-amber-custom flex items-center justify-center text-black font-black text-2xl shadow-xl shadow-amber-500/20 group-hover:scale-110 transition-transform duration-500 relative">
                                    {review.name[0]}
                                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 border-2 border-[#0c0e16]">
                                        <CheckCircle size={10} className="text-white fill-white" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-black text-white text-lg leading-none mb-2">{review.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-amber-custom font-black uppercase tracking-widest">{review.role}</span>
                                        <span className="w-1 h-1 bg-gray-700 rounded-full" />
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Doğrulanmış Müşteri</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
