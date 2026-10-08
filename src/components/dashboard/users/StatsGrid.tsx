import React from 'react';
import { StatsCard } from './StatsCard';
import type { StatItem } from '@/src/types/stats.types';

export interface StatsGridProps {
  stats: StatItem[];
  className?: string;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats, className = '' }) => {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3 ${className}`}
    >
      {stats.map((item) => (
        <StatsCard key={item.label} label={item.label} value={item.value} />
      ))}
    </div>
  );
};

export default StatsGrid;
