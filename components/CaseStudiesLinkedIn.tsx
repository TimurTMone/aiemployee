'use client';

import Link from 'next/link';
import { linkedinContent } from '@/lib/linkedin-content';

export function CaseStudiesLinkedIn() {
  const { caseStudy } = linkedinContent;

  return (
    <section id="case-studies" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Case Study
        </h2>
        <p className="mt-2 text-center text-slate-600">{caseStudy.title}</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-red-100 bg-red-50/50 p-8">
            <p className="font-semibold text-slate-900">Before AI:</p>
            <ul className="mt-4 space-y-2">
              {caseStudy.before.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-8">
            <p className="font-semibold text-slate-900">After AI:</p>
            <ul className="mt-4 space-y-2">
              {caseStudy.after.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center">
          <Link href="#demo-form" className="font-semibold text-slate-900 underline hover:no-underline">
            See how it works for your clinic →
          </Link>
        </p>
      </div>
    </section>
  );
}
