'use client';

import Link from 'next/link';
import { linkedinContent } from '@/lib/linkedin-content';

export function PricingLinkedIn() {
  const { pricing } = linkedinContent;

  const tiers = [
    { ...pricing.starter, highlighted: false },
    { ...pricing.growth, highlighted: false },
    { ...pricing.dentalSuite, highlighted: true },
  ];

  return (
    <section id="pricing" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Pricing
        </h2>
        <p className="mt-4 text-center text-lg text-slate-600">
          Start with essentials or deploy the full Dental AI Suite.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border-2 p-6 ${
                tier.highlighted
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-slate-50/50'
              }`}
            >
              {tier.highlighted && (
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-semibold text-emerald-300">
                  Full suite
                </span>
              )}
              <h3 className={`mt-2 text-xl font-semibold ${tier.highlighted ? '' : 'text-slate-900'}`}>
                {tier.name}
              </h3>
              {tier.desc && (
                <p className={`mt-1 text-sm ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.desc}
                </p>
              )}
              <p className={`mt-2 text-3xl font-bold ${tier.highlighted ? '' : 'text-slate-900'}`}>
                {tier.price}
              </p>
              <p className={`mt-4 text-sm font-medium ${tier.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                Includes:
              </p>
              <ul className={`mt-2 space-y-1 ${tier.highlighted ? 'text-slate-200' : 'text-slate-700'}`}>
                {tier.includes.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
              <Link
                href="#demo-form"
                className={`mt-6 block w-full rounded-xl py-3 text-center font-semibold transition ${
                  tier.highlighted
                    ? 'border-2 border-white hover:bg-white hover:text-slate-900'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Book a Demo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
