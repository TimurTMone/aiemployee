'use client';

import Link from 'next/link';
import { linkedinContent } from '@/lib/linkedin-content';

export function ICPSection() {
  const { icp } = linkedinContent;

  return (
    <section id="use-cases" className="border-b border-slate-100 bg-slate-50/50 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-600">
          Vertical AI platform for
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/ai-receptionist-for-dentists"
            className="rounded-xl border-2 border-slate-900 bg-white px-6 py-3 font-semibold text-slate-900 shadow-sm"
          >
            {icp.primary}
          </Link>
          <Link href="/ai-receptionist-for-med-spas" className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 transition hover:border-slate-300">
            Med Spa
          </Link>
          <Link href="/ai-receptionist-for-real-estate" className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 transition hover:border-slate-300">
            Real Estate
          </Link>
          <Link href="/ai-receptionist-for-home-services" className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-medium text-slate-700 transition hover:border-slate-300">
            Home Services
          </Link>
        </div>
      </div>
    </section>
  );
}
