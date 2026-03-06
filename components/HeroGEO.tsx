'use client';

import Link from 'next/link';
import { geoContent } from '@/lib/geo-content';

export function HeroGEO() {
  const { hero } = geoContent;
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
              href="#pricing"
              className="w-full rounded-xl bg-slate-900 px-6 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:bg-slate-800 sm:w-auto"
            >
              {hero.ctaBookDemo}
            </Link>
            <Link
              href="#pricing"
              className="w-full rounded-xl border-2 border-slate-200 px-6 py-4 text-center text-base font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              {hero.ctaJoinBeta}
            </Link>
            <Link
              href="#how-it-works"
              className="w-full rounded-xl border-2 border-slate-200 px-6 py-4 text-center text-base font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              {hero.ctaSeeHow}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
