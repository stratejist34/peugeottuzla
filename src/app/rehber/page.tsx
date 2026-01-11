'use client';
import wpContent from '@/data/wp_content.json';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogIndexPage() {
    // Filter and Sort: Newest first
    const posts = wpContent
        .filter((item) => item.type === 'post')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen bg-[#030406] pt-32 pb-20 relative overflow-hidden">
            {/* --- PREMIUM BACKGROUND --- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

                <motion.div
                    animate={{
                        x: [-20, 40, -20],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors group px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold tracking-widest uppercase">Ana Sayfa</span>
                    </Link>
                </motion.div>

                <header className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-blue-500 font-tag tracking-[0.5em] uppercase text-[10px] mb-6 block"
                    >
                        Teknik Bilgi Bankası
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-display text-white mb-8 leading-[1.1] tracking-normal"
                    >
                        BLOG & <br />
                        <span className="text-outline-lg font-display tracking-wider text-neutral-500">TEKNİK REHBER.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-400 text-lg max-w-3xl leading-relaxed font-body"
                    >
                        Peugeot ve Citroen uzmanlığımızla hazırladığımız, aracınızı daha iyi tanımanızı sağlayacak
                        teknik makaleler ve çözüm rehberleri.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link
                                href={`/${post.slug}`}
                                className="group flex flex-col h-full bg-neutral-900/20 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-700 hover:translate-y-[-8px] shadow-2xl relative"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    {post.thumbnail ? (
                                        <Image
                                            src={post.thumbnail}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center border-b border-white/5">
                                            <span className="text-neutral-700 font-display uppercase tracking-[0.3em] text-[10px]">Klas Oto Servis</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030406] via-transparent to-transparent opacity-60" />
                                </div>

                                <div className="p-8 flex-1 flex flex-col relative z-10">
                                    <h2 className="text-xl md:text-2xl font-display text-white mb-4 line-clamp-2 group-hover:text-amber-custom transition-colors tracking-tight leading-snug">
                                        {post.title}
                                    </h2>

                                    <p className="text-neutral-500 text-sm line-clamp-3 mb-8 leading-relaxed font-body">
                                        {post.meta_desc || post.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...'}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors flex items-center gap-2">
                                            Rehberi Oku
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                                            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}

