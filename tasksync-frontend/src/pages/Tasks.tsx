import { useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { AlignCenter } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  due_date: string;
  completed: boolean;
}

const Tasks = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 w-full">
      <div className="w-screen">
        <Header />
      </div>

      <div className="w-full min-h-[200px] bg-green-700 px-15 py-8 mt-12">
        {/* Content inside the green box can go here */}
        <p className="text-lg font-semibold">Green Section Placeholder</p>
      </div>
    </div>
  );
};

export default Tasks;
