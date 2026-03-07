import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | AI Employees',
  description: 'Contact AI Employees.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Contact</h1>
      <p className="mt-4 text-slate-600">
        For demo requests, use the form on the homepage. For other inquiries, add your contact details here.
      </p>
      <p className="mt-6">
        <Link href="/#demo-form" className="font-medium text-slate-900 underline hover:no-underline">
          Book a demo →
        </Link>
      </p>
      <p className="mt-4">
        <Link href="/" className="font-medium text-slate-900 underline hover:no-underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
