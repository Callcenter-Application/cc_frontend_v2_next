import type { NavItem, QueueHealth } from '@/src/types/navigation.types';

export const DEFAULT_NAV_ITEMS: Omit<NavItem, 'icon'>[] = [
  {
    key: 'home',
    label: 'Home',
    href: '/dashboard/home',
  },
  {
    key: 'users',
    label: 'Users',
    href: '/dashboard/users',
  },
  {
    key: 'settings',
    label: 'Settings',
    href: '/dashboard/settings',
  },
];

export const DEFAULT_QUEUE_HEALTH: QueueHealth = {
  title: 'Queue health',
  statusText: 'Queues within SLA',
};
