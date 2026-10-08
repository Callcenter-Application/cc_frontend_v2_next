import type { Role, User } from '@/src/types/user.types';

export const INITIAL_USERS: User[] = [
  {
    name: 'Andrés Pérez',
    email: 'andres.perez@callbook.co',
    id: 'AG-1042',
    role: 'Agent',
    team: 'Billing',
    status: 'Active',
    lastActive: 'Now',
  },
  {
    name: 'Camila Rojas',
    email: 'camila.rojas@callbook.co',
    id: 'AG-1057',
    role: 'Agent',
    team: 'Sales',
    status: 'On break',
    lastActive: '6 min ago',
  },
  {
    name: 'Natalia Herrera',
    email: 'natalia.herrera@callbook.co',
    id: 'SP-0210',
    role: 'Supervisor',
    team: 'Billing',
    status: 'Active',
    lastActive: 'Now',
  },
  {
    name: 'Felipe Martínez',
    email: 'felipe.martinez@callbook.co',
    id: 'AG-1063',
    role: 'Agent',
    team: 'Billing',
    status: 'Active',
    lastActive: 'Now',
  },
  {
    name: 'Ricardo Gómez',
    email: 'ricardo.gomez@callbook.co',
    id: 'AD-0007',
    role: 'Administrator',
    team: 'Operations',
    status: 'Active',
    lastActive: '12 min ago',
  },
  {
    name: 'Valeria Sánchez',
    email: 'valeria.sanchez@callbook.co',
    id: 'AG-1071',
    role: 'Agent',
    team: 'Retention',
    status: 'Inactive',
    lastActive: 'Yesterday',
  },
  {
    name: 'Jorge Castillo',
    email: 'jorge.castillo@callbook.co',
    id: 'SP-0214',
    role: 'Supervisor',
    team: 'Tech support',
    status: 'On break',
    lastActive: '20 min ago',
  },
  {
    name: 'Paula Romero',
    email: 'paula.romero@callbook.co',
    id: 'AD-0011',
    role: 'Administrator',
    team: 'IT',
    status: 'Inactive',
    lastActive: '3 days ago',
  },
];

export const getInitials = (name: string): string =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('');

export const countByRole = (users: User[], role: Role): number =>
  users.filter((u) => u.role === role).length;
