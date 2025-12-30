export const GA_MEASUREMENT_ID = 'G-V329GE6W72';

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, params);
    }
};
