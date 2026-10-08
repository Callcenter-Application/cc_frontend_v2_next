'use client';

import {FC} from 'react';
import { UserAvatar } from '@/src/components/common/UserAvatar';
import { RoleBadge } from '@/src/components/common/RoleBadge';
import type { Role } from '@/src/types/user.types';

export interface NewUserPreviewCardProps {
  firstname: string;
  lastname: string;
  email: string;
  role: Role | '';
  team: string;
  className?: string;
}

export const NewUserPreviewCard: FC<NewUserPreviewCardProps> = ({
  firstname,
  lastname,
  email,
  role,
  team,
  className = '',
}) => {
  const displayFirstname = firstname.trim() || 'New';
  const displayLastname = lastname.trim() || 'teammate';
  const displayEmail = email.trim() || 'their.email@callbook.co';
  const displayTeam = team.trim() || 'No team yet';

  return (
    <div
      className={`rounded-[14px] bg-[#F2F8FD] border border-[#D6E4F0] p-5 flex flex-col gap-4 ${className}`}
    >
      <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#50677D]">
        Preview
      </span>

      <div className="flex items-center gap-3 min-w-0">
        <UserAvatar firstname={firstname} lastname={lastname} variant="table" className="w-11 h-11 text-[15px]" />
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="font-medium text-[#10273D] truncate">{displayFirstname}</span>
          <span className="font-medium text-[#10273D] truncate">{displayLastname}</span>
          <span className="text-[13px] text-[#50677D] truncate">{displayEmail}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {role ? (
          <RoleBadge role={role} />
        ) : (
          <span className="inline-flex items-center h-[26px] px-[10px] rounded-full text-[12px] font-medium bg-[#E6EFF7] text-[#7E93A6]">
            No role yet
          </span>
        )}
        <span className="inline-flex items-center gap-[6px] text-[13px] text-[#10273D]">
          <span className="w-2 h-2 rounded-full inline-block bg-[#2E8B57]" />
          Active on creation
        </span>
      </div>

      <div className="h-px bg-[#D6E4F0]" />

      <div className="flex flex-col gap-1 text-[13px]">
        <span className="text-[#50677D]">Team</span>
        <span className="text-[#10273D] font-medium truncate">{displayTeam}</span>
      </div>
    </div>
  );
};

export default NewUserPreviewCard;
