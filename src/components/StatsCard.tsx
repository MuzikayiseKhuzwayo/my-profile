'use client';

import { ArrowUpRight } from 'lucide-react';
import { VentureDivision } from '@/data/profileData';

interface StatsCardProps {
  venture: VentureDivision;
}

export default function StatsCard({ venture }: StatsCardProps) {
  return (
    <article className={`divisionCard ${venture.featured ? 'featured' : ''}`}>
      <div className="divisionHeader">
        <div className="divisionTitleGroup">
          <div className="divisionTitleRow">
            <h3 className="divisionTitle">{venture.title}</h3>
            <a
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="divisionDomainLink"
            >
              <kbd className="routeKeycap">{venture.displayUrl}</kbd>
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>
          <span className="divisionCategory">{venture.category}</span>
        </div>

        <span className="divisionStatusMeta">{venture.status}</span>
      </div>

      <p className="divisionDescription">{venture.description}</p>

      <ul className="divisionSpecsList">
        {venture.highlights.map((item, idx) => (
          <li key={idx} className="divisionSpecRow">
            <span className="specBullet" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
