'use client';

import { linkedinContent } from '@/lib/linkedin-content';

export function AutomationWorkflowsLinkedIn() {
  const { automationWorkflows } = linkedinContent;

  return (
    <section id="automation-workflows" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {automationWorkflows.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          {automationWorkflows.intro}
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {automationWorkflows.workflows.map((wf) => (
            <div
              key={wf.name}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <h3 className="font-semibold text-slate-900">{wf.name}</h3>
              <ul className="mt-4 space-y-2">
                {wf.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 shrink-0 text-emerald-500">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
