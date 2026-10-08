'use client';

import React from 'react';
import type { User } from '@/src/types/user.types';
import { UserAvatar } from '@/src/components/common/UserAvatar';
import { RoleBadge } from '@/src/components/common/RoleBadge';
import { StatusBadge } from '@/src/components/common/StatusBadge';
import { ActionsMenu } from '@/src/components/common/ActionsMenu';
import { useUsersContext } from '@/src/contexts/UsersContext';

export interface UsersTableRowProps {
  user: User;
  highlighted?: boolean;
}

export const UsersTableRow = React.forwardRef<HTMLTableRowElement, UsersTableRowProps>(
  ({ user, highlighted = false }, ref) => {
    const { setUserStatus } = useUsersContext();
    const isInactive = user.status === 'Inactive';

    return (
      <tr
        ref={ref}
        className={`hover:bg-[#F7FAFD] transition-colors ${highlighted ? 'row-highlight' : ''}`}
      >
        <td className="py-2.5 pr-3 pl-0 border-b border-[#E6EFF7]">
          <div className="flex items-center gap-2.5">
            <UserAvatar firstname={user.firstname} lastname={user.lastname} variant="table" />
            <div className="flex flex-col gap-[2px] min-w-0">
              <span className="font-medium text-[#10273D]">{user.firstname} {user.lastname}</span>
              <span className="text-[12px] text-[#50677D]">{user.email}</span>
            </div>
          </div>
        </td>
        <td className="py-2.5 px-3 border-b border-[#E6EFF7] font-mono text-[13px] text-[#34506A]">
          {user.id}
        </td>
        <td className="py-2.5 px-3 border-b border-[#E6EFF7]">
          <RoleBadge role={user.role} />
        </td>
        <td className="py-2.5 px-3 border-b border-[#E6EFF7] text-[#10273D]">
          {user.team}
        </td>
        <td className="py-2.5 px-3 border-b border-[#E6EFF7]">
          <StatusBadge status={user.status} />
        </td>
        <td className="py-2.5 px-3 border-b border-[#E6EFF7] text-[#34506A]">
          {user.lastActive}
        </td>
        <td className="py-2.5 px-0 border-b border-[#E6EFF7] text-right">
          <ActionsMenu
            ariaLabel={`More actions for ${user.firstname} ${user.lastname}`}
            items={[
              { key: 'copy-email', label: 'Copy email', copyText: user.email },
              { key: 'copy-id', label: 'Copy ID', copyText: user.id },
              {
                key: 'toggle-status',
                label: isInactive ? 'Activate user' : 'Deactivate user',
                tone: isInactive ? 'default' : 'danger',
                onSelect: () => setUserStatus(user.id, isInactive ? 'Active' : 'Inactive'),
              },
            ]}
          />
        </td>
      </tr>
    );
  }
);

UsersTableRow.displayName = 'UsersTableRow';

export default UsersTableRow;
