'use client';

import { linkedinContent } from '@/lib/linkedin-content';

export function TrustBar() {
  const { hero } = linkedinContent;
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-600">
          {hero.trustLine}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-8 opacity-50">
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
