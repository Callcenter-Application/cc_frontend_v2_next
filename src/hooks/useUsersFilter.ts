import { useMemo, useState } from 'react';
import type { RoleFilter, User } from '@/src/types/user.types';
import type { RoleTab, StatItem } from '@/src/types/stats.types';
import { countByRole } from '@/src/data/users.data';
import { useUsersContext } from '@/src/contexts/UsersContext';

export interface UseUsersFilterOptions {
  initialUsers?: User[];
  defaultRoleFilter?: RoleFilter;
}

export function useUsersFilter({
  initialUsers,
  defaultRoleFilter = 'All',
}: UseUsersFilterOptions = {}) {
  const { users: contextUsers } = useUsersContext();
  const users = initialUsers ?? contextUsers;

  const [roleFilter, setRoleFilter] = useState<RoleFilter>(defaultRoleFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const stats: StatItem[] = useMemo(() => {
    return [
      { label: 'Total users', value: String(users.length) },
      { label: 'Supervisors', value: String(countByRole(users, 'Supervisor')) },
      { label: 'Agents', value: String(countByRole(users, 'Agent')) },
      { label: 'Administrators', value: String(countByRole(users, 'Administrator')) },
    ];
  }, [users]);

  const tabs: RoleTab[] = useMemo(() => {
    return [
      { key: 'All', label: 'All', count: users.length },
      { key: 'Supervisor', label: 'Supervisors', count: countByRole(users, 'Supervisor') },
      { key: 'Agent', label: 'Agents', count: countByRole(users, 'Agent') },
      { key: 'Administrator', label: 'Administrators', count: countByRole(users, 'Administrator') },
    ];
  }, [users]);

  const filteredUsers = useMemo(() => {
    let result = users;

    if (roleFilter !== 'All') {
      result = result.filter((u) => u.role === roleFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (u) =>
          u.firstname.toLowerCase().includes(q) ||
          u.lastname.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.id.toLowerCase().includes(q) ||
          u.team.toLowerCase().includes(q)
      );
    }

    return result;
  }, [users, roleFilter, searchQuery]);

  return {
    users,
    roleFilter,
    setRoleFilter,
    searchQuery,
    setSearchQuery,
    filteredUsers,
    stats,
    tabs,
  };
}

export default useUsersFilter;
