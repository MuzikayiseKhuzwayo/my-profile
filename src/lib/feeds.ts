import {
  YOUTUBE_CHANNELS,
  SUBSTACK_FEED_URL,
  type ChannelKey,
  type YouTubeChannelConfig,
} from '@/data/channels';

export interface YouTubeVideoItem {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  publishedLabel: string;
  description: string;
  views: number | null;
  isShort: boolean;
  channelKey: ChannelKey;
  channelLabel: string;
  channelShortLabel: string;
  channelUrl: string;
}

export interface SubstackPostItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  publishedAt: string;
  publishedLabel: string;
}

const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatUtcDate(isoOrRfcDate: string): string {
  const parsed = new Date(isoOrRfcDate);
  if (Number.isNaN(parsed.getTime())) return '';
  const month = MONTHS_SHORT[parsed.getUTCMonth()];
  const day = parsed.getUTCDate();
  const year = parsed.getUTCFullYear();
  return `${month} ${day}, ${year}`;
}

function decodeXmlEntities(raw: string): string {
  return raw
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim();
}

function stripHtml(raw: string): string {
  return decodeXmlEntities(raw.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateText(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  const sliced = text.slice(0, maxChars);
  const lastSpace = sliced.lastIndexOf(' ');
  return `${(lastSpace > 40 ? sliced.slice(0, lastSpace) : sliced).trim()}…`;
}

async function resolveChannelIdFromHandle(channelUrl: string): Promise<string | null> {
  try {
    const res = await fetch(channelUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MuziProfileFeed/1.0)',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return null;
    const html = await res.text();
    const match =
      html.match(/<link rel="canonical" href="https:\/\/www\.youtube\.com\/channel\/(UC[\w-]+)"/) ||
      html.match(/"externalId":"(UC[\w-]+)"/) ||
      html.match(/"channelId":"(UC[\w-]+)"/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

async function fetchChannelVideos(channel: YouTubeChannelConfig): Promise<YouTubeVideoItem[]> {
  const channelId = channel.channelId || (await resolveChannelIdFromHandle(channel.url));
  if (!channelId) return [];

  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const res = await fetch(feedUrl, {
    next: { revalidate: 900 },
    signal: AbortSignal.timeout(6000),
  });

  if (!res.ok) return [];
  const xml = await res.text();
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];

  return entries
    .map((entryMatch): YouTubeVideoItem | null => {
      const block = entryMatch[1];
      const videoId = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim();
      const rawTitle = block.match(/<title>([\s\S]*?)<\/title>/)?.[1];
      const linkHref = block.match(/<link rel="alternate" href="([^"]+)"/)?.[1]?.trim();
      const publishedAt = block.match(/<published>([^<]+)<\/published>/)?.[1]?.trim();
      const rawDesc = block.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] ?? '';
      const thumbUrl =
        block.match(/<media:thumbnail[^>]+url="([^"]+)"/)?.[1]?.trim() ||
        (videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '');
      const viewsRaw = block.match(/<media:statistics[^>]+views="(\d+)"/)?.[1];

      if (!videoId || !rawTitle || !publishedAt) return null;

      const url = linkHref || `https://www.youtube.com/watch?v=${videoId}`;
      const isShort = url.includes('/shorts/');
      const cleanDesc = truncateText(stripHtml(rawDesc), 150);

      return {
        id: videoId,
        title: decodeXmlEntities(rawTitle),
        url,
        thumbnail: thumbUrl,
        publishedAt,
        publishedLabel: formatUtcDate(publishedAt),
        description: cleanDesc,
        views: viewsRaw ? Number(viewsRaw) : null,
        isShort,
        channelKey: channel.key,
        channelLabel: channel.label,
        channelShortLabel: channel.shortLabel,
        channelUrl: channel.url,
      };
    })
    .filter((item): item is YouTubeVideoItem => item !== null);
}

const FALLBACK_VIDEOS: YouTubeVideoItem[] = [
  {
    id: 'paZhH20NA_A',
    title: 'The Death of Black-Scholes: Why a 12-Line Neural Network Killed the Greeks',
    url: 'https://www.youtube.com/watch?v=paZhH20NA_A',
    thumbnail: 'https://i.ytimg.com/vi/paZhH20NA_A/hqdefault.jpg',
    publishedAt: '2026-10-25T16:56:40+00:00',
    publishedLabel: 'Oct 25, 2026',
    description:
      'Why classic option-pricing assumptions break in real markets and how neural hedging models replace static Greeks.',
    views: null,
    isShort: false,
    channelKey: 'systems',
    channelLabel: 'Muzi Khuzwayo',
    channelShortLabel: 'Systems',
    channelUrl: 'https://www.youtube.com/@MuziKhuzwayoSystems',
  },
  {
    id: 'BKDqSjiigFU',
    title: 'The Forbidden Desert Where Workers Swept Diamonds with Kitchen Brooms',
    url: 'https://www.youtube.com/shorts/BKDqSjiigFU',
    thumbnail: 'https://i.ytimg.com/vi/BKDqSjiigFU/hqdefault.jpg',
    publishedAt: '2026-11-16T05:45:08+00:00',
    publishedLabel: 'Nov 16, 2026',
    description: 'How scarcity, land control, and capital shaped southern African diamond markets.',
    views: null,
    isShort: true,
    channelKey: 'business',
    channelLabel: 'Muzi Khuzwayo Business',
    channelShortLabel: 'Business',
    channelUrl: 'https://www.youtube.com/@MuziKhuzwayoBusiness',
  },
  {
    id: 'qOE_4hYjaNI',
    title: "5.0% Treasury Gravity, Dubstrata's 1.381 Sharpe IWM vs. IJH Spread & The 20% Causal Graph Pivot",
    url: 'https://www.youtube.com/shorts/qOE_4hYjaNI',
    thumbnail: 'https://i.ytimg.com/vi/qOE_4hYjaNI/hqdefault.jpg',
    publishedAt: '2026-11-11T11:41:25+00:00',
    publishedLabel: 'Nov 11, 2026',
    description: 'Unscripted market and engineering log on Treasury rates and causal graph modeling.',
    views: null,
    isShort: true,
    channelKey: 'unscripted',
    channelLabel: 'Muzi Khuzwayo Unscripted',
    channelShortLabel: 'Unscripted',
    channelUrl: 'https://www.youtube.com/@MuziKhuzwayoUnscripted',
  },
];

const FALLBACK_POSTS: SubstackPostItem[] = [
  {
    id: 'titanic',
    title: 'How to predict who dies on the Titanic',
    subtitle: 'Feature representation is everything when modeling reality.',
    url: 'https://3mk4y.substack.com/p/how-to-predict-who-dies-on-the-titanic',
    publishedAt: '2026-03-14T07:10:54Z',
    publishedLabel: 'Mar 14, 2026',
  },
  {
    id: 'make-it-pay',
    title: 'When you go through hell, make it pay',
    subtitle: 'Turning hard lessons into durable leverage.',
    url: 'https://3mk4y.substack.com/p/when-you-go-through-hell-make-it',
    publishedAt: '2025-11-21T17:29:50Z',
    publishedLabel: 'Nov 21, 2025',
  },
  {
    id: 'seek-chaos',
    title: 'Seek Chaos if You Want Order',
    subtitle: 'Order without real-world stress testing creates fragility.',
    url: 'https://3mk4y.substack.com/p/seek-chaos-if-you-want-order',
    publishedAt: '2025-11-15T08:17:45Z',
    publishedLabel: 'Nov 15, 2025',
  },
];

export async function getAllYouTubeVideos(): Promise<YouTubeVideoItem[]> {
  const results = await Promise.allSettled(
    YOUTUBE_CHANNELS.map((channel) => fetchChannelVideos(channel)),
  );

  const merged: YouTubeVideoItem[] = [];
  for (const result of results) {
    if (result.status === 'fulfilled') {
      merged.push(...result.value);
    }
  }

  if (merged.length === 0) return FALLBACK_VIDEOS;

  return merged.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function pickHomeChannelHighlights(videos: YouTubeVideoItem[]): YouTubeVideoItem[] {
  const picks: YouTubeVideoItem[] = [];
  for (const channel of YOUTUBE_CHANNELS) {
    const newestForChannel = videos.find((v) => v.channelKey === channel.key);
    if (newestForChannel) {
      picks.push(newestForChannel);
    }
  }
  return picks.length > 0 ? picks : videos.slice(0, 3);
}

export async function getSubstackPosts(limit = 6): Promise<SubstackPostItem[]> {
  try {
    const res = await fetch(SUBSTACK_FEED_URL, {
      next: { revalidate: 900 },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return FALLBACK_POSTS.slice(0, limit);

    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    const parsed = items
      .map((match): SubstackPostItem | null => {
        const block = match[1];
        const rawTitle = block.match(/<title>([\s\S]*?)<\/title>/)?.[1];
        const rawDesc = block.match(/<description>([\s\S]*?)<\/description>/)?.[1] ?? '';
        const link = block.match(/<link>([^<]+)<\/link>/)?.[1]?.trim();
        const pubDate = block.match(/<pubDate>([^<]+)<\/pubDate>/)?.[1]?.trim();

        if (!rawTitle || !link || !pubDate) return null;
        const title = decodeXmlEntities(rawTitle).replace(/\.$/, '');
        const subtitle = truncateText(stripHtml(rawDesc), 140);

        return {
          id: link,
          title,
          subtitle,
          url: link,
          publishedAt: new Date(pubDate).toISOString(),
          publishedLabel: formatUtcDate(pubDate),
        };
      })
      .filter((item): item is SubstackPostItem => item !== null);

    return parsed.length > 0 ? parsed.slice(0, limit) : FALLBACK_POSTS.slice(0, limit);
  } catch {
    return FALLBACK_POSTS.slice(0, limit);
  }
}
