export type ChannelKey = 'systems' | 'business' | 'unscripted';

export interface YouTubeChannelConfig {
  key: ChannelKey;
  label: string;
  shortLabel: string;
  handle: string;
  url: string;
  channelId: string;
  description: string;
}

export const YOUTUBE_CHANNELS: YouTubeChannelConfig[] = [
  {
    key: 'systems',
    label: 'Muzi Khuzwayo',
    shortLabel: 'Systems',
    handle: '@MuziKhuzwayoSystems',
    url: 'https://www.youtube.com/@MuziKhuzwayoSystems',
    channelId: 'UCDn6RQEp_9DGAAMIJk6LCeQ',
    description: 'AI agents, quant models, and technical system walkthroughs',
  },
  {
    key: 'business',
    label: 'Muzi Khuzwayo Business',
    shortLabel: 'Business',
    handle: '@MuziKhuzwayoBusiness',
    url: 'https://www.youtube.com/@MuziKhuzwayoBusiness',
    channelId: 'UCotJs0IjqDkZly7mQEBiByg',
    description: 'Business stories, strategy, capital, and market history',
  },
  {
    key: 'unscripted',
    label: 'Muzi Khuzwayo Unscripted',
    shortLabel: 'Unscripted',
    handle: '@MuziKhuzwayoUnscripted',
    url: 'https://www.youtube.com/@MuziKhuzwayoUnscripted',
    channelId: 'UC_3fDpfqxO2DlBp_8lPSXOw',
    description: 'Raw daily updates, market notes, and building in public',
  },
];

export const SUBSTACK_FEED_URL = 'https://3mk4y.substack.com/feed';
export const SUBSTACK_PUBLICATION_URL = 'https://3mk4y.substack.com';
