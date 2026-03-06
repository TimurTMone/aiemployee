import { geoContent } from './geo-content';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Employees',
    url: 'https://aiemployee-alpha.vercel.app',
    logo: 'https://aiemployee-alpha.vercel.app/logo.png',
    description:
      'AI Employees provides AI receptionist software for service businesses. Automated front desk, booking, lead qualification 24/7.',
    sameAs: [],
  };
}

export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Employees',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'AI Employee is an AI-powered automation platform that acts like a digital staff member. It answers customer inquiries, books appointments, qualifies leads, and follows up automatically—24/7. Built for dentists, real estate, med spas, and service businesses.',
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      '24/7 response on chat, SMS, WhatsApp, email, phone',
      'Automated appointment booking',
      'Lead qualification',
      'Customer support automation',
      'Follow-up automation',
      'Industry-specific training for dentists, real estate, med spas',
    ],
    provider: {
      '@type': 'Organization',
      name: 'AI Employees',
    },
  };
}

export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'AI Employees',
    description:
      'AI receptionist and automation platform for service businesses. Answers customers, books appointments, qualifies leads 24/7.',
    brand: {
      '@type': 'Brand',
      name: 'AI Employees',
    },
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
    },
    category: 'AI receptionist software',
  };
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: geoContent.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function getHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Deploy an AI Receptionist',
    description: 'Three steps to deploy AI receptionist software for your business.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Connect your channels',
        text: 'Link website chat, SMS, WhatsApp, email, and phone to a single dashboard.',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose your modules',
        text: 'Select receptionist, booking, lead qualification, support, or follow-up. Pre-trained for your industry.',
      },
      {
        '@type': 'HowToStep',
        name: 'Go live',
        text: 'Your digital team handles customer conversations and operations 24/7.',
      },
    ],
  };
}

export function getAllSchema() {
  return [
    getOrganizationSchema(),
    getSoftwareApplicationSchema(),
    getProductSchema(),
    getFAQSchema(),
    getHowToSchema(),
  ];
}
