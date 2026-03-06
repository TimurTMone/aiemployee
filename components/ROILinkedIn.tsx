'use client';

import Link from 'next/link';
import { linkedinContent } from '@/lib/linkedin-content';

export function ROILinkedIn() {
  const { roi } = linkedinContent;

  return (
    <section id="roi" className="border-b border-slate-100 bg-emerald-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {roi.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          {roi.intro}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {roi.examples.map((ex, i) => (
            <div
              key={ex.label}
              className="rounded-xl border-2 border-emerald-200 bg-white p-6"
            >
              <p className="font-semibold text-slate-900">{ex.label}</p>
              <p className="mt-2 text-slate-600">{ex.metrics}</p>
              <p className="mt-2 text-xl font-bold text-emerald-700">{ex.revenue}</p>
              <p className="mt-1 text-sm text-slate-500">{ex.cost}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-center font-semibold text-slate-900">Typical single-location ROI</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm text-red-600">Without AI:</p>
              <p className="mt-1 text-slate-700">{roi.legacyStats.withoutAI.missed}</p>
              <p className="text-slate-700">{roi.legacyStats.withoutAI.lostPatients}</p>
            </div>
            <div>
              <p className="text-sm text-emerald-600">With AI suite:</p>
              <p className="mt-1 text-slate-700">{roi.legacyStats.withAI.missed}</p>
              <p className="text-slate-700">{roi.legacyStats.withAI.extraBookings}</p>
              <p className="mt-2 text-lg font-bold text-emerald-700">ROI: {roi.legacyStats.roi}</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center">
          <Link
            href="#demo-form"
            className="font-semibold text-slate-900 underline hover:no-underline"
          >
            Book a demo to see your ROI →
          </Link>
        </p>
      </div>
    </section>
  );
}
