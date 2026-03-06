import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist for Med Spas | Consultation Booking & Inquiry Response',
  description:
    'AI receptionist for med spas: handle consultations, book sessions, follow up automatically. More appointments, reduced admin burden.',
};

export default function AIReceptionistForMedSpasPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        AI Receptionist for Med Spas
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Med spas face inquiry spikes and booking bottlenecks. An AI receptionist for med
        spas handles consultations, books sessions, and follows up automatically—so you
        book more appointments without adding front desk staff.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">The Problem</h2>
      <p className="mt-3 text-slate-700">
        High inquiry volume. Limited front desk capacity. Consultation requests pile up.
        No after-hours booking. Lost revenue from unreturned messages.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">How It Works</h2>
      <p className="mt-3 text-slate-700">
        AI booking assistant connects to your website chat, SMS, and phone. It answers
        service questions, conducts initial consultations, books sessions into your
        calendar, and follows up on abandoned inquiries. Staff focuses on in-person
        treatments.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Results</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>More appointments booked</li>
        <li>Reduced admin burden</li>
        <li>24/7 inquiry capture</li>
        <li>Consistent follow-up on leads</li>
      </ul>

      <nav className="mt-12 border-t border-slate-200 pt-8">
        <p className="font-medium text-slate-700">Related:</p>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href="/ai-receptionist" className="text-slate-900 underline">
              What is an AI receptionist?
            </Link>
          </li>
          <li>
            <Link href="/ai-receptionist-for-dentists" className="text-slate-900 underline">
              AI receptionist for dentists
            </Link>
          </li>
          <li>
            <Link href="/ai-receptionist-for-real-estate" className="text-slate-900 underline">
              AI receptionist for real estate
            </Link>
          </li>
          <li>
            <Link href="/" className="text-slate-900 underline">
              AI Employees homepage
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-12 rounded-xl bg-slate-100 p-6">
        <p className="font-medium text-slate-900">Ready for your med spa?</p>
        <Link href="/#demo-form" className="mt-2 inline-block font-medium text-slate-900 underline">
          Book a demo →
        </Link>
      </div>
    </article>
  );
}
