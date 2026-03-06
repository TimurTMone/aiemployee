'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#" className="font-semibold text-white">
            AI Employees
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="#solution" className="hover:text-white">
              {t.footer.product}
            </Link>
            <Link href="#industries" className="hover:text-white">
              {t.footer.industries}
            </Link>
            <Link href="#beta" className="hover:text-white">
              {t.footer.pricing}
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
