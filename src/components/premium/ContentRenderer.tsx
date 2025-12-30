import React from 'react';

interface ContentRendererProps {
    content: string;
}

const ICON_SVGS: Record<string, string> = {
    '[ICON_PHONE]': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 text-blue-500" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18.92z"></path></svg>',
    '[ICON_MAP]': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 text-blue-500" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    '[ICON_CLOCK]': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 text-blue-500" width="18" height="18"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    '[ICON_CHECK]': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 text-emerald-500" width="18" height="18"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    '[ICON_LIGHTBULB]': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 text-amber-500" width="18" height="18"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>',
    '[ICON_TARGET]': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 text-blue-500" width="18" height="18"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
    '[ICON_WRENCH]': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 text-blue-500" width="18" height="18"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    '[ICON_WHATSAPP]': '<svg viewBox="0 0 24 24" class="inline-block mr-2 text-emerald-500 fill-current" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    '[ICON_STAR]': '<svg viewBox="0 0 24 24" fill="currentColor" class="inline-block mr-1 text-amber-500" width="14" height="14"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    '[ICON_CAR]': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-2 text-blue-500" width="18" height="18"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M5 17h10"></path></svg>',
};

export default function ContentRenderer({ content }: ContentRendererProps) {
    // Replace placeholders with SVG strings
    let processedContent = content;
    Object.entries(ICON_SVGS).forEach(([placeholder, svg]) => {
        processedContent = processedContent.replaceAll(placeholder, svg);
    });

    return (
        <div
            className="prose prose-invert prose-lg max-w-none 
                 /* --- TYPOGRAPHY --- */
                 prose-headings:font-peugeot prose-headings:text-white prose-headings:tracking-normal prose-headings:leading-[1.2]
                 prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mb-8
                 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-neutral-100
                 prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-neutral-200
                 prose-p:text-neutral-400 prose-p:leading-[1.8] prose-p:mb-8 font-body
                 prose-li:text-neutral-400 prose-li:my-3 prose-li:leading-relaxed
                 prose-strong:text-white prose-strong:font-bold
                 prose-a:text-blue-500 prose-a:no-underline hover:prose-a:text-blue-400 prose-a:underline transition-all duration-300
                 prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:mx-auto prose-img:border prose-img:border-white/10 prose-img:my-16
                 prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-600/5 prose-blockquote:p-10 prose-blockquote:rounded-[2rem] prose-blockquote:not-italic prose-blockquote:text-neutral-300 prose-blockquote:my-12
                 prose-hr:border-white/10 prose-hr:my-20
                 
                 /* --- TABLES (Ultra-Premium) --- */
                 prose-table:border-separate prose-table:border-spacing-0 prose-table:w-full prose-table:my-10 prose-table:rounded-[1.5rem] prose-table:border prose-table:border-white/5 prose-table:bg-white/[0.01] prose-table:backdrop-blur-sm
                 prose-thead:bg-blue-600/20 prose-thead:text-white
                 prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:text-[10px] prose-th:font-display prose-th:uppercase prose-th:tracking-[0.15em] prose-th:border-b prose-th:border-white/10
                 prose-td:px-6 prose-td:py-3.5 prose-td:text-sm prose-td:text-neutral-400 prose-td:border-b prose-td:border-white/5
                 prose-tr:transition-all hover:prose-tr:bg-white/[0.04]
                 prose-tr:even:bg-white/[0.02]
                 
                 /* --- LISTS --- */
                 [&_ul]:list-disc [&_ul]:pl-6
                 [&_ol]:list-decimal [&_ol]:pl-6

                 /* --- SHARED OVERRIDES CLASS --- */
                 prose-premium-overrides
                 "
            dangerouslySetInnerHTML={{ __html: processedContent }}
        />
    );
}
