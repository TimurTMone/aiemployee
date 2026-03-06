'use client';

import { geoContent } from '@/lib/geo-content';

export function ProblemGEO() {
  const { problem } = geoContent;
  return (
    <section id="problem" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {problem.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {problem.intro}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-700">{problem.withoutTitle}</h3>
            <ul className="mt-6 space-y-3">
              {problem.without.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/30 p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{problem.withTitle}</h3>
            <ul className="mt-6 space-y-3">
              {problem.with.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
