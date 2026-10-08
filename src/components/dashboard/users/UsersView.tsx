'use client';

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageHeader } from './PageHeader';
import { StatsGrid } from './StatsGrid';
import { RoleFilterTabs } from './RoleFilterTabs';
import { UsersTable } from './UsersTable';
import { Toast } from '@/src/components/common/Toast';
import { useUsersFilter } from '@/src/hooks/useUsersFilter';
import { useUsersContext } from '@/src/contexts/UsersContext';
import type { User } from '@/src/types/user.types';

export interface UsersViewProps {
  accent?: string;
  initialUsers?: User[];
  searchQuery?: string;
  onCreateUser?: () => void;
  className?: string;
}

export const UsersView: FC<UsersViewProps> = ({
  accent = '#2B7BC0',
  initialUsers,
  searchQuery: externalSearchQuery,
  onCreateUser,
  className = '',
}) => {
  const router = useRouter();
  const { users: contextUsers, lastCreatedId, clearLastCreated } = useUsersContext();
  const { roleFilter, setRoleFilter, setSearchQuery, filteredUsers, stats, tabs } =
    useUsersFilter({ initialUsers });

  // Sync external search query if provided
  useEffect(() => {
    if (externalSearchQuery !== undefined) {
      setSearchQuery(externalSearchQuery);
    }
  }, [externalSearchQuery, setSearchQuery]);

  // Surface the user that was just created on the New user screen: a brief
  // completion toast plus a highlight on their row, instead of an artificial
  // delay before navigating away from the form.
  const [toastUser, setToastUser] = useState<User | null>(null);

  useEffect(() => {
    if (!lastCreatedId) return;
    const created = contextUsers.find((u) => u.id === lastCreatedId);
    // Reacting to an external signal (navigation from the New user form), not
    // mirroring a prop into state — the toast needs to outlive later renders.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (created) setToastUser(created);
    clearLastCreated();
  }, [lastCreatedId, contextUsers, clearLastCreated]);

  useEffect(() => {
    if (!toastUser) return;
    const timer = window.setTimeout(() => setToastUser(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toastUser]);

  const handleCreateUser = onCreateUser ?? (() => router.push('/dashboard/newUser'));

  return (
    <div className={`flex flex-col gap-4 h-full min-h-0 ${className}`}>
      <Toast
        open={Boolean(toastUser)}
        title={toastUser ? `${toastUser.firstname} was added` : ''}
        description={toastUser ? `${toastUser.role} · ${toastUser.team}` : undefined}
        onDismiss={() => setToastUser(null)}
      />

      {/* Page Header */}
      <PageHeader
        title="Users"
        subtitle="Manage supervisors, agents and administrators"
        actionLabel="Create user"
        onActionClick={handleCreateUser}
        accent={accent}
      />

      {/* Main card */}
      <main className="flex-1 min-h-0 overflow-y-auto bg-white border border-[#D6E4F0] rounded-xl p-5 flex flex-col gap-5 min-w-0 ">
        {/* Stats */}
        <StatsGrid stats={stats} />

        {/* Role filter */}
        <RoleFilterTabs
          tabs={tabs}
          activeFilter={roleFilter}
          onFilterChange={setRoleFilter}
        />

        {/* Users table */}
        <UsersTable users={filteredUsers} highlightedId={toastUser?.id ?? null} />
      </main>
    </div>
  );
};

export default UsersView;
