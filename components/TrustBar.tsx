'use client';

import Link from 'next/link';
import { geoContent } from '@/lib/geo-content';

export function TrustBar() {
  const { trustBar } = geoContent;
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-600">
          {trustBar.title}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-500">
          <span>{trustBar.stat1}</span>
          <span>{trustBar.stat2}</span>
          <span>{trustBar.stat3}</span>
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">
          {trustBar.channels}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-50">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex h-10 w-24 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400"
            >
              Partner
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
