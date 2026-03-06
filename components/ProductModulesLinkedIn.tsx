'use client';

import { linkedinContent } from '@/lib/linkedin-content';

export function ProductModulesLinkedIn() {
  const { modules } = linkedinContent;

  return (
    <section id="product-modules" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Product Modules
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">{mod.name}</h3>
              <p className="mt-2 text-slate-600">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
