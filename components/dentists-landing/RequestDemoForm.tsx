'use client';

import { useState } from 'react';

const FORMSPREE_DEMO_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_DEMO_ENDPOINT || '';

type Props = {
  variant?: 'inline' | 'card';
};

export function RequestDemoForm({ variant = 'card' }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (FORMSPREE_DEMO_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_DEMO_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          setError('Something went wrong. Please try again or email us.');
        }
      } catch {
        setError('Something went wrong. Please try again or email us.');
      } finally {
        setLoading(false);
      }
    } else {
      // Fake door: validate intent without backend
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      setLoading(false);
      form.reset();
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-950/30">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
          <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-emerald-900 dark:text-emerald-100">
          You&apos;re on the list
        </h3>
        <p className="mt-2 text-emerald-800 dark:text-emerald-200">
          We&apos;ll be in touch soon to schedule your demo. Check your inbox.
        </p>
        <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
          Interested in seeing something specific? We&apos;ll tailor the call to your practice.
        </p>
      </div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-300">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="rd-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Name *
        </label>
        <input
          id="rd-name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="rd-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email *
        </label>
        <input
          id="rd-email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          placeholder="you@practice.com"
        />
      </div>
      <div>
        <label htmlFor="rd-practice" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Practice / clinic name
        </label>
        <input
          id="rd-practice"
          name="practice"
          type="text"
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          placeholder="Optional"
        />
      </div>
      <div>
        <label htmlFor="rd-want" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          What would you want to see in a demo?
        </label>
        <select
          id="rd-want"
          name="demo_interest"
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        >
          <option value="">Select (optional)</option>
          <option value="call-answering">Call answering & booking</option>
          <option value="multilingual">Multilingual / any language</option>
          <option value="insurance">Insurance Q&A</option>
          <option value="integration">CRM / PMS integration</option>
          <option value="full-walkthrough">Full product walkthrough</option>
        </select>
      </div>
      <input type="hidden" name="_subject" value="[Demo Request] AI Receptionist for Dentists" />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
      >
        {loading ? 'Submitting...' : 'Request Demo'}
      </button>
    </form>
  );

  if (variant === 'inline') {
    return <div className="max-w-md">{formContent}</div>;
  }

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-600 dark:bg-slate-800 sm:p-8">
      {formContent}
    </div>
  );
}
