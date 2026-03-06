'use client';

import Link from 'next/link';
import { geoContent } from '@/lib/geo-content';

export function ProductModules() {
  const { solution } = geoContent;
  return (
    <section id="product-modules" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Product Modules
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          Choose the automation you need. Each module is trained for your industry.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solution.modules.map((module) => (
            <div
              key={module.name}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{module.name}</h3>
              <p className="mt-2 text-slate-600">{module.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center">
          <Link href="/ai-receptionist" className="font-medium text-slate-900 underline hover:no-underline">
            Learn more about AI receptionist →
          </Link>
        </p>
      </div>
    </section>
  );
}
