import { useEffect, useState } from "react";
import Header from "../components/header";
import TaskFilterBar from "../components/TaskFilterBar";
import TaskGrid from "../components/TaskGrid";
import type { Task } from "@/types";

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Fix login bug",
    description: "Resolve issue causing login failure for edge-case users on mobile devices.",
    priority: "high",
    due_date: "2025-06-10",
    completed: false,
  },
  {
    id: "2",
    title: "Write documentation",
    description: "Create usage guides and API docs for the new authentication service.",
    priority: "medium",
    due_date: "2025-06-12",
    completed: true,
  },
  {
    id: "3",
    title: "Optimize images",
    description: "Compress and replace large images across marketing site for faster load times.",
    priority: "low",
    due_date: "2025-06-18",
    completed: false,
  },
  {
    id: "4",
    title: "Refactor dashboard",
    description:
      "Refactor the dashboard layout to use CSS Grid and improve component reuse. Also make sure it's fully mobile responsive and consistent with design tokens.",
    priority: "medium",
    due_date: "2025-06-20",
    completed: false,
  },
  {
    id: "5",
    title: "Set up CI/CD",
    description:
      "Integrate GitHub Actions with proper build/test workflows. Enable environment-based deployment pipelines for staging and production branches.",
    priority: "high",
    due_date: "2025-06-22",
    completed: false,
  },
];

const Tasks = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 w-full">
      <div className="w-screen">
        <Header />
      </div>

      {/* Filter bar */}
      <div className="w-screen h-14 mt-6 flex items-center">
        <div className="w-full">
          <TaskFilterBar />
        </div>
      </div>

      {/* Grid of cards */}
      <div className="w-full min-h-[200px] bg-green-700 px-6 py-8 mt-12">
        <TaskGrid tasks={mockTasks} />
      </div>
    </div>
  );
};

export default Tasks;
