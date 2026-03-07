# Homepage Rebuild — LinkedIn-Ready Dental Landing Page

## 1. Page copy (headlines & key messaging)

### Header (Nav)
- Logo: **AI Employees**
- Nav links: How It Works, ROI, Pricing, FAQ
- CTAs: Book Demo (primary), Watch 2-minute demo (secondary)
- No links to other industries on this page

### Hero
- **H1:** Stop losing new patients after hours.
- **Subheadline:** Your AI front desk answers calls and messages, books appointments, follows up with leads, and helps reduce no-shows — even when your team is busy.
- **CTAs:** Book a 15-minute demo | Watch 2-minute demo
- **Trust strip:** Works with phone, website chat, WhatsApp, SMS, Instagram, and your scheduling tools.

### Lost Revenue
- **H2:** Missed calls are costing your clinic real money.
- **One-liner:** When a patient cannot reach you, they usually call the next clinic.
- **Visual card:** 120 inquiries/month · 35 missed calls · 20 lost patients · $250 avg. visit · **$5,000+ monthly revenue lost.**

### Real-Life Stories
- **H2:** Real-life situations. Real results.
- **Sub:** Problem → AI action → business result.
- **3 cards:** After-hours Invisalign inquiry | Busy front desk misses a call | Same-day cancellation leaves an empty slot.

### How It Works
- **H2:** How it works
- **Sub:** Three steps. No complexity.
- **Steps:** (1) Patient contacts your clinic (2) AI responds instantly and books or qualifies (3) Your team gets a confirmed appointment and fewer interruptions.

### What the AI Handles
- **H2:** What the AI handles
- **Sub:** Plain-English outcomes. One sentence each.
- **6 cards:** Answer calls and messages | Book appointments | Send reminders | Follow up with leads | Re-engage canceled or missed patients | Answer common treatment questions.

### ROI
- **H2:** See the numbers before you hire more staff.
- **Option A:** Hire another front-desk employee — $3,000–$5,000+/month, limited hours, still misses after-hours.
- **Option B:** AI front desk — low monthly SaaS, 24/7, instant answer, more appointments.
- **ROI examples:** Single-location · Cosmetic/high-value · Group practice.
- **CTA:** Book a demo to see your numbers.

### Case Study
- **H2:** Before and after
- **Sub:** One clinic. Believable numbers.
- **Before:** Missed calls, manual follow-ups, slow response, underbooked schedule.
- **After:** Faster replies, more booked appointments, less front-desk overload, stronger recall.
- **Disclaimer:** Example ~40% fewer missed calls, 20+ more bookings/month. Results vary. More detail on the demo.

### Pricing
- **H2:** Pricing
- **Sub:** Simple, outcome-based tiers. Exact numbers on the demo.
- **Tier 1 — Starter:** 24/7 reply and lead capture.
- **Tier 2 — Growth:** Phone + booking automation.
- **Tier 3 — Full Suite:** Front-desk automation, follow-up, reminders, lead conversion.
- Each: who it’s for, what it solves, what’s included. CTA: Book a demo.

### FAQ
- **H2:** FAQ
- **5 Q&As:** Will this replace my staff? | How long does setup take? | Can it work with our current tools? | Can we start small? | Is patient data secure?

### Final CTA
- **H2:** Book a 15-minute demo
- **Sub:** We’ll show you how this can work for your clinic, your workflow, and your patient volume.
- **Form fields:** Name, Clinic name, Email, Phone, Biggest challenge (optional select).

### Footer
- Links: Privacy Policy, Terms, Contact
- **Data handling:** We do not train on your patient data. Conversations are processed to run the service and are not used to train general-purpose models.
- © AI Employees

---

## 2. Title tag & meta description (CTR-optimized)

- **Title:** `AI Receptionist for Dental Clinics | Stop Losing Patients After Hours`
- **Meta description:** `Answer missed calls, book more patients, reduce no-shows. Your AI front desk works 24/7. Book a 15-minute demo.`

---

## 3. FAQ schema

- **Type:** `FAQPage`
- **Location:** `components/home/HomeSchema.tsx` (emitted as `application/ld+json`).
- **Questions (same as on-page FAQ):**
  1. Will this replace my staff?
  2. How long does setup take?
  3. Can it work with our current tools?
  4. Can we start small?
  5. Is patient data secure?

---

## 4. CTA analytics event names

| Event name           | When fired                          | Example properties                    |
|----------------------|-------------------------------------|---------------------------------------|
| `hero_cta_click`     | Hero “Book a 15-minute demo” click  | `{ cta: 'book_demo' }`                |
| `video_click`        | “Watch 2-minute demo” click         | `{ location: 'hero' }`               |
| `pricing_cta_click`  | Pricing / ROI “Book a demo” click   | `{ tier: 'Starter' }` or `{ location: 'roi' }` |
| `form_submit`        | Demo form successfully submitted    | `{ form_id: 'demo_form' }`           |

Defined in `lib/analytics.ts` as `ANALYTICS_EVENTS`. Hook to GTM/Vercel Analytics via `track()` and/or `ai-employees-track` custom event.

---

## 5. Sections & components created/used

| # | Section           | Component             | File                                  |
|---|-------------------|------------------------|----------------------------------------|
| 1 | Header            | Nav                    | `components/Nav.tsx`                   |
| 2 | Hero              | HomeHero               | `components/home/HomeHero.tsx`        |
| 3 | Lost Revenue      | LostRevenue            | `components/home/LostRevenue.tsx`      |
| 4 | Real-Life Stories | RealLifeStories        | `components/home/RealLifeStories.tsx`  |
| 5 | How It Works      | HowItWorks             | `components/home/HowItWorks.tsx`       |
| 6 | What the AI Handles | WhatAIHandles        | `components/home/WhatAIHandles.tsx`    |
| 7 | ROI               | ROISection             | `components/home/ROISection.tsx`       |
| 8 | Case Study        | CaseStudySection       | `components/home/CaseStudySection.tsx`|
| 9 | Pricing           | PricingSection         | `components/home/PricingSection.tsx`  |
|10 | FAQ               | HomeFAQ                | `components/home/HomeFAQ.tsx`         |
|11 | Final CTA / Form  | DemoFormSection        | `components/home/DemoFormSection.tsx` |
|12 | Footer            | Footer                 | `components/Footer.tsx`               |

**Schema (no visible section):** `HomeSchema` in `components/home/HomeSchema.tsx` — FAQPage, SoftwareApplication, Organization.

**Page:** `app/page.tsx` — composes all sections; exports metadata (title, description, OG, Twitter, canonical, robots).

---

## SEO checklist

- **Primary keyword:** AI receptionist for dental clinics (in H1, title, meta, body).
- **Secondary:** dental AI receptionist, dental appointment booking AI, dental clinic automation, AI for dental front desk.
- **One H1:** “Stop losing new patients after hours.”
- **H2/H3:** Used for section headings and card titles.
- **Schema:** FAQPage, SoftwareApplication, Organization (in `HomeSchema.tsx`).
- **Alt text:** OG image and any visuals have descriptive alt where applicable.

## Engineering checklist

- Next.js App Router; metadata in `app/page.tsx`.
- Reusable section components under `components/home/`.
- Analytics: `hero_cta_click`, `video_click`, `pricing_cta_click`, `form_submit`.
- UTM params captured in hidden form fields via `lib/utm.ts` and `getUTMParams()`.
- Semantic HTML, ARIA where needed, skip link in layout.
- Mobile-first; sections responsive (Tailwind). No layout shift from hero; lazy-load non-critical assets if added later.
