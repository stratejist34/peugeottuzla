'use client';

import React, { useEffect, useState } from 'react';
import { List } from 'lucide-react';

interface TOCProps {
    content: string;
}

const TableOfContents = ({ content }: TOCProps) => {
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
    const [activeId, setActiveId] = useState<string>('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setIsMounted(true);
        });
        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        if (!isMounted || typeof window === 'undefined') return;

        // Parse headings from the HTML string
        const parseHeadings = () => {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(content, 'text/html');
                const headingElements = doc.querySelectorAll('h2, h3');

                const parsedHeadings = Array.from(headingElements).map((el, index) => {
                    const text = el.textContent || '';
                    return { id: `heading-${index}`, text, level: parseInt(el.tagName[1]) };
                });

                setHeadings((prev) => {
                    if (JSON.stringify(prev) === JSON.stringify(parsedHeadings)) return prev;
                    return parsedHeadings;
                });
            } catch (e) {
                console.error('TOC Parse Error:', e);
            }
        };

        parseHeadings();
    }, [content, isMounted]);

    useEffect(() => {
        if (!isMounted || headings.length === 0 || typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0% 0% -80% 0%' }
        );

        // We need the items to actually have IDs in the rendered output
        const items = document.querySelectorAll('.prose h2, .prose h3');
        items.forEach((item, index) => {
            item.id = `heading-${index}`;
            observer.observe(item);
        });

        return () => observer.disconnect();
    }, [headings, isMounted]);

    if (!isMounted || headings.length === 0) return null;

    return (
        <nav className="sticky top-32 max-h-[calc(100vh-200px)] overflow-y-auto pr-4 hidden lg:block">
            <div className="flex items-center gap-2 mb-6 text-white font-bold uppercase tracking-widest text-xs">
                <List className="w-4 h-4 text-amber-custom" />
                İçerik Tablosu
            </div>
            <ul className="space-y-3">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        style={{ paddingLeft: `${(heading.level - 2) * 16}px` }}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={`text-sm transition-all duration-300 block hover:text-white ${activeId === heading.id
                                ? 'text-amber-custom font-bold translate-x-1'
                                : 'text-neutral-500'
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
