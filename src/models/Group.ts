import { Expense } from './Expense';
import { User } from './User';

export type Group = {
  id: string;            // UUID
  name: string;
  members: User[];       // array of users in the group
  expenses: Expense[];   // associated expenses
};
