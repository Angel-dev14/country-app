import { Role } from './role.type';

export interface User {
  username: string;
  password: string;
  role: Role;
}
