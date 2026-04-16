'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

const DeferredAnalytics = () => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (enabled) return;

        const enable = () => setEnabled(true);
        const fallback = window.setTimeout(enable, 3500);
        const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
        const idleId = idle ? idle(enable) : 0;

        const opts: AddEventListenerOptions = { once: true, passive: true, capture: true };
        window.addEventListener('pointerdown', enable, opts);
        window.addEventListener('keydown', enable, opts);
        window.addEventListener('touchstart', enable, opts);
        window.addEventListener('scroll', enable, opts);

        return () => {
            window.clearTimeout(fallback);
            const cancelIdle = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
            if (cancelIdle && idleId) cancelIdle(idleId);
            window.removeEventListener('pointerdown', enable, true);
            window.removeEventListener('keydown', enable, true);
            window.removeEventListener('touchstart', enable, true);
            window.removeEventListener('scroll', enable, true);
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
          gtag('config', 'AW-17432793907');
        `}
            </Script>
        </>
    );
};

export default DeferredAnalytics;
