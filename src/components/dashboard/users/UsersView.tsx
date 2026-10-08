'use client';

import React from 'react';
import { PageHeader } from './PageHeader';
import { StatsGrid } from './StatsGrid';
import { RoleFilterTabs } from './RoleFilterTabs';
import { UsersTable } from './UsersTable';
import { useUsersFilter } from '@/src/hooks/useUsersFilter';
import type { User } from '@/src/types/user.types';

export interface UsersViewProps {
  accent?: string;
  initialUsers?: User[];
  searchQuery?: string;
  onCreateUser?: () => void;
  onUserAction?: (user: User) => void;
  className?: string;
}

export const UsersView: React.FC<UsersViewProps> = ({
  accent = '#6E4F68',
  initialUsers,
  searchQuery: externalSearchQuery,
  onCreateUser,
  onUserAction,
  className = '',
}) => {
  const {
    roleFilter,
    setRoleFilter,
    setSearchQuery,
    filteredUsers,
    stats,
    tabs,
  } = useUsersFilter({ initialUsers });

  // Sync external search query if provided
  React.useEffect(() => {
    if (externalSearchQuery !== undefined) {
      setSearchQuery(externalSearchQuery);
    }
  }, [externalSearchQuery, setSearchQuery]);

  return (
    <div className={`flex flex-col gap-4 h-full min-h-0 ${className}`}>
      {/* Page Header */}
      <PageHeader
        title="Users"
        subtitle="Manage supervisors, agents and administrators"
        actionLabel="Create user"
        onActionClick={onCreateUser}
        accent={accent}
      />

      {/* Main card */}
      <main className="flex-1 min-h-0 overflow-y-auto bg-white border border-[#E2DDD8] rounded-xl p-5 flex flex-col gap-5 min-w-0 ">
        {/* Stats */}
        <StatsGrid stats={stats} />

        {/* Role filter */}
        <RoleFilterTabs
          tabs={tabs}
          activeFilter={roleFilter}
          onFilterChange={setRoleFilter}
        />

        {/* Users table */}
        <UsersTable users={filteredUsers} onUserAction={onUserAction} />
      </main>
    </div>
  );
};

export default UsersView;
