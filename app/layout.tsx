import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'AI Employees | AI Receptionist for Service Businesses | Stop Losing Bookings',
  description:
    'AI receptionist software that answers customers, books appointments, qualifies leads 24/7. Built for dentists, real estate, med spas. More bookings, faster response, fewer missed leads.',
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
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI Employees',
      url: 'https://aiemployee-alpha.vercel.app',
      description:
        'AI Employees provides AI receptionist software for service businesses. Automated front desk, booking, lead qualification 24/7.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AI Employees',
      applicationCategory: 'BusinessApplication',
      description:
        'AI Employee is an AI-powered automation platform that acts like a digital staff member. It answers customer inquiries, books appointments, qualifies leads, and follows up automatically—24/7. Built for dentists, real estate, med spas, and service businesses.',
      offers: { '@type': 'Offer', price: '99', priceCurrency: 'USD' },
      featureList: [
        '24/7 response on chat, SMS, WhatsApp, email, phone',
        'Automated appointment booking',
        'Lead qualification',
        'Industry-specific training',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an AI receptionist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An AI receptionist is software that answers customer questions, books appointments, qualifies leads, and handles incoming inquiries automatically—24/7. It connects to your website chat, SMS, WhatsApp, email, and phone.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AI receptionist software work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI receptionist software connects to your communication channels. When a customer reaches out, the AI responds with relevant information, books appointments, qualifies leads, and can escalate complex requests to your team.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI replace front desk staff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI receptionist augments front desk staff. It handles routine inquiries and booking, freeing staff for in-person care and complex situations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is AI receptionist good for dentists?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Dentists lose 30% or more of inquiries to missed calls. AI receptionist for dentists answers patient questions, books appointments, and captures new patient leads 24/7.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does an AI receptionist cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI Employees offers early access at $99/month, including receptionist, booking, lead qualification, and all channels.',
          },
        },
      ],
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
