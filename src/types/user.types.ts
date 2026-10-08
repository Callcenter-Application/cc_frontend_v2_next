export type Role = 'Administrator' | 'Supervisor' | 'Agent';

export type Status = 'Active' | 'On break' | 'Inactive';

export type RoleFilter = 'All' | Role;

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  id: string;
  role: Role;
  team: string;
  status: Status;
  lastActive: string;
}

export interface CreateUserInput {
  firstname: string;
  lastname: string; 
  password: string;
  email: string;
  role: Role;
  team: string;
}
