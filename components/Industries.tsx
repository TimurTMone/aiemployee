'use client';

import { useLanguage } from './LanguageProvider';

const industryKeys = ['dentist', 'realEstate', 'medspa', 'homeServices', 'ecommerce'] as const;

export function Industries() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.industries.title}
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          {industryKeys.map((key) => {
            const industry = t.industries[key];
            return (
              <div
                key={key}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {industry.title}
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Problem
                    </p>
                    <p className="mt-1 text-slate-700">{industry.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Solution
                    </p>
                    <p className="mt-1 text-slate-700">{industry.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-emerald-600">
                      Result
                    </p>
                    <p className="mt-1 text-slate-700">{industry.result}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
