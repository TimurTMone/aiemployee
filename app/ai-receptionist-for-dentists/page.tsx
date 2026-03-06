import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist for Dentists | 24/7 Patient Booking & Inquiry Response',
  description:
    'AI receptionist for dental practices: answer patient questions, book appointments, send reminders 24/7. Reduce missed calls, increase new patient bookings.',
};

export default function AIReceptionistForDentistsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        AI Receptionist for Dentists
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Dental practices lose 30% or more of new patient inquiries to missed calls and slow
        response. An AI receptionist for dentists answers patient questions, books
        appointments, sends reminders, and captures new patient leads 24/7—increasing
        bookings and reducing no-shows without adding staff.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">The Problem</h2>
      <p className="mt-3 text-slate-700">
        Front desks are overwhelmed. Calls go to voicemail. Patients message after hours
        and never hear back. New patient inquiries go cold. No-shows cost time and
        revenue.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">How It Works</h2>
      <p className="mt-3 text-slate-700">
        AI receptionist for dentists connects to your phone, website chat, and SMS. When
        a patient inquires about hours, services, or booking—day or night—the AI responds
        instantly, answers common questions, and books appointments into your calendar.
        Reminders are sent automatically.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Results</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>Higher booking rates—no inquiry goes unanswered</li>
        <li>Fewer no-shows with automated reminders</li>
        <li>Staff freed for in-chair patient care</li>
        <li>24/7 coverage without overtime</li>
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
            <Link href="/ai-receptionist-for-real-estate" className="text-slate-900 underline">
              AI receptionist for real estate
            </Link>
          </li>
          <li>
            <Link href="/ai-receptionist-for-med-spas" className="text-slate-900 underline">
              AI receptionist for med spas
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
        <p className="font-medium text-slate-900">Ready for your practice?</p>
        <Link href="/#demo-form" className="mt-2 inline-block font-medium text-slate-900 underline">
          Book a demo →
        </Link>
      </div>
    </article>
  );
}
