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
  repoLink: string;
  hasShowcase?: boolean;
  techStack: string[];
  whatItDoes: string;
  whyItMatters: ValueBreakdown[];
  iconName: 'Bot' | 'TrendingUp' | 'Cpu' | 'Layers' | 'Sparkles' | 'Workflow' | 'Database';
}

export interface VentureDivision {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  category: string;
  status: 'Live' | 'Institutional';
  description: string;
  highlights: string[];
  accentColor: string;
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
    tagline: 'Autonomous User Simulation & Qualitative UX Testing Platform',
    category: 'agents',
    categoryLabel: 'Autonomous Agents & LLMs',
    link: '/simulacra-uat',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/simulacra-uat-tester',
    hasShowcase: true,
    techStack: ['Python', 'Playwright', 'LLM Agentic Loops', 'Synthetic Persona Modeling'],
    whatItDoes:
      'Instead of relying on brittle, selector-based end-to-end assertions (e.g., standard Cypress or Selenium scripts), Simulacra deploys a fleet of autonomous, persona-driven browser agents (such as SMB Owners, Enterprise Buyers, Software Engineers, and Low-Tech Consumers). These agents explore applications organically, exhibit human-like cognitive biases and hesitations, detect confusing UX patterns or dead-end flows, and rage-click misleading elements.',
    whyItMatters: [
      {
        target: 'For Developers',
        detail:
          'Uncovers real-world drop-offs, accessibility traps, and onboarding friction before human users hit production, generating automated System Usability Scale (SUS) metrics and Customer Effort Scores (CES).',
      },
      {
        target: 'For AI Researchers',
        detail:
          'Serves as a reference implementation for grounding LLMs in dynamic web environments with multi-step reasoning, perception feedback loops, and memory.',
      },
    ],
    iconName: 'Bot',
  },
  {
    id: 'dubstrata-btc-harness',
    num: '02',
    name: 'Dubstrata 5-Minute BTC Harness',
    tagline: '5-Minute Prediction Market Research & Algorithmic Execution Engine',
    category: 'quant',
    categoryLabel: 'Quantitative & Prediction Markets',
    link: '/dubstrata-btc-harness',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/prediction-market-analysis',
    hasShowcase: true,
    techStack: ['Python', 'uv', 'Polymarket CLOB & Kalshi APIs', 'Parquet Indexing', 'WebSockets'],
    whatItDoes:
      'An institutional-grade research and live execution harness for trading binary prediction markets (specifically 5-minute Bitcoin Up/Down contracts on Polymarket). Implements a Three-Stage Positioning Framework supporting both continuous simulated paper-trading and live CLOB execution.',
    whyItMatters: [
      {
        target: 'For Quants & AI Practitioners',
        detail:
          'Prediction markets have rapidly become one of the most volatile and information-dense frontiers in financial ML. This repository provides a complete pipeline for orderbook microstructure analysis, alpha decomposition, calibration, and forecast evaluation without lookahead bias.',
      },
      {
        target: 'For Engineers',
        detail:
          'Demonstrates high-throughput WebSocket ingestion, real-time state machine design, and deterministic trade execution against decentralized orderbooks.',
      },
    ],
    iconName: 'TrendingUp',
  },
  {
    id: 'agentic-os',
    num: '03',
    name: 'Agentic Operating System (AOS)',
    tagline: 'Next-Generation Inference Kernel & Semantic OS Architecture',
    category: 'agents',
    categoryLabel: 'Autonomous Agents & LLMs',
    link: '/aos',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/gemma4good',
    hasShowcase: true,
    techStack: ['Python', 'FastAPI', 'Gemma / Local LLMs', 'Vector Databases', 'Generative UI'],
    whatItDoes:
      'Rethinks the foundational compute paradigm by shifting from the traditional Kernel → Application → User hierarchy to an Inference Kernel → Tool Interface → Agentic Intent model. Includes an inference daemon managing context token budgeting, a shell agent translating intent to system APIs, a Semantic File System (semantic_fs), and streaming generative UI.',
    whyItMatters: [
      {
        target: 'For AI Engineers',
        detail:
          'Addresses one of the biggest frontiers in software engineering: operating system-level agent orchestration. The semantic_fs replaces rigid directory trees with vector-indexed retrieval, providing an architectural blueprint for agent-native operating environments.',
      },
    ],
    iconName: 'Cpu',
  },
  {
    id: 'strata',
    num: '04',
    name: 'Strata',
    tagline: 'Geopolitical Situation Monitor & Autonomous Multi-Agent Investigation Hub',
    category: 'agents',
    categoryLabel: 'Autonomous Agents & LLMs',
    link: '/strata',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/dubstrata-investigation',
    hasShowcase: true,
    techStack: ['Python', 'FastAPI', 'Dubstrata MCP 1.3.0', 'Causal Knowledge Graphs', 'Multi-Agent SOPs', 'Live Telemetry'],
    whatItDoes:
      'A macro risk intelligence workstation and multi-agent cockpit compliant with the Dubstrata MCP Standard 1.3.0. Screens international geopolitical cascades and financial contagion streams, detects systemic anomalies, traverses causal knowledge graphs, and autonomously orchestrates 5 specialized subagents bounded by strict Standard Operating Procedures (SOPs) with cryptographic audit logging.',
    whyItMatters: [
      {
        target: 'For AI Engineers & Quants',
        detail:
          'Provides a reference implementation for deterministic multi-agent orchestration via MCP 1.3.0. Rather than unconstrained LLM loops, agents query causal graphs, debate across structured operational roles, and enforce verifiable compliance gates.',
      },
      {
        target: 'For Systems Developers',
        detail:
          'Features an interactive glassmorphic cockpit with Server-Sent Events (SSE) telemetry, real-time graph visualization, and Diátaxis-compliant technical documentation.',
      },
    ],
    iconName: 'Layers',
  },
  {
    id: 'aura-partner-research',
    num: '05',
    name: 'Aura Partner Research',
    tagline: 'Autonomous B2B & Developer Intelligence Engine',
    category: 'tooling',
    categoryLabel: 'Developer Tooling & Infrastructure',
    link: '/aura-partner-research',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/aura-research',
    hasShowcase: true,
    techStack: ['React', 'Vite', 'FastAPI', 'Google Gemini API', 'IMAP/SMTP Protocols'],
    whatItDoes:
      'An autonomous discovery and lead intelligence pipeline tailored for developer ecosystems. Dynamically crawls GitHub niches, rotates search heuristics with Gemini, parses technical profiles and star graphs, refines Ideal Customer Profiles (ICPs), and writes hyper-personalized multi-channel drafts directly into email inboxes (Gmail, Outlook, Yahoo) and social formats (LinkedIn, X).',
    whyItMatters: [
      {
        target: 'For Builders',
        detail:
          'Combines LLM-driven web crawling, prompt expansion, and native protocol integrations (IMAP/SMTP draft generation) into a unified, privacy-first local server architecture.',
      },
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'meta-marker',
    num: '06',
    name: 'Meta-Marker',
    tagline: 'Dynamic Regime Classifier & Market Intelligence Engine (MIE)',
    category: 'quant',
    categoryLabel: 'Quantitative & Prediction Markets',
    link: '/meta-marker',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/meta-marker',
    hasShowcase: true,
    techStack: ['Python', 'FastAPI', 'MetaTrader 5 (MT5) API', 'SQLite', 'Candlestick Charting UI'],
    whatItDoes:
      'Solves the classic flaw of static technical indicators by dynamically scoring, backtesting, and re-weighting indicators (EMAs, RSI, MACD, Stochastic, Break-of-Structure) based on how well they perform in specific real-time market regimes (e.g., Strong Trend, Tight Range, Expanding Volatility).',
    whyItMatters: [
      {
        target: 'For Quants & ML Engineers',
        detail:
          'Replaces naive lagging indicators with adaptive regime-conditional scoring. Connects directly to desktop MetaTrader 5 via IPC sync loops to produce a live confidence score matrix.',
      },
    ],
    iconName: 'TrendingUp',
  },
  {
    id: 'cold-outbound-skills',
    num: '07',
    name: 'Cold Outbound Skills',
    tagline: 'Modular Claude Code Agentic Skills Suite',
    category: 'tooling',
    categoryLabel: 'Developer Tooling & Infrastructure',
    link: 'https://github.com/MuzikayiseKhuzwayo/coldoutboundskills',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/coldoutboundskills',
    hasShowcase: false,
    techStack: ['Claude Code Skills', 'YAML', 'API Tooling (Prospeo, Google Maps)'],
    whatItDoes:
      'An open-source library of 29 modular Claude Code skills organized across 5 operational tracks: Strategy & ICP Intake, Infrastructure Provisioning, List Building, Stepwise Copywriting, and Deliverability Incident Response.',
    whyItMatters: [
      {
        target: 'For Agent Developers',
        detail:
          'Serves as a masterclass in modern agentic skill authoring for Claude Code. Demonstrates how to write deterministic YAML contracts, chain multi-step workflows, and build tool calling interfaces for local agent runtimes.',
      },
    ],
    iconName: 'Workflow',
  },
  {
    id: 'polydata-v2',
    num: '08',
    name: 'PolyData v2',
    tagline: 'HyperSync On-Chain Polymarket Data Pipeline',
    category: 'quant',
    categoryLabel: 'Quantitative & Prediction Markets',
    link: 'https://github.com/MuzikayiseKhuzwayo/poly_data',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/poly_data',
    hasShowcase: false,
    techStack: ['Python', 'Envio HyperSync', 'Polygon CTF Exchange V2 Contracts', 'CLOB API'],
    whatItDoes:
      'A high-speed indexing pipeline that streams order events and trade settlements directly from the Polygon CTF Exchange V2 contract across millions of blocks with zero RPC throttling, bypassing deprecated subgraphs.',
    whyItMatters: [
      {
        target: 'For Data Engineers & Researchers',
        detail:
          'Provides unconstrained access to historical on-chain orderbook event logs and trade records for backtesting and predictive modeling.',
      },
    ],
    iconName: 'Database',
  },
  {
    id: 'media-magic',
    num: '09',
    name: 'Media Magic (Mina Media Engine)',
    tagline: 'Autonomous Media Studio & Deterministic Video Generation Pipeline',
    category: 'tooling',
    categoryLabel: 'Developer Tooling & Infrastructure',
    link: '/media-magic',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/mina-ai',
    hasShowcase: true,
    techStack: ['Python', 'FFmpeg', 'FastAPI', 'Async Queues', 'Interactive Switchboard'],
    whatItDoes:
      'A low-latency, deterministic media operating system designed for instant AI video editing, subtitle generation, interactive presentations, and automated broadcasting pipelines with an interactive switchboard.',
    whyItMatters: [
      {
        target: 'For Content Developers',
        detail:
          'Eliminates manual timeline scrubbing by providing programmable cuts, automated silence removal, multi-modal asset synthesis, and instant export.',
      },
      {
        target: 'For AI Engineers',
        detail:
          'Bridges generative LLM reasoning with real-time media manipulation pipelines via declarative execution schemas.',
      },
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'proposal-flow',
    num: '10',
    name: 'ProposalFlow',
    tagline: 'Autonomous Upwork Proposal & Teleprompter Studio',
    category: 'tooling',
    categoryLabel: 'Developer Tooling & Infrastructure',
    link: '/proposal-flow',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/upwork-proposal-gen',
    hasShowcase: true,
    techStack: ['TypeScript', 'React', 'LLM Extraction', 'Diátaxis Engine', 'Lucide'],
    whatItDoes:
      'An autonomous pitch generation and teleprompter environment for client acquisition. Parses job postings, extracts key technical requirements and client pain points, and synthesizes structured, high-conversion proposals with synchronised teleprompter pacing.',
    whyItMatters: [
      {
        target: 'For Agency Builders',
        detail:
          'Compresses outbound response times from hours to seconds while adhering to rigorous Diátaxis framework documentation structures.',
      },
      {
        target: 'For AI Engineers',
        detail:
          'Demonstrates persona-driven prompt engineering and real-time structured LLM formatting for high-stakes business communication.',
      },
    ],
    iconName: 'Workflow',
  },
  {
    id: 'alchemy-crm',
    num: '11',
    name: 'Alchemy CRM (Laravel CRM)',
    tagline: 'Reactive Sales Pipelines, Omni-Channel Visitor Chat & Automated Motions for Laravel',
    category: 'tooling',
    categoryLabel: 'Developer Tooling & Infrastructure',
    link: '/alchemy-crm',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/crm',
    hasShowcase: true,
    techStack: ['PHP 8.2+', 'Laravel 11-13', 'Livewire', 'Tailwind CSS', 'REST API v2', 'SQLite/MySQL'],
    whatItDoes:
      'An enterprise-grade, open-source CRM package engineered natively for the Laravel ecosystem (venturedrake/laravel-crm v2.4.0). Eliminates SaaS seat costs by turning any Laravel application into a complete revenue operating system with multi-stage visual sales kanbans, deal velocity tracking, omni-channel live visitor chat, automated sales playbooks (lead routing, dynamic follow-ups), and machine-accurate REST APIs.',
    whyItMatters: [
      {
        target: 'For Laravel Developers & Founders',
        detail:
          'Runs natively within existing Eloquent models, migrations, and tenancy architectures. Eliminates recurring third-party SaaS fees (Salesforce, HubSpot) and removes brittle webhook synchronization lag.',
      },
      {
        target: 'For Systems Architects',
        detail:
          'Exposes a comprehensive REST API v2 with machine-accurate contract schemas, reactive Livewire components, and event-driven automation hooks for outbound and inbound marketing workflows.',
      },
    ],
    iconName: 'Workflow',
  },
];

export const venturesList: VentureDivision[] = [
  {
    id: 'dubstrata',
    title: 'Dubstrata',
    url: 'https://dubstrata.com',
    displayUrl: 'dubstrata.com',
    category: 'Causal Financial & Narrative Intelligence CDN',
    status: 'Institutional',
    description:
      'A premier Causal Financial & Narrative Intelligence CDN designed for quant trading desks, risk officers, and autonomous agent swarms. Deconstructs noisy, unstructured web data into dense, time-stamped causal substrates.',
    highlights: [
      'Real-time causal knowledge graph with crowdsourced conviction metrics',
      'Sub-150ms low-latency machine-readable time-series telemetry CDN',
    ],
    accentColor: '#eab308',
  },
  {
    id: 'techfusion-alchemy',
    title: 'TechFusion Alchemy',
    url: 'https://techfusion-alchemy.xyz',
    displayUrl: 'techfusion-alchemy.xyz',
    category: 'AI Business Automation & Product Development',
    status: 'Live',
    description:
      'Premier division focused on Automation & AI Product Development — building proprietary tools, autonomous growth engines, lead enrichment pipelines, and operational systems from first click to final sale.',
    highlights: [
      'End-to-end autonomous growth and outbound infrastructure',
      'Custom multi-agent workflow orchestration & CRM systems',
    ],
    accentColor: '#06b6d4',
  },
  {
    id: 'quantix',
    title: 'Quantix',
    url: 'https://quantix-ai.app',
    displayUrl: 'quantix-ai.app',
    category: 'Financial Market Intelligence',
    status: 'Live',
    description:
      'Plain-English market tracking and multi-asset analytics — demystifying financial markets with automated macro trend intelligence and regime-aware portfolio signals.',
    highlights: [
      'Multi-asset analytics & automated macro trend synthesis',
      'Accessible institutional-grade market intelligence',
    ],
    accentColor: '#fbbf24',
  },
];

export const mediaDispatches: MediaItem[] = [
  {
    id: 'seek-chaos',
    type: 'article',
    title: 'Seek Chaos if You Want Order.',
    subtitle: 'The ability to hold and use complexity and paradox.',
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
    title: 'Own your Identity. Or Change it Through Intentional Action.',
    subtitle: 'Choose one path.',
    description:
      'Action equals Identity. Your life will always move toward the natural conclusion that matches your unconscious assumptions about who you are.',
    url: 'https://3mk4y.substack.com/p/own-your-identity-or-change-it-through',
    platform: 'Substack',
    tag: 'Hyper-Intentionalism',
    date: 'Oct 2025',
  },
  {
    id: 'self-reinforcing-system',
    type: 'video',
    title: "I Built a SELF-REINFORCING SYSTEM and Here's What Happened",
    subtitle: 'Architecture & System Breakdown',
    description:
      'A deep walkthrough showing how I designed, engineered, and deployed a self-reinforcing systems loop that scales without manual operational drag.',
    url: 'https://youtu.be/keXw5O_dlIs?si=5sjsPKHc7IWFAYZ_',
    platform: 'YouTube',
    tag: 'Systems Engineering',
    thumbnail: 'https://i.ytimg.com/vi/keXw5O_dlIs/hqdefault.jpg',
    date: 'Muzi Khuzwayo Systems',
  },
];

export const profileInfo = {
  name: 'Muzi Khuzwayo',
  handle: '@3mk4y',
  role: 'Systems Architect & Founder',
  location: 'Cape Town, South Africa',
  bio: 'Be Hyper Intentional In Every Assumption.',
  philosophy:
    'The true value of artificial intelligence and automation lies in human liberation. When we strip away the necessity of constant labor, we allow humanity to transcend survival mode.',
  avatarUrl:
    'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/muzikhuzwayo/Screenshot_20200404_131831.jpg',
  githubUrl: 'https://github.com/MuzikayiseKhuzwayo',
  email: 'muzikhuzwayo@techfusion-ventures.xyz',
  newsletter: {
    readers: '24 Magicians read',
    title: 'Hyper-Intentionalism',
    description: 'I share my journey as I automate my life through my assumptions.',
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
