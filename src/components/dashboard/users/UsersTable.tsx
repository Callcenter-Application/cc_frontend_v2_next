'use client';

import React, { useEffect, useRef } from 'react';
import type { User } from '@/src/types/user.types';
import { UsersTableRow } from './UsersTableRow';

export interface UsersTableProps {
  users: User[];
  highlightedId?: string | null;
  className?: string;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  highlightedId = null,
  className = '',
}) => {
  const rowRefs = useRef<Map<string, HTMLTableRowElement>>(new Map());

  useEffect(() => {
    if (!highlightedId) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    rowRefs.current
      .get(highlightedId)
      ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
  }, [highlightedId]);

  return (
    <div
      className={`overflow-x-auto -mx-5 -mb-5 px-5 pb-2 ${className}`}
    >
      <table className="w-full min-w-[760px] border-collapse text-[14px]">
        <thead>
          <tr className="text-left text-[#50677D] text-[12px] uppercase tracking-[0.04em]">
            <th className="font-medium py-[10px] pr-3 pl-0 border-b border-[#D6E4F0]">
              User
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#D6E4F0]">
              ID
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#D6E4F0]">
              Role
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#D6E4F0]">
              Team
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#D6E4F0]">
              Status
            </th>
            <th className="font-medium py-[10px] px-3 border-b border-[#D6E4F0]">
              Last active
            </th>
            <th className="py-[10px] px-0 border-b border-[#D6E4F0]">
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
                highlighted={user.id === highlightedId}
                ref={(el) => {
                  if (el) rowRefs.current.set(user.id, el);
                  else rowRefs.current.delete(user.id);
                }}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={7}
                className="py-12 text-center text-[#50677D] border-b border-[#E6EFF7]"
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
