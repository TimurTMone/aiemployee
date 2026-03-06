'use client';

import Link from 'next/link';
import { linkedinContent } from '@/lib/linkedin-content';

export function IntegrationsLinkedIn() {
  const { integrations } = linkedinContent;

  return (
    <section id="integrations" className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Integrations
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {integrations.items.map((item) => (
            <span key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-center text-lg font-semibold text-slate-900">Security</h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-4">
            {linkedinContent.security.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center">
          <Link href="#demo-form" className="text-sm font-medium text-slate-600 underline hover:text-slate-900">
            Ask about your stack →
          </Link>
        </p>
      </div>
    </section>
  );
}
