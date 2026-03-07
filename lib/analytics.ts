/**
 * Analytics event tracking for conversion actions.
 * Hook up to GTM, Vercel Analytics, or your analytics provider.
 */
export const ANALYTICS_EVENTS = {
  HERO_CTA_CLICK: 'hero_cta_click',
  VIDEO_CLICK: 'video_click',
  PRICING_CTA_CLICK: 'pricing_cta_click',
  FORM_SUBMIT: 'form_submit',
} as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export function track(eventName: AnalyticsEventName, properties?: Record<string, string | number>) {
  if (typeof window === 'undefined') return;
  if (typeof (window as unknown as { gtag?: (a: string, b: string, c: object) => void }).gtag === 'function') {
    (window as unknown as { gtag: (a: string, b: string, c: object) => void }).gtag('event', eventName, {
      ...properties,
    });
  }
  window.dispatchEvent(
    new CustomEvent('ai-employees-track', { detail: { eventName, ...properties } })
  );
}
