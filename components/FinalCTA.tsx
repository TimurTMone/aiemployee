'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-slate-100 bg-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t.finalCta.title}
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          {t.finalCta.subheadline}
        </p>
        <Link
          href="#beta"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          {t.finalCta.cta}
        </Link>
      </div>
    </section>
  );
}
