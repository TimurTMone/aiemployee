'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'What is an AI receptionist for dentists?',
    a: 'An AI receptionist for dental clinics answers calls 24/7, books appointments, answers common questions (including insurance), and captures new patient inquiries—so you never miss a call and can convert more leads into booked patients.',
  },
  {
    q: 'Does it work with our practice management software?',
    a: 'Yes. Our AI receptionist integrates with popular dental CRMs and practice management systems so appointments and patient data sync automatically.',
  },
  {
    q: 'Can it handle insurance questions?',
    a: 'Yes. The AI can answer common insurance and coverage questions and direct complex cases to your team.',
  },
  {
    q: 'What languages are supported?',
    a: 'We support multiple languages so you can serve a diverse patient base. Common languages include English, Spanish, and others—ask us for your practice’s needs.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'Most practices are live within a few days. We handle setup, training, and integration so your team can focus on patient care.',
  },
  {
    q: 'Is pricing available on the website?',
    a: 'Pricing is tailored to practice size and volume. Request a demo and we’ll show you options and ROI for your clinic.',
  },
];

export function DentistsFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-slate-200/80 bg-white py-20 sm:py-28 dark:border-slate-700/50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-center text-lg text-slate-600 dark:text-slate-400">
          Everything you need to know about our AI receptionist for dental clinics.
        </p>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <article
                key={i}
                className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-slate-900 hover:bg-slate-50 dark:text-white dark:hover:bg-slate-800/50"
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
                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-700 dark:bg-slate-800/30">
                    <p className="text-slate-700 dark:text-slate-300">{item.a}</p>
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
