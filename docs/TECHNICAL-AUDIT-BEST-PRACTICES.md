# Technical Audit & Best Practice Recommendations
**Expert review: Software engineering + AI product perspective**

---

## Executive Summary

The codebase is solid for an early-stage SaaS landing: clean Next.js App Router, sensible Tailwind usage, good SEO foundations. Critical gaps: demo form has no backend, no error/loading boundaries, locale not persisted, and trust signals risk credibility. Below: prioritized recommendations.

---

## 1. Architecture & Code Quality

### What's Good
- Next.js 14 App Router with proper `metadata` exports
- TypeScript strict mode enabled
- Content separated from components (`linkedin-content.ts`, `geo-content.ts`)
- Consistent component naming (LinkedIn suffix for sales-focused, GEO for SEO-focused)

### Recommendations

| Priority | Issue | Recommendation |
|----------|-------|-----------------|
| **High** | Duplicate/legacy content sources | `translations.ts` (300+ lines) has different copy than `linkedin-content.ts`. Nav/Footer use `translations`; main sections use `linkedinContent`. Consolidate or clearly document which drives which. |
| **Medium** | Orphan components | `Hero.tsx`, `Problem.tsx`, `Solution.tsx`, `ProductModules.tsx`, etc. exist but homepage uses `*LinkedIn` variants. Either remove orphans or document migration path. |
| **Medium** | No shared types | Create `types/index.ts` for shared types (Lead, PricingTier, Module) to avoid drift between `linkedin-content` and `geo-content`. |
| **Low** | `linkedin-automation` uses CommonJS-style ESM | Add `"type": "module"` in package.json if needed; ensure consistent `import`/`export` usage. |

---

## 2. Form & Data Handling

### Critical: Demo Form
```tsx
// Current: form data is never sent anywhere
async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);
  await new Promise((r) => setTimeout(r, 800));  // Fake delay
  setSubmitted(true);  // Leads go nowhere
}
```

**Action:** Wire to Formspree, Airtable, or API route. Collect: `name`, `email`, `phone`, `businessType`, `company`, `biggestChallenge`. Add client-side validation (email format, phone optional). Consider honeypot for bots.

---

## 3. Error Handling & Resilience

| Gap | Recommendation |
|-----|-----------------|
| No `error.tsx` | Add `app/error.tsx` for route-level errors. Show friendly message + "Try again" or "Go home". |
| No `loading.tsx` | Add `app/loading.tsx` for initial load. Improves perceived performance. |
| Form has no error state | If backend fails, show "Something went wrong. Please try again or email us." |
| No retry on network failure | For form submit, add retry or fallback (e.g., mailto link). |

---

## 4. Performance

| Area | Status | Recommendation |
|------|--------|----------------|
| Fonts | Inter via `next/font` | Good. Consider `display: 'swap'` to reduce layout shift. |
| Images | None used | When adding product screenshots, use `next/image` with `sizes` and `priority` for above-fold. |
| Bundle | No code splitting beyond routes | Consider dynamic import for heavy components (e.g., `TrustSignals` if it grows). |
| Analytics | None | Add Vercel Analytics or GA4 for traffic/conversion. Minimal overhead. |

---

## 5. Security

| Area | Status | Recommendation |
|------|--------|----------------|
| `dangerouslySetInnerHTML` | Used for JSON-LD only | Acceptable — you control the content. Keep schema data static or sanitize if dynamic. |
| Form | No CSRF | If using custom API, add CSRF token or SameSite cookies. Formspree/Airtable handle this. |
| Env vars | `.env` in gitignore | Good. Ensure `service-account.json` never committed (already in gitignore). |
| Rate limiting | None | For demo form, add client-side debounce + server-side rate limit if custom backend. |

---

## 6. Accessibility

| Area | Status | Recommendation |
|------|--------|----------------|
| Focus styles | `*:focus-visible` in globals.css | Good. |
| Nav mobile button | `aria-label="Toggle menu"` | Good. |
| Form labels | `htmlFor` + `id` paired | Good. |
| Skip link | Missing | Add `<a href="#main" class="sr-only focus:not-sr-only">Skip to content</a>` for keyboard users. |
| Color contrast | Slate-600 on white | Verify WCAG AA. Slate-500/400 may fail. |
| Language selector | No `aria-label` | Add `aria-label="Select language"`. |

---

## 7. SEO & Metadata

