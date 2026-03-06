/**
 * LinkedIn message templates and AI message generator.
 */

// ─── INITIAL OUTREACH (pick one) ───

export const TEMPLATE_1 = `Hi {{name}},

Quick question.

How many new patient calls does your clinic miss every week?

We built an AI receptionist that answers patient inquiries, books appointments, and follows up automatically.

Many clinics use it to capture after-hours inquiries.

If you're curious, here's a 2-min demo:

{{demo_link}}`;

export const TEMPLATE_2 = `Hi {{name}},

Noticed you're at {{clinic_name}}.

Dental clinics typically lose 30%+ of new patient calls to voicemail—that's $5K+ in lost revenue per month.

We built an AI receptionist that answers every inquiry 24/7 and books appointments automatically.

2-min demo if you're interested:

{{demo_link}}`;

export const TEMPLATE_3 = `Hi {{name}},

Hope you're doing well.

Quick one: does {{clinic_name}} capture after-hours patient inquiries, or do those go to voicemail?

We built an AI receptionist for dental clinics that answers, books, and follows up—24/7. A lot of practices use it to stop losing new patients to missed calls.

Demo here if useful:

{{demo_link}}`;

// ─── FOLLOW-UPS ───

export const FOLLOW_UP_1 = `Hi {{name}},

Just bumping this in case it got buried.

The 2-min demo shows exactly how the AI answers patient inquiries and books appointments:

{{demo_link}}

Worth a look if you're losing calls.`;

export const FOLLOW_UP_2 = `Hi {{name}},

Last one from me.

We're seeing dental practices recover $3K–5K/month in revenue by capturing every inquiry instead of voicemail.

If that's relevant for {{clinic_name}}, here's the demo:

{{demo_link}}

No pressure—happy to leave it there if the timing isn't right.`;

// ─── DEMO BOOKING ───

export const DEMO_BOOKING = `Hi {{name}},

Thanks for your interest.

To book a 15-min demo, pick a time here:

{{demo_form_link}}

We'll show you how the AI works for your clinic—no pitch, just a product walkthrough.

Looking forward to it.`;

/**
 * Replace placeholders in a template.
 */
import { config } from '../config.js';

export function fillTemplate(template, lead, extras = {}) {
  const demoLink = extras.demoLink || config.demoLink;
  const demoFormLink = extras.demoFormLink || config.demoFormLink;
  return template
    .replace(/\{\{name\}\}/g, lead.name?.split(' ')[0] || 'there')
    .replace(/\{\{clinic_name\}\}/g, lead.clinic_name || 'your clinic')
    .replace(/\{\{location\}\}/g, lead.location || '')
    .replace(/\{\{demo_link\}\}/g, demoLink)
    .replace(/\{\{demo_form_link\}\}/g, demoFormLink);
}

/**
 * Generate personalized message using template.
 */
export function generateMessage(lead, templateKey = 'template_1') {
  const templates = {
    template_1: TEMPLATE_1,
    template_2: TEMPLATE_2,
    template_3: TEMPLATE_3,
    follow_up_1: FOLLOW_UP_1,
    follow_up_2: FOLLOW_UP_2,
    demo_booking: DEMO_BOOKING,
  };
  const template = templates[templateKey] || TEMPLATE_1;
  return fillTemplate(template, lead);
}
