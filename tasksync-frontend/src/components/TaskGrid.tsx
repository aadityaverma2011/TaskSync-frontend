// src/components/TaskGrid.tsx

import type { Task } from "../Types/task";
import TaskCard from "./TaskCard";

interface TaskGridProps {
  tasks: Task[];
}

const TaskGrid = ({ tasks }: TaskGridProps) => {
  if (tasks.length === 0) {
    return (
      <div className="w-full text-center py-12 text-zinc-400 text-sm">
        No tasks to display.
      </div>
    );
  }

  return (
    <div className="w-full px-6 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskGrid;
