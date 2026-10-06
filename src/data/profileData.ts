export interface VentureProject {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  category: string;
  status: 'Live' | 'Beta' | 'Building';
  revenue: string;
  revenueNumeric: number;
  description: string;
  badge: 'Stripe' | 'Paystack' | 'Institutional' | 'Pending';
  isInstitutional?: boolean;
  chartData: { month: string; value: number }[];
  chartLabel?: string;
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

// Monthly trend generator
const generateTrendData = (startVal: number, endVal: number, volatility = 0.15) => {
  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
  const step = (endVal - startVal) / (months.length - 1);
  return months.map((month, index) => {
    const baseline = startVal + step * index;
    const randomShift = (Math.random() - 0.4) * baseline * volatility;
    return {
      month,
      value: Math.round(Math.max(baseline + randomShift, 500))
    };
  });
};

export const venturesList: VentureProject[] = [
  {
    id: 'techfusion-alchemy',
    title: 'TechFusion Alchemy',
    url: 'https://techfusion-alchemy.xyz',
    displayUrl: 'techfusion-alchemy.xyz',
    category: 'AI Business Automation & Growth',
    status: 'Live',
    revenue: '$14,800/mo',
    revenueNumeric: 14800,
    description: 'Full-stack AI systems that automate your entire business — from first click to final sale. End-to-end autonomous growth engines, lead enrichment, dynamic nurturing, and operations workflows.',
    badge: 'Stripe',
    accentColor: '#06b6d4', // Cyan
    chartLabel: 'Monthly Earnings Over Time',
    chartData: generateTrendData(4200, 14800, 0.12)
  },
  {
    id: 'quantix',
    title: 'Quantix',
    url: 'https://quantix-ai.app',
    displayUrl: 'quantix-ai.app',
    category: 'Financial Market Intelligence',
    status: 'Live',
    revenue: '$6,400/mo',
    revenueNumeric: 6400,
    description: 'Plain-English market tracking — no trading background needed. Demystifying financial markets with intuitive multi-asset analytics and automated macro trend intelligence.',
    badge: 'Stripe',
    accentColor: '#fbbf24', // Amber gold
    chartLabel: 'Monthly Earnings Over Time',
    chartData: generateTrendData(1800, 6400, 0.15)
  },
  {
    id: 'dubstrata',
    title: 'Dubstrata',
    url: 'https://dubstrata.com',
    displayUrl: 'dubstrata.com',
    category: 'Institutional Risk Monitoring Layer',
    status: 'Live',
    revenue: 'Institutional',
    revenueNumeric: 0,
    isInstitutional: true,
    description: 'Premier causal financial & narrative intelligence infrastructure for quant trading desks and risk officers. Structures news, filings, and prediction markets into verified cause-and-effect risk chains.',
    badge: 'Institutional',
    accentColor: '#eab308', // Dubstrata Gold
    chartLabel: 'Monthly Causal Telemetry (Signals / Mo)',
    chartData: generateTrendData(1500, 12400, 0.1)
  },
  {
    id: 'upcoming-pipeline-1',
    title: 'New Venture (Pipeline)',
    url: '#',
    displayUrl: 'Connecting API...',
    category: 'Autonomous Operations',
    status: 'Building',
    revenue: 'Pending API',
    revenueNumeric: 0,
    description: 'Next automated SaaS project currently in development. Payment gateway and analytics API integration pending deployment.',
    badge: 'Pending',
    accentColor: '#94a3b8',
    chartLabel: 'Monthly Earnings Over Time',
    chartData: generateTrendData(0, 0, 0)
  }
];

export const mediaDispatches: MediaItem[] = [
  {
    id: 'seek-chaos',
    type: 'article',
    title: 'Seek Chaos if You Want Order.',
    subtitle: 'The ability to hold and use complexity and paradox.',
    description: 'Don\'t seek order directly—order without testing creates fragility. Seek chaos instead, and let reality\'s chaotic feedback build unshakeable order.',
    url: 'https://3mk4y.substack.com/p/seek-chaos-if-you-want-order',
    platform: 'Substack',
    tag: 'Hyper-Intentionalism',
    date: 'Nov 2025'
  },
  {
    id: 'own-identity',
    type: 'article',
    title: 'Own your Identity. Or Change it Through Intentional Action.',
    subtitle: 'Choose one path.',
    description: 'Action equals Identity. Your life will always move toward the natural conclusion that matches your unconscious assumptions about who you are.',
    url: 'https://3mk4y.substack.com/p/own-your-identity-or-change-it-through',
    platform: 'Substack',
    tag: 'Hyper-Intentionalism',
    date: 'Oct 2025'
  },
  {
    id: 'self-reinforcing-system',
    type: 'video',
    title: 'I Built a SELF-REINFORCING SYSTEM and Here\'s What Happened',
    subtitle: 'Architecture & System Breakdown',
    description: 'A deep walkthrough showing how I designed, engineered, and deployed a self-reinforcing systems loop that scales without manual operational drag.',
    url: 'https://youtu.be/keXw5O_dlIs?si=5sjsPKHc7IWFAYZ_',
    platform: 'YouTube',
    tag: 'Systems Engineering',
    thumbnail: 'https://i.ytimg.com/vi/keXw5O_dlIs/hqdefault.jpg',
    date: 'Muzi Khuzwayo Systems'
  }
];

export const profileInfo = {
  name: 'Muzi Khuzwayo',
  handle: '@3mk4y',
  location: 'Cape Town, South Africa',
  bio: 'Be Hyper Intentional In Every Assumption.',
  avatarUrl: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/muzikhuzwayo/Screenshot_20200404_131831.jpg',
  newsletter: {
    readers: '24 Magicians read',
    title: 'Hyper-Intentionalism',
    description: 'I share my journey as I automate my life through my assumptions.',
    url: 'https://substack.com/@3mk4y'
  },
  socials: [
    { name: 'X / Twitter', url: 'https://x.com/3mk4y_' },
    { name: 'YouTube', url: 'https://www.youtube.com/@MuziKhuzwayoSystems' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muzikayise-khuzwayo-121b43171/' },
    { name: 'Instagram', url: 'https://www.instagram.com/3mk4y/' }
  ]
};
