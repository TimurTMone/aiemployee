import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';
import { ChatWidget } from '@/components/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Receptionist for Dental Clinics | Stop Losing Patients After Hours',
  description:
    'AI front desk for dental clinics: answer missed calls, book more patients, reduce no-shows, save front-desk time. Book a 15-minute demo.',
  keywords: [
    'AI receptionist for dental clinics',
    'dental AI receptionist',
    'dental appointment booking AI',
    'dental clinic automation',
    'AI for dental front desk',
  ],
  openGraph: {
    title: 'AI Receptionist for Dental Clinics | Stop Losing Patients After Hours',
    description:
      'Your AI front desk answers calls and messages, books appointments, and follows up with leads 24/7. Book a demo.',
    type: 'website',
    url: 'https://aiemployee-alpha.vercel.app',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Employees - AI receptionist for dental clinics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Receptionist for Dental Clinics | Stop Losing Patients After Hours',
    description: 'AI front desk for dental clinics. Answer missed calls, book more patients. Book a demo.',
  },
  metadataBase: new URL('https://aiemployee-alpha.vercel.app'),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI Employees',
      url: 'https://aiemployee-alpha.vercel.app',
      description: 'AI front desk for dental clinics. Answer missed calls, book more patients, reduce no-shows, save front-desk time.',
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <a
          href="#main"
          className="absolute left-[-9999px] top-4 z-[100] rounded bg-slate-900 px-4 py-2 text-white transition focus:left-4 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to content
        </a>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <LanguageProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
