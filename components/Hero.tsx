'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative border-b border-slate-100 bg-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            {t.hero.subheadline}
          </p>
          <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg">
            {t.hero.value}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#beta"
              className="w-full rounded-xl bg-slate-900 px-8 py-4 text-center text-base font-semibold text-white shadow-lg transition hover:bg-slate-800 sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="#how-it-works"
              className="w-full rounded-xl border-2 border-slate-200 px-8 py-4 text-center text-base font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t.hero.trust1}
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t.hero.trust2}
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t.hero.trust3}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
