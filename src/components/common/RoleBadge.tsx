import React from 'react';
import type { Role } from '@/src/types/user.types';

export interface RoleBadgeProps {
  role: Role;
  className?: string;
}

const ROLE_CLASSES: Record<Role, string> = {
  Administrator: 'bg-[#E4E7FA] text-[#353F8F]',
  Supervisor: 'bg-[#D6EAFB] text-[#174A7A]',
  Agent: 'bg-[#DDF2F2] text-[#1D5C5E]',
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
