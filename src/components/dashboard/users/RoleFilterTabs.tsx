'use client';

import React from 'react';
import type { RoleFilter } from '@/src/types/user.types';
import type { RoleTab } from '@/src/types/stats.types';

export interface RoleFilterTabsProps {
  tabs: RoleTab[];
  activeFilter: RoleFilter;
  onFilterChange: (filter: RoleFilter) => void;
  className?: string;
}

export const RoleFilterTabs: React.FC<RoleFilterTabsProps> = ({
  tabs,
  activeFilter,
  onFilterChange,
  className = '',
}) => {
  return (
    <div
      role="group"
      aria-label="Filter by role"
      className={`flex flex-wrap gap-1 bg-[#DCEBF8] rounded-lg p-[3px] self-start max-w-full ${className}`}
    >
      {tabs.map((t) => {
        const isActive = activeFilter === t.key;

        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onFilterChange(t.key)}
            aria-pressed={isActive}
            className={`h-[38px] px-[14px] border-0 rounded-[6px] text-[14px] cursor-pointer inline-flex items-center gap-2 transition-[background-color,color,transform] select-none active:scale-[0.97] ${
              isActive
                ? 'bg-white text-[#10273D] font-medium shadow-xs'
                : 'bg-transparent text-[#34506A] hover:text-[#10273D]'
            }`}
          >
            <span>{t.label}</span>
            <span className="font-mono text-[12px] text-[#50677D]">{t.count}</span>
          </button>
        );
      })}
    </div>
  );
};

export default RoleFilterTabs;
