// src/components/Header.tsx

import { Button } from "../components/ui/button";
import { Plus, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-zinc-950 w-full px-6 py-4 border-b border-zinc-800 text-zinc-100 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Branding */}
      <div className="text-2xl font-bold text-yellow-100 tracking-wide">
        TaskSync
      </div>

      {/* Center: Create Task Button */}
      <div className="flex-1 flex justify-center">
        <Button
          className="bg-zinc-800 text-zinc-100 bg-zinc-700 border border-zinc-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Create New Task
        </Button>
      </div>

      {/* Right: Search + Profile */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-zinc-800 text-zinc-300"
        >
          <Search className="w-5 h-5" />
        </Button>
        <Button
          className="bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-zinc-700"
        >
          Profile
        </Button>
      </div>
    </header>
  );
};

export default Header;
