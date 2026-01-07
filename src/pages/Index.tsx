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
        
        <main className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
          {/* Mobile: Scenic view first */}
          <div className="lg:hidden mb-6">
            <ScenicWidget />
          </div>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8 stagger-children">
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

          {/* Desktop: Top row with scenic */}
          <div className="hidden lg:block mb-8">
            <ScenicWidget />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
            {/* Tasks & Quick Actions */}
            <div className="md:col-span-1 lg:col-span-5 space-y-4 sm:space-y-6">
              <TaskList />
              <QuickActions />
              {/* Mobile: Show Together & Family widgets here */}
              <div className="lg:hidden space-y-4">
                <TogetherWidget />
                <FamilyCallsWidget />
              </div>
            </div>
            
            {/* Calendar & Team */}
            <div className="md:col-span-1 lg:col-span-4 space-y-4 sm:space-y-6">
              <CalendarWidget />
              <TeamPulse />
              {/* Mobile: Show Health here */}
              <div className="lg:hidden">
                <HealthWidget />
              </div>
            </div>
            
            {/* Personal - Desktop only column */}
            <div className="hidden lg:block lg:col-span-3 space-y-6">
              <TogetherWidget />
              <FamilyCallsWidget />
              <HealthWidget />
              <ConditionsWidget />
              <CoffeeWidget />
            </div>
            
            {/* Mobile: Conditions & Coffee */}
            <div className="md:col-span-2 lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
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
