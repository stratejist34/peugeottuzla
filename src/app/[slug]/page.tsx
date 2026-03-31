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

export const dynamicParams = false;

export async function generateStaticParams() {
    const validItems = wpContent.filter(item =>
        item.slug &&
        item.slug !== 'home' &&
        item.slug !== 'rehber'
    );

    // Get unique slugs
    const uniqueSlugs = Array.from(new Set(validItems.map(item => item.slug)));

    return uniqueSlugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const item = wpContent.find((i) => i.slug === slug);

    if (!item) return { title: 'Sayfa Bulunamadı' };

    return {
        title: item.meta_title || `${item.title} | Klas Oto Peugeot Servisi`,
        description: item.meta_desc,
        keywords: item.meta_focuskw,
        alternates: {
            canonical: `/${slug}`,
        },
        openGraph: {
            title: item.title,
            description: item.meta_desc,
            url: `https://peugeottuzla.com/${slug}`,
            images: item.thumbnail ? [item.thumbnail] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: item.meta_title || item.title,
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

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": isPost
            ? [
                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://peugeottuzla.com" },
                { "@type": "ListItem", "position": 2, "name": "Rehber", "item": "https://peugeottuzla.com/rehber" },
                { "@type": "ListItem", "position": 3, "name": item.title, "item": `https://peugeottuzla.com/${item.slug}` },
            ]
            : [
                { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://peugeottuzla.com" },
                { "@type": "ListItem", "position": 2, "name": item.title, "item": `https://peugeottuzla.com/${item.slug}` },
            ]
    };

    const blogPostingSchema = isPost ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": item.title,
        "description": item.meta_desc,
        "image": item.thumbnail || "https://peugeottuzla.com/images/Klas-Oto-Tuzla-Peugeot-Servis-1024x650.jpg",
        "datePublished": item.date,
        "dateModified": item.date,
        "url": `https://peugeottuzla.com/${item.slug}`,
        "author": {
            "@type": "Organization",
            "@id": "https://peugeottuzla.com/#business",
            "name": "Klas Oto | Peugeot & Citroen Özel Servisi"
        },
        "publisher": { "@id": "https://peugeottuzla.com/#business" },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://peugeottuzla.com/${item.slug}`
        },
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", ".article-summary", "h2"]
        }
    } : null;

    return (
        <main className="min-h-screen bg-black pt-40 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {blogPostingSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
                />
            )}
            <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Back Navigation */}
                    <Link
                        href={isPost ? "/rehber" : "/"}
                        prefetch={false}
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

                            {/* TL;DR — AI özet kutusu (Speakable hedef) */}
                            {isPost && item.meta_desc && (
                                <div className="article-summary mb-10 px-6 py-5 rounded-2xl border border-blue-500/20 bg-blue-500/5">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2">Özet</p>
                                    <p className="text-neutral-300 text-sm leading-relaxed">{item.meta_desc}</p>
                                </div>
                            )}

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
