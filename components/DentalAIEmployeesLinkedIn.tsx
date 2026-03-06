'use client';

import { linkedinContent } from '@/lib/linkedin-content';

const icons: Record<string, string> = {
  phone: '📞',
  calendar: '📅',
  chat: '💬',
  conversion: '🎯',
  book: '📖',
};

export function DentalAIEmployeesLinkedIn() {
  const { aiEmployees } = linkedinContent;

  return (
    <section id="ai-employees" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Dental AI Suite
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Five specialized AI employees working together as your digital workforce.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiEmployees.slice(0, 3).map((emp) => (
            <div
              key={emp.name}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <span className="text-2xl">{icons[emp.icon] || '•'}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{emp.name}</h3>
              <p className="mt-2 text-slate-600">{emp.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {aiEmployees.slice(3, 5).map((emp) => (
            <div
              key={emp.name}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <span className="text-2xl">{icons[emp.icon] || '•'}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{emp.name}</h3>
              <p className="mt-2 text-slate-600">{emp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
