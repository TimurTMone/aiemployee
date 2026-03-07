'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Will this replace my staff?',
    a: 'No. It handles repetitive tasks—after-hours calls, first-line replies, booking, reminders—so your team can focus on in-person care and complex questions.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most clinics are live within a few days. We connect your phone and scheduling tool, train the system on your basics, and you go live.',
  },
  {
    q: 'Can it work with our current tools?',
    a: 'Yes. We integrate with common scheduling and practice-management tools. We’ll confirm compatibility on the demo.',
  },
  {
    q: 'Can we start small?',
    a: 'Yes. Many clinics start with after-hours and overflow only, then expand to full front-desk support when they’re ready.',
  },
  {
    q: 'Is patient data secure?',
    a: 'Yes. We follow standard security practices and do not train on your patient data. Conversations are used only to run the service.',
  },
];

export function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#fbfbfd] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          FAQ
        </h2>
        <div className="mt-14 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-slate-900 hover:bg-slate-50"
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-answer-${i}`}
                  id={`home-faq-question-${i}`}
                >
                  {item.q}
                  <svg
                    className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    id={`home-faq-answer-${i}`}
                    className="border-t border-slate-100 px-6 py-4 text-slate-700"
                    role="region"
                    aria-labelledby={`home-faq-question-${i}`}
                  >
                    {item.a}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
