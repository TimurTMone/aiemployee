import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Employees',
  description: 'Privacy policy for AI Employees.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-slate-600">
        This page will contain the full privacy policy. Update it with your legal text.
      </p>
      <p className="mt-6">
        <Link href="/" className="font-medium text-slate-900 underline hover:no-underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
