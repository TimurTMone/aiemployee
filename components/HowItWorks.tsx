'use client';

import { useLanguage } from './LanguageProvider';

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { num: 1, title: t.howItWorks.step1.title, desc: t.howItWorks.step1.desc },
    { num: 2, title: t.howItWorks.step2.title, desc: t.howItWorks.step2.desc },
    { num: 3, title: t.howItWorks.step3.title, desc: t.howItWorks.step3.desc },
  ];

  return (
    <section id="how-it-works" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.howItWorks.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col items-center text-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white">
                {step.num}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
