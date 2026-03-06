'use client';

import { linkedinContent } from '@/lib/linkedin-content';

export function ProblemLinkedIn() {
  const { problem } = linkedinContent;

  return (
    <section id="problem" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {problem.title}
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          {problem.intro}
        </p>

        <div className="mt-10 rounded-xl border-2 border-red-100 bg-red-50/50 p-8">
          <p className="font-semibold text-slate-900">Typical dental practice:</p>
          <ul className="mt-4 space-y-1 text-slate-700">
            <li>• {problem.stats.inquiries}</li>
            <li>• {problem.stats.missed}</li>
            <li>• {problem.stats.lostPatients}</li>
            <li>• {problem.stats.avgVisit}</li>
          </ul>
          <p className="mt-6 text-xl font-bold text-red-700">
            Lost revenue: {problem.stats.lostRevenue}
          </p>
        </div>

        <p className="mt-8 text-lg text-slate-700">
          {problem.closer}
        </p>
      </div>
    </section>
  );
}
