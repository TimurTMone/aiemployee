const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI receptionist for dentists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI receptionist for dental clinics answers calls 24/7, books appointments, answers common questions (including insurance), and captures new patient inquiries—so you never miss a call and can convert more leads into booked patients.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it work with our practice management software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our AI receptionist integrates with popular dental CRMs and practice management systems so appointments and patient data sync automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it handle insurance questions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The AI can answer common insurance and coverage questions and direct complex cases to your team.',
      },
    },
    {
      '@type': 'Question',
      name: 'What languages are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support multiple languages so you can serve a diverse patient base. Common languages include English, Spanish, and others—ask us for your practice\'s needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can we get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most practices are live within a few days. We handle setup, training, and integration so your team can focus on patient care.',
      },
    },
  ],
};

const PRODUCT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Receptionist for Dentists',
  applicationCategory: 'BusinessApplication',
  description:
    'AI receptionist for dental clinics: answers calls 24/7, books appointments, multilingual support, insurance Q&A, CRM integration. Never miss another patient call.',
  featureList: [
    '24/7 call answering',
    'Appointment booking',
    'Multilingual support',
    'Insurance Q&A',
    'CRM integration',
  ],
};

export function DentistsSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
      />
    </>
  );
}
