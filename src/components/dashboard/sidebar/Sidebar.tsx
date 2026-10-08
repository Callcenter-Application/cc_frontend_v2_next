'use client';

import React from 'react';
import { SidebarLogo } from './SidebarLogo';
import { SidebarNav } from './SidebarNav';
import { SidebarQueueHealth } from './SidebarQueueHealth';
import type { NavItem, QueueHealth } from '@/src/types/navigation.types';

export interface SidebarProps {
  accent?: string;
  navItems?: NavItem[];
  queueHealth?: QueueHealth;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  accent = '#6E4F68',
  navItems,
  queueHealth,
  className = '',
}) => {
  return (
    <aside
      className={`flex-[1_0_220px] max-w-full box-border bg-[#262325] text-[#E9E5E8] p-[24px_16px] flex flex-col gap-[28px] ${className}`}
    >
      <SidebarLogo accent={accent} />
      <SidebarNav items={navItems} accent={accent} />
      <SidebarQueueHealth data={queueHealth} />
    </aside>
  );
};

export default Sidebar;
