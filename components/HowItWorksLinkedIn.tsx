'use client';

import { linkedinContent } from '@/lib/linkedin-content';

export function HowItWorksLinkedIn() {
  const { howItWorks } = linkedinContent;

  return (
    <section id="how-it-works" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {howItWorks.title}
        </h2>

        <div className="mt-16 space-y-12">
          {howItWorks.steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                {step.channels ? (
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    Channels supported: {step.channels.join(', ')}
                  </p>
                ) : null}
                {step.questions ? (
                  <>
                    <p className="mt-2 text-sm text-slate-600">Patients ask questions like:</p>
                    <ul className="mt-1 space-y-0.5 text-slate-600">
                      {step.questions.map((q) => (
                        <li key={q}>• {q}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {step.items ? (
                  <p className="mt-2 text-sm text-slate-600">
                    AI sends: {step.items.join(', ')}
                  </p>
                ) : null}
                {step.desc ? <p className="mt-2 text-slate-700">{step.desc}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
