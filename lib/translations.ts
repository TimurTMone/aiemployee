export type Locale = 'en' | 'es' | 'ru';

export const translations = {
  en: {
    nav: {
      product: 'Product',
      industries: 'Industries',
      pricing: 'Pricing',
      joinBeta: 'Join Beta Waitlist',
    },
    hero: {
      headline: 'Hire Digital Employees That Never Sleep',
      subheadline:
        'AI Employees answer customers, book appointments, qualify leads, and complete repetitive work automatically.',
      value: 'Reduce payroll costs. Capture more revenue.',
      ctaPrimary: 'Join Beta Waitlist',
      ctaSecondary: 'See Demo',
      trust1: 'Built for modern businesses',
      trust2: 'Secure infrastructure',
      trust3: 'Enterprise ready',
    },
    problem: {
      title: 'Businesses Are Losing Revenue Every Day',
      intro:
        'Customers message after hours, staff miss inquiries, leads go unanswered—and revenue slips away.',
      without: {
        title: 'Without AI Employees',
        item1: 'Missed inquiries',
        item2: 'Slow response',
        item3: 'Expensive staff',
        item4: 'Operational chaos',
      },
      with: {
        title: 'With AI Employees',
        item1: 'Instant response',
        item2: 'Automated booking',
        item3: 'Lead qualification',
        item4: 'Continuous follow-up',
      },
    },
    solution: {
      title: 'Meet Your New Digital Team',
      intro:
        'Deploy specialized digital staff trained for your industry. Each handles specific operational work.',
      roles: {
        receptionist: {
          name: 'AI Receptionist',
          desc: 'Answers customer questions instantly.',
        },
        booking: {
          name: 'AI Booking Assistant',
          desc: 'Schedules appointments automatically.',
        },
        qualifier: {
          name: 'AI Sales Qualifier',
          desc: 'Identifies high-value leads and routes them to sales.',
        },
        support: {
          name: 'AI Support Agent',
          desc: 'Handles customer support requests.',
        },
        followup: {
          name: 'AI Follow-Up Assistant',
          desc: 'Automatically follows up with leads and customers.',
        },
      },
    },
    howItWorks: {
      title: 'How It Works',
      step1: {
        title: 'Connect your channels',
        desc: 'Link website chat, SMS, WhatsApp, email, and phone to a single dashboard.',
      },
      step2: {
        title: 'Choose your AI Employees',
        desc: 'Select pre-trained digital staff for your industry—receptionist, booking, sales, support.',
      },
      step3: {
        title: 'Let them work',
        desc: 'Your digital team handles customer conversations and operations 24/7.',
      },
    },
    roi: {
      title: 'Increase Revenue Without Hiring More Staff',
      metrics: {
        instant: 'Respond to customers instantly',
        capture: 'Capture leads 24/7',
        reduce: 'Reduce operational workload',
        lower: 'Lower support costs',
        booking: 'Increase booking rates',
      },
      example: {
        title: 'Dentist Example',
        before: 'Monthly staff cost: $4,000 • Missed inquiries: 30%',
        after: 'Response time: instant • Lead capture: 100% • Operational savings: up to 60%',
      },
    },
    industries: {
      title: 'Industry Use Cases',
      dentist: {
        title: 'Dentists',
        problem: 'Missed calls, no after-hours booking, front desk overload.',
        solution: 'AI Receptionist answers questions, books appointments, sends reminders.',
        result: 'Higher booking rates, fewer no-shows, staff freed for patient care.',
      },
      realEstate: {
        title: 'Real Estate',
        problem: 'Leads go cold when nobody responds quickly.',
        solution: 'AI Leasing Assistant qualifies leads, answers questions, schedules showings.',
        result: 'Faster lead conversion, more qualified prospects for agents.',
      },
      medspa: {
        title: 'Med Spas',
        problem: 'Inquiry volume spikes, booking bottlenecks.',
        solution: 'AI Booking Assistant handles consultations, books sessions, follows up.',
        result: 'More appointments booked, reduced admin burden.',
      },
      homeServices: {
        title: 'Home Services',
        problem: 'Dispatch chaos, missed calls, scheduling errors.',
        solution: 'AI Dispatcher answers calls, schedules jobs, qualifies service requests.',
        result: 'Fewer missed jobs, faster dispatch, higher capacity.',
      },
      ecommerce: {
        title: 'Ecommerce',
        problem: 'Support tickets pile up, cart abandonment, slow responses.',
        solution: 'AI Customer Agent handles FAQs, order status, returns, recommendations.',
        result: 'Faster resolution, higher satisfaction, more repeat purchases.',
      },
    },
    beta: {
      title: 'Apply For Early Access',
      intro:
        'We are opening limited access for businesses to deploy their first AI Employees.',
      benefits: {
        title: 'Early adopter benefits',
        item1: 'Lifetime discounted pricing',
        item2: 'Priority onboarding',
        item3: 'Custom AI employee training',
        item4: 'Influence product roadmap',
      },
      pricing: {
        regular: 'Regular: $399/month',
        beta: 'Beta access: $99/month',
        limited: 'Limited spots available.',
      },
      cta: 'Join Beta Waitlist',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        industry: 'Industry',
        teamSize: 'Team Size',
        submit: 'Reserve Spot',
        success: 'Thank you! We\'ll be in touch soon.',
      },
    },
    socialProof: {
      title: 'Early partners launching soon',
      subtitle: 'Modern businesses are preparing to deploy their digital workforce.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: 'What is an AI Employee?',
      a1: 'An AI Employee is a specialized digital worker trained for your industry. It handles customer conversations, bookings, lead qualification, and operational tasks through messaging channels like chat, SMS, WhatsApp, email, and phone—24/7.',
      q2: 'How does onboarding work?',
      a2: 'We connect your communication channels, configure your AI Employees for your business, and run a short training period. Most businesses go live within 1–2 weeks.',
      q3: 'Does it replace staff?',
      a3: 'AI Employees handle repetitive operational work so your team can focus on high-value tasks. They augment your workforce, not replace it—especially during off-hours when no one is available.',
      q4: 'Is it secure?',
      a4: 'Yes. We use enterprise-grade infrastructure, encryption, and compliance controls. Your data stays in your control and we never train on your customer information.',
      q5: 'How fast can we deploy?',
      a5: 'Typically 1–2 weeks from signup to live deployment. Beta participants get priority onboarding for even faster setup.',
    },
    finalCta: {
      title: 'Build Your Digital Workforce',
      subheadline: 'Join the beta and deploy your first AI Employees.',
      cta: 'Reserve Beta Access',
    },
    footer: {
      product: 'Product',
      industries: 'Industries',
      pricing: 'Pricing',
      company: 'Company',
      legal: 'Legal',
      copyright: '© AI Employees. All rights reserved.',
    },
    channels: 'Website chat • SMS • WhatsApp • Telegram • Instagram • Email • Phone',
  },
  es: {
    nav: {
      product: 'Producto',
      industries: 'Industrias',
      pricing: 'Precios',
      joinBeta: 'Unirse a Lista de Espera',
    },
    hero: {
      headline: 'Contrata Empleados Digitales Que Nunca Duermen',
      subheadline:
        'AI Employees responden a clientes, reservan citas, califican leads y completan trabajo repetitivo automáticamente.',
      value: 'Reduce costos de nómina. Captura más ingresos.',
      ctaPrimary: 'Unirse a Lista de Espera',
      ctaSecondary: 'Ver Demo',
      trust1: 'Diseñado para negocios modernos',
      trust2: 'Infraestructura segura',
      trust3: 'Listo para empresas',
    },
    problem: {
      title: 'Las Empresas Pierden Ingresos Cada Día',
      intro:
        'Los clientes escriben fuera de horario, el personal pierde consultas, los leads no reciben respuesta—y los ingresos se escapan.',
      without: {
        title: 'Sin AI Employees',
        item1: 'Consultas perdidas',
        item2: 'Respuesta lenta',
        item3: 'Personal costoso',
        item4: 'Caos operativo',
      },
      with: {
        title: 'Con AI Employees',
        item1: 'Respuesta instantánea',
        item2: 'Reservas automatizadas',
        item3: 'Calificación de leads',
        item4: 'Seguimiento continuo',
      },
    },
    solution: {
      title: 'Conoce Tu Nuevo Equipo Digital',
      intro:
        'Despliega personal digital especializado entrenado para tu industria. Cada uno maneja trabajo operativo específico.',
      roles: {
        receptionist: {
          name: 'Recepcionista Digital',
          desc: 'Responde preguntas de clientes al instante.',
        },
        booking: {
          name: 'Asistente de Reservas',
          desc: 'Programa citas automáticamente.',
        },
        qualifier: {
          name: 'Calificador de Ventas',
          desc: 'Identifica leads de alto valor y los dirige a ventas.',
        },
        support: {
          name: 'Agente de Soporte',
          desc: 'Maneja solicitudes de soporte al cliente.',
        },
        followup: {
          name: 'Asistente de Seguimiento',
          desc: 'Da seguimiento automático a leads y clientes.',
        },
      },
    },
    howItWorks: {
      title: 'Cómo Funciona',
      step1: {
        title: 'Conecta tus canales',
        desc: 'Enlaza chat web, SMS, WhatsApp, email y teléfono en un solo panel.',
      },
      step2: {
        title: 'Elige tus AI Employees',
        desc: 'Selecciona personal digital pre-entrenado para tu industria—recepcionista, reservas, ventas, soporte.',
      },
      step3: {
        title: 'Déjalos trabajar',
        desc: 'Tu equipo digital maneja conversaciones y operaciones 24/7.',
      },
    },
    roi: {
      title: 'Aumenta Ingresos Sin Contratar Más Personal',
      metrics: {
        instant: 'Responde a clientes al instante',
        capture: 'Captura leads 24/7',
        reduce: 'Reduce carga operativa',
        lower: 'Reduce costos de soporte',
        booking: 'Aumenta tasas de reserva',
      },
      example: {
        title: 'Ejemplo: Clínica Dental',
        before: 'Costo mensual de personal: $4,000 • Consultas perdidas: 30%',
        after: 'Tiempo de respuesta: instantáneo • Captura de leads: 100% • Ahorro operativo: hasta 60%',
      },
    },
    industries: {
      title: 'Casos de Uso por Industria',
      dentist: {
        title: 'Dentistas',
        problem: 'Llamadas perdidas, sin reservas fuera de horario, recepción saturada.',
        solution: 'Recepcionista Digital responde preguntas, reserva citas, envía recordatorios.',
        result: 'Mayor tasa de reservas, menos ausencias, personal libre para atención.',
      },
      realEstate: {
        title: 'Bienes Raíces',
        problem: 'Los leads se enfrían cuando nadie responde rápido.',
        solution: 'Asistente de Arrendamiento califica leads, responde preguntas, agenda visitas.',
        result: 'Conversión más rápida, más prospectos calificados para agentes.',
      },
      medspa: {
        title: 'Med Spas',
        problem: 'Picos de volumen de consultas, cuellos de botella en reservas.',
        solution: 'Asistente de Reservas maneja consultas, reserva sesiones, da seguimiento.',
        result: 'Más citas reservadas, menor carga administrativa.',
      },
      homeServices: {
        title: 'Servicios del Hogar',
        problem: 'Caos en despacho, llamadas perdidas, errores de programación.',
        solution: 'Despachador Digital responde llamadas, programa trabajos, califica solicitudes.',
        result: 'Menos trabajos perdidos, despacho más rápido, mayor capacidad.',
      },
      ecommerce: {
        title: 'Ecommerce',
        problem: 'Tickets de soporte se acumulan, carritos abandonados, respuestas lentas.',
        solution: 'Agente de Clientes maneja FAQs, estado de pedidos, devoluciones, recomendaciones.',
        result: 'Resolución más rápida, mayor satisfacción, más compras repetidas.',
      },
    },
    beta: {
      title: 'Solicita Acceso Anticipado',
      intro:
        'Estamos abriendo acceso limitado para que empresas desplieguen sus primeros AI Employees.',
      benefits: {
        title: 'Beneficios de adoptante temprano',
        item1: 'Precios con descuento de por vida',
        item2: 'Onboarding prioritario',
        item3: 'Entrenamiento personalizado de empleados',
        item4: 'Influencia en el roadmap del producto',
      },
      pricing: {
        regular: 'Regular: $399/mes',
        beta: 'Acceso beta: $99/mes',
        limited: 'Plazas limitadas.',
      },
      cta: 'Unirse a Lista de Espera',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        company: 'Empresa',
        industry: 'Industria',
        teamSize: 'Tamaño del equipo',
        submit: 'Reservar Lugar',
        success: '¡Gracias! Nos pondremos en contacto pronto.',
      },
    },
    socialProof: {
      title: 'Socios iniciales próximamente',
      subtitle: 'Empresas modernas se preparan para desplegar su fuerza laboral digital.',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      q1: '¿Qué es un AI Employee?',
      a1: 'Un AI Employee es un trabajador digital especializado entrenado para tu industria. Maneja conversaciones con clientes, reservas, calificación de leads y tareas operativas a través de canales como chat, SMS, WhatsApp, email y teléfono—24/7.',
      q2: '¿Cómo funciona el onboarding?',
      a2: 'Conectamos tus canales de comunicación, configuramos tus AI Employees para tu negocio y ejecutamos un período de entrenamiento corto. La mayoría de empresas están en vivo en 1–2 semanas.',
      q3: '¿Reemplaza al personal?',
      a3: 'Los AI Employees manejan trabajo operativo repetitivo para que tu equipo se enfoque en tareas de alto valor. Aumentan tu fuerza laboral, no la reemplazan—especialmente fuera de horario cuando nadie está disponible.',
      q4: '¿Es seguro?',
      a4: 'Sí. Usamos infraestructura empresarial, cifrado y controles de cumplimiento. Tus datos permanecen bajo tu control y nunca entrenamos con información de tus clientes.',
      q5: '¿Qué tan rápido podemos desplegar?',
      a5: 'Típicamente 1–2 semanas desde el registro hasta el despliegue en vivo. Los participantes beta reciben onboarding prioritario para una configuración aún más rápida.',
    },
    finalCta: {
      title: 'Construye Tu Fuerza Laboral Digital',
      subheadline: 'Únete al beta y despliega tus primeros AI Employees.',
      cta: 'Reservar Acceso Beta',
    },
    footer: {
      product: 'Producto',
      industries: 'Industrias',
      pricing: 'Precios',
      company: 'Empresa',
      legal: 'Legal',
      copyright: '© AI Employees. Todos los derechos reservados.',
    },
    channels: 'Chat web • SMS • WhatsApp • Telegram • Instagram • Email • Teléfono',
  },
  ru: {
    nav: {
      product: 'Продукт',
      industries: 'Отрасли',
      pricing: 'Цены',
      joinBeta: 'Очередь на бета',
    },
    hero: {
      headline: 'Нанять Цифровых Сотрудников, Которые Никогда Не Спят',
      subheadline:
        'AI Employees отвечают клиентам, записывают на приём, квалифицируют лиды и выполняют рутинную работу автоматически.',
      value: 'Снизьте затраты на зарплату. Увеличьте выручку.',
      ctaPrimary: 'Очередь на бета',
      ctaSecondary: 'Смотреть демо',
      trust1: 'Для современных бизнесов',
      trust2: 'Безопасная инфраструктура',
      trust3: 'Готово для enterprise',
    },
    problem: {
      title: 'Бизнесы Теряют Выручку Каждый День',
      intro:
        'Клиенты пишут в нерабочее время, сотрудники не успевают отвечать, лиды остаются без ответа—и выручка уходит.',
      without: {
        title: 'Без AI Employees',
        item1: 'Пропущенные обращения',
        item2: 'Медленный ответ',
        item3: 'Дорогой персонал',
        item4: 'Операционный хаос',
      },
      with: {
        title: 'С AI Employees',
        item1: 'Мгновенный ответ',
        item2: 'Автозапись',
        item3: 'Квалификация лидов',
        item4: 'Непрерывный follow-up',
      },
    },
    solution: {
      title: 'Познакомьтесь с Вашей Новой Цифровой Командой',
      intro:
        'Разверните специализированных цифровых сотрудников, обученных под вашу отрасль. Каждый выполняет свой операционный объём работы.',
      roles: {
        receptionist: {
          name: 'Цифровой Администратор',
          desc: 'Мгновенно отвечает на вопросы клиентов.',
        },
        booking: {
          name: 'Ассистент по Записи',
          desc: 'Автоматически записывает на приём.',
        },
        qualifier: {
          name: 'Квалификатор Продаж',
          desc: 'Выявляет ценных лидов и направляет в продажи.',
        },
        support: {
          name: 'Агент Поддержки',
          desc: 'Обрабатывает запросы в поддержку.',
        },
        followup: {
          name: 'Ассистент по Follow-up',
          desc: 'Автоматически ведёт лиды и клиентов.',
        },
      },
    },
    howItWorks: {
      title: 'Как Это Работает',
      step1: {
        title: 'Подключите каналы',
        desc: 'Свяжите чат сайта, SMS, WhatsApp, email и телефон в единую панель.',
      },
      step2: {
        title: 'Выберите AI Employees',
        desc: 'Выберите предобученных цифровых сотрудников для вашей отрасли—администратор, запись, продажи, поддержка.',
      },
      step3: {
        title: 'Доверьте им работу',
        desc: 'Ваша цифровая команда ведёт диалоги и операции 24/7.',
      },
    },
    roi: {
      title: 'Увеличьте Выручку Без Новых Сотрудников',
      metrics: {
        instant: 'Мгновенные ответы клиентам',
        capture: 'Лиды 24/7',
        reduce: 'Меньше операционной нагрузки',
        lower: 'Ниже расходы на поддержку',
        booking: 'Больше записей на приём',
      },
      example: {
        title: 'Пример: Стоматология',
        before: 'Зарплата: $4,000/мес • Пропущенные обращения: 30%',
        after: 'Время ответа: мгновенно • Лиды: 100% • Экономия: до 60%',
      },
    },
    industries: {
      title: 'Кейсы по Отраслям',
      dentist: {
        title: 'Стоматологии',
        problem: 'Пропущенные звонки, нет записи вне часов, перегруженная рецепция.',
        solution: 'Цифровой Администратор отвечает, записывает, отправляет напоминания.',
        result: 'Больше записей, меньше no-show, персонал свободен для пациентов.',
      },
      realEstate: {
        title: 'Недвижимость',
        problem: 'Лиды остывают, когда никто не отвечает быстро.',
        solution: 'Помощник по Аренде квалифицирует лиды, отвечает, назначает показы.',
        result: 'Быстрее конверсия, больше квалифицированных лидов для агентов.',
      },
      medspa: {
        title: 'Мед Спа',
        problem: 'Всплески обращений, узкое место в записи.',
        solution: 'Ассистент по Записи проводит консультации, записывает, ведёт follow-up.',
        result: 'Больше записей, меньше административной нагрузки.',
      },
      homeServices: {
        title: 'Домашние Услуги',
        problem: 'Хаос в диспетчеризации, пропущенные звонки, ошибки в расписании.',
        solution: 'Цифровой Диспетчер отвечает на звонки, планирует выезды, квалифицирует заявки.',
        result: 'Меньше пропущенных заказов, быстрее диспетчеризация.',
      },
      ecommerce: {
        title: 'Ecommerce',
        problem: 'Накопление тикетов, брошенные корзины, медленные ответы.',
        solution: 'Клиентский Агент обрабатывает FAQs, статус заказов, возвраты, рекомендации.',
        result: 'Быстрее решение, выше удовлетворённость, больше повторных покупок.',
      },
    },
    beta: {
      title: 'Подать Заявку на Ранний Доступ',
      intro:
        'Мы открываем ограниченный доступ для бизнесов, чтобы развернуть первых AI Employees.',
      benefits: {
        title: 'Преимущества ранних пользователей',
        item1: 'Скидка на всю жизнь',
        item2: 'Приоритетный онбординг',
        item3: 'Индивидуальное обучение сотрудников',
        item4: 'Влияние на roadmap продукта',
      },
      pricing: {
        regular: 'Обычно: $399/мес',
        beta: 'Бета доступ: $99/мес',
        limited: 'Ограниченное количество мест.',
      },
      cta: 'Очередь на бета',
      form: {
        name: 'Имя',
        email: 'Email',
        company: 'Компания',
        industry: 'Отрасль',
        teamSize: 'Размер команды',
        submit: 'Забронировать место',
        success: 'Спасибо! Мы скоро свяжемся.',
      },
    },
    socialProof: {
      title: 'Ранние партнёры скоро',
      subtitle: 'Современные бизнесы готовятся развернуть цифровую команду.',
    },
    faq: {
      title: 'Частые Вопросы',
      q1: 'Что такое AI Employee?',
      a1: 'AI Employee — это специализированный цифровой сотрудник, обученный под вашу отрасль. Он ведёт диалоги с клиентами, запись, квалификацию лидов и операционные задачи через чат, SMS, WhatsApp, email и телефон—24/7.',
      q2: 'Как проходит онбординг?',
      a2: 'Мы подключаем ваши каналы связи, настраиваем AI Employees под ваш бизнес и проводим короткий период обучения. Большинство компаний выходят в работу за 1–2 недели.',
      q3: 'Это заменяет персонал?',
      a3: 'AI Employees берут на себя рутинную операционную работу, чтобы ваша команда фокусировалась на высокоценных задачах. Они дополняют команду, а не заменяют её—особенно вне рабочих часов, когда никто не на связи.',
      q4: 'Это безопасно?',
      a4: 'Да. Мы используем enterprise-инфраструктуру, шифрование и контроль соответствия. Ваши данные остаются под вашим контролем, и мы не обучаем на информации ваших клиентов.',
      q5: 'Как быстро можно развернуть?',
      a5: 'Обычно 1–2 недели от регистрации до запуска. Участники бета получают приоритетный онбординг для ещё более быстрой настройки.',
    },
    finalCta: {
      title: 'Соберите Свою Цифровую Команду',
      subheadline: 'Присоединяйтесь к бета и разверните первых AI Employees.',
      cta: 'Забронировать доступ в бета',
    },
    footer: {
      product: 'Продукт',
      industries: 'Отрасли',
      pricing: 'Цены',
      company: 'Компания',
      legal: 'Правовая информация',
      copyright: '© AI Employees. Все права защищены.',
    },
    channels: 'Чат на сайте • SMS • WhatsApp • Telegram • Instagram • Email • Телефон',
  },
} as const;
