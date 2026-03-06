'use client';

import { useLanguage } from './LanguageProvider';

export function Channels() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-slate-100 bg-white py-8">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-slate-500">
          {t.channels}
        </p>
      </div>
    </section>
  );
}
