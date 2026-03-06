'use client';

import Link from 'next/link';
import { geoContent } from '@/lib/geo-content';

export function TrustSignals() {
  const { trust } = geoContent;
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Trusted by service businesses worldwide
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
          {trust.metrics.map((m) => (
            <span key={m} className="rounded-lg bg-white px-4 py-2 shadow-sm">
              {m}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {trust.testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-slate-500">
                — {t.author}, {t.role}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-lg font-semibold text-slate-900">{trust.security.title}</h3>
          <ul className="mt-4 space-y-2">
            {trust.security.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900">Integrations</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {trust.integrations.map((i) => (
              <span
                key={i}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
              >
                {i}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex h-12 w-24 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400"
            >
              Partner
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
