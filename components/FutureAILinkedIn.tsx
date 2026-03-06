'use client';

import { linkedinContent } from '@/lib/linkedin-content';

export function FutureAILinkedIn() {
  const { futureAI } = linkedinContent;

  return (
    <section id="future-ai" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {futureAI.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          {futureAI.intro}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {futureAI.upcoming.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
