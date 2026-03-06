'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';

const faqPairs = [
  ['q1', 'a1'],
  ['q2', 'a2'],
  ['q3', 'a3'],
  ['q4', 'a4'],
  ['q5', 'a5'],
] as const;

export function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t.faq.title}
        </h2>

        <div className="mt-12 space-y-4">
          {faqPairs.map(([qKey, aKey], i) => {
            const isOpen = open === i;
            return (
              <div
                key={qKey}
                className="rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-slate-900 hover:bg-slate-50"
                >
                  {t.faq[qKey]}
                  <svg
                    className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-4">
                    <p className="text-slate-600">{(t.faq as Record<string, string>)[aKey]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
