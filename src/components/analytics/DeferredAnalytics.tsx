'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

const DeferredAnalytics = () => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (enabled) return;

        const enable = () => setEnabled(true);
        const fallback = window.setTimeout(enable, 12000);

        const opts: AddEventListenerOptions = { once: true, passive: true };
        window.addEventListener('pointerdown', enable, opts);
        window.addEventListener('keydown', enable, opts);
        window.addEventListener('touchstart', enable, opts);
        window.addEventListener('scroll', enable, opts);

        return () => {
            window.clearTimeout(fallback);
            window.removeEventListener('pointerdown', enable);
            window.removeEventListener('keydown', enable);
            window.removeEventListener('touchstart', enable);
            window.removeEventListener('scroll', enable);
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
            </Script>
        </>
    );
};

export default DeferredAnalytics;
