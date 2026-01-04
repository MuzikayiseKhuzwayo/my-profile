'use client';

import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { Lock } from 'lucide-react';

interface StatsCardProps {
    title: string;
    revenue: string;
    description: string;
    icon: React.ReactNode;
    data: { name: string; value: number }[];
    isActive?: boolean;
}

const StatsCard = ({ title, revenue, description, icon, data, isActive = false }: StatsCardProps) => {
    return (
        <div className={`statsCard ${!isActive ? 'inactive' : ''}`}>
            {!isActive && (
                <div className="statsOverlay">
                    <div className="statsOverlayContent">
                        <Lock size={24} />
                        <span>Locked</span>
                    </div>
                </div>
            )}

            <div className="statsHeader">
                <div className="statsTitleRow">
                    <div className="statsIconWrapper">
                        {icon}
                    </div>
                    <h2 className="statsTitle">{title}</h2>
                </div>
                <div className="statsBadge">
                    <span className="stripeIcon">S</span>
                    <span>{revenue}</span>
                </div>
            </div>

            <p className="statsDescription">{description}</p>

            <div className="statsChartContainer">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.4} /> {/* Amber 400 with 0.4 opacity */}
                                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="name"
                            hide={true}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1f2937',
                                borderRadius: '8px',
                                border: '1px solid #374151',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                            }}
                            itemStyle={{ color: '#f3f4f6' }}
                            labelStyle={{ color: '#9ca3af', marginBottom: '0.25rem' }}
                            cursor={{ stroke: '#fbbf24', strokeWidth: 1, strokeDasharray: '3 3' }}
                            formatter={(value: number | string | undefined) => [`$${Number(value || 0).toLocaleString()}`, 'Revenue']}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#fbbf24"
                            fillOpacity={1}
                            fill={`url(#gradient-${title})`}
                            strokeWidth={3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatsCard;
