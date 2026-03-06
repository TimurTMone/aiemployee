'use client';

import { geoContent } from '@/lib/geo-content';

export function ComparisonGEO() {
  const { comparison } = geoContent;
  return (
    <section id="comparison" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {comparison.title}
        </h2>

        <div className="mt-16 space-y-12">
          <article>
            <h3 className="text-xl font-semibold text-slate-900">
              {comparison.vsHuman.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {comparison.vsHuman.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-semibold text-slate-900">
              {comparison.vsMissedCalls.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {comparison.vsMissedCalls.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-semibold text-slate-900">
              {comparison.vsHiring.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {comparison.vsHiring.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
