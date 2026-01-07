import { useState } from "react";
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
import { TogetherWidget } from "@/components/dashboard/TogetherWidget";
import { FamilyCallsWidget } from "@/components/dashboard/FamilyCallsWidget";
import { PenLine, Send, ScanLine, Users } from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated background */}
      <BackgroundWaves />
      
      <Sidebar 
        mobileOpen={mobileMenuOpen} 
        onMobileClose={() => setMobileMenuOpen(false)} 
      />
      
      <div className="lg:pl-60 transition-all duration-300 relative z-10">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          {/* Health First - Top Priority */}
          <div className="mb-6">
            <HealthWidget />
          </div>

          {/* Top row: Metrics + Scenic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6">
            {/* Metrics */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 stagger-children">
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
            
            {/* Scenic - next to metrics on desktop */}
            <div className="lg:col-span-5">
              <ScenicWidget />
            </div>
          </div>

          {/* Main Grid - 2 columns for main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Column 1: Tasks & Quick Actions */}
            <div className="space-y-4 sm:space-y-6">
              <TaskList />
              <QuickActions />
            </div>
            
            {/* Column 2: Calendar & Team */}
            <div className="space-y-4 sm:space-y-6">
              <CalendarWidget />
              <TeamPulse />
            </div>
          </div>

          {/* Personal Row - 4 widgets side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <TogetherWidget />
            <FamilyCallsWidget />
            <ConditionsWidget />
            <CoffeeWidget />
          </div>
        </main>
      </div>
      
      {/* Floating AI Chat */}
      <AIChat />
    </div>
  );
};

export default Index;
