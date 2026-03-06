'use client';

import { geoContent } from '@/lib/geo-content';

/**
 * GEO Section: Clear benefit bullets for AI citation.
 */
export function KeyBenefitsGEO() {
  const { keyBenefits } = geoContent;
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {keyBenefits.title}
        </h2>
        <ul className="mt-6 space-y-3">
          {keyBenefits.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
