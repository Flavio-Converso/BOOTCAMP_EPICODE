import { iTodos } from './todos';

export interface iUsers {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
  todos?: iTodos[];
}
