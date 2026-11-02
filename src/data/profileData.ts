export interface ValueBreakdown {
  target: string;
  detail: string;
}

export type ProjectCategory = 'agents' | 'quant' | 'tooling';

export interface ShowcaseProject {
  id: string;
  num: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  link: string;
  routeKey: string;
  repoLink: string;
  repoSlug: string;
  hasShowcase?: boolean;
  techStack: string[];
  whatItDoes: string;
  whyItMatters: ValueBreakdown[];
}

export interface VentureDivision {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  category: string;
  status: 'Live division' | 'Institutional layer';
  featured?: boolean;
  description: string;
  highlights: string[];
}

export interface MediaItem {
  id: string;
  type: 'article' | 'video';
  title: string;
  subtitle: string;
  description: string;
  url: string;
  platform: 'Substack' | 'YouTube';
  tag: string;
  thumbnail?: string;
  date?: string;
}

export const projectsList: ShowcaseProject[] = [
  {
    id: 'simulacra-uat',
    num: '01',
    name: 'Simulacra UAT',
    tagline: 'Autonomous user simulation and qualitative UX testing platform',
    category: 'agents',
    categoryLabel: 'Autonomous agents & LLMs',
    link: '/simulacra-uat',
    routeKey: '/simulacra-uat',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/simulacra-uat-tester',
    repoSlug: 'MuzikayiseKhuzwayo/simulacra-uat-tester',
    hasShowcase: true,
    techStack: ['Python', 'Playwright', 'LLM Agentic Loops', 'Synthetic Persona Modeling'],
    whatItDoes:
      'Instead of relying on brittle, selector-based end-to-end assertions like standard Cypress or Selenium scripts, Simulacra deploys a fleet of autonomous, persona-driven browser agents (SMB Owners, Enterprise Buyers, Software Engineers, and Low-Tech Consumers). These agents explore applications organically, exhibit human-like cognitive biases and hesitations, detect confusing UX patterns or dead-end flows, and rage-click misleading elements.',
    whyItMatters: [
      {
        target: 'For developers',
        detail:
          'Uncovers real-world drop-offs, accessibility traps, and onboarding friction before human users hit production, generating automated System Usability Scale (SUS) metrics and Customer Effort Scores (CES).',
      },
      {
        target: 'For AI researchers',
        detail:
          'Serves as a reference implementation for grounding LLMs in dynamic web environments with multi-step reasoning, perception feedback loops, and memory.',
      },
    ],
  },
  {
    id: 'dubstrata-btc-harness',
    num: '02',
    name: 'Dubstrata 5-Minute BTC Harness',
    tagline: '5-minute prediction market research and algorithmic execution engine',
    category: 'quant',
    categoryLabel: 'Quantitative & prediction markets',
    link: '/dubstrata-btc-harness',
    routeKey: '/dubstrata-btc-harness',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/prediction-market-analysis',
    repoSlug: 'MuzikayiseKhuzwayo/prediction-market-analysis',
    hasShowcase: true,
    techStack: ['Python', 'uv', 'Polymarket CLOB & Kalshi APIs', 'Parquet Indexing', 'WebSockets'],
    whatItDoes:
      'An institutional-grade research and live execution harness for trading binary prediction markets (specifically 5-minute Bitcoin Up/Down contracts on Polymarket). Implements a Three-Stage Positioning Framework supporting both continuous simulated paper-trading and live CLOB execution.',
    whyItMatters: [
      {
        target: 'For quants & AI practitioners',
        detail:
          'Prediction markets have rapidly become one of the most volatile and information-dense frontiers in financial ML. This repository provides a complete pipeline for orderbook microstructure analysis, alpha decomposition, calibration, and forecast evaluation without lookahead bias.',
      },
      {
        target: 'For engineers',
        detail:
          'Demonstrates high-throughput WebSocket ingestion, real-time state machine design, and deterministic trade execution against decentralized orderbooks.',
      },
    ],
  },
  {
    id: 'agentic-os',
    num: '03',
    name: 'Agentic Operating System (AOS)',
    tagline: 'Next-generation inference kernel and semantic OS architecture',
    category: 'agents',
    categoryLabel: 'Autonomous agents & LLMs',
    link: '/aos',
    routeKey: '/aos',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/gemma4good',
    repoSlug: 'MuzikayiseKhuzwayo/gemma4good',
    hasShowcase: true,
    techStack: ['Python', 'FastAPI', 'Gemma / Local LLMs', 'Vector Databases', 'Generative UI'],
    whatItDoes:
      'Rethinks the foundational compute paradigm by shifting from the traditional Kernel → Application → User hierarchy to an Inference Kernel → Tool Interface → Agentic Intent model. Includes an inference daemon managing context token budgeting, a shell agent translating intent to system APIs, a Semantic File System (semantic_fs), and streaming generative UI.',
    whyItMatters: [
      {
        target: 'For AI engineers',
        detail:
          'Addresses one of the biggest frontiers in software engineering: operating system-level agent orchestration. The semantic_fs replaces rigid directory trees with vector-indexed retrieval, providing an architectural blueprint for agent-native operating environments.',
      },
    ],
  },
  {
    id: 'strata',
    num: '04',
    name: 'Strata',
    tagline: 'Geopolitical situation monitor and autonomous multi-agent investigation hub',
    category: 'agents',
    categoryLabel: 'Autonomous agents & LLMs',
    link: '/strata',
    routeKey: '/strata',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/dubstrata-investigation',
    repoSlug: 'MuzikayiseKhuzwayo/dubstrata-investigation',
    hasShowcase: true,
    techStack: ['Python', 'FastAPI', 'Dubstrata MCP 1.3.0', 'Causal Knowledge Graphs', 'Multi-Agent SOPs', 'Live Telemetry'],
    whatItDoes:
      'A macro risk intelligence workstation and multi-agent cockpit compliant with the Dubstrata MCP Standard 1.3.0. Screens international geopolitical cascades and financial contagion streams, detects systemic anomalies, traverses causal knowledge graphs, and autonomously orchestrates 5 specialized subagents bounded by strict Standard Operating Procedures (SOPs) with cryptographic audit logging.',
    whyItMatters: [
      {
        target: 'For AI engineers & quants',
        detail:
          'Provides a reference implementation for deterministic multi-agent orchestration via MCP 1.3.0. Rather than unconstrained LLM loops, agents query causal graphs, debate across structured operational roles, and enforce verifiable compliance gates.',
      },
      {
        target: 'For systems developers',
        detail:
          'Features an interactive cockpit with Server-Sent Events (SSE) telemetry, real-time graph visualization, and Diátaxis-compliant technical documentation.',
      },
    ],
  },
  {
    id: 'aura-partner-research',
    num: '05',
    name: 'Aura Partner Research',
    tagline: 'Autonomous B2B and developer intelligence engine',
    category: 'tooling',
    categoryLabel: 'Developer tooling & infrastructure',
    link: '/aura-partner-research',
    routeKey: '/aura-partner-research',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/aura-research',
    repoSlug: 'MuzikayiseKhuzwayo/aura-research',
    hasShowcase: true,
    techStack: ['React', 'Vite', 'FastAPI', 'Google Gemini API', 'IMAP/SMTP Protocols'],
    whatItDoes:
      'An autonomous discovery and lead intelligence pipeline tailored for developer ecosystems. Dynamically crawls GitHub niches, rotates search heuristics with Gemini, parses technical profiles and star graphs, refines Ideal Customer Profiles (ICPs), and writes hyper-personalized multi-channel drafts directly into email inboxes (Gmail, Outlook, Yahoo) and social formats (LinkedIn, X).',
    whyItMatters: [
      {
        target: 'For builders',
        detail:
          'Combines LLM-driven web crawling, prompt expansion, and native protocol integrations (IMAP/SMTP draft generation) into a unified, privacy-first local server architecture.',
      },
    ],
  },
  {
    id: 'meta-marker',
    num: '06',
    name: 'Meta-Marker',
    tagline: 'Dynamic regime classifier and market intelligence engine',
    category: 'quant',
    categoryLabel: 'Quantitative & prediction markets',
    link: '/meta-marker',
    routeKey: '/meta-marker',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/meta-marker',
    repoSlug: 'MuzikayiseKhuzwayo/meta-marker',
    hasShowcase: true,
    techStack: ['Python', 'FastAPI', 'MetaTrader 5 (MT5) API', 'SQLite', 'Candlestick Charting UI'],
    whatItDoes:
      'Solves the classic flaw of static technical indicators by dynamically scoring, backtesting, and re-weighting indicators (EMAs, RSI, MACD, Stochastic, Break-of-Structure) based on how well they perform in specific real-time market regimes (Strong Trend, Tight Range, Expanding Volatility).',
    whyItMatters: [
      {
        target: 'For quants & ML engineers',
        detail:
          'Replaces naive lagging indicators with adaptive regime-conditional scoring. Connects directly to desktop MetaTrader 5 via IPC sync loops to produce a live confidence score matrix.',
      },
    ],
  },
  {
    id: 'cold-outbound-skills',
    num: '07',
    name: 'Cold Outbound Skills',
    tagline: 'Modular Claude Code agentic skills suite',
    category: 'tooling',
    categoryLabel: 'Developer tooling & infrastructure',
    link: 'https://github.com/MuzikayiseKhuzwayo/coldoutboundskills',
    routeKey: 'github/coldoutboundskills',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/coldoutboundskills',
    repoSlug: 'MuzikayiseKhuzwayo/coldoutboundskills',
    hasShowcase: false,
    techStack: ['Claude Code Skills', 'YAML', 'API Tooling (Prospeo, Google Maps)'],
    whatItDoes:
      'An open-source library of 29 modular Claude Code skills organized across 5 operational tracks: Strategy & ICP Intake, Infrastructure Provisioning, List Building, Stepwise Copywriting, and Deliverability Incident Response.',
    whyItMatters: [
      {
        target: 'For agent developers',
        detail:
          'Serves as a reference in modern agentic skill authoring for Claude Code. Demonstrates how to write deterministic YAML contracts, chain multi-step workflows, and build tool calling interfaces for local agent runtimes.',
      },
    ],
  },
  {
    id: 'polydata-v2',
    num: '08',
    name: 'PolyData v2',
    tagline: 'HyperSync on-chain Polymarket data pipeline',
    category: 'quant',
    categoryLabel: 'Quantitative & prediction markets',
    link: 'https://github.com/MuzikayiseKhuzwayo/poly_data',
    routeKey: 'github/poly_data',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/poly_data',
    repoSlug: 'MuzikayiseKhuzwayo/poly_data',
    hasShowcase: false,
    techStack: ['Python', 'Envio HyperSync', 'Polygon CTF Exchange V2 Contracts', 'CLOB API'],
    whatItDoes:
      'A high-speed indexing pipeline that streams order events and trade settlements directly from the Polygon CTF Exchange V2 contract across millions of blocks with zero RPC throttling, bypassing deprecated subgraphs.',
    whyItMatters: [
      {
        target: 'For data engineers & researchers',
        detail:
          'Provides unconstrained access to historical on-chain orderbook event logs and trade records for backtesting and predictive modeling.',
      },
    ],
  },
  {
    id: 'media-magic',
    num: '09',
    name: 'Media Magic (Mina Media Engine)',
    tagline: 'Autonomous media studio and deterministic video generation pipeline',
    category: 'tooling',
    categoryLabel: 'Developer tooling & infrastructure',
    link: '/media-magic',
    routeKey: '/media-magic',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/mina-ai',
    repoSlug: 'MuzikayiseKhuzwayo/mina-ai',
    hasShowcase: true,
    techStack: ['Python', 'FFmpeg', 'FastAPI', 'Async Queues', 'Interactive Switchboard'],
    whatItDoes:
      'A low-latency, deterministic media operating system designed for instant AI video editing, subtitle generation, interactive presentations, and automated broadcasting pipelines with an interactive switchboard.',
    whyItMatters: [
      {
        target: 'For content developers',
        detail:
          'Eliminates manual timeline scrubbing by providing programmable cuts, automated silence removal, multi-modal asset synthesis, and instant export.',
      },
      {
        target: 'For AI engineers',
        detail:
          'Bridges generative LLM reasoning with real-time media manipulation pipelines via declarative execution schemas.',
      },
    ],
  },
  {
    id: 'proposal-flow',
    num: '10',
    name: 'ProposalFlow',
    tagline: 'Autonomous Upwork proposal and teleprompter studio',
    category: 'tooling',
    categoryLabel: 'Developer tooling & infrastructure',
    link: '/proposal-flow',
    routeKey: '/proposal-flow',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/upwork-proposal-gen',
    repoSlug: 'MuzikayiseKhuzwayo/upwork-proposal-gen',
    hasShowcase: true,
    techStack: ['TypeScript', 'React', 'LLM Extraction', 'Diátaxis Engine', 'Lucide'],
    whatItDoes:
      'An autonomous pitch generation and teleprompter environment for client acquisition. Parses job postings, extracts key technical requirements and client pain points, and synthesizes structured, high-conversion proposals with synchronized teleprompter pacing.',
    whyItMatters: [
      {
        target: 'For agency builders',
        detail:
          'Compresses outbound response times from hours to seconds while adhering to rigorous Diátaxis framework documentation structures.',
      },
      {
        target: 'For AI engineers',
        detail:
          'Demonstrates persona-driven prompt engineering and real-time structured LLM formatting for high-stakes business communication.',
      },
    ],
  },
  {
    id: 'alchemy-crm',
    num: '11',
    name: 'Alchemy CRM (Laravel CRM)',
    tagline: 'Reactive sales pipelines, omni-channel visitor chat, and automated motions for Laravel',
    category: 'tooling',
    categoryLabel: 'Developer tooling & infrastructure',
    link: '/alchemy-crm',
    routeKey: '/alchemy-crm',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/crm',
    repoSlug: 'MuzikayiseKhuzwayo/crm',
    hasShowcase: true,
    techStack: ['PHP 8.2+', 'Laravel 11-13', 'Livewire', 'Tailwind CSS', 'REST API v2', 'SQLite/MySQL'],
    whatItDoes:
      'An enterprise-grade, open-source CRM package engineered natively for the Laravel ecosystem (venturedrake/laravel-crm v2.4.0). Eliminates SaaS seat costs by turning any Laravel application into a complete revenue operating system with multi-stage visual sales kanbans, deal velocity tracking, omni-channel live visitor chat, automated sales playbooks, and machine-accurate REST APIs.',
    whyItMatters: [
      {
        target: 'For Laravel developers & founders',
        detail:
          'Runs natively within existing Eloquent models, migrations, and tenancy architectures. Eliminates recurring third-party SaaS fees and removes brittle webhook synchronization lag.',
      },
      {
        target: 'For systems architects',
        detail:
          'Exposes a comprehensive REST API v2 with machine-accurate contract schemas, reactive Livewire components, and event-driven automation hooks for outbound and inbound workflows.',
      },
    ],
  },
];

