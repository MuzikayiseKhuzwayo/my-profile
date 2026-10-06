'use client';

import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { ExternalLink, Lock, Shield } from 'lucide-react';
import { VentureProject } from '@/data/profileData';

interface StatsCardProps {
  venture: VentureProject;
}

export default function StatsCard({ venture }: StatsCardProps) {
  const isBuilding = venture.status === 'Building';
  const color = venture.accentColor || '#fbbf24';

  return (
    <div className={`statsCard ${isBuilding ? 'inactive' : ''}`}>
      {isBuilding && (
        <div className="statsOverlay">
          <div className="statsOverlayContent">
            <Lock size={22} />
            <span>Connecting Payment API Key</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="statsHeader">
        <div className="statsTitleRow">
          <div>
            <div className="statsTitleTop">
              <h2 className="statsTitle">{venture.title}</h2>
              {venture.url && venture.url !== '#' && (
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
        </div>

        <div className="statsBadge">
          {venture.badge === 'Institutional' ? (
            <span className="paymentBadgeIcon institutional">
              <Shield size={10} />
            </span>
          ) : (
            <span className={`paymentBadgeIcon ${venture.badge.toLowerCase()}`}>
              {venture.badge === 'Paystack' ? 'P' : 'S'}
            </span>
          )}
          <span className="revenueText">{venture.revenue}</span>
        </div>
      </div>

      {/* Description */}
      <p className="statsDescription">{venture.description}</p>

      {/* Chart Section */}
      <div className="statsChartContainer">
        <div className="chartHeaderRow">
          <span className="chartLabel">{venture.chartLabel || 'Monthly Earnings Over Time'}</span>
        </div>

        <ResponsiveContainer width="100%" height={130}>
          <AreaChart data={venture.chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`gradient-${venture.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                <stop offset="95%" stopColor={color} stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" hide />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                fontSize: '12px',
                padding: '6px 10px'
              }}
              labelStyle={{ color: '#94a3b8', marginBottom: '2px' }}
              itemStyle={{ color: '#f8fafc', fontWeight: 600 }}
              cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: '3 3' }}
              formatter={(value: number | string | undefined) => [
                venture.isInstitutional
                  ? `${Number(value || 0).toLocaleString()} signals/mo`
                  : `$${Number(value || 0).toLocaleString()}`,
                venture.isInstitutional ? 'Causal Telemetry' : 'Earnings'
              ]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fillOpacity={1}
              fill={`url(#gradient-${venture.id})`}
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
