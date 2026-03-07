# Homepage Rebuild – Deliverables

## 1. Title + meta description

**Title tag (for CTR):**
```
AI Receptionist for Dental Clinics | Stop Losing Patients After Hours
```

**Meta description (~155 chars):**
```
Your AI front desk answers calls and messages, books appointments, and follows up with leads 24/7. Reduce no-shows and recover lost revenue. Book a 15-minute demo.
```

**Canonical:** `https://aiemployee-alpha.vercel.app`

---

## 2. FAQ schema

FAQ schema is output by `components/home/HomeSchema.tsx` and matches the 5 FAQ items on the page:

- Will this replace my staff?
- How long does setup take?
- Can it work with our current tools?
- Can we start small?
- Is patient data secure?

Additional schemas in the same file: **SoftwareApplication**, **Organization**.

---

## 3. CTA analytics event names

Defined in `lib/analytics.ts`:

| Event name | When fired |
|------------|------------|
| `hero_cta_click` | User clicks "Book a 15-minute demo" in hero (with `cta: 'book_demo'`) |
| `video_click` | User clicks "Watch 2-minute demo" (with `location: 'hero'`) |
| `pricing_cta_click` | User clicks any "Book a demo" in ROI or Pricing (with `location` or `tier`) |
| `form_submit` | User successfully submits the demo form (with `form_id: 'demo_form'`) |

To consume: listen for custom event `ai-employees-track` on `window`, or use `gtag` if configured.

---

## 4. Sections / components created

| Section | Component | Location |
|---------|-----------|----------|
| **Header** | Nav (updated) | `components/Nav.tsx` – dentist-only on home: How It Works, ROI, Pricing, FAQ, Watch 2-min demo, Book Demo |
| **Hero** | HomeHero | `components/home/HomeHero.tsx` |
| **Lost revenue** | LostRevenue | `components/home/LostRevenue.tsx` |
| **Real-life stories** | RealLifeStories | `components/home/RealLifeStories.tsx` |
| **How it works** | HowItWorks | `components/home/HowItWorks.tsx` |
| **What the AI handles** | WhatAIHandles | `components/home/WhatAIHandles.tsx` |
| **ROI** | ROISection | `components/home/ROISection.tsx` |
| **Case study** | CaseStudySection | `components/home/CaseStudySection.tsx` |
| **Pricing** | PricingSection | `components/home/PricingSection.tsx` |
| **FAQ** | HomeFAQ | `components/home/HomeFAQ.tsx` |
| **Final CTA (form)** | DemoFormSection | `components/home/DemoFormSection.tsx` |
| **Footer** | Footer (updated) | `components/Footer.tsx` – on home: Privacy, Terms, Contact, data-handling statement |

**Supporting:**

- `lib/analytics.ts` – `track()` and event names
- `lib/utm.ts` – `getUTMParams()` for form
- `components/home/HomeSchema.tsx` – FAQ + SoftwareApplication + Organization JSON-LD
- `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/contact/page.tsx` – placeholders for footer links

---

## 5. Form fields and UTM

**Demo form fields:**

- Name * (required)
- Clinic name * (required)
- Email * (required)
- Phone (optional)
- Biggest challenge (optional select: Missed calls, After-hours, Front desk overload, No-shows, Slow response, Other)

**UTM hidden fields (when present in URL):**

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

Form posts to `NEXT_PUBLIC_FORMSPREE_DEMO_ENDPOINT` when set; otherwise shows success state only (fake door).

---

## 6. SEO

- **Primary keyword:** AI receptionist for dental clinics
- **Secondary:** dental AI receptionist, dental appointment booking AI, dental clinic automation, AI for dental front desk
- **One H1:** "Stop losing new patients after hours."
- **H2/H3:** One H2 per section; H3 for subsections (e.g. pricing tiers, FAQ).
- **Semantic HTML:** `<article>`, `<header>`, `<section>`, `<nav>`, `<article>` for FAQ items, proper `<label>`/`id` on form inputs.

---

## 7. Design

- Backgrounds: `#fbfbfd` and white; CTA section `slate-900`.
- Cards: `rounded-2xl`, light border or shadow.
- CTAs: high contrast (e.g. slate-900 buttons, white on dark).
- Spacing: consistent `py-16` / `py-24` and `max-w-*` containers.
- No placeholder logos or “fake screenshot” text; real copy only.
