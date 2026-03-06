# LinkedIn Outbound Rebuild — Full Output

## PART 1–2: Audit & ICP

See `docs/LINKEDIN-OUTBOUND-AUDIT.md` for full audit and ICP definition.

---

## PART 3: Homepage Structure

| Order | Section | Component |
|-------|---------|-----------|
| 1 | Header | Nav |
| 2 | Hero | HeroLinkedIn |
| 3 | Trust Bar | TrustBar |
| 4 | ICP | ICPSection |
| 5 | Problem | ProblemLinkedIn |
| 6 | Product Demo | ProductDemo |
| 7 | Solution | SolutionGEO |
| 8 | How It Works | HowItWorksGEO |
| 9 | Product Modules | ProductModules |
| 10 | Industries | UseCasesGEO |
| 11 | ROI | ROILinkedIn |
| 12 | Case Studies | CaseStudies |
| 13 | Integrations | Integrations |
| 14 | Pricing | PricingGEO |
| 15 | Trust Signals | TrustSignals |
| 16 | FAQ | FAQLinkedIn |
| 17 | Demo Form | DemoFormLinkedIn |
| 18 | Final CTA | FinalCTALinkedIn |
| 19 | Footer | Footer |

---

## PART 4: Product Visualization Placeholders

### AI Chat Widget
- **Layout:** Website chat bubble (bottom-right) with conversation thread
- **Content:** Patient: "Do you have availability next week?" / AI: "Yes, we have openings Tuesday 2pm and Thursday 10am. Would you like to book?"
- **Style:** Clean, minimal, mobile-friendly

### AI Call Flow
- **Layout:** Incoming call screen with AI greeting
- **Content:** Options: "Book appointment" | "Get information" | "Speak to staff"
- **Style:** Phone UI mockup, clear step flow

### Appointment Booking Automation
- **Layout:** Calendar picker with available slots
- **Content:** Selected date/time, confirmation message, "We've sent a confirmation to your phone"
- **Style:** Calendar UI, confirmation state

### Lead Qualification Flow
- **Layout:** Chat or form showing questions: "What service do you need?" "When are you available?" "Best phone to reach you?"
- **Content:** Captured lead with status: "Qualified — Ready for sales"
- **Style:** CRM-style card

### Analytics Dashboard
- **Layout:** Dashboard with metrics
- **Content:** "Inquiries today: 24" | "Booked: 8" | "Response time: 12 sec" | "Missed: 0"
- **Style:** Clean SaaS dashboard, key KPIs

---

## PART 5: ROI Content

**Statistic:** Businesses miss 30–50% of inbound calls. Each missed call = lost revenue.

**Benefits:**
- Capture every lead—24/7, on all channels
- Respond in seconds—no voicemail, no callback delay
- Book appointments automatically—syncs with your calendar

**Example (Dental):**
- Before: 30% missed calls, $4K/month front desk, no after-hours
- After: 100% captured, instant response, ~60% savings, more new patients

---

## PART 6: Industry Page Outlines

### /ai-receptionist-for-dentists
- Hero: "AI Receptionist for Dental Practices"
- Problems: Missed new patient calls, no after-hours, front desk overload
- Solution: 24/7 AI answers, books, sends reminders
- ROI: 30% → 100% capture, 60% operational savings
- CTA: Book demo

### /ai-receptionist-for-real-estate
- Hero: "AI Receptionist for Real Estate"
- Problems: Leads go cold, slow response
- Solution: Instant qualification, showings scheduled
- ROI: Faster conversion, more qualified prospects
- CTA: Book demo

### /ai-receptionist-for-med-spas
- Hero: "AI Receptionist for Med Spas"
- Problems: Booking bottlenecks, inquiry spikes
- Solution: Consultations, booking, follow-up
- ROI: More appointments, reduced admin
- CTA: Book demo

### /ai-receptionist-for-home-services (created)
- Hero: "AI Receptionist for Home Services"
- Problems: Dispatch chaos, missed calls
- Solution: Call answering, job scheduling, qualification
- ROI: Fewer missed jobs, faster dispatch
- CTA: Book demo

---

## PART 7: LinkedIn Conversion Microcopy

| Element | Copy |
|---------|------|
| Primary CTA | Watch 2-Min Demo |
| Secondary CTA | Book a 15-Min Demo |
| Tertiary | See How It Works |
| Form header | Book a 15-Min Demo |
| Expectation | 15-minute call. We show you how it works for your industry. No pitch. |
| Response | We respond within 4 hours. |

---

## PART 8: Trust Signals

- **Testimonials:** Industry-specific quotes (Dental, Med Spa, Real Estate)
- **Integrations:** Website chat, SMS, WhatsApp, Email, Phone, Google Calendar, Calendly, CRM
- **Security:** Encryption, SOC 2, your data your control, no training on customer data
- **Implementation:** 1–2 weeks to go live, connect channels → configure → train

---

## PART 9: SEO Metadata

**Title:** AI Receptionist | AI Answering Service & Lead Automation for Service Businesses

**Meta description:** AI receptionist that answers calls, captures leads, books appointments 24/7. AI receptionist for dentists, med spas, real estate, home services. AI answering service and lead automation.

**Keywords:** AI receptionist, AI receptionist for dentists, AI answering service, AI lead automation

**Schema:** Organization, SoftwareApplication, FAQPage (in layout.tsx)

---

## PART 10: Component Structure

```
components/
├── HeroLinkedIn.tsx
├── ICPSection.tsx
├── ProblemLinkedIn.tsx
├── ProductDemo.tsx
├── SolutionGEO.tsx
├── HowItWorksGEO.tsx
├── ProductModules.tsx
├── UseCasesGEO.tsx
├── ROILinkedIn.tsx
├── CaseStudies.tsx
├── Integrations.tsx
├── PricingGEO.tsx
├── TrustSignals.tsx
├── FAQLinkedIn.tsx
├── DemoFormLinkedIn.tsx
├── FinalCTALinkedIn.tsx
├── Nav.tsx
└── Footer.tsx
```

**New form field:** "What's your biggest challenge?" (missed-calls, slow-response, scheduling, after-hours, staff-overload)
