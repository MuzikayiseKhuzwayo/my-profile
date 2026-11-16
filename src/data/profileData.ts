export type ProjectCategory = 'agents' | 'quant' | 'tooling';

export interface ShowcaseProject {
  id: string;
  name: string;
  tagline: string;
  summary: string;
  category: ProjectCategory;
  categoryLabel: string;
  link: string;
  routeKey: string;
  repoLink: string;
  repoSlug: string;
  hasShowcase: boolean;
  pinned?: boolean;
  techStack: string[];
}

export interface VentureModuleLink {
  name: string;
  category: ProjectCategory;
  href: string;
  routeKey: string;
}

export interface VentureDivision {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  tagline: string;
  summary: string;
  highlights: string[];
  modules?: VentureModuleLink[];
}

export const projectsList: ShowcaseProject[] = [
  {
    id: 'simulacra-uat',
    name: 'Simulacra UAT',
    tagline: 'AI browser testers that behave like real people',
    summary:
      'Instead of brittle click-selector scripts, Simulacra spins up persona-driven browser agents — impatient buyers, confused first-time users, engineers — to explore your app, get stuck on bad UX, and score usability before real customers hit it.',
    category: 'agents',
    categoryLabel: 'AI Agents',
    link: '/simulacra-uat',
    routeKey: '/simulacra-uat',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/simulacra-uat-tester',
    repoSlug: 'simulacra-uat-tester',
    hasShowcase: true,
    pinned: true,
    techStack: ['Python', 'Playwright', 'Agent Loops', 'UX Scoring'],
  },
  {
    id: 'dubstrata-btc-harness',
    name: '5-Minute BTC Harness',
    tagline: 'Trading & backtest engine for 5-minute Polymarket BTC contracts',
    summary:
      'Streams live orderbook ticks and tests short-horizon Bitcoin Up/Down strategies on Polymarket and Kalshi without lookahead bias. Supports paper trading alongside live CLOB execution.',
    category: 'quant',
    categoryLabel: 'Markets & Quant',
    link: '/dubstrata-btc-harness',
    routeKey: '/dubstrata-btc-harness',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/prediction-market-analysis',
    repoSlug: 'prediction-market-analysis',
    hasShowcase: true,
    pinned: true,
    techStack: ['Python', 'Polymarket CLOB', 'Kalshi API', 'Parquet', 'WebSockets'],
  },
  {
    id: 'strata',
    name: 'Strata',
    tagline: 'Multi-agent macro & geopolitical risk desk',
    summary:
      'Tracks global news cascades and market knock-on effects on a causal graph. Coordinates five focused AI agents with clear operating rules so investigations stay auditable instead of hallucinating.',
    category: 'agents',
    categoryLabel: 'AI Agents',
    link: '/strata',
    routeKey: '/strata',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/dubstrata-investigation',
    repoSlug: 'dubstrata-investigation',
    hasShowcase: true,
    pinned: true,
    techStack: ['Python', 'FastAPI', 'Dubstrata MCP', 'Causal Graphs', 'SSE'],
  },
  {
    id: 'agentic-os',
    name: 'Agentic OS (AOS)',
    tagline: 'An experiment in putting local LLMs at the OS layer',
    summary:
      'Flips the usual app-centric desktop on its head: a local Gemma kernel manages token budgets, a semantic file system replaces nested folders with vector search, and UI views stream on the fly.',
    category: 'agents',
    categoryLabel: 'AI Agents',
    link: '/aos',
    routeKey: '/aos',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/gemma4good',
    repoSlug: 'gemma4good',
    hasShowcase: true,
    techStack: ['Python', 'FastAPI', 'Gemma', 'Vector Search', 'Generative UI'],
  },
  {
    id: 'meta-marker',
    name: 'Meta-Marker',
    tagline: 'Market regime detector wired directly into MetaTrader 5',
    summary:
      'Technical indicators fail when the market regime shifts beneath them. Meta-Marker scores how indicators perform across trends, tight ranges, and volatility spikes in real time via MT5.',
    category: 'quant',
    categoryLabel: 'Markets & Quant',
    link: '/meta-marker',
    routeKey: '/meta-marker',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/meta-marker',
    repoSlug: 'meta-marker',
    hasShowcase: true,
    techStack: ['Python', 'FastAPI', 'MetaTrader 5', 'SQLite', 'Charts'],
  },
  {
    id: 'polydata-v2',
    name: 'PolyData v2',
    tagline: 'Fast on-chain Polymarket trade indexer on Polygon',
    summary:
      'Pulls historical order events and settlements straight from Polygon CTF Exchange V2 contracts using Envio HyperSync — millions of blocks with no RPC rate-limit headaches.',
    category: 'quant',
    categoryLabel: 'Markets & Quant',
    link: 'https://github.com/MuzikayiseKhuzwayo/poly_data',
    routeKey: 'github/poly_data',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/poly_data',
    repoSlug: 'poly_data',
    hasShowcase: false,
    techStack: ['Python', 'Envio HyperSync', 'Polygon', 'CLOB API'],
  },
  {
    id: 'aura-partner-research',
    name: 'Aura Partner Research',
    tagline: 'Local lead discovery & outreach drafts for developer tools',
    summary:
      'Finds relevant builders across GitHub niches, maps what they care about with Gemini, and drops ready-to-review outreach drafts straight into your Gmail or Outlook drafts folder over IMAP.',
    category: 'tooling',
    categoryLabel: 'Tools',
    link: '/aura-partner-research',
    routeKey: '/aura-partner-research',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/aura-research',
    repoSlug: 'aura-research',
    hasShowcase: true,
    techStack: ['React', 'FastAPI', 'Gemini API', 'IMAP/SMTP'],
  },
  {
    id: 'media-magic',
    name: 'Media Magic (Mina)',
    tagline: 'Programmable video cuts, captions, and live switchboard',
    summary:
      'Built because scrubbing timelines by hand takes forever. Automates silence cuts, subtitles, and slide-deck overlays through a fast Python + FFmpeg pipeline.',
    category: 'tooling',
    categoryLabel: 'Tools',
    link: '/media-magic',
    routeKey: '/media-magic',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/mina-ai',
    repoSlug: 'mina-ai',
    hasShowcase: true,
    techStack: ['Python', 'FFmpeg', 'FastAPI', 'Async Queues'],
  },
  {
    id: 'proposal-flow',
    name: 'ProposalFlow',
    tagline: 'Upwork pitch writer paired with a built-in video teleprompter',
    summary:
      'Reads a client brief, pulls out what they actually need solved, drafts a clean proposal, and gives you a paced teleprompter script so you can record a quick Loom in minutes.',
    category: 'tooling',
    categoryLabel: 'Tools',
    link: '/proposal-flow',
    routeKey: '/proposal-flow',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/upwork-proposal-gen',
    repoSlug: 'upwork-proposal-gen',
    hasShowcase: true,
    techStack: ['TypeScript', 'React', 'LLM Extraction'],
  },
  {
    id: 'alchemy-crm',
    name: 'Alchemy CRM',
    tagline: 'Self-hosted sales pipelines & live chat inside Laravel',
    summary:
      'Drops visual deal kanbans, visitor live chat, and automated follow-ups straight into any Laravel app so teams can skip per-seat CRM bills.',
    category: 'tooling',
    categoryLabel: 'Tools',
    link: '/alchemy-crm',
    routeKey: '/alchemy-crm',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/crm',
    repoSlug: 'crm',
    hasShowcase: true,
    techStack: ['PHP 8.2+', 'Laravel', 'Livewire', 'REST API'],
  },
  {
    id: 'cold-outbound-skills',
    name: 'Cold Outbound Skills',
    tagline: '29 plug-and-play Claude Code skills for outbound ops',
    summary:
      'A modular set of Claude Code workflows covering ICP research, inbox setup, list building, copywriting, and fixing deliverability snags.',
    category: 'tooling',
    categoryLabel: 'Tools',
    link: 'https://github.com/MuzikayiseKhuzwayo/coldoutboundskills',
    routeKey: 'github/coldoutboundskills',
    repoLink: 'https://github.com/MuzikayiseKhuzwayo/coldoutboundskills',
    repoSlug: 'coldoutboundskills',
    hasShowcase: false,
    techStack: ['Claude Code', 'YAML', 'Prospeo', 'Google Maps'],
  },
];

