'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { HomeIcon, UsersIcon, SettingsIcon } from '@/src/components/common/Icons';
import { SidebarNavItem } from './SidebarNavItem';
import type { NavItem } from '@/src/types/navigation.types';

export interface SidebarNavProps {
  items?: NavItem[];
  accent?: string;
  className?: string;
}

export const DEFAULT_SIDEBAR_ITEMS: NavItem[] = [
  {
    key: 'home',
    label: 'Home',
    href: '/dashboard/home',
    icon: <HomeIcon className="w-[18px] h-[18px]" />,
  },
  {
    key: 'users',
    label: 'Users',
    href: '/dashboard/users',
    icon: <UsersIcon className="w-[18px] h-[18px]" />,
  },
  {
    key: 'settings',
    label: 'Settings',
    href: '/dashboard/settings',
    icon: <SettingsIcon className="w-[18px] h-[18px]" />,
  },
];

export const SidebarNav: React.FC<SidebarNavProps> = ({
  items = DEFAULT_SIDEBAR_ITEMS,
  accent = '#2B7BC0',
  className = '',
}) => {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className={`flex flex-col gap-[2px] ${className}`}>
      {items.map((item) => {
        const { key, ...restItem } = item;
        // Active if exact match or if at /dashboard and item is users (default view)
        const isActive =
          item.isActive ??
          (pathname === item.href ||
            (pathname === '/dashboard' && item.key === 'users'));

        return (
          <SidebarNavItem
            key={key}
            {...restItem}
            isActive={isActive}
            accent={accent}
          />
        );
      })}
    </nav>
  );
};

export default SidebarNav;
