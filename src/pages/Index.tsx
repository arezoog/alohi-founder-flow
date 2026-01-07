import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TaskList } from "@/components/dashboard/TaskList";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { TeamPulse } from "@/components/dashboard/TeamPulse";
import { ConditionsWidget } from "@/components/dashboard/ConditionsWidget";
import { CoffeeWidget } from "@/components/dashboard/CoffeeWidget";
import { BackgroundWaves } from "@/components/dashboard/BackgroundWaves";
import { AIChat } from "@/components/dashboard/AIChat";
import { ScenicWidget } from "@/components/dashboard/ScenicWidget";
import { HealthWidget } from "@/components/dashboard/HealthWidget";
import { CalendarWidget } from "@/components/dashboard/CalendarWidget";
import { PenLine, Send, ScanLine, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated background */}
      <BackgroundWaves />
      
      <Sidebar />
      
      <div className="pl-60 transition-all duration-300 relative z-10">
        <Header />
        
        <main className="p-10 max-w-7xl">
          {/* Top row - Scenic view + Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-1">
              <ScenicWidget />
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4 stagger-children">
              <MetricCard
                title="Sign.Plus"
                value="2,847"
                change="12.5%"
                changeType="positive"
                icon={PenLine}
                iconBg="bg-sign/10 text-sign"
              />
              <MetricCard
                title="Fax.Plus"
                value="1,234"
                change="8.2%"
                changeType="positive"
                icon={Send}
                iconBg="bg-fax/10 text-fax"
              />
              <MetricCard
                title="Scan.Plus"
                value="892K"
                change="23.1%"
                changeType="positive"
                icon={ScanLine}
                iconBg="bg-scan/10 text-scan"
              />
              <MetricCard
                title="Users"
                value="4.5M"
                change="340K"
                changeType="positive"
                icon={Users}
                iconBg="bg-ocean/10 text-ocean"
              />
            </div>
          </div>

          {/* Main Grid - 3 column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left - Tasks & Quick Actions */}
            <div className="lg:col-span-5 space-y-6">
              <TaskList />
              <QuickActions />
            </div>
            
            {/* Middle - Calendar & Team */}
            <div className="lg:col-span-4 space-y-6">
              <CalendarWidget />
              <TeamPulse />
            </div>
            
            {/* Right - Personal */}
            <div className="lg:col-span-3 space-y-6">
              <HealthWidget />
              <ConditionsWidget />
              <CoffeeWidget />
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
