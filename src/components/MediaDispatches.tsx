'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { mediaDispatches } from '@/data/profileData';

export default function MediaDispatches() {
  const videoItem = mediaDispatches.find((m) => m.type === 'video');
  const articleItems = mediaDispatches.filter((m) => m.type === 'article');

  return (
    <section className="dispatchesSection" id="dispatches">
      <div className="sectionHeaderRow">
        <div>
          <h2 className="sectionHeading">Essays &amp; architecture walkthroughs</h2>
          <p className="sectionSubhead">
            Technical breakdowns and essays on self-reinforcing systems and operating assumptions
          </p>
        </div>
      </div>

      <div className="dispatchesAsymmetricGrid">
        {/* Featured Video Breakdown on Left */}
        {videoItem && (
          <a
            href={videoItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="featuredVideoCard"
          >
            {videoItem.thumbnail && (
              <div className="videoThumbnailFrame">
                <Image
                  src={videoItem.thumbnail}
                  alt={videoItem.title}
                  width={640}
                  height={360}
                  className="videoThumbnailImg"
                />
                <div className="videoThumbnailFade" />
              </div>
            )}

            <div className="featuredVideoBody">
              <div className="dispatchMetaRow">
                <span className="dispatchSourceLabel">{videoItem.platform}</span>
                <span className="inspectorSep">·</span>
                <span className="dispatchTagText">{videoItem.tag}</span>
                <ArrowUpRight size={16} strokeWidth={1.5} className="dispatchTrailingIcon" />
              </div>

              <h3 className="dispatchCardTitle">{videoItem.title}</h3>
              <p className="dispatchCardSubtitle">{videoItem.subtitle}</p>
              <p className="dispatchCardDescription">{videoItem.description}</p>

              <div className="dispatchCardFooter">
                <span className="dispatchDateMeta">{videoItem.date}</span>
                <span className="dispatchActionText">Watch walkthrough on YouTube</span>
              </div>
            </div>
          </a>
        )}

        {/* Stacked Substack Essays on Right */}
        <div className="essaysStackCol">
          {articleItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="essayRowCard"
            >
              <div className="dispatchMetaRow">
                <span className="dispatchSourceLabel">{item.platform}</span>
                <span className="inspectorSep">·</span>
                <span className="dispatchTagText">{item.tag}</span>
                <span className="inspectorSep">·</span>
                <span className="dispatchDateMeta">{item.date}</span>
                <ArrowUpRight size={16} strokeWidth={1.5} className="dispatchTrailingIcon" />
              </div>

              <h3 className="dispatchCardTitle">{item.title}</h3>
              <p className="dispatchCardSubtitle">{item.subtitle}</p>
              <p className="dispatchCardDescription">{item.description}</p>

              <div className="dispatchCardFooter">
                <span className="dispatchActionText">Read essay on Substack</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
