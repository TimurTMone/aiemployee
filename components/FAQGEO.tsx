'use client';

import { useState } from 'react';
import { geoContent } from '@/lib/geo-content';

/**
 * GEO Section: FAQ with comprehensive answers for AI citation.
 * Answers are visible by default for crawler and LLM visibility.
 */
export function FAQGEO() {
  const { faq } = geoContent;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <article key={i} className="rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-slate-900 hover:bg-slate-50"
                >
                  {item.q}
                  <svg
                    className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`border-t border-slate-100 bg-slate-50/50 px-6 py-4 ${isOpen ? '' : 'hidden'}`}
                >
                  <p className="text-slate-700">{item.a}</p>
                </div>
                {/* Visible fallback for crawlers: render answer in noscript or as data for schema */}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
