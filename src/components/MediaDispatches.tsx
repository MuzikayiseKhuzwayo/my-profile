'use client';

import { BookOpen, Youtube, ArrowUpRight } from 'lucide-react';
import { mediaDispatches, MediaItem } from '@/data/profileData';

export default function MediaDispatches() {
  return (
    <section className="dispatchesContainer">
      <div className="sectionHeader">
        <div>
          <h2 className="sectionTitle">Hyper-Intentionalism & Systems Engineering</h2>
          <p className="sectionSubtitle">
            Core essays and technical architecture breakdowns exploring self-reinforcing systems and operating assumptions.
          </p>
        </div>
      </div>

      <div className="dispatchesGrid">
        {mediaDispatches.map((item: MediaItem) => {
          const isVideo = item.type === 'video';
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dispatchCard"
            >
              <div className="dispatchCardTop">
                <div className="dispatchBadgeRow">
                  <span className={`dispatchPlatformPill ${isVideo ? 'youtube' : 'substack'}`}>
                    {isVideo ? <Youtube size={14} /> : <BookOpen size={14} />}
                    <span>{item.platform}</span>
                  </span>
                  <span className="dispatchTag">{item.tag}</span>
                </div>
                <ArrowUpRight size={16} className="dispatchActionIcon" />
              </div>

              <div className="dispatchCardBody">
                <h3 className="dispatchTitle">{item.title}</h3>
                {item.subtitle && <p className="dispatchSubtitle">&ldquo;{item.subtitle}&rdquo;</p>}
                <p className="dispatchDescription">{item.description}</p>
              </div>

              <div className="dispatchFooter">
                <span className="dispatchDate">{item.date}</span>
                <span className="dispatchCta">
                  {isVideo ? 'Watch on YouTube' : 'Read on Substack'}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
