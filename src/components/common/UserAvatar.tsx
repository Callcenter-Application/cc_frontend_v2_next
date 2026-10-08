import React from 'react';
import { getInitials } from '@/src/data/users.data';

export interface UserAvatarProps {
  name?: string;
  initials?: string;
  variant?: 'table' | 'header';
  className?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  initials,
  variant = 'table',
  className = '',
}) => {
  const displayInitials = initials ?? (name ? getInitials(name) : '');

  const variantClasses =
    variant === 'header'
      ? 'w-[34px] h-[34px] rounded-full bg-[#D9CFD6] text-[#3F2D3C] text-[13px] font-semibold'
      : 'w-[34px] h-[34px] shrink-0 rounded-full bg-[#EEE9ED] text-[#4F3A4B] text-[12px] font-semibold';

  return (
    <div
      className={`flex items-center justify-center select-none ${variantClasses} ${className}`}
      aria-hidden="true"
    >
      {displayInitials}
    </div>
  );
};

export default UserAvatar;