export const venturesList: VentureDivision[] = [
  {
    id: 'dubstrata',
    title: 'Dubstrata',
    url: 'https://dubstrata.com',
    displayUrl: 'dubstrata.com',
    category: 'Causal financial & narrative intelligence CDN',
    status: 'Institutional layer',
    featured: true,
    description:
      'Causal financial and narrative intelligence infrastructure designed for quant trading desks, risk officers, and autonomous agent swarms. Deconstructs noisy, unstructured web data into dense, time-stamped causal substrates.',
    highlights: [
      'Real-time causal knowledge graph paired with crowdsourced conviction metrics',
      'Sub-150ms machine-readable time-series telemetry CDN',
      'Compliant with Dubstrata MCP 1.3.0 multi-agent investigation workflows',
    ],
  },
  {
    id: 'techfusion-alchemy',
    title: 'TechFusion Alchemy',
    url: 'https://techfusion-alchemy.xyz',
    displayUrl: 'techfusion-alchemy.xyz',
    category: 'AI business automation & product development',
    status: 'Live division',
    description:
      'Engineering division focused on autonomous growth engines, lead enrichment pipelines, and end-to-end operational workflows from first click to final sale.',
    highlights: [
      'Autonomous outbound & lead enrichment infrastructure',
      'Custom multi-agent workflow orchestration & CRM systems',
    ],
  },
  {
    id: 'quantix',
    title: 'Quantix',
    url: 'https://quantix-ai.app',
    displayUrl: 'quantix-ai.app',
    category: 'Financial market intelligence',
    status: 'Live division',
    description:
      'Plain-English market tracking and multi-asset analytics — demystifying financial markets with automated macro trend intelligence and regime-aware portfolio signals.',
    highlights: [
      'Multi-asset analytics & automated macro trend synthesis',
      'Regime-aware market intelligence without trading jargon',
    ],
  },
];

