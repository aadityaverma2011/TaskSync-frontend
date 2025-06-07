// src/pages/Tasks.tsx

import { useEffect, useState } from "react";
import Header from "../components/header";
import TaskFilterBar from "../components/TaskFilterBar";
import TaskGrid from "../components/TaskGrid";
import type { Task } from "../Types/task";
import axios from "axios";
import { API_BASE_URL } from "../config";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [priorityFilter, setPriorityFilter] = useState<"all" | "high" | "medium" | "low">("all");
  // Filter + sort logic
  const filteredTasks = tasks
  .filter((task) => priorityFilter === "all" || task.priority === priorityFilter)
  .sort((a, b) => {
    const aDate = new Date(a.due_date).getTime();
    const bDate = new Date(b.due_date).getTime();
    return sortOrder === "newest" ? bDate - aDate : aDate - bDate;
  });
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${API_BASE_URL}/api/tasks`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 w-full">
      <div className="w-screen">
        <Header />
      </div>

      {/* Filter bar */}
      <div className="w-screen h-14 mt-6 flex items-center">
        <div className="w-full">
          <TaskFilterBar
          sortOrder={sortOrder}
          priority={priorityFilter}
          onSortChange={setSortOrder}
          onPriorityChange={setPriorityFilter}
/>
        </div>
      </div>

      {/* Grid of cards */}
      <div className="w-full min-h-[200px] px-6 mt-4">
        {loading ? (
          <p className="text-center py-12 text-zinc-400">Loading tasks...</p>
        ) : (
          <TaskGrid tasks={filteredTasks} />
        )}
      </div>
    </div>
  );
  
};

export default Tasks;
