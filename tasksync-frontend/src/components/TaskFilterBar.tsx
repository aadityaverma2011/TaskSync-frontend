// src/components/TaskFilterBar.tsx

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

const TaskFilterBar = () => {
  return (
    <div className="w-screen  h-14 flex items-center justify-end px-6">
      {/* Combined Filter Dropdown */}
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
          <DropdownMenuItem>New to Oldest</DropdownMenuItem>
          <DropdownMenuItem>Old to Newest</DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuLabel className="text-zinc-400">Priority</DropdownMenuLabel>
          <DropdownMenuItem>High</DropdownMenuItem>
          <DropdownMenuItem>Medium</DropdownMenuItem>
          <DropdownMenuItem>Low</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TaskFilterBar;
