'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';

const TIERS = [
  {
    name: 'Starter',
    forWho: 'Best for clinics that want 24/7 reply and lead capture.',
    solves: 'Never miss an after-hours inquiry. Every call and message gets a response.',
    includes: ['24/7 answer for calls and messages', 'Lead capture and qualification', 'Sync with your scheduling tool'],
  },
  {
    name: 'Growth',
    forWho: 'Best for clinics that want phone + booking automation.',
    solves: 'Reduce front-desk load. Let the AI book appointments and send reminders.',
    includes: ['Everything in Starter', 'Appointment booking', 'Reminders and follow-ups', 'Fewer no-shows'],
  },
  {
    name: 'Full Suite',
    forWho: 'Best for clinics that want front-desk automation, follow-up, reminders, and lead conversion.',
    solves: 'Full coverage: answer, book, remind, follow up, and re-engage canceled or missed patients.',
    includes: ['Everything in Growth', 'Lead follow-up and nurturing', 'Re-engage canceled / no-show patients', 'Common treatment Q&A'],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="pricing-heading" className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Pricing
        </h2>
        <p className="mt-4 text-center text-lg text-slate-600">
          Simple, outcome-based tiers. We’ll show exact numbers on the demo.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 ${
                i === 1
                  ? 'border-slate-900 bg-slate-900 text-white shadow-lg'
                  : 'border-slate-200 bg-[#fbfbfd]'
              }`}
            >
              <h3 className={`text-lg font-semibold ${i === 1 ? '' : 'text-slate-900'}`}>{tier.name}</h3>
              <p className={`mt-2 text-sm ${i === 1 ? 'text-slate-300' : 'text-slate-600'}`}>{tier.forWho}</p>
              <p className={`mt-3 ${i === 1 ? 'text-slate-200' : 'text-slate-700'}`}>{tier.solves}</p>
              <p className={`mt-4 text-sm font-medium ${i === 1 ? 'text-slate-300' : 'text-slate-600'}`}>Includes:</p>
              <ul className={`mt-2 space-y-1 text-sm ${i === 1 ? 'text-slate-200' : 'text-slate-700'}`}>
                {tier.includes.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
              <Link
                href="#demo-form"
                className={`mt-6 block w-full rounded-xl py-3 text-center font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  i === 1
                    ? 'bg-white text-slate-900 hover:bg-slate-100 focus-visible:outline-white'
                    : 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900'
                }`}
                onClick={() => track('pricing_cta_click', { tier: tier.name })}
              >
                Book a demo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
