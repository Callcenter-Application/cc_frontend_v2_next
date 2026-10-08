export type Role = 'Administrator' | 'Supervisor' | 'Agent';

export type Status = 'Active' | 'On break' | 'Inactive';

export type RoleFilter = 'All' | Role;

export interface User {
  name: string;
  email: string;
  id: string;
  role: Role;
  team: string;
  status: Status;
  lastActive: string;
}
