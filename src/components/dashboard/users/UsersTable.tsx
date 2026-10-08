'use client';

import React from 'react';
import type { User } from '@/src/types/user.types';
import { UsersTableRow } from './UsersTableRow';

export interface UsersTableProps {
  users: User[];
  onUserAction?: (user: User) => void;
  className?: string;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  onUserAction,
  className = '',
}) => {
  return (
    <div
      className={`overflow-x-auto -mx-5 -mb-5 px-5 pb-2 ${className}`}
    >
      <table className="w-full min-w-[760px] border-collapse text-[14px]">
        <thead>
          <tr className="text-left text-[#6B6560] text-[12px] uppercase tracking-[0.04em]">
            <th className="font-medium py-[10px] pr-3 pl-0 border-b border-[#E2DDD8]">
              User
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#E2DDD8]">
              ID
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#E2DDD8]">
              Role
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#E2DDD8]">
              Team
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#E2DDD8]">
              Status
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#E2DDD8]">
              Last active
            </th>
            <th className="py-[10px] px-0 border-b border-[#E2DDD8]">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <UsersTableRow
                key={user.id}
                user={user}
                onActionClick={onUserAction}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={7}
                className="py-12 text-center text-[#6B6560] border-b border-[#EFEBE7]"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
