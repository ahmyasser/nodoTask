import { Book } from './books.interface';

export interface User {
  _id: string;
  email: string;
  password: string;
  cart?: Book[];
}
