import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const quickResponses: Record<string, string> = {
  "schedule": "Today you have 4 meetings:\n• 10:00 AM - Review enterprise pipeline\n• 11:30 AM - HIPAA compliance update\n• 2:00 PM - AI model review\n• 3:30 PM - Fortune 500 signing",
  "conditions": "🏔️ Verbier: Fresh powder! -8°C, 45cm new snow\n🏄 Biarritz: Clean 1.2m waves, 18°C, offshore wind",
  "coffee": "Your favorite spots:\n☕ Café Cépage (Geneva) - Ethiopian Yirgacheffe\n☕ Boréal Coffee (Plan-les-Ouates) - Colombian single origin",
  "metrics": "📊 Today's highlights:\n• Sign.Plus: 2,847 docs (+12.5%)\n• Fax.Plus: 1,234 sent (+8.2%)\n• 4.5M active users (+340K)",
};

const getAIResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("schedule") || lower.includes("meeting") || lower.includes("today")) {
    return quickResponses.schedule;
  }
  if (lower.includes("snow") || lower.includes("surf") || lower.includes("condition") || lower.includes("weekend") || lower.includes("verbier") || lower.includes("biarritz")) {
    return quickResponses.conditions;
  }
  if (lower.includes("coffee") || lower.includes("café") || lower.includes("cafe")) {
    return quickResponses.coffee;
  }
  if (lower.includes("metric") || lower.includes("number") || lower.includes("stat") || lower.includes("user")) {
    return quickResponses.metrics;
  }
  return "I can help you with your schedule, conditions (ski/surf), coffee spots, or metrics. What would you like to know?";
};

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hey Ali! 👋 Ask me about your schedule, conditions, or anything else.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(input),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-elevated transition-all duration-300",
          isOpen
            ? "bg-muted text-muted-foreground hover:bg-muted/80"
            : "bg-gradient-to-br from-ocean to-primary text-white hover:shadow-xl hover:scale-105"
        )}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-80 bg-card border border-border rounded-2xl shadow-elevated transition-all duration-300 overflow-hidden",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-border bg-powder/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-ocean/10">
              <Sparkles className="h-4 w-4 text-ocean" />
            </div>
            <div>
              <p className="font-medium text-sm text-foreground">AI Assistant</p>
              <p className="text-xs text-muted-foreground">Ask me anything</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-72 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[85%] p-3 rounded-xl text-sm",
                message.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-muted text-foreground rounded-bl-sm"
              )}
            >
              <p className="whitespace-pre-line">{message.content}</p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick actions */}
        <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
          {["Schedule", "Conditions", "Coffee"].map((action) => (
            <button
              key={action}
              onClick={() => {
                setInput(action);
                setTimeout(() => handleSend(), 100);
              }}
              className="flex-shrink-0 px-3 py-1 text-xs font-medium rounded-full bg-ocean/10 text-ocean hover:bg-ocean/20 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask something..."
              className="flex-1 px-3 py-2 text-sm bg-muted rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-ocean/20"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
