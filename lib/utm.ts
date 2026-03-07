/**
 * Read UTM and other campaign params from the URL for form capture.
 */
export function getUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) result[key] = value;
  });
  return result;
}
