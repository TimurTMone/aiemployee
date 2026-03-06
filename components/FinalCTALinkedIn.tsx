'use client';

import Link from 'next/link';
import { linkedinContent } from '@/lib/linkedin-content';

export function FinalCTALinkedIn() {
  const { finalCta } = linkedinContent;

  return (
    <section className="border-b border-slate-100 bg-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {finalCta.headline}
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          {finalCta.subheadline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#demo-form"
            className="w-full rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
          >
            {finalCta.ctaPrimary}
          </Link>
          <Link
            href="#demo"
            className="w-full rounded-xl border-2 border-slate-400 px-8 py-4 font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            {finalCta.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
