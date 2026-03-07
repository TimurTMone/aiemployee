# LinkedIn Ship-Ready Checklist
**Executive brief: What's done vs. what you need to do**

---

## WHAT'S DONE

### Website
| Component | Status |
|-----------|--------|
| Homepage with Vertical AI / Dental AI Suite positioning | ✅ |
| Dentist landing page (`/ai-receptionist-for-dentists`) | ✅ |
| Med Spa, Real Estate, Home Services pages | ✅ |
| GEO content pages (ai-receptionist, how-it-works, best-ai-receptionist, vs-front-desk, vs-human) | ✅ |
| Demo page (`/demo`) with conversation example | ✅ |
| Demo form (captures name, email, phone, business type, challenge) | ✅ |
| Pricing (Starter $99, Growth $299, Dental AI Suite $499) | ✅ |
| FAQ, Integrations, Trust signals, ROI examples | ✅ |
| SEO metadata, JSON-LD schema | ✅ |
| Multi-language (EN, ES, RU) | ✅ |

### LinkedIn outbound automation
| Component | Status |
|-----------|--------|
| Google Sheets integration (append, get, update leads) | ✅ |
| Import script (CSV → Sheet) | ✅ |
| Message templates (3 initial, 2 follow-up, demo booking) | ✅ |
| Generate messages by template | ✅ |
| Update status script (contacted, replied, demo_booked) | ✅ |
| Enrich script (flag leads needing clinic/location) | ✅ |
| README and setup docs | ✅ |
| Sample leads CSV | ✅ |

### Messaging
| Component | Status |
|-----------|--------|
| Positioning: "AI Operating System for Dental Clinics" | ✅ |
| 5 AI employees defined (Receptionist, Optimizer, Follow-Up, Lead Conversion, Education) | ✅ |
| Pain points (missed calls, $5K lost, 35 missed, 20 lost patients) | ✅ |
| ROI narrative (10x–30x, $3,750+/month) | ✅ |
| Demo link, dentist page link, form link | ✅ |

---

## WHAT YOU NEED TO DO

### 1. CRITICAL — Demo form backend ✅ DONE
**Status:** Wired to Formspree. Set `NEXT_PUBLIC_FORMSPREE_DEMO_ENDPOINT` in `.env`.

**Action:**
- [ ] Create Formspree form at https://formspree.io
- [ ] Add `NEXT_PUBLIC_FORMSPREE_DEMO_ENDPOINT=https://formspree.io/f/YOUR_ID` to `.env`
- [ ] Test: submit form → you receive email

---

### 2. CRITICAL — No video in demo
**Gap:** Demo page shows placeholder. LinkedIn prospects expect to see the product before booking.

**Action:**
- [ ] Record 2-min Loom or similar: AI answering a call, chat flow, booking
- [ ] Upload to YouTube (unlisted) or Vimeo
- [ ] Replace placeholder with embed in `DemoPageContent.tsx` and `ProductDemo.tsx`

---

### 3. HIGH — LinkedIn automation not wired
**Gap:** Scripts exist but require manual setup. No lead source.

**Action:**
- [ ] Create Google Cloud project, enable Sheets API, create service account
- [ ] Save `service-account.json` in `linkedin-automation/`
- [ ] Create Google Sheet, share with service account, add `GOOGLE_SHEET_ID` to `.env`
- [ ] Set up lead source: PhantomBuster, Dux-Soup, or manual Sales Navigator export → CSV
- [ ] Run `npm run import` with real leads
- [ ] Run `npm run generate` → copy messages into LinkedIn manually (no InMail automation; LinkedIn ToS)

---

### 4. HIGH — Trust signals ✅ UPDATED
**Status:** Removed Partner placeholders. Metrics changed to "Early adopters", "24/7 coverage", "Enterprise-ready". SOC 2 claim removed.

**Action:**
- [ ] Get 1–3 real testimonials when available
- [ ] Replace generic quotes with real names + practice names (with permission)

---

### 5. MEDIUM — Product screenshots are placeholders
**Gap:** ProductScreenshots shows "Chat interface", "Calendar booking" — text only, no images.

**Action:**
- [ ] Capture real product UI (or Figma mockups per `PRODUCT-UI-SPECIFICATIONS.md`)
- [ ] Add 5 screenshots: Chat, Call, Booking, Lead card, Dashboard

---

### 6. MEDIUM — Demo page metadata outdated
**Gap:** Demo page title still says "AI Receptionist" — not "Dental AI Suite" / platform.

**Action:**
- [ ] Update `app/demo/page.tsx` metadata to match platform positioning

---

### 7. LOW — Calendly/Cal.com integration
**Gap:** "Book Demo" → form. No real calendar booking. High-intent leads may prefer self-serve.

**Action:**
- [ ] Embed Calendly or Cal.com on demo form or separate page
- [ ] Auto-add booked demos to your calendar + send confirmation

---

### 8. LOW — LinkedIn message templates need UTM ✅ DONE
**Status:** UTM params added in `linkedin-automation/config.js` for demo link and form link.

---

## SHIP-READY PRIORITY ORDER

| Order | Task | Est. time |
|-------|------|-----------|
| 1 | Wire demo form to Formspree/Airtable + email | 30 min |
| 2 | Record and embed 2-min product video | 2–4 hrs |
| 3 | Set up LinkedIn automation (Sheets, import 20–50 leads) | 1–2 hrs |
| 4 | Get 1 real testimonial or remove testimonials | 1–3 days |
| 5 | Remove "Partner" placeholders or add real logos | 15 min |
| 6 | Add product screenshots (or keep placeholders for MVP) | 1–2 hrs |
| 7 | Update demo page metadata | 5 min |

---

## NEW: Error & 404 Pages

- [x] Error page with "We ship 24/7, always improving" messaging
- [x] Back to homepage + Try again buttons
- [x] $1B idea feedback form on error and 404 pages
- [ ] Set `NEXT_PUBLIC_FORMSPREE_FEEDBACK_ENDPOINT` for feedback form (create second Formspree form)

## LAUNCH DAY CHECKLIST

- [ ] Demo form → you get lead + email notification
- [ ] 2-min video plays on `/demo` and homepage demo section
- [ ] Google Sheet has 20+ dentist leads, messages generated
- [ ] Dentist page link works: https://aiemployee-alpha.vercel.app/ai-receptionist-for-dentists
- [ ] Form link works: https://aiemployee-alpha.vercel.app/#demo-form
- [ ] You can respond to demo requests within 4 hours (as promised)

---

## LINKEDIN OUTBOUND FLOW (RECOMMENDED)

1. **Lead source:** PhantomBuster or Sales Navigator → export dentists with 50–500 employees to CSV
2. **Import:** `npm run import leads.csv` → Sheet
3. **Enrich:** Run `npm run enrich`, manually fill clinic_name/location where missing
4. **Generate:** `npm run generate template_1` (or 2, 3)
5. **Send:** Copy message, paste in LinkedIn connection request or InMail (manual; no automation)
6. **Track:** `npm run update-status 2 contacted "Hi Dr Smith..."` when you send
7. **Follow up:** After 3–5 days, `npm run generate follow_up_1`, send to non-responders
8. **Close:** When interested, send demo booking template with form link

---

## BOTTOM LINE

**Ready now:** Website, positioning, messaging, LinkedIn automation scripts, templates.

**Blockers:** Demo form has no backend; no product video.

**Ship in 1 day:** Form + video + LinkedIn automation setup. Rest can follow.
