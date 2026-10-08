'use client';

import React from 'react';
import type { User } from '@/src/types/user.types';
import { UserAvatar } from '@/src/components/common/UserAvatar';
import { RoleBadge } from '@/src/components/common/RoleBadge';
import { StatusBadge } from '@/src/components/common/StatusBadge';
import { MoreDotsIcon } from '@/src/components/common/Icons';

export interface UsersTableRowProps {
  user: User;
  onActionClick?: (user: User) => void;
}

export const UsersTableRow: React.FC<UsersTableRowProps> = ({
  user,
  onActionClick,
}) => {
  return (
    <tr className="hover:bg-[#FAF9F7] transition-colors">
      <td className="py-[10px] pr-3 pl-0 border-b border-[#E6EFF7]">
        <div className="flex items-center gap-[10px]">
          <UserAvatar name={user.name} variant="table" />
          <div className="flex flex-col gap-[2px] min-w-0">
            <span className="font-medium text-[#10273D]">{user.name}</span>
            <span className="text-[12px] text-[#50677D]">{user.email}</span>
          </div>
        </div>
      </td>
      <td className="py-[10px] px-3 border-b border-[#E6EFF7] font-mono text-[13px] text-[#34506A]">
        {user.id}
      </td>
      <td className="py-[10px] px-3 border-b border-[#E6EFF7]">
        <RoleBadge role={user.role} />
      </td>
      <td className="py-[10px] px-3 border-b border-[#E6EFF7] text-[#10273D]">
        {user.team}
      </td>
      <td className="py-[10px] px-3 border-b border-[#E6EFF7]">
        <StatusBadge status={user.status} />
      </td>
      <td className="py-[10px] px-3 border-b border-[#E6EFF7] text-[#34506A]">
        {user.lastActive}
      </td>
      <td className="py-[10px] px-0 border-b border-[#E6EFF7] text-right">
        <button
          type="button"
          aria-label="More actions"
          onClick={() => onActionClick?.(user)}
          className="w-9 h-9 border-0 rounded-lg bg-transparent text-[#34506A] cursor-pointer inline-flex items-center justify-center hover:bg-[#F0F6FC] transition-colors"
        >
          <MoreDotsIcon className="w-[18px] h-[18px]" />
        </button>
      </td>
    </tr>
  );
};

export default UsersTableRow;
