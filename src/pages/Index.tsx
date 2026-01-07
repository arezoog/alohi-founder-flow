import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TaskList } from "@/components/dashboard/TaskList";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { TeamPulse } from "@/components/dashboard/TeamPulse";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { UpcomingMeetings } from "@/components/dashboard/UpcomingMeetings";
import { WeekendWidget } from "@/components/dashboard/WeekendWidget";
import { DesignInspo } from "@/components/dashboard/DesignInspo";
import { PenLine, Send, ScanLine, Users, Waves } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ocean/5 via-background to-background pointer-events-none" />
      
      <Sidebar />
      
      {/* Main content area */}
      <div className="pl-64 transition-all duration-300 relative">
        <Header />
        
        <main className="p-8">
          {/* Welcome banner */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary via-ocean to-alpine text-white shadow-elevated relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display text-2xl font-bold mb-2">
                Making work flow ✨
              </h2>
              <p className="text-white/80 max-w-xl">
                4.5M users are flowing today. Let's keep the momentum going.
              </p>
            </div>
            {/* Decorative waves */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
              <Waves className="h-32 w-32 animate-wave" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10 blur-xl" />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 stagger-children">
            <MetricCard
              title="Sign.Plus Documents"
              value="2,847"
              change="+12.5% this week"
              changeType="positive"
              icon={PenLine}
              iconColor="text-sign"
              gradient="bg-gradient-to-br from-sign/10 to-transparent"
            />
            <MetricCard
              title="Fax.Plus Sent"
              value="1,234"
              change="+8.2% this week"
              changeType="positive"
              icon={Send}
              iconColor="text-fax"
              gradient="bg-gradient-to-br from-fax/10 to-transparent"
            />
            <MetricCard
              title="Scan.Plus Active"
              value="892K"
              change="+23.1% this month"
              changeType="positive"
              icon={ScanLine}
              iconColor="text-scan"
              gradient="bg-gradient-to-br from-scan/10 to-transparent"
            />
            <MetricCard
              title="Active Users"
              value="4.5M"
              change="+340K new users"
              changeType="positive"
              icon={Users}
              iconColor="text-ocean"
              gradient="bg-gradient-to-br from-ocean/10 to-transparent"
            />
          </div>

          {/* Main Grid - 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Tasks & Schedule */}
            <div className="lg:col-span-5 space-y-6">
              <TaskList />
              <UpcomingMeetings />
            </div>
            
            {/* Middle Column - Actions & AI */}
            <div className="lg:col-span-4 space-y-6">
              <QuickActions />
              <AIInsights />
            </div>
            
            {/* Right Column - Personal & Team */}
            <div className="lg:col-span-3 space-y-6">
              <WeekendWidget />
              <DesignInspo />
              <TeamPulse />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
