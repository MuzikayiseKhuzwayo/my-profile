'use client';

import { ExternalLink, Shield, Cpu, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import { VentureDivision } from '@/data/profileData';

interface StatsCardProps {
  venture: VentureDivision;
}

export default function StatsCard({ venture }: StatsCardProps) {
  const Icon =
    venture.id === 'dubstrata'
      ? Zap
      : venture.id === 'techfusion-alchemy'
        ? Cpu
        : TrendingUp;

  return (
    <div className="statsCard">
      {/* Header */}
      <div className="statsHeader">
        <div className="statsTitleRow">
          <div className="statsTitleTop">
            <span
              className="divisionIconBadge"
              style={{
                borderColor: `${venture.accentColor}40`,
                color: venture.accentColor,
              }}
            >
              <Icon size={18} />
            </span>
            <h3 className="statsTitle">{venture.title}</h3>
            {venture.url && (
              <a
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="statsUrlLink"
                title={`Visit ${venture.displayUrl}`}
              >
                <span>{venture.displayUrl}</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
          <span className="statsCategory">{venture.category}</span>
        </div>

        <div className="statsBadge">
          {venture.status === 'Institutional' ? (
            <span className="paymentBadgeIcon institutional">
              <Shield size={10} />
            </span>
          ) : (
            <span
              className="livePulseDot"
              style={{ backgroundColor: venture.accentColor }}
            />
          )}
          <span className="revenueText">
            {venture.status === 'Institutional' ? 'Institutional' : 'Live Division'}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="statsDescription">{venture.description}</p>

      {/* Highlights */}
      <div className="divisionHighlights">
        {venture.highlights.map((item, idx) => (
          <div key={idx} className="divisionHighlightItem">
            <CheckCircle2 size={14} style={{ color: venture.accentColor, flexShrink: 0 }} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
