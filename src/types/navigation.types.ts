import type { ReactNode } from 'react';

export interface NavItem {
  key: string;
  label: string;
  href: string;
  icon?: ReactNode;
  isActive?: boolean;
}

export interface QueueHealth {
  title: string;
  statusText: string;
}
