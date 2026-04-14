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
