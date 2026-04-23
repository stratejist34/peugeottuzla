export const GA_MEASUREMENT_ID = 'G-V329GE6W72';
export const ADS_ID = 'AW-17432793907';
const SESSION_DEDUPE_WINDOW_MS = 30 * 60 * 1000;
const SESSION_DEDUPE_PREFIX = 'ga4-session-dedupe';

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

const sendServerEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof navigator === 'undefined' || !navigator.sendBeacon) return false;

    try {
        return navigator.sendBeacon(
            '/api/track',
            new Blob([JSON.stringify({ name: eventName, params })], { type: 'application/json' })
        );
    } catch {
        return false;
    }
};

const getSessionDedupeKey = (eventName: string) => `${SESSION_DEDUPE_PREFIX}:${eventName}`;

const hasRecentSessionEvent = (eventName: string) => {
    if (typeof window === 'undefined') return false;

    try {
        const raw = window.localStorage.getItem(getSessionDedupeKey(eventName));
        if (!raw) return false;

        const lastTrackedAt = Number(raw);
        if (!Number.isFinite(lastTrackedAt)) {
            window.localStorage.removeItem(getSessionDedupeKey(eventName));
            return false;
        }

        const isFresh = Date.now() - lastTrackedAt < SESSION_DEDUPE_WINDOW_MS;
        if (!isFresh) {
            window.localStorage.removeItem(getSessionDedupeKey(eventName));
        }

        return isFresh;
    } catch {
        return false;
    }
};

const markSessionEvent = (eventName: string) => {
    if (typeof window === 'undefined') return;

    try {
        window.localStorage.setItem(getSessionDedupeKey(eventName), String(Date.now()));
    } catch {
        // Storage unavailable — skip dedupe persistence and allow normal tracking.
    }
};

// Kritik conversion event'leri için tek-kayıt stratejisi:
// 1) gtag hazırsa client-side gönder
// 2) gtag yoksa /api/track ile first-party server fallback kullan
// 3) son çare olarak dataLayer kuyruğuna bırak
export const trackCriticalEvent = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;

    if (window.gtag) {
        trackEvent(eventName, params);
        return;
    }

    if (sendServerEvent(eventName, params)) return;

    trackEvent(eventName, params);
};

export const trackCriticalEventOncePerSession = (eventName: string, params?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return false;
    if (hasRecentSessionEvent(eventName)) return false;

    trackCriticalEvent(eventName, params);
    markSessionEvent(eventName);
    return true;
};
