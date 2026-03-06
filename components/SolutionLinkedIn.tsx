'use client';

import { linkedinContent } from '@/lib/linkedin-content';

export function SolutionLinkedIn() {
  const { solution } = linkedinContent;

  return (
    <section id="solution" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {solution.title}
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          {solution.intro}
        </p>
        <p className="mt-6 font-medium text-slate-700">It can:</p>
        <ul className="mt-3 space-y-2">
          {solution.capabilities.map((cap) => (
            <li key={cap} className="flex items-center gap-2 text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {cap}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-lg font-semibold text-slate-900">
          {solution.closer}
        </p>
      </div>
    </section>
  );
}
