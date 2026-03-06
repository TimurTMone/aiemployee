'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="font-semibold text-white">
            AI Employees
          </Link>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="#solution" className="hover:text-white">{t.footer.product}</Link>
            <Link href="#use-cases" className="hover:text-white">{t.footer.industries}</Link>
            <Link href="#pricing" className="hover:text-white">{t.footer.pricing}</Link>
            <Link href="/ai-receptionist" className="hover:text-white">AI Receptionist</Link>
            <Link href="/ai-receptionist-for-dentists" className="hover:text-white">For Dentists</Link>
            <Link href="/ai-receptionist-for-real-estate" className="hover:text-white">For Real Estate</Link>
            <Link href="/ai-receptionist-for-med-spas" className="hover:text-white">For Med Spas</Link>
            <Link href="/best-ai-receptionist" className="hover:text-white">Best AI Receptionist</Link>
            <Link href="/best-ai-receptionist-software-for-service-businesses" className="hover:text-white">Comparison Guide</Link>
            <Link href="/how-ai-receptionists-work" className="hover:text-white">How It Works</Link>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
