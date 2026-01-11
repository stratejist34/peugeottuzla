'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import wpContent from '@/data/wp_content.json';

const KnowledgeBase = () => {
    // Get latest 3 posts, sorted by date
    const latestPosts = wpContent
        .filter(item => item.type === 'post')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <section className="py-32 bg-[#07090f] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-amber-custom mb-4"
                        >
                            <div className="w-8 h-0.5 bg-amber-custom" />
                            <span className="text-sm font-medium tracking-wide">Teknik Blog</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-heading text-white leading-tight"
                        >
                            <span className="text-gray-400">Teknik Blog</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/rehber" className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-custom hover:text-black transition-all duration-300">
                            <span className="font-semibold text-sm">Tüm Yazıları Gör</span>
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Stylish Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post, i) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group h-full"
                        >
                            <Link href={`/${post.slug}`} className="block h-full relative">
                                {/* Card Container */}
                                <div className="relative h-full bg-[#0c0e16] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:border-amber-custom/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col">

                                    {/* Image Section */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                                        {post.thumbnail ? (
                                            <Image
                                                src={post.thumbnail}
                                                alt={post.title}
                                                fill
                                                className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#111] flex items-center justify-center text-gray-700 font-bold">KLAS OTO</div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e16] via-transparent to-transparent opacity-80" />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex flex-col flex-grow relative -mt-12 z-10">
                                        <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-amber-custom transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow opacity-80 group-hover:opacity-100 transition-opacity">
                                            {post.meta_desc || (post.content ? post.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...' : '')}
                                        </p>

                                        {/* Minimal styled button */}
                                        <div className="flex items-center gap-3 mt-auto">
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-amber-custom group-hover:text-black group-hover:border-amber-custom transition-all duration-300">
                                                <ArrowUpRight size={18} />
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                                                İncele
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KnowledgeBase;
