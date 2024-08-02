import { iUsers } from './users';

export interface iTodos {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  user?: iUsers;
}
