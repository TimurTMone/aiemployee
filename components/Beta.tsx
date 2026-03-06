'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';

export function Beta() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section id="beta" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-slate-200 bg-slate-50/50 p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t.beta.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {t.beta.intro}
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-900">
                {t.beta.benefits.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  t.beta.benefits.item1,
                  t.beta.benefits.item2,
                  t.beta.benefits.item3,
                  t.beta.benefits.item4,
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-1">
                <p className="text-slate-500 line-through">{t.beta.pricing.regular}</p>
                <p className="text-xl font-semibold text-slate-900">{t.beta.pricing.beta}</p>
                <p className="text-sm text-slate-500">{t.beta.pricing.limited}</p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <p className="font-medium text-emerald-800">{t.beta.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      {t.beta.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      {t.beta.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                      {t.beta.form.company}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-700">
                      {t.beta.form.industry}
                    </label>
                    <input
                      id="industry"
                      name="industry"
                      type="text"
                      placeholder="e.g. Dental, Real Estate, Med Spa"
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium text-slate-700">
                      {t.beta.form.teamSize}
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
                    >
                      <option value="">Select</option>
                      <option value="1-5">1–5</option>
                      <option value="6-20">6–20</option>
                      <option value="21-50">21–50</option>
                      <option value="51-200">51–200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {t.beta.form.submit}
                      </span>
                    ) : (
                      t.beta.form.submit
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
