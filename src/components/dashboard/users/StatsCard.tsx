import React from 'react';
import type { StatItem } from '@/src/types/stats.types';

export interface StatsCardProps extends StatItem {
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  className = '',
}) => {
  return (
    <div
      className={`bg-[#F2F8FD] rounded-[10px] p-[14px_16px] flex flex-col gap-[6px] ${className}`}
    >
      <span className="text-[13px] text-[#50677D]">{label}</span>
      <span className="font-mono text-[26px] font-medium tracking-[-0.02em] text-[#10273D]">
        {value}
      </span>
    </div>
  );
};

export default StatsCard;
