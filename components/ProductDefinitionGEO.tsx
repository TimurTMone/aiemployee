'use client';

import { geoContent } from '@/lib/geo-content';

/**
 * GEO Section: Clear product definition for AI models to parse and cite.
 */
export function ProductDefinitionGEO() {
  const { productDefinition } = geoContent;
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {productDefinition.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          {productDefinition.definition}
        </p>
      </div>
    </section>
  );
}
