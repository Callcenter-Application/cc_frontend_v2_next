import type { RoleFilter } from './user.types';

export interface StatItem {
  label: string;
  value: string;
}

export interface RoleTab {
  key: RoleFilter;
  label: string;
  count: number;
}
