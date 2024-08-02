import { iPost } from './ipost';

export interface iJsonContent {
  posts: iPost[];
  total: number;
  skip: number;
  limit: number;
}
