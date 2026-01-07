import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Plus, Trash2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useTasks } from "@/hooks/useTasks";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TaskList() {
  const { user } = useAuth();
  const { tasks, loading, addTask, toggleTask, deleteTask } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    
    setIsAdding(true);
    await addTask(newTaskTitle.trim());
    setNewTaskTitle("");
    setIsAdding(false);
  };

  // Show demo data for non-authenticated users
  const demoTasks = [
    { id: "1", title: "Review enterprise deal pipeline", completed: false },
    { id: "2", title: "Approve HIPAA compliance update", completed: false },
    { id: "3", title: "Team sync: AI model review", completed: false },
    { id: "4", title: "Sign in to manage your tasks", completed: true },
  ];

  const displayTasks = user ? tasks : demoTasks;

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-foreground">
          Today
        </h2>
        {loading && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
      </div>
      
      {/* Add Task Form */}
      {user && (
        <form onSubmit={handleAddTask} className="p-4 border-b border-border">
          <div className="flex gap-2">
            <Input
              placeholder="Add a new task..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="flex-1"
              disabled={isAdding}
            />
            <Button type="submit" size="icon" disabled={isAdding || !newTaskTitle.trim()}>
              {isAdding ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            </Button>
          </div>
        </form>
      )}
      
      <div className="divide-y divide-border max-h-80 overflow-y-auto">
        {displayTasks.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            No tasks yet. Add your first task above!
          </div>
        ) : (
          displayTasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "group flex items-start gap-4 p-5 transition-colors hover:bg-muted/30",
                task.completed && "opacity-50"
              )}
            >
              <button 
                className="flex-shrink-0 mt-0.5"
                onClick={() => user && toggleTask(task.id)}
                disabled={!user}
              >
                {task.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-status-success" />
                ) : (
                  <Circle className="h-5 w-5 text-border group-hover:text-ocean transition-colors" />
                )}
              </button>
              
              <div className="flex-1 min-w-0">
                <p className={cn(
                  "font-medium text-foreground",
                  task.completed && "line-through text-muted-foreground"
                )}>
                  {task.title}
                </p>
              </div>
              
              {user && (
                <button
                  onClick={() => deleteTask(task.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
