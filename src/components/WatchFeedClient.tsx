'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import VideoCard from '@/components/VideoCard';
import type { ChannelKey, YouTubeChannelConfig } from '@/data/channels';
import type { YouTubeVideoItem } from '@/lib/feeds';

type ChannelFilter = 'all' | ChannelKey;
type FormatFilter = 'all' | 'videos' | 'shorts';

interface WatchFeedClientProps {
  videos: YouTubeVideoItem[];
  channels: YouTubeChannelConfig[];
}

const FORMAT_OPTIONS: { id: FormatFilter; label: string }[] = [
  { id: 'all', label: 'All formats' },
  { id: 'videos', label: 'Full videos' },
  { id: 'shorts', label: 'Shorts' },
];

export default function WatchFeedClient({ videos, channels }: WatchFeedClientProps) {
  const [selectedChannel, setSelectedChannel] = useState<ChannelFilter>('all');
  const [selectedFormat, setSelectedFormat] = useState<FormatFilter>('all');
  const channelTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const formatBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const channelTabs: { id: ChannelFilter; label: string; dot?: ChannelKey; count: number }[] = [
    { id: 'all', label: 'All channels', count: videos.length },
    ...channels.map((ch) => ({
      id: ch.key as ChannelFilter,
      label: ch.shortLabel,
      dot: ch.key,
      count: videos.filter((v) => v.channelKey === ch.key).length,
    })),
  ];

  const filteredVideos = videos.filter((video) => {
    if (selectedChannel !== 'all' && video.channelKey !== selectedChannel) return false;
    if (selectedFormat === 'videos' && video.isShort) return false;
    if (selectedFormat === 'shorts' && !video.isShort) return false;
    return true;
  });

  function handleChannelKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const isRtl = getComputedStyle(event.currentTarget).direction === 'rtl';
    const nextKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
    const prevKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
    let nextIndex: number | null = null;

    if (event.key === nextKey) {
      nextIndex = (index + 1) % channelTabs.length;
    } else if (event.key === prevKey) {
      nextIndex = (index - 1 + channelTabs.length) % channelTabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = channelTabs.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setSelectedChannel(channelTabs[nextIndex].id);
      channelTabRefs.current[nextIndex]?.focus();
    }
  }

  function handleFormatKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const isRtl = getComputedStyle(event.currentTarget).direction === 'rtl';
    const nextKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
    const prevKey = isRtl ? 'ArrowRight' : 'ArrowLeft';
    let nextIndex: number | null = null;

    if (event.key === nextKey || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % FORMAT_OPTIONS.length;
    } else if (event.key === prevKey || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + FORMAT_OPTIONS.length) % FORMAT_OPTIONS.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = FORMAT_OPTIONS.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      setSelectedFormat(FORMAT_OPTIONS[nextIndex].id);
      formatBtnRefs.current[nextIndex]?.focus();
    }
  }

  return (
    <section className="pageSection" data-slot="youtube-feed">
      <div className="channelDirectoryGrid">
        {channels.map((ch) => (
          <article key={ch.key} className="channelCard" data-slot="channel-card">
            <div className="channelCardTop">
              <span className={`channelDot ${ch.key}`} aria-hidden="true" />
              <span className="channelHandleMono">{ch.handle}</span>
              <ArrowUpRight size={15} strokeWidth={1.5} className="cardCornerIcon" aria-hidden="true" />
            </div>
            <h2 className="channelCardTitle">
              <a
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cardStretchLink"
              >
                {ch.label}
              </a>
            </h2>
            <p className="channelCardDesc">{ch.description}</p>
          </article>
        ))}
      </div>

      <div className="sectionHeaderBar">
        <h2 className="sectionTitle">Latest uploads</h2>
        <span className="sectionMeta tabularNum">{videos.length} recent drops</span>
      </div>

      <div className="controlsToolbar" data-slot="controls">
        <div className="filterTabs" role="tablist" aria-label="Filter videos by channel">
          {channelTabs.map((tab, index) => {
            const isSelected = selectedChannel === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  channelTabRefs.current[index] = el;
                }}
                id={`yt-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls="yt-feed-panel"
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedChannel(tab.id)}
                onKeyDown={(e) => handleChannelKeyDown(e, index)}
                className="filterTabBtn"
              >
                {tab.dot && <span className={`channelDot ${tab.dot}`} aria-hidden="true" />}
                <span>{tab.label}</span>
                <span className="filterTabCount tabularNum">{tab.count}</span>
              </button>
            );
          })}
        </div>

        <div className="formatToggleGroup" role="radiogroup" aria-label="Video format">
          {FORMAT_OPTIONS.map((opt, index) => {
            const isChecked = selectedFormat === opt.id;
            return (
              <button
                key={opt.id}
                ref={(el) => {
                  formatBtnRefs.current[index] = el;
                }}
                type="button"
                role="radio"
                aria-checked={isChecked}
                tabIndex={isChecked ? 0 : -1}
                onClick={() => setSelectedFormat(opt.id)}
                onKeyDown={(e) => handleFormatKeyDown(e, index)}
                className="formatOptionBtn"
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="yt-feed-panel"
        role="tabpanel"
        aria-labelledby={`yt-tab-${selectedChannel}`}
        data-slot="video-grid"
      >
        {filteredVideos.length === 0 ? (
          <div className="emptyStateBox">
            <p>No uploads match that filter yet — try switching back to All formats.</p>
          </div>
        ) : (
          <div className="videoGrid">
            {filteredVideos.map((video) => (
              <VideoCard key={`${video.channelKey}-${video.id}`} video={video} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
