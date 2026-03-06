'use client';

import { geoContent } from '@/lib/geo-content';

export function ROIGEO() {
  const { roi } = geoContent;
  return (
    <section id="roi" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {roi.title}
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {roi.metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800"
            >
              {metric}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border-2 border-slate-200 bg-white p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-slate-900">{roi.example.title}</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-slate-500">Before</p>
              <p className="mt-1 text-slate-700">{roi.example.before}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-emerald-600">With AI Employees</p>
              <p className="mt-1 text-slate-700">{roi.example.after}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
