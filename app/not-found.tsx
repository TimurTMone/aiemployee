import Link from 'next/link';
import { ErrorFeedbackForm } from '@/components/ErrorFeedbackForm';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We ship 24/7 and we&apos;re always improving—including here. This page might have moved or we&apos;re still building it.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
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
