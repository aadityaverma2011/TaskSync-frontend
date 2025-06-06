import type { Task } from "../Types/task";
import TaskCard from "./TaskCard";
import Masonry from "react-masonry-css";

interface TaskGridProps {
  tasks: Task[];
}

const breakpointColumnsObj = {
  default: 5,
  1600: 4,
  1200: 3,
  900: 2,
  600: 1,
};

const TaskGrid = ({ tasks }: TaskGridProps) => {
  if (tasks.length === 0) {
    return (
      <div className="w-full text-center py-12 text-zinc-400 text-sm">
        No tasks to display.
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="flex flex-col gap-6"
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Masonry>
    </div>
  );
};

export default TaskGrid;
