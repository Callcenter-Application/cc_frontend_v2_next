import React from 'react';
import Link from 'next/link';
import type { NavItem } from '@/src/types/navigation.types';

export interface SidebarNavItemProps extends NavItem {
  accent?: string;
  className?: string;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  href,
  label,
  icon,
  isActive = false,
  accent = '#2B7BC0',
  className = '',
}) => {
  const activeClasses = isActive
    ? 'bg-white text-[#10273D] font-medium'
    : 'text-[#34536F] hover:text-[#10273D] hover:bg-[#C7DEF2]';

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      style={isActive ? { boxShadow: `inset 3px 0 0 ${accent}` } : undefined}
      className={`flex items-center gap-[10px] min-h-[44px] px-3 rounded-lg text-[14px] no-underline transition-colors ${activeClasses} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{label}</span>
    </Link>
  );
};

export default SidebarNavItem;
