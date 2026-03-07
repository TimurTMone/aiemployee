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
      <div className="rounded-3xl bg-emerald-50 p-8 text-center dark:bg-emerald-950/30">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
          <svg className="h-7 w-7 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-emerald-900 dark:text-emerald-100">
          You&apos;re on the list.
        </h3>
        <p className="apple-body mt-2 text-emerald-800 dark:text-emerald-200">
          We&apos;ll be in touch soon to schedule your demo. Check your inbox.
        </p>
        <p className="mt-5 text-sm text-emerald-600 dark:text-emerald-400">
          Interested in seeing something specific? We&apos;ll tailor the call to your practice.
        </p>
      </div>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Request a demo">
      {error && (
        <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300" role="alert">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="rd-name" className="block text-sm font-medium text-slate-300">
          Name *
        </label>
        <input
          id="rd-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-xl border-0 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="rd-email" className="block text-sm font-medium text-slate-300">
          Email *
        </label>
        <input
          id="rd-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-xl border-0 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          placeholder="you@practice.com"
        />
      </div>
      <div>
        <label htmlFor="rd-practice" className="block text-sm font-medium text-slate-300">
          Practice / clinic name
        </label>
        <input
          id="rd-practice"
          name="practice"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-xl border-0 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          placeholder="Optional"
        />
      </div>
      <div>
        <label htmlFor="rd-want" className="block text-sm font-medium text-slate-300">
          What would you want to see in a demo?
        </label>
        <select
          id="rd-want"
          name="demo_interest"
          className="mt-2 w-full rounded-xl border-0 bg-white/10 px-4 py-3.5 text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black [&>option]:text-slate-900"
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
        className="w-full rounded-full bg-white py-4 font-semibold text-black transition hover:bg-slate-100 disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {loading ? 'Submitting...' : 'Request Demo'}
      </button>
    </form>
  );

  if (variant === 'inline') {
    return <div className="max-w-md">{formContent}</div>;
  }

  return (
    <div className="mx-auto max-w-lg rounded-3xl bg-white/5 p-6 backdrop-blur sm:p-8">
      {formContent}
    </div>
  );
}
