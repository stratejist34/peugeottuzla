export const GA_MEASUREMENT_ID = 'G-V329GE6W72';
export const ADS_ID = 'AW-17432793907';

declare global {
    interface Window {
        gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
        dataLayer?: unknown[];
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// gtag yoksa dataLayer'a direkt push — script yüklenince GA4 kuyruğu otomatik işler.
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;
    if (window.gtag) {
        window.gtag('event', eventName, params);
        return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(['event', eventName, params]);
};

// Kritik conversion event'leri için server-only send (ad blocker proof, no duplication).
// Tek bir kayıt — /api/track → Measurement Protocol → GA4.
// sendBeacon başarısız olursa (çok nadir) client-side gtag'e fallback — yine tek kayıt.
// ÖNEMLI: GA4_API_SECRET env var'ı set edilmeli, yoksa endpoint 204 döner ve event kaybolur.
export const trackCriticalEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        try {
            const blob = new Blob([JSON.stringify({ name: eventName, params })], {
                type: 'application/json',
            });
            if (navigator.sendBeacon('/api/track', blob)) return;
        } catch {
            // fall through to client-side fallback
        }
    }
    trackEvent(eventName, params);
};
