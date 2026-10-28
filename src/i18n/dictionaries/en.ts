export type ChatMessage = {
  role: "agent" | "user";
  name?: string;
  text: string;
};

export type DashboardTopic = {
  name: string;
  count: string;
  change: string;
  up: boolean;
};

export const en = {
  meta: {
    title: "Vado — Every conversation, resolved",
    description:
      "AI agents for customer experience that resolve issues end to end, across chat, voice and email.",
    ogTagline: "AI agents that finish the job.",
  },
  nav: {
    brand: "Vado",
    links: {
      product: "Product",
      customers: "Customers",
      trust: "Trust",
    },
    cta: "Book a demo",
    signIn: "Sign in",
    localeLabel: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Agent platform for customer experience",
    titleLead: "Every conversation,",
    titleEm: "resolved.",
    subtitle:
      "Vado builds AI agents that finish the job: they check the order, move the delivery, refund the card and log the outcome — across chat, voice and email.",
    primaryCta: "Book a demo",
    secondaryCta: "See the platform",
    stats: [
      { value: "71%", label: "resolved without a human" },
      { value: "38s", label: "median time to resolution" },
      { value: "4", label: "channels, one memory" },
    ],
    chat: {
      name: "Vado agent",
      role: "Cardo Retail · Support",
      status: "live",
      badge: "Resolved in 38s, no handover",
      placeholder: "Write a message…",
      messages: [
        {
          role: "agent",
          text: "Hi Marta — I can see the order arrived damaged. Would you rather have a replacement or a refund?",
        },
        { role: "user", name: "Marta", text: "A replacement, same size please." },
        {
          role: "agent",
          text: "Done. It ships tomorrow to the same address and I've emailed you the tracking link.",
        },
        { role: "user", name: "Marta", text: "That was fast. Thank you!" },
        {
          role: "agent",
          text: "Anytime. I've flagged the carrier so the same thing doesn't happen to the next order.",
        },
      ] as ChatMessage[],
    },
  },
  logos: {
    title: "Teams that stopped deflecting",
    cta: "Read customer stories",
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
    eyebrow: "The product",
    title: "One agent, from first hello to closed case.",
    intro:
      "Vado replaces the decision tree with an agent that reads your systems, takes real actions and knows exactly when to bring a person in.",
    primary: {
      label: "Resolve",
      title: "Resolve at the source",
      description:
        "Order lookups, address changes, refunds and reschedules happen inside the conversation, using the tools your teams already work in.",
      visual: {
        ref: "Cardo Retail · #4821",
        status: "Resolved",
        user: "The box arrived crushed.",
        agent: "A replacement ships tomorrow to the same address.",
        steps: [
          { label: "Order verified", value: "0.4s" },
          { label: "Replacement created", value: "1.2s" },
          { label: "Carrier flagged", value: "0.8s" },
          { label: "Customer notified", value: "0.3s" },
        ],
      },
    },
    items: [
      {
        label: "Build",
        title: "Launch in days, not quarters",
        description:
          "Describe the outcome in plain language. Vado drafts the flow, the tests and the guardrails before an engineer touches anything.",
      },
      {
        label: "Channels",
        title: "One agent, every channel",
        description:
          "Chat, voice, email, SMS and social share the same memory and the same policies, so the story never restarts.",
      },
      {
        label: "Pricing",
        title: "Pay for resolutions",
        description:
          "Pricing tied to conversations the agent actually closes, not seats, minutes or messages.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Customers",
    title: "Proof, not promises.",
    items: [
      {
        company: "MARISMA",
        quote:
          "One in three conversations used to end in a handover. Today the agent closes 71% of them without anyone picking up the ticket.",
        name: "Elena Ferrán",
        role: "Head of Customer Care, Marisma Health",
      },
      {
        company: "CARDO",
        quote:
          "Returns used to be our most expensive queue and our worst review topic. Both numbers moved in the first month.",
        name: "Marcos Ibáñez",
        role: "Operations Director, Cardo Retail",
      },
      {
        company: "SIROCO",
        quote:
          "A cancelled flight is a hundred conversations at once. The agent rebooks, reissues and explains — in four languages, at three in the morning.",
        name: "Lucía Prats",
        role: "VP Guest Experience, Siroco Air",
      },
      {
        company: "ALMENARA",
        quote:
          "Our risk team approved it in eleven days. Every answer is traceable to a policy, and every action is logged with a name.",
        name: "Daniel Roca",
        role: "Chief Digital Officer, Almenara Bank",
      },
    ],
  },
  agentOs: {
    eyebrow: "The platform",
    title: "Build it, watch it, make it better.",
    intro:
      "One place to design an agent, test it against real transcripts and see exactly why it did what it did.",
    dashboard: {
      navAnalyze: "Analyze",
      navBuild: "Build",
      nav: {
        research: "Research",
        alerts: "Alerts",
        tests: "Tests",
        studio: "Studio",
        knowledge: "Knowledge",
        channels: "Channels",
      },
      query: "Why did escalations drop last week?",
      summaryTitle: "Summary",
      summary:
        "Escalations fell 18% after the returns flow went live. Most of the drop came from damaged-item cases the agent closed without a handover.",
      metric: {
        label: "Resolved without handover",
        value: "71.4%",
        delta: "+12.6 pts",
      },
      topicsTitle: "Top topics",
      period: "Last 7 days",
      topics: [
        { name: "Damaged item", count: "5,560", change: "+19%", up: true },
        { name: "Late delivery", count: "4,210", change: "−15%", up: false },
        { name: "Refund status", count: "3,890", change: "+8%", up: true },
        { name: "Address change", count: "2,140", change: "+12%", up: true },
        { name: "Size exchange", count: "1,980", change: "+5%", up: true },
      ] as DashboardTopic[],
      ask: "Ask a follow-up…",
    },
    build: {
      eyebrow: "Studio",
      title: "Written by the people who know the business.",
      intro:
        "Support leads describe the outcome. Vado writes the flow, the tests and the guardrails, then keeps improving them with the evidence from real conversations.",
      blocks: {
        build: {
          title: "Describe the job",
          description:
            "Start from a policy document, a call recording or a sentence. The agent, the tools and the tests appear as a draft you can read and edit.",
          prompt:
            "Handle damaged deliveries for Cardo: replacement or refund, keep the same address",
          steps: [
            "Reading the returns policy",
            "Drafting the flow",
            "Writing test cases",
            "Running 42 tests",
          ],
          action: "Publish",
          placeholder: "Describe the next change…",
        },
        optimize: {
          title: "Improve with evidence",
          description:
            "Every suggestion points at the conversations that caused it, so you approve a change with the receipts in front of you.",
          heading: "Suggestions",
          suggestions: [
            "Ask for a photo before approving a replacement.",
            "Offer store credit when the item is out of stock.",
            "Escalate after two failed delivery attempts.",
          ],
          actions: ["Compare", "View conversations"],
        },
      },
    },
    improve: {
      title: "Measure what actually happened.",
      intro:
        "Every decision the agent makes is stored, searchable and explainable — the same way you would audit a person.",
      features: [
        {
          title: "Research",
          description:
            "Ask a question in plain language and get an answer built from thousands of real conversations.",
        },
        {
          title: "Alerts",
          description:
            "Get told when a topic spikes, a policy stops working or satisfaction dips.",
        },
        {
          title: "A/B tests",
          description:
            "Ship two ways of handling the same case and keep the one that resolves more.",
        },
        {
          title: "Tracing",
          description:
            "See every tool call, lookup and handover, with latency and cost attached.",
        },
      ],
    },
    data: {
      title: "Memory that compounds.",
      intro:
        "Each conversation makes the next one better. Vado keeps context, joins it to your systems and acts on it.",
      features: [
        {
          title: "Memory",
          description:
            "Personal context from past conversations, available the moment the customer returns.",
        },
        {
          title: "Customer data",
          description:
            "Structured records from your CRM, warehouse and billing system, read live.",
        },
        {
          title: "Next best action",
          description:
            "Rules and scores that decide what to offer, when to offer it and when to stay quiet.",
        },
        {
          title: "Proactive outreach",
          description:
            "Trigger an outbound conversation from a real signal: a delay, a renewal, a failed payment.",
        },
      ],
    },
  },
  trust: {
    eyebrow: "Trust",
    title: "Enterprise from the first conversation.",
    intro:
      "Security review, data residency and full audit trails are part of the platform, not a paid add-on.",
    badges: [
      { label: "SOC 2 Type II", sub: "Audited annually" },
      { label: "ISO 27001", sub: "Information security" },
      { label: "ISO 42001", sub: "AI management" },
      { label: "HIPAA", sub: "Health workloads" },
      { label: "GDPR", sub: "EU data residency" },
      { label: "EU AI Act", sub: "Transparency ready" },
    ],
    note: "Illustrative compliance programme for this demo.",
  },
  cta: {
    eyebrow: "Talk to us",
    title: "Bring one real queue. We will show you the resolution.",
    intro:
      "Twenty minutes, your transcripts, a working agent. No slide deck.",
    primary: "Book a demo",
    secondary: "hola@vado.example",
  },
  footer: {
    brand: "Vado",
    blurb:
      "The agent platform for customer experience. Built in Madrid, working everywhere.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Platform", href: "#product" },
          { label: "Customers", href: "#customers" },
          { label: "Trust", href: "#trust" },
          { label: "Book a demo", href: "#contact" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#product" },
          { label: "Contact", href: "mailto:hola@vado.example" },
          { label: "Security", href: "#trust" },
        ],
      },
    ],
    email: "hola@vado.example",
    locations: "Madrid · Mexico City · Remote",
    copyright: "© 2026 Vado",
  },
  notFound: {
    title: "Out of coverage.",
    body: "The page you are looking for does not exist or has moved.",
    cta: "Back to Vado",
  },
};

export type Dictionary = typeof en;
