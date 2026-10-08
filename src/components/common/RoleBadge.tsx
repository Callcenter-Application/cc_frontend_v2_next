import React from 'react';
import type { Role } from '@/src/types/user.types';

export interface RoleBadgeProps {
  role: Role;
  className?: string;
}

const ROLE_CLASSES: Record<Role, string> = {
  Administrator: 'bg-[#EEE5EC] text-[#5E3A57]',
  Supervisor: 'bg-[#E3EEF8] text-[#1F4E79]',
  Agent: 'bg-[#E6F1E9] text-[#25553A]',
};

export const RoleBadge: React.FC<RoleBadgeProps> = ({ role, className = '' }) => {
  const roleClass = ROLE_CLASSES[role] ?? 'bg-gray-100 text-gray-700';

  return (
    <span
      className={`inline-flex items-center h-[26px] px-[10px] rounded-full text-[12px] font-medium ${roleClass} ${className}`}
    >
      {role}
    </span>
  );
};

export default RoleBadge;
