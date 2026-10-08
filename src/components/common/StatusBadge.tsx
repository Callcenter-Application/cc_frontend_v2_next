import React from 'react';
import type { Status } from '@/src/types/user.types';

export interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const STATUS_DOT_CLASSES: Record<Status, string> = {
  Active: 'bg-[#2E8B57]',
  'On break': 'bg-[#C7781F]',
  Inactive: 'bg-[#9A9397]',
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const dotColorClass = STATUS_DOT_CLASSES[status] ?? 'bg-gray-400';

  return (
    <span className={`inline-flex items-center gap-[6px] text-[13px] text-[#1F1C1E] ${className}`}>
      <span className={`w-2 h-2 rounded-full inline-block shrink-0 ${dotColorClass}`} />
      <span>{status}</span>
    </span>
  );
};

export default StatusBadge;
