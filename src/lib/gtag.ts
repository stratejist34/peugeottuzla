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

// Kritik conversion event'leri için dual-send:
// 1) Client-side gtag — birincil, güvenilir, hızlı
// 2) Server-side /api/track — ad blocker kullanan ~%20 kullanıcıyı yakalar
// GA4 aynı client_id + event'i tekrar görürse event sayısı 2x olabilir
// ama Google Ads dönüşüm attribution kullanıcı bazlı çalıştığı için 1 dönüşüm kalır.
export const trackCriticalEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;
    // Birincil: her zaman client-side
    trackEvent(eventName, params);
    // Ek güvence: server-side (sendBeacon fire-and-forget, failure'ı yutulur)
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        try {
            navigator.sendBeacon(
                '/api/track',
                new Blob([JSON.stringify({ name: eventName, params })], { type: 'application/json' })
            );
        } catch { /* ignore */ }
    }
};
