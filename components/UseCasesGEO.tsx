'use client';

import { geoContent } from '@/lib/geo-content';

export function UseCasesGEO() {
  const { useCases } = geoContent;
  return (
    <section id="use-cases" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {useCases.title}
        </h2>

        <div className="mt-16 space-y-8">
          {useCases.items.map((item) => (
            <article
              key={item.industry}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.industry}</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">Problem</p>
                  <p className="mt-1 text-slate-700">{item.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Solution</p>
                  <p className="mt-1 text-slate-700">{item.solution}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-600">Result</p>
                  <p className="mt-1 text-slate-700">{item.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
