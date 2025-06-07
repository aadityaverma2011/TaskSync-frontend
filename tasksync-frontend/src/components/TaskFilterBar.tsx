import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { ChevronDown } from "lucide-react";

interface TaskFilterBarProps {
  sortOrder: "newest" | "oldest";
  priority: "all" | "high" | "medium" | "low";
  onSortChange: (sort: "newest" | "oldest") => void;
  onPriorityChange: (priority: "all" | "high" | "medium" | "low") => void;
}

const TaskFilterBar = ({
  sortOrder,
  priority,
  onSortChange,
  onPriorityChange,
}: TaskFilterBarProps) => {
  return (
    <div className="w-screen h-14 flex items-center justify-end px-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="text-white hover:bg-zinc-800 flex items-center gap-2"
          >
            Filter <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-700 text-white">
          <DropdownMenuLabel className="text-zinc-400">Sort By Date</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onSortChange("newest")}>
            New to Oldest
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("oldest")}>
            Old to Newest
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuLabel className="text-zinc-400">Priority</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onPriorityChange("all")}>All</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onPriorityChange("high")}>High</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onPriorityChange("medium")}>Medium</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onPriorityChange("low")}>Low</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TaskFilterBar;
