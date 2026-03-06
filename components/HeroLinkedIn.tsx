'use client';

import Link from 'next/link';
import { linkedinContent } from '@/lib/linkedin-content';

export function HeroLinkedIn() {
  const { hero } = linkedinContent;

  return (
    <section className="relative border-b border-slate-100 bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            {hero.subheadline}
          </p>
          <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg">
            {hero.value}
          </p>

          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="w-full rounded-xl bg-slate-900 px-8 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:bg-slate-800 sm:w-auto"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="#demo-form"
              className="w-full rounded-xl border-2 border-slate-200 px-8 py-4 text-center text-base font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              {hero.ctaSecondary}
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            {hero.trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}
