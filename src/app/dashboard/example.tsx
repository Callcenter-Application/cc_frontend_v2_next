import { useState } from 'react';
import type { CSSProperties } from 'react';

type Role = 'Administrator' | 'Supervisor' | 'Agent';
type Status = 'Active' | 'On break' | 'Inactive';
type RoleFilter = 'All' | Role;

interface User {
  name: string;
  email: string;
  id: string;
  role: Role;
  team: string;
  status: Status;
  lastActive: string;
}

interface UsersPageProps {
  /** Accent color used for the logo, active nav item and primary button. */
  accent?: string;
}

const MONO = "'IBM Plex Mono', ui-monospace, monospace";

const ROLE_STYLES: Record<Role, CSSProperties> = {
  Administrator: { background: '#EEE5EC', color: '#5E3A57' },
  Supervisor: { background: '#E3EEF8', color: '#1F4E79' },
  Agent: { background: '#E6F1E9', color: '#25553A' },
};

const STATUS_DOTS: Record<Status, string> = {
  Active: '#2E8B57',
  'On break': '#C7781F',
  Inactive: '#9A9397',
};

const PILL_BASE: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  height: 26,
  padding: '0 10px',
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 500,
};

const DOT_BASE: CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  display: 'inline-block',
};

const TAB_BASE: CSSProperties = {
  height: 38,
  padding: '0 14px',
  border: 0,
  borderRadius: 6,
  font: 'inherit',
  fontSize: 14,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
};

const NAV_LINK: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  minHeight: 44,
  padding: '0 12px',
  borderRadius: 8,
  fontSize: 14,
  textDecoration: 'none',
  color: '#C9C2C7',
};

const TH: CSSProperties = {
  fontWeight: 500,
  padding: '10px 12px',
  borderBottom: '1px solid #E2DDD8',
};

const TD: CSSProperties = {
  padding: '10px 12px',
  borderBottom: '1px solid #EFEBE7',
};

// Sample data — replace with data from your API.
const USERS: User[] = [
  { name: 'Andrés Pérez', email: 'andres.perez@callbook.co', id: 'AG-1042', role: 'Agent', team: 'Billing', status: 'Active', lastActive: 'Now' },
  { name: 'Camila Rojas', email: 'camila.rojas@callbook.co', id: 'AG-1057', role: 'Agent', team: 'Sales', status: 'On break', lastActive: '6 min ago' },
  { name: 'Natalia Herrera', email: 'natalia.herrera@callbook.co', id: 'SP-0210', role: 'Supervisor', team: 'Billing', status: 'Active', lastActive: 'Now' },
  { name: 'Felipe Martínez', email: 'felipe.martinez@callbook.co', id: 'AG-1063', role: 'Agent', team: 'Billing', status: 'Active', lastActive: 'Now' },
  { name: 'Ricardo Gómez', email: 'ricardo.gomez@callbook.co', id: 'AD-0007', role: 'Administrator', team: 'Operations', status: 'Active', lastActive: '12 min ago' },
  { name: 'Valeria Sánchez', email: 'valeria.sanchez@callbook.co', id: 'AG-1071', role: 'Agent', team: 'Retention', status: 'Inactive', lastActive: 'Yesterday' },
  { name: 'Jorge Castillo', email: 'jorge.castillo@callbook.co', id: 'SP-0214', role: 'Supervisor', team: 'Tech support', status: 'On break', lastActive: '20 min ago' },
  { name: 'Paula Romero', email: 'paula.romero@callbook.co', id: 'AD-0011', role: 'Administrator', team: 'IT', status: 'Inactive', lastActive: '3 days ago' },
];

const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('');

const countByRole = (role: Role): number => USERS.filter((u) => u.role === role).length;

const TABS: { key: RoleFilter; label: string; count: number }[] = [
  { key: 'All', label: 'All', count: USERS.length },
  { key: 'Supervisor', label: 'Supervisors', count: countByRole('Supervisor') },
  { key: 'Agent', label: 'Agents', count: countByRole('Agent') },
  { key: 'Administrator', label: 'Administrators', count: countByRole('Administrator') },
];

