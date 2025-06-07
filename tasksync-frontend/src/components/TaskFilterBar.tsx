import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { ChevronDown, Check } from "lucide-react";

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
  const hasActiveFilters = sortOrder !== "newest" || priority !== "all";

  const itemClass = (active: boolean) =>
    `flex items-center justify-between w-full ${
      active ? "bg-zinc-800 text-white font-medium" : ""
    }`;

  return (
    <div className="w-screen h-14 flex items-center justify-end px-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={`flex items-center gap-2 text-white hover:bg-zinc-800 ${
              hasActiveFilters ? "border border-zinc-500" : ""
            }`}
          >
            Filter <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-700 text-white">
          <DropdownMenuLabel className="text-zinc-400">Sort By Date</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => onSortChange("newest")}>
            <span className={itemClass(sortOrder === "newest")}>
              New to Oldest {sortOrder === "newest" && <Check className="ml-2 w-4 h-4" />}
            </span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => onSortChange("oldest")}>
            <span className={itemClass(sortOrder === "oldest")}>
              Old to Newest {sortOrder === "oldest" && <Check className="ml-2 w-4 h-4" />}
            </span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuLabel className="text-zinc-400">Priority</DropdownMenuLabel>

          {(["all", "high", "medium", "low"] as const).map((level) => (
            <DropdownMenuItem key={level} onClick={() => onPriorityChange(level)}>
              <span className={itemClass(priority === level)}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
                {priority === level && <Check className="ml-2 w-4 h-4" />}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TaskFilterBar;
