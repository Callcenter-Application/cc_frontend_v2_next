import React from 'react';
import type { QueueHealth } from '@/src/types/navigation.types';
import { DEFAULT_QUEUE_HEALTH } from '@/src/data/navigation.data';

export interface SidebarQueueHealthProps {
  data?: QueueHealth;
  className?: string;
}

export const SidebarQueueHealth: React.FC<SidebarQueueHealthProps> = ({
  data = DEFAULT_QUEUE_HEALTH,
  className = '',
}) => {
  return (
    <div
      className={`mt-auto p-[14px_12px] rounded-[10px] bg-[#C7DEF2] flex flex-col gap-1 ${className}`}
    >
      <span className="text-[12px] text-[#3F5F7C]">{data.title}</span>
      <span className="text-[14px] font-medium text-[#10273D]">{data.statusText}</span>
    </div>
  );
};

export default SidebarQueueHealth;
