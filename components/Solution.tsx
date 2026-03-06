'use client';

import { useLanguage } from './LanguageProvider';

const roleKeys = ['receptionist', 'booking', 'qualifier', 'support', 'followup'] as const;

export function Solution() {
  const { t } = useLanguage();

  return (
    <section id="solution" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.solution.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t.solution.intro}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roleKeys.map((key) => (
            <div
              key={key}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {t.solution.roles[key].name}
              </h3>
              <p className="mt-2 text-slate-600">
                {t.solution.roles[key].desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
