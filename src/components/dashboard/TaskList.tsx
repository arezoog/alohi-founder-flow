import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Clock, Sparkles } from "lucide-react";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  time?: string;
  completed: boolean;
  aiSuggested?: boolean;
  product?: "sign" | "fax" | "scan";
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Review enterprise deal pipeline",
    time: "10:00 AM",
    completed: false,
    aiSuggested: true,
    product: "sign",
  },
  {
    id: "2",
    title: "Approve HIPAA compliance update",
    time: "11:30 AM",
    completed: false,
    product: "fax",
  },
  {
    id: "3",
    title: "Team sync: AI model review",
    time: "2:00 PM",
    completed: false,
  },
  {
    id: "4",
    title: "Fortune 500 partnership signing",
    time: "3:30 PM",
    completed: false,
    product: "sign",
  },
  {
    id: "5",
    title: "Check Verbier conditions",
    completed: true,
  },
];

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Today
          </h2>
          <span className="text-sm text-muted-foreground">
            {completedCount}/{tasks.length}
          </span>
        </div>
      </div>
      
      <div className="p-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              "group flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-muted/50 cursor-pointer",
              task.completed && "opacity-50"
            )}
            onClick={() => toggleTask(task.id)}
          >
            <button className="flex-shrink-0">
              {task.completed ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <Circle className="h-5 w-5 text-border group-hover:text-primary transition-colors" />
              )}
            </button>
            
            <div className="flex-1 min-w-0">
              <p className={cn(
                "text-sm font-medium text-foreground",
                task.completed && "line-through text-muted-foreground"
              )}>
                {task.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                {task.time && (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {task.time}
                  </span>
                )}
                {task.product && (
                  <span className={cn(
                    "text-xs px-1.5 py-0.5 rounded",
                    task.product === "sign" && "bg-sign/10 text-sign",
                    task.product === "fax" && "bg-fax/10 text-fax",
                    task.product === "scan" && "bg-scan/10 text-scan"
                  )}>
                    {task.product}.Plus
                  </span>
                )}
              </div>
            </div>
            
            {task.aiSuggested && (
              <Sparkles className="h-4 w-4 text-ocean flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
