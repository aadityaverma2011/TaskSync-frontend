// src/types.ts

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  due_date: string;
  completed: boolean;
}
