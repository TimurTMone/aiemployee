const FAQ_ITEMS = [
  {
    q: 'Will this replace my staff?',
    a: 'No. It handles repetitive tasks—after-hours calls, first-line replies, booking, reminders—so your team can focus on in-person care and complex questions.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most clinics are live within a few days. We connect your phone and scheduling tool, train the system on your basics, and you go live.',
  },
  {
    q: 'Can it work with our current tools?',
    a: 'Yes. We integrate with common scheduling and practice-management tools. We’ll confirm compatibility on the demo.',
  },
  {
    q: 'Can we start small?',
    a: 'Yes. Many clinics start with after-hours and overflow only, then expand to full front-desk support when they’re ready.',
  },
  {
    q: 'Is patient data secure?',
    a: 'Yes. We follow standard security practices and do not train on your patient data. Conversations are used only to run the service.',
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question' as const,
    name: item.q,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.a },
  })),
};

const SOFTWARE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Employees',
  applicationCategory: 'BusinessApplication',
  description:
    'AI receptionist for dental clinics. Answers calls and messages 24/7, books appointments, sends reminders, follows up with leads, and helps reduce no-shows. For dental clinic owners and managers.',
  featureList: [
    'Answer calls and messages 24/7',
    'Book appointments',
    'Send reminders',
    'Follow up with leads',
    'Re-engage canceled or missed patients',
    'Answer common treatment questions',
  ],
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AI Employees',
  url: 'https://aiemployee-alpha.vercel.app',
  description:
    'AI front desk for dental clinics. Answer missed calls, book more patients, reduce no-shows, and save front-desk time.',
};

export function HomeSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
    </>
  );
}