export const mediaDispatches: MediaItem[] = [
  {
    id: 'self-reinforcing-system',
    type: 'video',
    title: "I Built a Self-Reinforcing System and Here's What Happened",
    subtitle: 'Architecture & system breakdown',
    description:
      'A walkthrough showing how I designed, engineered, and deployed a self-reinforcing systems loop that scales without manual operational drag.',
    url: 'https://youtu.be/keXw5O_dlIs?si=5sjsPKHc7IWFAYZ_',
    platform: 'YouTube',
    tag: 'Systems engineering',
    thumbnail: 'https://i.ytimg.com/vi/keXw5O_dlIs/hqdefault.jpg',
    date: 'Muzi Khuzwayo Systems',
  },
  {
    id: 'seek-chaos',
    type: 'article',
    title: 'Seek Chaos if You Want Order',
    subtitle: 'The ability to hold and use complexity and paradox',
    description:
      "Don't seek order directly—order without testing creates fragility. Seek chaos instead, and let reality's chaotic feedback build unshakeable order.",
    url: 'https://3mk4y.substack.com/p/seek-chaos-if-you-want-order',
    platform: 'Substack',
    tag: 'Hyper-Intentionalism',
    date: 'Nov 2025',
  },
  {
    id: 'own-identity',
    type: 'article',
    title: 'Own Your Identity, or Change It Through Intentional Action',
    subtitle: 'Choose one path',
    description:
      'Action equals Identity. Your life will always move toward the natural conclusion that matches your unconscious assumptions about who you are.',
    url: 'https://3mk4y.substack.com/p/own-your-identity-or-change-it-through',
    platform: 'Substack',
    tag: 'Hyper-Intentionalism',
    date: 'Oct 2025',
  },
];

export const profileInfo = {
  name: 'Muzi Khuzwayo',
  handle: '@3mk4y',
  role: 'Systems architect & founder',
  location: 'Cape Town, South Africa',
  bio: 'Be hyper-intentional in every assumption',
  philosophy:
    'The true value of artificial intelligence and automation lies in human liberation. When we strip away the necessity of constant labor, we allow humanity to transcend survival mode.',
  avatarUrl:
    'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/muzikhuzwayo/Screenshot_20200404_131831.jpg',
  githubUrl: 'https://github.com/MuzikayiseKhuzwayo',
  email: 'muzikhuzwayo@techfusion-ventures.xyz',
  newsletter: {
    readers: '24 readers on Substack',
    title: 'Hyper-Intentionalism',
    description: 'Notes on automating operations and examining core assumptions.',
    url: 'https://substack.com/@3mk4y',
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/MuzikayiseKhuzwayo' },
    { name: 'X / Twitter', url: 'https://x.com/3mk4y_' },
    { name: 'YouTube', url: 'https://www.youtube.com/@MuziKhuzwayoSystems' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muzikayise-khuzwayo-121b43171/' },
    { name: 'Instagram', url: 'https://www.instagram.com/3mk4y_/' },
  ],
};
