'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ErrorFeedbackForm } from '@/components/ErrorFeedbackForm';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We ship 24/7 and we&apos;re always improving—including here. We&apos;re on it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="w-full rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            Try again
          </button>
          <Link
            href="/"
            className="w-full rounded-xl border-2 border-slate-200 px-6 py-3 text-center font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-white sm:w-auto"
          >
            Back to homepage
          </Link>
        </div>

        <div className="mt-16 rounded-2xl border-2 border-emerald-200 bg-white p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Got a $1B idea we should build ASAP?
          </h2>
          <p className="mt-2 text-slate-600">
            We&apos;re always improving. Tell us what you need—we read every response.
          </p>
          <ErrorFeedbackForm />
        </div>
      </div>
    </div>
  );
}
