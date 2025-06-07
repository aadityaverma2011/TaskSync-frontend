// src/components/Header.tsx

import { Plus, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  return (
    <header className="bg-zinc-950 w-full px-6 py-4 border-b border-zinc-800 text-zinc-100 flex items-center sticky top-0 z-50">
      {/* Left: Branding */}
      <div className="w-1/3 text-2xl font-bold text-yellow-100 tracking-wide">
        TaskSync
      </div>

      {/* Center: Create Task Button */}
      <div className="w-1/3 flex justify-center">
        <Button className="bg-zinc-800 text-zinc-100 bg-zinc-700 border border-zinc-700 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create New Task
        </Button>
      </div>

      {/* Right: Search + Profile */}
      <div className="w-1/3 flex justify-end items-center gap-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 w-4 h-4 text-zinc-400" />
          <Input
            type="text"
            placeholder="Search tasks"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8 bg-zinc-900 text-sm border border-zinc-700 text-white placeholder:text-zinc-400"
          />
        </div>
        <Button className="bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-zinc-700">
          Profile
        </Button>
      </div>
    </header>
  );
};

export default Header;
