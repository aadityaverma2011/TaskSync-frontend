// src/components/TaskCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import type { Task } from "../Types/task";
import { Badge } from "../components/ui/badge";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card
      className="bg-[#161616] border border-zinc-800 text-white rounded-xl shadow-md 
                 w-72 min-h-[200px] max-h-[320px] overflow-hidden flex flex-col"
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold truncate">{task.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-3">
        <div
          className="text-sm text-zinc-300 overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
          }}
        >
          {task.description}
        </div>

        <div className="mt-auto flex justify-between items-center text-sm text-zinc-400">
          <span className="text-xs">
            Due:{" "}
            <span className="text-white font-medium">
              {new Date(task.due_date).toLocaleDateString()}
            </span>
          </span>

          <Badge
            variant="outline"
            className={`text-xs border-none px-2 py-0.5 rounded-full ${
              task.priority === "high"
                ? "bg-red-600 text-white"
                : task.priority === "medium"
                ? "bg-yellow-500 text-black"
                : "bg-green-600 text-white"
            }`}
          >
            {task.priority}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
