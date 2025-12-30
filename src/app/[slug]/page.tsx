import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import wpContent from '@/data/wp_content.json';
import ContentRenderer from '@/components/premium/ContentRenderer';
import TableOfContents from '@/components/premium/TableOfContents';
import Image from 'next/image';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const item = wpContent.find((i) => i.slug === slug);

    if (!item) return { title: 'Sayfa Bulunamadı' };

    return {
        title: item.meta_title || `${item.title} | Klas Oto Peugeot Servisi`,
        description: item.meta_desc,
        keywords: item.meta_focuskw,
        openGraph: {
            title: item.title,
            description: item.meta_desc,
            images: item.thumbnail ? [item.thumbnail] : [],
        },
    };
}

export default async function DynamicWPPage({ params }: Props) {
    const { slug } = await params;
    const item = wpContent.find((i) => i.slug === slug);

    // Exclude internal slugs that shouldn't be standalone pages
    if (!item || slug === 'home' || slug === 'rehber') {
        notFound();
    }

    const isPost = item.type === 'post';

    return (
        <main className="min-h-screen bg-black pt-40 pb-20">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Back Navigation */}
                    <Link
                        href={isPost ? "/rehber" : "/"}
                        className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 group text-sm font-bold uppercase tracking-widest"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        {isPost ? "Rehbere Dön" : "Ana Sayfa"}
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Sidebar / TOC */}
                        <aside className="lg:col-span-3 order-2 lg:order-1">
                            {isPost && <TableOfContents content={item.content} />}
                        </aside>

                        {/* Main Content */}
                        <div className={`lg:col-span-9 ${!isPost ? 'lg:col-start-2 lg:col-span-10' : ''} order-1 lg:order-2`}>

                            <header className="mb-12">
                                <h1 className="text-3xl md:text-4xl font-peugeot text-white mb-8 leading-[1.2] tracking-tight">
                                    {item.title}
                                </h1>

                                {isPost && (
                                    <div className="flex flex-wrap items-center gap-8 text-neutral-500 text-[11px] font-black uppercase tracking-[0.2em] border-y border-white/5 py-6">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-4 h-4 text-blue-600" />
                                            <span>{new Date(item.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                        </div>
                                        {item.meta_focuskw && (
                                            <div className="flex items-center gap-3">
                                                <Tag className="w-4 h-4 text-blue-600" />
                                                <span>{item.meta_focuskw}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </header>

                            {/* Featured Image */}
                            {item.thumbnail && (
                                <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-white/5 group">
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                </div>
                            )}

                            {/* WordPress Content Rendered with Premium Styling */}
                            <div className="bg-neutral-900/20 backdrop-blur-3xl p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-inner">
                                <ContentRenderer content={item.content} />
                            </div>

                            {/* Post Footer / Share / Next Post could go here */}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