const STATS: { label: string; value: string }[] = [
  { label: 'Total users', value: String(USERS.length) },
  { label: 'Supervisors', value: String(countByRole('Supervisor')) },
  { label: 'Agents', value: String(countByRole('Agent')) },
  { label: 'Administrators', value: String(countByRole('Administrator')) },
];

// Global styles and fonts from the original design.
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
body{margin:0;background:#F4F2EF}
a{color:#5E4459}a:hover{color:#3F2D3C}
`;

export default function UsersPage({ accent = '#6E4F68' }: UsersPageProps) {
  const [roleFilter, setRoleFilter] = useState<RoleFilter>('All');

  const visibleUsers = roleFilter === 'All' ? USERS : USERS.filter((u) => u.role === roleFilter);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          minHeight: 800,
          fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
          color: '#1F1C1E',
          background: '#F4F2EF',
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            flex: '1 0 220px',
            maxWidth: '100%',
            boxSizing: 'border-box',
            background: '#262325',
            color: '#E9E5E8',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px' }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
            </div>
            <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em' }}>CallBook</span>
          </div>

          <nav aria-label="Main" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <a href="#" style={NAV_LINK}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
              </svg>
              Home
            </a>
            <a
              href="#"
              aria-current="page"
              style={{
                ...NAV_LINK,
                background: '#3A3538',
                color: '#FFFFFF',
                fontWeight: 500,
                boxShadow: `inset 3px 0 0 ${accent}`,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="4" />
                <path d="M2 21a7 7 0 0 1 14 0" />
                <path d="M16 3.5a4 4 0 0 1 0 9" />
                <path d="M22 21a7 7 0 0 0-4-6.3" />
              </svg>
              Users
            </a>
            <a href="#" style={NAV_LINK}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
              </svg>
              Settings
            </a>
          </nav>

          <div
            style={{
              marginTop: 'auto',
              padding: '14px 12px',
              borderRadius: 10,
              background: '#332F32',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <span style={{ fontSize: 12, color: '#B9B2B7' }}>Queue health</span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>All queues within SLA</span>
          </div>
        </aside>

        {/* Content */}
        <div
          style={{
            flex: '999 1 560px',
            minWidth: 0,
            boxSizing: 'border-box',
            padding: '16px 28px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {/* Top header */}
          <header
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 12,
              minHeight: 44,
              padding: '0 4px 12px',
              borderBottom: '1px solid #E2DDD8',
            }}
          >
            <label
              htmlFor="user-search"
              style={{
                flex: '1 1 260px',
                maxWidth: 420,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                height: 40,
                padding: '0 12px',
                boxSizing: 'border-box',
                background: '#FFFFFF',
                border: '1px solid #DDD7D1',
                borderRadius: 8,
                color: '#6B6560',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                id="user-search"
                type="search"
                placeholder="Search users by ID, name, email…"
                style={{
                  border: 0,
                  outline: 'none',
                  flex: 1,
                  minWidth: 0,
                  font: 'inherit',
                  fontSize: 14,
                  background: 'transparent',
                  color: '#1F1C1E',
                }}
              />
            </label>

            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                type="button"
                aria-label="Notifications"
                style={{
                  width: 44,
                  height: 44,
                  border: 0,
                  borderRadius: 8,
                  background: 'transparent',
                  color: '#4A4447',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
                </svg>
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 8 }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: '#D9CFD6',
                    color: '#3F2D3C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  LR
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>Luis Reyes</span>
                  <span style={{ fontSize: 12, color: '#6B6560' }}>Administrator</span>
                </div>
              </div>
            </div>
          </header>

          {/* Page header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, padding: 4 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginRight: 'auto' }}>
              <h1 style={{ margin: 0, fontSize: 26, fontWeight: 600, letterSpacing: '-0.015em' }}>Users</h1>
              <span style={{ fontSize: 14, color: '#6B6560' }}>Manage supervisors, agents and administrators</span>
            </div>
            <button
              type="button"
              style={{
                height: 44,
                padding: '0 18px',
                border: 0,
                borderRadius: 8,
                background: accent,
                color: '#FFFFFF',
                font: 'inherit',
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Create user
            </button>
          </div>

          {/* Main card */}
          <main
            style={{
              flex: 1,
              background: '#FFFFFF',
              border: '1px solid #E2DDD8',
              borderRadius: 12,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              minWidth: 0,
            }}
          >
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
              {STATS.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: '#F7F5F3',
                    borderRadius: 10,
                    padding: '14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 13, color: '#6B6560' }}>{s.label}</span>
                  <span style={{ fontFamily: MONO, fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em' }}>{s.value}</span>
                </div>
              ))}
            </div>

            {/* Role filter */}
            <div
              role="group"
              aria-label="Filter by role"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                background: '#EAE6E2',
                borderRadius: 8,
                padding: 3,
                alignSelf: 'flex-start',
                maxWidth: '100%',
              }}
            >
              {TABS.map((t) => {
                const isActive = roleFilter === t.key;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setRoleFilter(t.key)}
                    aria-pressed={isActive}
                    style={{
                      ...TAB_BASE,
                      ...(isActive
                        ? { background: '#FFFFFF', color: '#1F1C1E', fontWeight: 500 }
                        : { background: 'transparent', color: '#4A4447' }),
                    }}
                  >
                    {t.label}
                    <span style={{ fontFamily: MONO, fontSize: 12, color: '#6B6560' }}>{t.count}</span>
                  </button>
                );
              })}
            </div>

            {/* Users table */}
            <div style={{ overflowX: 'auto', margin: '-4px -20px -20px', padding: '0 20px 8px' }}>
              <table style={{ width: '100%', minWidth: 760, borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr
                    style={{
                      textAlign: 'left',
                      color: '#6B6560',
                      fontSize: 12,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    <th style={{ ...TH, padding: '10px 12px 10px 0' }}>User</th>
                    <th style={TH}>ID</th>
                    <th style={TH}>Role</th>
                    <th style={TH}>Team</th>
                    <th style={TH}>Status</th>
                    <th style={TH}>Last active</th>
                    <th style={{ padding: '10px 0', borderBottom: '1px solid #E2DDD8' }}>
                      <span
                        style={{
                          position: 'absolute',
                          width: 1,
                          height: 1,
                          overflow: 'hidden',
                          clip: 'rect(0 0 0 0)',
                        }}
                      >
                        Actions
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visibleUsers.map((u) => (
                    <tr key={u.id}>
                      <td style={{ ...TD, padding: '10px 12px 10px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div
                            style={{
                              width: 34,
                              height: 34,
                              flex: 'none',
                              borderRadius: '50%',
                              background: '#EEE9ED',
                              color: '#4F3A4B',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          >
                            {getInitials(u.name)}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                            <span style={{ fontWeight: 500 }}>{u.name}</span>
                            <span style={{ fontSize: 12, color: '#6B6560' }}>{u.email}</span>
                          </div>
                        </div>
                      </td>
                      <td style={{ ...TD, fontFamily: MONO, fontSize: 13, color: '#4A4447' }}>{u.id}</td>
                      <td style={TD}>
                        <span style={{ ...PILL_BASE, ...ROLE_STYLES[u.role] }}>{u.role}</span>
                      </td>
                      <td style={TD}>{u.team}</td>
                      <td style={TD}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13 }}>
                          <span style={{ ...DOT_BASE, background: STATUS_DOTS[u.status] }} />
                          {u.status}
                        </span>
                      </td>
                      <td style={{ ...TD, color: '#4A4447' }}>{u.lastActive}</td>
                      <td style={{ padding: '10px 0', borderBottom: '1px solid #EFEBE7', textAlign: 'right' }}>
                        <button
                          type="button"
                          aria-label="More actions"
                          style={{
                            width: 36,
                            height: 36,
                            border: 0,
                            borderRadius: 8,
                            background: 'transparent',
                            color: '#4A4447',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="5" cy="12" r="1.8" />
                            <circle cx="12" cy="12" r="1.8" />
                            <circle cx="19" cy="12" r="1.8" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}