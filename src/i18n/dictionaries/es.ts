import type { ChatMessage, DashboardTopic, Dictionary } from "./en";

export const es: Dictionary = {
  meta: {
    title: "Vado — Cada conversación, resuelta",
    description:
      "Agentes de IA para experiencia de cliente que resuelven de principio a fin, en chat, voz y correo.",
    ogTagline: "Agentes de IA que terminan el trabajo.",
  },
  nav: {
    brand: "Vado",
    links: {
      product: "Producto",
      customers: "Clientes",
      trust: "Confianza",
    },
    cta: "Reservar demo",
    signIn: "Entrar",
    localeLabel: "Idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skip: "Saltar al contenido",
  },
  hero: {
    eyebrow: "Plataforma de agentes para experiencia de cliente",
    titleLead: "Cada conversación,",
    titleEm: "resuelta.",
    subtitle:
      "Vado construye agentes de IA que terminan el trabajo: consultan el pedido, mueven la entrega, devuelven el importe y dejan registro, en chat, voz y correo.",
    primaryCta: "Reservar demo",
    secondaryCta: "Ver la plataforma",
    stats: [
      { value: "71 %", label: "resueltas sin una persona" },
      { value: "38 s", label: "tiempo medio de resolución" },
      { value: "4", label: "canales, una memoria" },
    ],
    chat: {
      name: "Agente Vado",
      role: "Cardo Retail · Atención",
      status: "en vivo",
      badge: "Resuelto en 38 s, sin derivar",
      placeholder: "Escribe un mensaje…",
      messages: [
        {
          role: "agent",
          text: "Hola Marta: veo que el pedido llegó dañado. ¿Prefieres un reemplazo o la devolución del importe?",
        },
        {
          role: "user",
          name: "Marta",
          text: "Un reemplazo, misma talla, por favor.",
        },
        {
          role: "agent",
          text: "Hecho. Sale mañana a la misma dirección y te he enviado el enlace de seguimiento.",
        },
        { role: "user", name: "Marta", text: "Qué rápido. ¡Gracias!" },
        {
          role: "agent",
          text: "A mandar. He avisado a la agencia para que no le pase al siguiente pedido.",
        },
      ] as ChatMessage[],
    },
  },
  logos: {
    title: "Equipos que dejaron de desviar",
    cta: "Leer casos de cliente",
    items: [
      "ALMENARA",
      "CARDO",
      "MARISMA",
      "SIROCO",
      "ALJIBE",
      "ESTELA",
      "MENHIR",
      "LONTRA",
      "VIDRIA",
      "ONDARA",
      "CINABRIO",
      "BUGANVILLA",
      "NÍSCALO",
      "CAÑAVERAL",
      "PONIENTE",
      "LEVANTE LABS",
      "FAUNO",
      "PERAL",
      "ROBLE",
      "ALUVIÓN",
      "ALDANA",
      "TERSA",
      "NÁYADE",
      "QUICIO",
      "SIRGO",
    ],
  },
  features: {
    eyebrow: "El producto",
    title: "Un agente, del primer saludo al caso cerrado.",
    intro:
      "Vado sustituye el árbol de decisiones por un agente que lee tus sistemas, ejecuta acciones reales y sabe exactamente cuándo llamar a una persona.",
    primary: {
      label: "Resolver",
      title: "Resuelve en el origen",
      description:
        "Consultas de pedido, cambios de dirección, devoluciones y reprogramaciones ocurren dentro de la conversación, con las herramientas que tu equipo ya usa.",
      visual: {
        ref: "Cardo Retail · #4821",
        status: "Resuelto",
        user: "La caja llegó aplastada.",
        agent: "Un reemplazo sale mañana a la misma dirección.",
        steps: [
          { label: "Pedido verificado", value: "0,4 s" },
          { label: "Reemplazo creado", value: "1,2 s" },
          { label: "Agencia avisada", value: "0,8 s" },
          { label: "Cliente notificado", value: "0,3 s" },
        ],
      },
    },
    items: [
      {
        label: "Construir",
        title: "Lanza en días, no en trimestres",
        description:
          "Describe el resultado en lenguaje natural. Vado redacta el flujo, las pruebas y las salvaguardas antes de que un ingeniero toque nada.",
      },
      {
        label: "Canales",
        title: "Un agente, todos los canales",
        description:
          "Chat, voz, correo, SMS y redes comparten la misma memoria y las mismas políticas: la historia nunca empieza de cero.",
      },
      {
        label: "Precio",
        title: "Paga por resoluciones",
        description:
          "Precio ligado a las conversaciones que el agente cierra de verdad, no a licencias, minutos ni mensajes.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Clientes",
    title: "Pruebas, no promesas.",
    items: [
      {
        company: "MARISMA",
        quote:
          "Una de cada tres conversaciones acababa en derivación. Hoy el agente cierra el 71 % sin que nadie abra el caso.",
        name: "Elena Ferrán",
        role: "Directora de Atención al Cliente, Marisma Health",
      },
      {
        company: "CARDO",
        quote:
          "Las devoluciones eran nuestra cola más cara y el motivo de nuestras peores reseñas. Los dos números se movieron el primer mes.",
        name: "Marcos Ibáñez",
        role: "Director de Operaciones, Cardo Retail",
      },
      {
        company: "SIROCO",
        quote:
          "Un vuelo cancelado son cien conversaciones a la vez. El agente reubica, reemite y explica, en cuatro idiomas, a las tres de la mañana.",
        name: "Lucía Prats",
        role: "VP de Experiencia de Huésped, Siroco Air",
      },
      {
        company: "ALMENARA",
        quote:
          "Riesgo lo aprobó en once días. Cada respuesta se puede rastrear hasta una política y cada acción queda registrada con un nombre.",
        name: "Daniel Roca",
        role: "Director Digital, Almenara Bank",
      },
    ],
  },
  agentOs: {
    eyebrow: "La plataforma",
    title: "Constrúyelo, míralo, mejóralo.",
    intro:
      "Un solo sitio para diseñar un agente, probarlo contra transcripciones reales y ver exactamente por qué hizo lo que hizo.",
    dashboard: {
      navAnalyze: "Analizar",
      navBuild: "Construir",
      nav: {
        research: "Investigación",
        alerts: "Alertas",
        tests: "Pruebas",
        studio: "Estudio",
        knowledge: "Conocimiento",
        channels: "Canales",
      },
      query: "¿Por qué bajaron las derivaciones la semana pasada?",
      summaryTitle: "Resumen",
      summary:
        "Las derivaciones cayeron un 18 % tras publicar el flujo de devoluciones. La mayor parte de la bajada viene de casos de artículo dañado que el agente cerró sin derivar.",
      metric: {
        label: "Resueltas sin derivar",
        value: "71,4 %",
        delta: "+12,6 pts",
      },
      topicsTitle: "Temas principales",
      period: "Últimos 7 días",
      topics: [
        { name: "Artículo dañado", count: "5.560", change: "+19%", up: true },
        { name: "Entrega tardía", count: "4.210", change: "−15%", up: false },
        { name: "Estado del reembolso", count: "3.890", change: "+8%", up: true },
        { name: "Cambio de dirección", count: "2.140", change: "+12%", up: true },
        { name: "Cambio de talla", count: "1.980", change: "+5%", up: true },
      ] as DashboardTopic[],
      ask: "Haz una pregunta de seguimiento…",
    },
    build: {
      eyebrow: "Estudio",
      title: "Escrito por quien conoce el negocio.",
      intro:
        "Quien lidera atención describe el resultado. Vado escribe el flujo, las pruebas y las salvaguardas, y los mejora con la evidencia de conversaciones reales.",
      blocks: {
        build: {
          title: "Describe el trabajo",
          description:
            "Parte de una política, una grabación o una frase. El agente, las herramientas y las pruebas aparecen como un borrador que puedes leer y editar.",
          prompt:
            "Gestiona entregas dañadas de Cardo: reemplazo o devolución, misma dirección",
          steps: [
            "Leyendo la política de devoluciones",
            "Redactando el flujo",
            "Escribiendo casos de prueba",
            "Ejecutando 42 pruebas",
          ],
          action: "Publicar",
          placeholder: "Describe el siguiente cambio…",
        },
        optimize: {
          title: "Mejora con evidencia",
          description:
            "Cada sugerencia apunta a las conversaciones que la provocaron, así apruebas el cambio con las pruebas delante.",
          heading: "Sugerencias",
          suggestions: [
            "Pide una foto antes de aprobar un reemplazo.",
            "Ofrece saldo en tienda si no hay stock.",
            "Deriva tras dos intentos de entrega fallidos.",
          ],
          actions: ["Comparar", "Ver conversaciones"],
        },
      },
    },
    improve: {
      title: "Mide lo que pasó de verdad.",
      intro:
        "Cada decisión del agente queda guardada, se puede buscar y se puede explicar, igual que auditarías a una persona.",
      features: [
        {
          title: "Investigación",
          description:
            "Pregunta en lenguaje natural y recibe una respuesta construida con miles de conversaciones reales.",
        },
        {
          title: "Alertas",
          description:
            "Recibe aviso cuando un tema se dispara, una política deja de funcionar o baja la satisfacción.",
        },
        {
          title: "Pruebas A/B",
          description:
            "Publica dos formas de resolver el mismo caso y quédate con la que más resuelve.",
        },
        {
          title: "Trazas",
          description:
            "Mira cada llamada a herramienta, consulta y derivación, con latencia y coste.",
        },
      ],
    },
    data: {
      title: "Memoria que se acumula.",
      intro:
        "Cada conversación mejora la siguiente. Vado guarda el contexto, lo cruza con tus sistemas y actúa.",
      features: [
        {
          title: "Memoria",
          description:
            "Contexto personal de conversaciones anteriores, disponible en cuanto vuelve el cliente.",
        },
        {
          title: "Datos de cliente",
          description:
            "Registros estructurados de tu CRM, almacén de datos y facturación, leídos en vivo.",
        },
        {
          title: "Siguiente mejor acción",
          description:
            "Reglas y puntuaciones que deciden qué ofrecer, cuándo ofrecerlo y cuándo callar.",
        },
        {
          title: "Contacto proactivo",
          description:
            "Inicia una conversación desde una señal real: un retraso, una renovación, un pago fallido.",
        },
      ],
    },
  },
  trust: {
    eyebrow: "Confianza",
    title: "Empresa desde la primera conversación.",
    intro:
      "Revisión de seguridad, residencia de datos y trazas de auditoría son parte de la plataforma, no un extra.",
    badges: [
      { label: "SOC 2 Type II", sub: "Auditado cada año" },
      { label: "ISO 27001", sub: "Seguridad de la información" },
      { label: "ISO 42001", sub: "Gestión de IA" },
      { label: "HIPAA", sub: "Cargas sanitarias" },
      { label: "GDPR", sub: "Residencia en la UE" },
      { label: "EU AI Act", sub: "Transparencia" },
    ],
    note: "Programa de cumplimiento ilustrativo para esta demo.",
  },
  cta: {
    eyebrow: "Hablemos",
    title: "Trae una cola real. Te enseñamos la resolución.",
    intro: "Veinte minutos, tus transcripciones, un agente funcionando. Sin presentación.",
    primary: "Reservar demo",
    secondary: "hola@vado.example",
  },
  footer: {
    brand: "Vado",
    blurb:
      "La plataforma de agentes para experiencia de cliente. Nacida en Madrid, trabajando en todas partes.",
    columns: [
      {
        title: "Producto",
        links: [
          { label: "Plataforma", href: "#product" },
          { label: "Clientes", href: "#customers" },
          { label: "Confianza", href: "#trust" },
          { label: "Reservar demo", href: "#contact" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Sobre Vado", href: "#product" },
          { label: "Contacto", href: "mailto:hola@vado.example" },
          { label: "Seguridad", href: "#trust" },
        ],
      },
    ],
    email: "hola@vado.example",
    locations: "Madrid · Ciudad de México · Remoto",
    copyright: "© 2026 Vado",
  },
  notFound: {
    title: "Fuera de cobertura.",
    body: "La página que buscas no existe o cambió de sitio.",
    cta: "Volver a Vado",
  },
};
