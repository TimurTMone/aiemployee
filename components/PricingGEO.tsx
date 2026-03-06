'use client';

import Link from 'next/link';
import { geoContent } from '@/lib/geo-content';

export function PricingGEO() {
  const { pricing } = geoContent;
  return (
    <section id="pricing" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {pricing.title}
        </h2>
        <p className="mt-2 text-center text-slate-600">{pricing.betaTitle}</p>

        <div className="mt-12 rounded-2xl border-2 border-slate-200 bg-slate-50/50 p-8 sm:p-12">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div>
              <p className="text-slate-500 line-through">{pricing.regular}</p>
              <p className="text-3xl font-bold text-slate-900">{pricing.beta}</p>
              <p className="mt-1 text-sm text-slate-500">{pricing.betaNote}</p>
              <ul className="mt-6 space-y-2">
                {pricing.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="#demo-form"
                className="rounded-xl bg-slate-900 px-8 py-4 text-center font-semibold text-white transition hover:bg-slate-800"
              >
                {pricing.cta}
              </Link>
              <Link
                href="#demo-form"
                className="rounded-xl border-2 border-slate-200 px-8 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
