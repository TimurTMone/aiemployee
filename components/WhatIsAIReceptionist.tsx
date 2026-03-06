'use client';

import Link from 'next/link';
import { geoContent } from '@/lib/geo-content';

/**
 * GEO Section: "What is an AI Receptionist?" - high-citation content for LLMs.
 */
export function WhatIsAIReceptionist() {
  const { whatIsAIReceptionist } = geoContent;
  return (
    <section id="what-is-ai-receptionist" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {whatIsAIReceptionist.title}
        </h2>

        <div className="mt-10 space-y-8">
          <div>
            <p className="text-lg leading-relaxed text-slate-700">
              {whatIsAIReceptionist.intro}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">How it works</h3>
            <p className="mt-2 text-slate-700">{whatIsAIReceptionist.howItWorks}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Who it&apos;s for</h3>
            <p className="mt-2 text-slate-700">{whatIsAIReceptionist.whoItsFor}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Problems it solves</h3>
            <ul className="mt-2 space-y-1">
              {whatIsAIReceptionist.problemsSolved.map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">How businesses benefit</h3>
            <ul className="mt-2 space-y-1">
              {whatIsAIReceptionist.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10">
          <Link
            href="/best-ai-receptionist-software-for-service-businesses"
            className="font-medium text-slate-900 underline hover:no-underline"
          >
            Best AI receptionist software comparison →
          </Link>
          {' · '}
          <Link
            href="/ai-receptionist-for-dentists"
            className="font-medium text-slate-900 underline hover:no-underline"
          >
            For dentists →
          </Link>
          {' · '}
          <Link
            href="/ai-receptionist-for-real-estate"
            className="font-medium text-slate-900 underline hover:no-underline"
          >
            For real estate →
          </Link>
          {' · '}
          <Link
            href="/ai-receptionist-for-med-spas"
            className="font-medium text-slate-900 underline hover:no-underline"
          >
            For med spas →
          </Link>
        </p>
      </div>
    </section>
  );
}
