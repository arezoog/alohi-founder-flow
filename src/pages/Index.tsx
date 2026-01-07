import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TaskList } from "@/components/dashboard/TaskList";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { TeamPulse } from "@/components/dashboard/TeamPulse";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { UpcomingMeetings } from "@/components/dashboard/UpcomingMeetings";
import { PenLine, Send, ScanLine, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main content area */}
      <div className="pl-64 transition-all duration-300">
        <Header />
        
        <main className="p-8">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Sign.Plus Documents"
              value="2,847"
              change="+12.5% this week"
              changeType="positive"
              icon={PenLine}
              iconColor="text-sign"
            />
            <MetricCard
              title="Fax.Plus Sent"
              value="1,234"
              change="+8.2% this week"
              changeType="positive"
              icon={Send}
              iconColor="text-fax"
            />
            <MetricCard
              title="Scan.Plus Active"
              value="892K"
              change="+23.1% this month"
              changeType="positive"
              icon={ScanLine}
              iconColor="text-scan"
            />
            <MetricCard
              title="Active Users"
              value="4.5M"
              change="+340K new users"
              changeType="positive"
              icon={Users}
              iconColor="text-accent"
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Priority Tasks */}
            <div className="lg:col-span-2 space-y-6">
              <TaskList />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <QuickActions />
                <UpcomingMeetings />
              </div>
            </div>
            
            {/* Right Column - Insights & Team */}
            <div className="space-y-6">
              <AIInsights />
              <TeamPulse />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
