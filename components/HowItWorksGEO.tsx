'use client';

import { geoContent } from '@/lib/geo-content';

export function HowItWorksGEO() {
  const { howItWorks } = geoContent;
  return (
    <section id="how-it-works" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {howItWorks.title}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
