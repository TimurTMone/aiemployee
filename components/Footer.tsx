'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname() ?? '';
  const isHome = pathname === '/';

  if (isHome) {
    return (
      <footer className="bg-slate-900 text-slate-400" role="contentinfo">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="font-semibold text-white">
              AI Employees
            </Link>
            <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            We do not train on your patient data. Conversations are processed to run the service and are not used to train general-purpose models.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            © {new Date().getFullYear()} AI Employees. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-slate-900 py-12 text-slate-400" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="font-semibold text-white">
            AI Employees
          </Link>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/ai-receptionist-for-dentists" className="hover:text-white">For Dentists</Link>
            <Link href="#pricing" className="hover:text-white">Pricing</Link>
            <Link href="/demo" className="hover:text-white">Watch Demo</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} AI Employees. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
