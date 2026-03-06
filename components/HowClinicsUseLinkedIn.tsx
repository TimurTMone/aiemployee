'use client';

import { linkedinContent } from '@/lib/linkedin-content';

export function HowClinicsUseLinkedIn() {
  const { howClinicsUse } = linkedinContent;

  return (
    <section id="how-clinics-use" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {howClinicsUse.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          {howClinicsUse.intro}
        </p>

        <div className="mt-12 space-y-6">
          {howClinicsUse.useCases.map((uc, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <p className="font-semibold text-slate-900">{uc.scenario}</p>
              <p className="mt-2 text-slate-600">
                <span className="text-emerald-600">→</span> {uc.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
