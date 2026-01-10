export type Expense = {
  id: string;            // UUID
  groupId: string;       // foreign key reference
  description: string;   // e.g., "Lunch"
  amount: number;        // amount paid for the expense
  paidBy: string;        // userId of who paid
  splitBetween: string[]; // array of userIds
  createdAt: number;     // timestamp (Date.now())
};
