import { trackEvent } from './gtag';

/**
 * Lightweight localStorage-based A/B test utility.
 * - Assigns a random variant on first visit, persists in localStorage.
 * - Fires a GA4 event on assignment so variant distribution can be verified.
 * - Cookie-free, zero dependencies.
 *
 * Usage:
 *   const variant = getVariant('hero_cta', ['simdi_ara', 'ucretsiz_randevu']);
 *   // variant === 'simdi_ara' | 'ucretsiz_randevu' (sticky per user)
 */

export function getVariant(testName: string, variants: string[]): string {
    if (typeof window === 'undefined') return variants[0]; // SSR fallback

    const storageKey = `ab_${testName}`;
    const stored = localStorage.getItem(storageKey);

    if (stored && variants.includes(stored)) {
        return stored;
    }

    // Assign random variant
    const assigned = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem(storageKey, assigned);

    // Track assignment in GA4
    trackEvent('ab_test_assignment', {
        test_name: testName,
        variant: assigned,
    });

    return assigned;
}

/**
 * Track a conversion event with variant info attached.
 */
export function trackConversion(testName: string, eventName: string, extra?: Record<string, unknown>) {
    const storageKey = `ab_${testName}`;
    const variant = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;

    trackEvent(eventName, {
        ...extra,
        test_name: testName,
        variant: variant || 'unknown',
    });
}
