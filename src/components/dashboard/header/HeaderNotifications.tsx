'use client';

import React from 'react';
import { BellIcon } from '@/src/components/common/Icons';

export interface HeaderNotificationsProps {
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

export const HeaderNotifications: React.FC<HeaderNotificationsProps> = ({
  onClick,
  className = '',
  'aria-label': ariaLabel = 'Notifications',
}) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`w-11 h-11 border-0 rounded-lg bg-transparent text-[#4A4447] flex items-center justify-center cursor-pointer hover:bg-[#EAE6E2] transition-colors ${className}`}
    >
      <BellIcon className="w-5 h-5" />
    </button>
  );
};

export default HeaderNotifications;
