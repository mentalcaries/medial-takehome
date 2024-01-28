export {};
declare global {
  type Task = {
    id?: string;
    title: string;
    description: string;
    dueDate: string;
    assignee: User;
    priorityLevel: string;
    notes: string;
    status: string;
  };

  type User = {
    id?: string;
    userId: string;
    displayName: string;
  };
}
