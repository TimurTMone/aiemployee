'use client';

import { useLanguage } from './LanguageProvider';

const metricKeys = ['instant', 'capture', 'reduce', 'lower', 'booking'] as const;

export function ROI() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.roi.title}
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {metricKeys.map((key) => (
            <div
              key={key}
              className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-4 text-center"
            >
              <p className="font-medium text-slate-800">
                {t.roi.metrics[key]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border-2 border-slate-200 bg-slate-50/50 p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-slate-900">
            {t.roi.example.title}
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-slate-500">Before</p>
              <p className="mt-1 text-slate-700">{t.roi.example.before}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-emerald-600">With AI Employees</p>
              <p className="mt-1 text-slate-700">{t.roi.example.after}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
