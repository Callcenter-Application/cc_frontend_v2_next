'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { CreateUserInput, Role, Status, User } from '@/src/types/user.types';
import { INITIAL_USERS } from '@/src/data/users.data';

const STORAGE_KEY = 'callbook:users';

const ROLE_PREFIX: Record<Role, string> = {
  Administrator: 'AD',
  Supervisor: 'SP',
  Agent: 'AG',
};

function generateId(role: Role, existing: User[]): string {
  const prefix = ROLE_PREFIX[role];
  const next = existing.reduce((max, user) => {
    if (!user.id.startsWith(`${prefix}-`)) return max;
    const n = Number(user.id.split('-')[1]);
    return Number.isFinite(n) ? Math.max(max, n) : max;
  }, 0);
  return `${prefix}-${String(next + 1).padStart(4, '0')}`;
}

export interface UsersContextValue {
  users: User[];
  addUser: (input: CreateUserInput) => User;
  setUserStatus: (id: string, status: Status) => void;
  lastCreatedId: string | null;
  clearLastCreated: () => void;
}

const UsersContext = createContext<UsersContextValue | null>(null);

export const UsersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [lastCreatedId, setLastCreatedId] = useState<string | null>(null);

  // Hydrate from localStorage after mount only, so server and first client
  // render match exactly and we never flash a hydration mismatch.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const parsed: User[] = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // One-time hydration from localStorage, intentionally deferred to an
        // effect so the server-rendered and first client render match before
        // we patch in whatever was persisted from a prior session.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUsers(parsed);
      }
    } catch {
      // Corrupt or inaccessible storage — fall back to the seed dataset.
    }
  }, []);

  const persist = useCallback((next: User[]) => {
    setUsers(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Private browsing / quota exceeded — state still works in-memory.
    }
  }, []);

  const addUser = useCallback(
    (input: CreateUserInput): User => {
      const created: User = {
        ...input,
        id: generateId(input.role, users),
        status: 'Active',
        lastActive: 'Now',
      };
      persist([created, ...users]);
      setLastCreatedId(created.id);
      return created;
    },
    [users, persist]
  );

  const setUserStatus = useCallback(
    (id: string, status: Status) => {
      persist(users.map((u) => (u.id === id ? { ...u, status } : u)));
    },
    [users, persist]
  );

  const clearLastCreated = useCallback(() => setLastCreatedId(null), []);

  const value = useMemo<UsersContextValue>(
    () => ({ users, addUser, setUserStatus, lastCreatedId, clearLastCreated }),
    [users, addUser, setUserStatus, lastCreatedId, clearLastCreated]
  );

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
};

export function useUsersContext(): UsersContextValue {
  const ctx = useContext(UsersContext);
  if (!ctx) {
    throw new Error('useUsersContext must be used within a UsersProvider');
  }
  return ctx;
}

export default UsersProvider;
