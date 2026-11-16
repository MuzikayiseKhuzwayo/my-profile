import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { YouTubeVideoItem } from '@/lib/feeds';

interface VideoCardProps {
  video: YouTubeVideoItem;
  showDescription?: boolean;
}

export default function VideoCard({ video, showDescription = false }: VideoCardProps) {
  return (
    <article className="videoCard" data-slot="video-card">
      <div className="videoThumbWrap">
        <Image
          src={video.thumbnail}
          alt=""
          width={480}
          height={270}
          className="videoThumbImg"
        />
        {video.isShort && <span className="videoFormatBadge">Short</span>}
      </div>

      <div className="videoCardBody">
        <div className="videoMetaRow">
          <span className={`channelDot ${video.channelKey}`} aria-hidden="true" />
          <span className="videoChannelTag">{video.channelShortLabel}</span>
          {video.publishedLabel && (
            <>
              <span className="metaSep" aria-hidden="true">·</span>
              <span className="videoDateText tabularNum">{video.publishedLabel}</span>
            </>
          )}
          <ArrowUpRight size={15} strokeWidth={1.5} className="cardCornerIcon" aria-hidden="true" />
        </div>

        <h3 className="videoCardTitle">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cardStretchLink"
          >
            {video.title}
          </a>
        </h3>

        {showDescription && video.description && (
          <p className="videoCardDesc">{video.description}</p>
        )}
      </div>
    </article>
  );
}
