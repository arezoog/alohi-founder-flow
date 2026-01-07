import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Clock, Sparkles, Flag, Coffee, Mountain } from "lucide-react";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  dueTime?: string;
  completed: boolean;
  aiSuggested?: boolean;
  product?: "sign" | "fax" | "scan";
  personal?: boolean;
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Review Q1 enterprise deal pipeline",
    priority: "high",
    dueTime: "10:00 AM",
    completed: false,
    aiSuggested: true,
    product: "sign",
  },
  {
    id: "2",
    title: "Coffee with design team ☕",
    priority: "medium",
    dueTime: "10:30 AM",
    completed: false,
    personal: true,
  },
  {
    id: "3",
    title: "Approve HIPAA compliance update",
    priority: "high",
    dueTime: "11:30 AM",
    completed: false,
    product: "fax",
  },
  {
    id: "4",
    title: "Team sync: AI model performance",
    priority: "medium",
    dueTime: "2:00 PM",
    completed: false,
  },
  {
    id: "5",
    title: "Sign partnership agreement with Fortune 500",
    priority: "high",
    dueTime: "3:30 PM",
    completed: false,
    aiSuggested: true,
    product: "sign",
  },
  {
    id: "6",
    title: "Check Verbier snow report 🏔️",
    priority: "low",
    completed: true,
    personal: true,
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

  const getProductColor = (product?: string) => {
    switch (product) {
      case "sign":
        return "bg-sign/10 text-sign";
      case "fax":
        return "bg-fax/10 text-fax";
      case "scan":
        return "bg-scan/10 text-scan";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="rounded-2xl bg-card shadow-card overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Today's Flow
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {tasks.filter((t) => t.completed).length}/{tasks.length} done
            </span>
            <div className="h-2 w-24 rounded-full bg-muted overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-ocean to-success rounded-full transition-all duration-500"
                style={{ width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="divide-y divide-border stagger-children">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              "group flex items-start gap-4 p-4 transition-all duration-200 hover:bg-muted/30 cursor-pointer",
              task.completed && "opacity-50"
            )}
            onClick={() => toggleTask(task.id)}
          >
            <button className="mt-0.5 flex-shrink-0 transition-transform duration-200 hover:scale-110">
              {task.completed ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </button>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <p
                  className={cn(
                    "font-medium text-foreground transition-all",
                    task.completed && "line-through text-muted-foreground"
                  )}
                >
                  {task.title}
                </p>
                {task.aiSuggested && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    <Sparkles className="h-3 w-3" />
                    AI
                  </span>
                )}
                {task.personal && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-coffee/10 text-coffee text-xs font-medium">
                    {task.title.includes("Coffee") ? <Coffee className="h-3 w-3" /> : <Mountain className="h-3 w-3" />}
                    Personal
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-3 text-xs">
                {task.dueTime && (
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {task.dueTime}
                  </span>
                )}
                {task.product && (
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-medium capitalize",
                      getProductColor(task.product)
                    )}
                  >
                    {task.product}.Plus
                  </span>
                )}
                <Flag className={cn("h-3 w-3", getPriorityColor(task.priority))} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