| Area | Status | Recommendation |
|------|--------|----------------|
| Title/description | Per-page | Good. |
| Open Graph image | `summary_large_image` but no `images` | Add `openGraph: { images: ['/og-image.png'] }` — 1200×630. Critical for LinkedIn shares. |
| Canonical URLs | Not set | Add `alternates: { canonical: 'https://aiemployee-alpha.vercel.app/' }` to avoid duplicate content. |
| JSON-LD | 4 schemas in layout | Good. Consider moving to `lib/schema.ts` for maintainability. |
| `lang` on html | `lang="en"` | When locale switches, `html` should reflect (`lang="es"`). Currently not updated. |

---

## 8. Internationalization (i18n)

| Gap | Recommendation |
|-----|-----------------|
| Locale in memory only | Persist to `localStorage` so language choice survives reload. |
| `translations` vs `linkedinContent` | Homepage sections (Hero, Problem, etc.) use `linkedinContent` (EN only). Only Nav/Footer use `translations`. Either translate main sections or remove language switcher from pages where it has no effect. |
| `html lang` | Update `<html lang={locale}>` when locale changes. |
| RTL | Not applicable for EN/ES/RU. |

---

## 9. Content & Messaging (AI Product Perspective)

### Accuracy of Claims
- **"10x–30x ROI"** — Ensure you have at least one documented case study or conservative range. Unsubstantiated ROI claims can backfire in enterprise sales.
- **"500+ businesses"** — TrustSignals shows this. If not true, remove or replace with "Early adopters" / "Pilot customers".
- **"SOC 2 compliant"** — Only claim if certified. Otherwise use "Enterprise-grade security" without SOC 2.

### Ethical AI Positioning
- **"Can it replace staff?"** — FAQ correctly says no. Keep this; it builds trust.
- **"No training on customer data"** — Important for healthcare-adjacent (dental). Ensure this is technically true.
- **HIPAA** — Dental practices handle PHI. If you're not BAA-ready, add disclaimer or avoid explicit HIPAA claims.

---

## 10. UX & Conversion

| Area | Recommendation |
|------|-----------------|
| CTA visibility | Sticky CTA on mobile is good. Consider showing only after scroll (e.g., 50% viewport) to avoid initial clutter. |
| Form length | 6 fields may drop conversions. Consider A/B: minimal (name, email, company) vs full. |
| Video placeholder | Replace ASAP. Empty placeholder reduces credibility. |
| Trust badges | "Partner" placeholders with opacity hurt more than help. Remove or use real logos. |
| Demo link | Use UTM params for attribution: `?utm_source=linkedin&utm_medium=outbound`. |

---

## 11. LinkedIn Automation Scripts

| Area | Status | Recommendation |
|------|--------|----------------|
| Error handling | Basic `catch` | Add retry with exponential backoff for Sheets API. |
| Validation | Minimal | Validate `templateKey` against allowlist before `generateMessage`. |
| Enrich script | Identifies missing fields | Consider integrating Clearbit/SimilarWeb for company data (optional). |
| Env validation | Manual | Add startup check: fail fast if `GOOGLE_SHEET_ID` missing. (Already added in sheets.js.) |

---

## 12. Suggested File Additions

```
app/
  error.tsx          # Route-level error boundary
  loading.tsx        # Global loading UI
  not-found.tsx     # Custom 404 (optional)
public/
  og-image.png      # 1200×630 for social shares
  favicon.ico       # Ensure exists
lib/
  types.ts          # Shared types
```

---

## 13. Priority Matrix

| P0 (Ship blocker) | P1 (Before scale) | P2 (Polish) |
|-------------------|-------------------|-------------|
| Demo form backend | error.tsx, loading.tsx | Skip link, aria-labels |
| OG image for shares | Consolidate content sources | Locale persistence |
| Remove/verify trust metrics | Add analytics | Rework or remove Partner placeholders |

---

## 14. Quick Wins (< 1 hr each)

1. Add `app/error.tsx` with friendly fallback UI
2. Add `app/loading.tsx` with simple spinner/skeleton
3. Add `openGraph.images` and create `og-image.png`
4. Add `aria-label` to language select
5. Add skip-to-content link in layout
6. Remove or replace "Partner" placeholder logos in TrustSignals
7. Add UTM params to demo/form links in message templates

---

## Summary

**Strong foundation:** Next.js 14, TypeScript, Tailwind, content separation, SEO structure.

**Must-fix before launch:** Demo form backend, OG image, trust signal accuracy.

**High-value improvements:** Error boundaries, loading states, content consolidation, locale persistence.

**Ongoing:** Monitor Core Web Vitals, keep dependencies updated, document which content source drives which UI.
