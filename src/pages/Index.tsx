import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TaskList } from "@/components/dashboard/TaskList";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { TeamPulse } from "@/components/dashboard/TeamPulse";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { ConditionsWidget } from "@/components/dashboard/ConditionsWidget";
import { CoffeeWidget } from "@/components/dashboard/CoffeeWidget";
import { BackgroundWaves } from "@/components/dashboard/BackgroundWaves";
import { AIChat } from "@/components/dashboard/AIChat";
import { PenLine, Send, ScanLine, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated background */}
      <BackgroundWaves />
      
      <Sidebar />
      
      <div className="pl-60 transition-all duration-300 relative z-10">
        <Header />
        
        <main className="p-10 max-w-6xl">
          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 stagger-children">
            <MetricCard
              title="Sign.Plus Docs"
              value="2,847"
              change="12.5%"
              changeType="positive"
              icon={PenLine}
              iconBg="bg-sign/10 text-sign"
            />
            <MetricCard
              title="Fax.Plus Sent"
              value="1,234"
              change="8.2%"
              changeType="positive"
              icon={Send}
              iconBg="bg-fax/10 text-fax"
            />
            <MetricCard
              title="Scan.Plus Active"
              value="892K"
              change="23.1%"
              changeType="positive"
              icon={ScanLine}
              iconBg="bg-scan/10 text-scan"
            />
            <MetricCard
              title="Active Users"
              value="4.5M"
              change="340K"
              changeType="positive"
              icon={Users}
              iconBg="bg-ocean/10 text-ocean"
            />
          </div>

          {/* Main Grid - Clean 2 column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left - Primary content */}
            <div className="lg:col-span-3 space-y-6">
              <TaskList />
              <QuickActions />
              <TeamPulse />
            </div>
            
            {/* Right - Personal & lifestyle */}
            <div className="lg:col-span-2 space-y-6">
              <ConditionsWidget />
              <CoffeeWidget />
              <AIInsights />
            </div>
          </div>
        </main>
      </div>
      
      {/* Floating AI Chat */}
      <AIChat />
    </div>
  );
};

export default Index;
