'use client';

import React from 'react';

interface ScrollingTextProps {
    items: string[];
    direction?: 'left' | 'right';
    speed?: number; // in seconds
    fontSize?: string; // e.g. "text-8xl"
    outlineOnly?: boolean;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({
    items,
    direction = 'left',
    speed = 40,
    fontSize = 'text-7xl md:text-9xl',
    outlineOnly = false
}) => {
    const content = (
        <div className="flex space-x-12 px-6 items-center">
            {items.map((item, index) => (
                <span
                    key={index}
                    className={`${fontSize} font-black uppercase tracking-tighter whitespace-nowrap transition-all duration-500
                        ${index % 2 === 1 ? 'text-amber' : outlineOnly ? 'text-outline' : 'text-white'}`}
                >
                    {item}
                </span>
            ))}
        </div>
    );

    return (
        <div className="w-full overflow-hidden py-10 opacity-20 pointer-events-none select-none">
            <div
                className={direction === 'left' ? 'scroller-content-left' : 'scroller-content-right'}
                style={{ animationDuration: `${speed}s` }}
            >
                {content}
                {content}
            </div>
        </div>
    );
};

export default ScrollingText;
