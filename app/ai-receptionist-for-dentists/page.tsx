import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The AI Operating System for Dental Clinics | Vertical AI Platform',
  description:
    'Vertical AI platform for dental clinics: 5 AI employees — Receptionist, Appointment Optimizer, Follow-Up Agent, Lead Conversion Agent, Treatment Education. 24/7 automation. 10x–30x ROI.',
};

export default function AIReceptionistForDentistsPage() {
  const aiEmployees = [
    { name: 'AI Receptionist', desc: 'Answers calls and messages 24/7. Books appointments, answers FAQs, captures every inquiry.' },
    { name: 'AI Appointment Optimizer', desc: 'Fills schedule gaps, reduces no-shows with smart reminders, suggests optimal booking slots.' },
    { name: 'AI Patient Follow-Up Agent', desc: 'Follows up after visits, schedules recalls, keeps patients engaged between appointments.' },
    { name: 'AI Lead Conversion Agent', desc: 'Qualifies new inquiries, nurtures leads, converts website and social traffic into booked patients.' },
    { name: 'AI Treatment Education Assistant', desc: 'Explains procedures, pricing, and options. Reduces front-desk questions.' },
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero */}
      <header className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          The AI Operating System for Dental Clinics
        </h1>
        <p className="mt-6 text-xl text-slate-600">
          Five specialized AI employees that handle reception, scheduling, follow-ups, lead conversion, and patient education — so your clinic runs 24/7.
        </p>
        <p className="mt-3 text-lg font-medium text-slate-700">
          Built for dental practices that want to automate front desk and free staff for patient care.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/demo"
            className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Watch 2-Minute Demo
          </Link>
          <Link
            href="/#demo-form"
            className="rounded-xl border-2 border-slate-200 px-8 py-4 font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Book a 15-Minute Demo
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Works with: Phone • Website Chat • WhatsApp • SMS • Instagram • Practice Management
        </p>
      </header>

      {/* 5 AI Employees */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900">
          The Dental AI Suite
        </h2>
        <p className="mt-2 text-slate-600">
          Five AI employees working together as your digital workforce.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {aiEmployees.map((emp) => (
            <div key={emp.name} className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="font-semibold text-slate-900">{emp.name}</h3>
              <p className="mt-2 text-slate-600">{emp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900">
          Dental clinics lose thousands every month from missed calls
        </h2>
        <p className="mt-4 text-slate-600">
          When a patient calls and nobody answers, they call the next clinic.
        </p>
        <div className="mt-6 rounded-xl border-2 border-red-100 bg-red-50/50 p-6">
          <p className="font-semibold text-slate-900">Typical dental practice:</p>
          <ul className="mt-3 space-y-1 text-slate-700">
            <li>120 inquiries per month</li>
            <li>35 missed calls</li>
            <li>20 lost patients</li>
            <li>$250 average visit</li>
          </ul>
          <p className="mt-4 text-xl font-bold text-red-700">Lost revenue: $5,000+ per month</p>
        </div>
      </section>

      {/* ROI */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900">
          ROI Examples
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-semibold text-slate-900">Single-location practice</p>
            <p className="mt-2 text-slate-600">+15–25 extra bookings/month</p>
            <p className="mt-2 text-xl font-bold text-emerald-700">$3,750–$6,250 revenue</p>
            <p className="mt-1 text-sm text-slate-500">$299–$499 suite</p>
          </div>
          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
            <p className="font-semibold text-slate-900">With Dental AI Suite</p>
            <p className="mt-2 text-slate-600">0 missed inquiries, +15 extra bookings</p>
            <p className="mt-2 text-xl font-bold text-emerald-700">Extra revenue: $3,750/month</p>
            <p className="mt-2 text-2xl font-bold text-emerald-700">ROI: 10x – 30x</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 rounded-2xl border-2 border-slate-200 bg-slate-50 p-10 text-center">
        <h2 className="text-xl font-bold text-slate-900">Run your dental clinic on AI.</h2>
        <p className="mt-2 text-slate-600">Five AI employees. One platform. 15-minute demo. No pitch.</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/#demo-form" className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800">
            Book a Demo
          </Link>
          <Link href="/demo" className="rounded-xl border-2 border-slate-200 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100">
            Watch Demo
          </Link>
        </div>
      </section>

      {/* Internal links */}
      <nav className="mt-16 border-t border-slate-200 pt-8">
        <p className="font-medium text-slate-700">Also for:</p>
        <ul className="mt-2 space-y-1">
          <li><Link href="/ai-receptionist-for-med-spas" className="text-slate-900 underline">AI receptionist for med spas</Link></li>
          <li><Link href="/ai-receptionist-for-real-estate" className="text-slate-900 underline">AI receptionist for real estate</Link></li>
          <li><Link href="/ai-receptionist-for-home-services" className="text-slate-900 underline">AI receptionist for home services</Link></li>
          <li><Link href="/" className="text-slate-900 underline">Homepage</Link></li>
        </ul>
      </nav>
    </article>
  );
}
