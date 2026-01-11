export const GA_MEASUREMENT_ID = 'G-V329GE6W72';
export const ADS_ID = 'AW-17432793907';

declare global {
    interface Window {
        gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }
};
