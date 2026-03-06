'use client';

import { useLanguage } from './LanguageProvider';

export function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-700">
            {t.socialProof.title}
          </h3>
          <p className="mt-2 text-slate-600">
            {t.socialProof.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex h-12 w-24 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400"
              >
                Logo
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
