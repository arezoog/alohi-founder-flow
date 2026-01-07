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

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-foreground">
          Today
        </h2>
        <Sparkles className="h-4 w-4 text-ocean" />
      </div>
      
      <div className="divide-y divide-border">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              "group flex items-start gap-4 p-5 transition-colors hover:bg-muted/30 cursor-pointer",
              task.completed && "opacity-50"
            )}
            onClick={() => toggleTask(task.id)}
          >
            <button className="flex-shrink-0 mt-0.5">
              {task.completed ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
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
              <div className="flex items-center gap-3 mt-1.5">
                {task.time && (
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {task.time}
                  </span>
                )}
                {task.product && (
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-md font-medium border",
                    task.product === "sign" && "bg-sign/5 text-sign border-sign/20",
                    task.product === "fax" && "bg-fax/5 text-fax border-fax/20",
                    task.product === "scan" && "bg-scan/5 text-scan border-scan/20"
                  )}>
                    {task.product}.Plus
                  </span>
                )}
              </div>
            </div>
            
            {task.aiSuggested && !task.completed && (
              <Sparkles className="h-4 w-4 text-ocean flex-shrink-0 mt-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
