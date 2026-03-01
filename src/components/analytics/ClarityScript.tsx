'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const CLARITY_PROJECT_ID = 'vp3liuvedg';

const ClarityScript = () => {
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `}
        </Script>
    );
};

export default ClarityScript;
