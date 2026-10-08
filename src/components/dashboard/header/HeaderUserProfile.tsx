import React from 'react';
import { UserAvatar } from '@/src/components/common/UserAvatar';

export interface HeaderUserProfileProps {
  name?: string;
  role?: string;
  initials?: string;
  className?: string;
}

export const HeaderUserProfile: React.FC<HeaderUserProfileProps> = ({
  name = 'Luis Reyes',
  role = 'Administrator',
  initials = 'LR',
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-[10px] pl-2 ${className}`}>
      <UserAvatar initials={initials} name={name} variant="header" />
      <div className="flex flex-col leading-[1.2]">
        <span className="text-[14px] font-medium text-[#1F1C1E]">{name}</span>
        <span className="text-[12px] text-[#6B6560]">{role}</span>
      </div>
    </div>
  );
};

export default HeaderUserProfile;
