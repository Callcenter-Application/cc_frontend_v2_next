'use client';

import React from 'react';
import { HeaderSearch } from './HeaderSearch';
import { HeaderNotifications } from './HeaderNotifications';
import { HeaderUserProfile } from './HeaderUserProfile';

export interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  onNotificationsClick?: () => void;
  userName?: string;
  userRole?: string;
  userInitials?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onNotificationsClick,
  userName,
  userRole,
  userInitials,
  className = '',
}) => {
  return (
    <header
      className={`flex flex-wrap items-center gap-3 min-h-[44px] shrink-0 p-[0_4px_12px] border-b border-[#D6E4F0] ${className}`}
    >
      <HeaderSearch value={searchQuery} onChange={onSearchChange} />
      <div className="ml-auto flex items-center gap-2">
        <HeaderNotifications onClick={onNotificationsClick} />
        <HeaderUserProfile
          name={userName}
          role={userRole}
          initials={userInitials}
        />
      </div>
    </header>
  );
};

export default Header;
