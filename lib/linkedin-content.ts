/**
 * LinkedIn outbound – Vertical AI platform for dental clinics.
 * "The AI Operating System for Dental Clinics"
 * Full suite: AI Receptionist, Appointment Optimizer, Follow-Up, Lead Conversion, Treatment Education
 */

export const linkedinContent = {
  hero: {
    headline: 'The AI Operating System for Dental Clinics',
    subheadline:
      'A full suite of AI employees that handle reception, scheduling, follow-ups, lead conversion, and patient education — so your clinic runs 24/7.',
    value: 'Built for dental practices that want to automate front desk, reduce no-shows, convert more leads, and free staff for patient care.',
    ctaPrimary: 'Watch 2-Minute Demo',
    ctaSecondary: 'Book a 15-Minute Demo',
    trustLine: 'Works with: Phone • Website Chat • WhatsApp • SMS • Instagram • Practice Management',
  },

  icp: {
    primary: 'AI Operating System for Dental Clinics',
    secondary: ['Med Spa', 'Real Estate', 'Home Services'],
  },

  problem: {
    title: 'Dental clinics lose thousands every month from missed calls and manual tasks.',
    intro: 'When a patient calls and nobody answers, they call the next clinic. Meanwhile, staff spend hours on scheduling, follow-ups, and education.',
    stats: {
      inquiries: '120 inquiries per month',
      missed: '35 missed calls',
      lostPatients: '20 lost patients',
      avgVisit: '$250 average visit',
      lostRevenue: '$5,000+ per month',
    },
    closer: 'One receptionist can\'t scale. Your AI workforce can.',
  },

  solution: {
    title: 'Meet Your AI Workforce',
    intro: 'AI Employee is a Vertical AI platform — five specialized AI employees working together to automate your front desk and patient journey.',
    capabilities: [
      'answer patient inquiries 24/7',
      'book and optimize appointments',
      'follow up automatically after visits',
      'convert leads into booked patients',
      'educate patients on treatments',
    ],
    closer: 'All in one platform.',
  },

  howItWorks: {
    title: 'How It Works',
    steps: [
      {
        title: 'Patient contacts your clinic',
        channels: ['Phone', 'Website Chat', 'WhatsApp', 'SMS', 'Instagram'] as string[],
        questions: undefined as string[] | undefined,
        items: undefined as string[] | undefined,
        desc: '',
      },
      {
        title: 'AI responds instantly',
        channels: undefined as string[] | undefined,
        questions: [
          'Do you accept new patients?',
          'What are your hours?',
          'When is the next available appointment?',
        ] as string[],
        items: undefined as string[] | undefined,
        desc: 'AI answers immediately.',
      },
      {
        title: 'Appointment booked and optimized',
        channels: undefined as string[] | undefined,
        questions: undefined as string[] | undefined,
        items: undefined as string[] | undefined,
        desc: 'AI connects to your calendar, fills gaps, and reduces no-shows.',
      },
      {
        title: 'Follow-ups and education',
        channels: undefined as string[] | undefined,
        questions: undefined as string[] | undefined,
        items: ['Appointment reminders', 'Post-visit follow-ups', 'Treatment education'] as string[],
        desc: 'Automated nurturing across the patient journey.',
      },
    ],
  },

  aiEmployees: [
    {
      name: 'AI Receptionist',
      desc: 'Answers calls and messages 24/7. Books appointments, answers FAQs, and captures every inquiry — so nothing falls through the cracks.',
      icon: 'phone',
    },
    {
      name: 'AI Appointment Optimizer',
      desc: 'Fills schedule gaps, reduces no-shows with smart reminders, and suggests optimal booking slots based on practice patterns.',
      icon: 'calendar',
    },
    {
      name: 'AI Patient Follow-Up Agent',
      desc: 'Automatically follows up after visits. Checks in on treatment, schedules recalls, and keeps patients engaged between appointments.',
      icon: 'chat',
    },
    {
      name: 'AI Lead Conversion Agent',
      desc: 'Qualifies new inquiries, nurtures leads with personalized messaging, and converts website and social traffic into booked patients.',
      icon: 'conversion',
    },
    {
      name: 'AI Treatment Education Assistant',
      desc: 'Explains procedures, pricing, and options to patients. Reduces front-desk questions and helps patients make informed decisions.',
      icon: 'book',
    },
  ],

  howClinicsUse: {
    title: 'How Dental Clinics Use the Platform',
    intro: 'Clinics run the full AI suite or start with one module and expand.',
    useCases: [
      { scenario: 'New patient calls after hours', outcome: 'AI Receptionist answers, qualifies, and books. Lead Conversion Agent follows up if they don\'t schedule.' },
      { scenario: 'No-shows and last-minute cancellations', outcome: 'Appointment Optimizer sends reminders and fills gaps. Follow-Up Agent re-engages patients who canceled.' },
      { scenario: 'Patients asking about implants, whitening, Invisalign', outcome: 'Treatment Education Assistant explains options. Receptionist books consultation.' },
      { scenario: 'Website and Instagram inquiries sitting unanswered', outcome: 'Lead Conversion Agent responds instantly, nurtures, and books demos or consultations.' },
    ],
  },

  roi: {
    title: 'ROI Examples',
    intro: 'Typical outcomes when dental clinics deploy the AI suite.',
    examples: [
      { label: 'Single-location practice', metrics: '+15–25 extra bookings/month', revenue: '$3,750–$6,250', cost: '$299–$499 suite' },
      { label: 'Multi-location group', metrics: '+50–80 extra bookings/month', revenue: '$12,500–$20,000', cost: '$799 suite' },
      { label: 'Med spa / cosmetic focus', metrics: '+20–40 consultations', revenue: '$5,000–$15,000', cost: '$499 suite' },
    ],
    legacyStats: {
      monthlyInquiries: '120',
      withoutAI: { missed: '40 missed inquiries', lostPatients: '20 lost patients' },
      withAI: { missed: '0 missed inquiries', extraBookings: '+15 extra bookings' },
      avgAppointment: '$250',
      extraRevenue: '$3,750 / month',
      aiCost: '$99 – $799 / month',
      roi: '10x – 30x',
    },
  },

  automationWorkflows: {
    title: 'Automation Workflows',
    intro: 'End-to-end automation across the patient journey.',
    workflows: [
      { name: 'New Patient Intake', steps: ['Inquiry received → AI responds', 'Qualification questions → Contact captured', 'Appointment offered → Booked into calendar', 'Confirmation + reminders sent'] },
      { name: 'No-Show Reduction', steps: ['48h before: reminder sent', '24h before: confirmation requested', 'Same-day: fill-in slots offered', 'Post-no-show: re-engagement message'] },
      { name: 'Recall & Follow-Up', steps: ['Post-visit: thank-you + next steps', '6-month: recall reminder', 'Treatment-specific: personalized education', 'Booking link included'] },
    ],
  },

  futureAI: {
    title: 'Coming Soon: More AI Employees',
    intro: 'We\'re expanding the suite with new specialized agents.',
    upcoming: [
      'AI Insurance Verification Agent',
      'AI Treatment Planning Assistant',
      'AI Referral Coordinator',
      'AI Compliance & Documentation Assistant',
    ],
  },

  modules: [
    { name: 'AI Receptionist', desc: '24/7 call and message answering, booking, and inquiry capture.' },
    { name: 'AI Appointment Optimizer', desc: 'Smart scheduling, reminders, and gap-filling.' },
    { name: 'AI Patient Follow-Up Agent', desc: 'Post-visit and recall automation.' },
    { name: 'AI Lead Conversion Agent', desc: 'Qualify and convert leads into booked patients.' },
    { name: 'AI Treatment Education Assistant', desc: 'Explain procedures and help patients decide.' },
  ],

  caseStudy: {
    title: 'Dental Clinic Example',
    before: ['Missed calls', 'Manual follow-ups', 'Lost patients', 'Underbooked schedule'],
    after: ['24/7 responses', '35% more booked appointments', 'Staff focused on patient care', 'Automated recall'],
  },

  integrations: {
    items: ['Website chat', 'WhatsApp', 'SMS', 'Google Calendar', 'Practice management', 'CRM'],
  },

  security: {
    items: [
      'Encrypted infrastructure',
      'No training on customer data',
      'Full control of conversations',
    ],
  },

  pricing: {
    starter: {
      price: '$99/month',
      name: 'Starter',
      desc: 'Get started with the essentials.',
      includes: ['AI Receptionist', 'Chat automation', 'Lead capture'],
    },
    growth: {
      price: '$299/month',
      name: 'Growth',
      desc: 'Add phone and advanced automation.',
      includes: ['AI phone calls', 'Advanced automation', 'Analytics dashboard'],
    },
    dentalSuite: {
      price: '$499/month',
      name: 'Dental AI Suite',
      desc: 'Full platform. All 5 AI employees.',
      includes: [
        'AI Receptionist',
        'AI Appointment Optimizer',
        'AI Patient Follow-Up Agent',
        'AI Lead Conversion Agent',
        'AI Treatment Education Assistant',
      ],
      highlighted: true,
    },
  },

  faq: [
    {
      q: 'What is the AI Operating System for Dental Clinics?',
      a: 'It\'s a Vertical AI platform with five specialized AI employees: Receptionist, Appointment Optimizer, Patient Follow-Up Agent, Lead Conversion Agent, and Treatment Education Assistant. They work together to automate your front desk and patient journey.',
    },
    {
      q: 'Can we start with one AI employee?',
      a: 'Yes. Start with the AI Receptionist, then add the Appointment Optimizer, Follow-Up Agent, and others as you scale.',
    },
    {
      q: 'Can it replace staff?',
      a: 'No. It automates repetitive tasks so staff can focus on patient care and complex cases.',
    },
    {
      q: 'How long does setup take?',
      a: 'Typically 1–3 days per module.',
    },
  ],

  finalCta: {
    headline: 'Run your dental clinic on AI.',
    subheadline: 'Five AI employees. One platform.',
    ctaPrimary: 'Book a Demo',
    ctaSecondary: 'Watch Demo',
  },

  linkedinCta: {
    watchDemo: 'Watch 2-Minute Demo',
    bookDemo: 'Book a 15-Minute Demo',
    whatToExpect: '15-minute call. No pitch. We show you how the full AI suite works for your practice.',
    respondTime: 'We respond within 4 hours.',
  },
} as const;