export const venturesList: VentureDivision[] = [
  {
    id: 'dubstrata',
    title: 'Dubstrata',
    url: 'https://dubstrata.com',
    displayUrl: 'dubstrata.com',
    tagline: 'Causal alt-data & narrative feeds for markets',
    summary:
      'Most market feeds tell you what moved after the fact. Dubstrata turns messy web news, prediction markets, and macro signals into structured, time-stamped causal data that traders and AI agents can actually query.',
    highlights: [
      'Live causal knowledge graph linking news events to market moves',
      'Fast time-series API (<150ms) built for quants and agent workflows',
      'Zero-lookahead point-in-time records for honest backtesting',
    ],
    modules: [
      {
        name: '5-Minute BTC Harness',
        category: 'quant',
        href: '/dubstrata-btc-harness',
        routeKey: '/dubstrata-btc-harness',
      },
      {
        name: 'Strata Risk Desk',
        category: 'agents',
        href: '/strata',
        routeKey: '/strata',
      },
      {
        name: 'PolyData v2 Indexer',
        category: 'quant',
        href: 'https://github.com/MuzikayiseKhuzwayo/poly_data',
        routeKey: 'github/poly_data',
      },
    ],
  },
  {
    id: 'techfusion-alchemy',
    title: 'TechFusion Alchemy',
    url: 'https://techfusion-alchemy.xyz',
    displayUrl: 'techfusion-alchemy.xyz',
    tagline: 'Custom AI workflows & growth automation for businesses',
    summary:
      'My hands-on engineering studio helping businesses replace repetitive manual ops — from lead research and outbound to custom CRMs and internal AI tools that save real hours every week.',
    highlights: [
      'Automated lead enrichment and multi-channel outbound pipelines',
      'Custom internal AI agents, dashboards, and CRM integrations',
      'End-to-end delivery from first workflow audit to production',
    ],
  },
  {
    id: 'quantix',
    title: 'Quantix',
    url: 'https://quantix-ai.app',
    displayUrl: 'quantix-ai.app',
    tagline: 'Plain-English market tracking without Wall Street jargon',
    summary:
      'Financial tools shouldn’t require a quant degree to read. Quantix tracks multi-asset trends and market regimes and explains what’s shifting in clear, everyday language.',
    highlights: [
      'Cross-asset trend and volatility tracking in one clean view',
      'Regime-aware signals translated into plain English',
      'Built for everyday investors who want signal without noise',
    ],
  },
];

export const profileInfo = {
  name: 'Muzi Khuzwayo',
  fullName: 'Muzikayise Khuzwayo',
  handle: '@3mk4y_',
  role: 'Builder, engineer & founder',
  location: 'Cape Town, South Africa',
  githubUrl: 'https://github.com/MuzikayiseKhuzwayo',
  email: 'muzikhuzwayo@techfusion-ventures.xyz',
  avatarUrl:
    'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/muzikhuzwayo/Screenshot_20200404_131831.jpg',
  newsletter: {
    title: 'Hyper-Intentionalism',
    description:
      'Where I write about questioning default assumptions, building leverage with AI, and designing systems that hold up under chaos.',
    url: 'https://3mk4y.substack.com',
  },
};
