export {};
declare global {
  type Task = {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    assignee: User;
    priorityLevel: string;
    notes: string;
    status: string;
  };

  type User = {
    userId: string;
    displayName: string;
  };
}
