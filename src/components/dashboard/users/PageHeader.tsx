'use client';

import React from 'react';
import { PlusIcon } from '@/src/components/common/Icons';

export interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  onActionClick?: () => void;
  accent?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title = 'Users',
  subtitle = 'Manage supervisors, agents and administrators',
  actionLabel = 'Create user',
  onActionClick,
  accent = '#2B7BC0',
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 p-1 ${className}`}>
      <div className="flex flex-col gap-[2px] mr-auto">
        <h1 className="m-0 text-[26px] font-semibold tracking-[-0.015em] text-[#10273D]">
          {title}
        </h1>
        <span className="text-[14px] text-[#50677D]">{subtitle}</span>
      </div>
      <button
        type="button"
        onClick={onActionClick}
        style={{ backgroundColor: accent }}
        className="h-11 px-[18px] border-0 rounded-lg text-white font-medium text-[14px] cursor-pointer flex items-center gap-2 hover:opacity-90 active:opacity-95 transition-opacity"
      >
        <PlusIcon className="w-4 h-4 stroke-[2.2]" />
        <span>{actionLabel}</span>
      </button>
    </div>
  );
};

export default PageHeader;
