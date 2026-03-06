import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'AI Employees | Hire Digital Employees That Work 24/7 | AI Receptionist, Automation',
  description:
    'Deploy trained digital staff that answer customers, book appointments, qualify leads, and complete operational work automatically. AI receptionist, automation for dentists, real estate, med spas, ecommerce.',
  keywords: [
    'AI employees',
    'AI receptionist',
    'AI automation for business',
    'business process automation',
    'AI assistant for companies',
    'AI customer support automation',
    'AI for dentists',
    'AI for real estate',
  ],
  openGraph: {
    title: 'AI Employees | Hire Digital Employees That Work 24/7',
    description:
      'Deploy trained digital staff that answer customers, book appointments, qualify leads, and complete operational work automatically.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Employees | Hire Digital Employees That Work 24/7',
    description:
      'Deploy trained digital staff that answer customers, book appointments, qualify leads automatically.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Employees',
    applicationCategory: 'BusinessApplication',
    description:
      'Deploy trained digital staff that answer customers, book appointments, qualify leads, and complete operational work automatically. AI receptionist, automation for dentists, real estate, med spas, ecommerce.',
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
