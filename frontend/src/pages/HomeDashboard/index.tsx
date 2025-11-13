import React from 'react';
import { Header, QuickSummary } from '../../components';
import ConsumptionChart from '../../components/Charts/ConsumptionChart';
import GeminiChat from '../../components/GeminiChat/GeminiChat';
import Achievements from '../../components/Achievements/Achievements';
import { Sparkles, FileText, PieChart, Crown, Users, Zap } from "lucide-react";
import '../../components/ui/glass-box.css';
import { Button } from "@/components/ui/button";

const HomeDashboard: React.FC = () => {
  const valueStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 1000, // Slightly bolder for values
    fontStyle: 'normal',
    fontSize: '30px', // Increased font size
    lineHeight: '27px',
    letterSpacing: '1px',
    textAlign: 'center',
    marginTop: '4px',
    // Gradient text
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.56) 0%, #FFFFFF 75%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const summaryBoxClasses = "p-4 bg-neutral flex flex-col items-center justify-center";

  return (
    <>
    
  <section className="mb-5">
   <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-1 sm:mb-2 tracking-tight">
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDA205]" />
            <span className="text-xs sm:text-sm text-[#B4AFA8] font-secondary">Your Sinag Dashboard</span>
          </div>

  <div className="flex flex-col lg:flex-row items-start justify-between">
    {/* Left side: Greeting + subtext */}
    
    <div className="flex flex-col items-start">
      <h1 style={valueStyle}>Welcome Back, Kien!</h1>
      <p className="mt-2 text-sm text-neutral-400">
        Here’s your energy performance this month.
      </p>
    </div>

    {/* Right side: Quick summary cards */}
    <section className="mt-5 lg:mt-0">
      <QuickSummary />
    </section>
  </div>
      </section>
          

      {/* Middle: Charts & Insights */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="glass-box z-10 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">Consumption Trend</h2>
            <ConsumptionChart />
          </div>
        </div>

        <aside className="space-y-4">
          <div className="glass-box rounded-lg p-6">
            <h3 className="font-semibold">Carbon Impact</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Your savings = <strong>14.5 kg CO₂</strong> avoided — planting <strong>2 trees</strong> 🌱
            </p>
          </div>

          <div className="glass-box rounded-lg p-6">
            <h3 className="font-semibold">Quick Insight</h3>
            <p className="mt-2 text-sm text-neutral-400">
              You reduced usage by <strong>8%</strong> vs last month. Keep it up!
            </p>
          </div>
        </aside>
      </section>

      {/* Bottom: AI Insights + Achievements */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-box z-0 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">AI Insights</h2>
            <GeminiChat />
          </div>
        </div>

        <div className="glass-box rounded-lg p-6">
          <Achievements />
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-12 sm:py-16 px-4 sm:px-6 border-t border-glass-border/10 z-10">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-sinag-orange-start" />
              <span className="text-lg sm:text-xl font-bold text-sinag-text">Sinag</span>
            </div>
            <p className="text-xs sm:text-sm text-sinag-text-muted/60 max-w-xs sm:max-w-md mb-4 sm:mb-6">
              Empowering every Filipino to light up a sustainable tomorrow.
            </p>
            <Button
              variant="outline"
              className="text-xs sm:text-sm border-glass-border/20 bg-glass-bg/5 text-sinag-text hover:bg-glass-bg/10"
            >
              Shine with Sinag
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 sm:pt-8 border-t border-glass-border/10 text-xs sm:text-sm text-sinag-text-muted/40">
            <p>Copyright ©2025</p>
            <div className="flex gap-4 sm:gap-8 text-center md:text-right">
              <span>All rights reserved</span>
              <span>Sinag</span>
            </div>
          </div>
        </div>
      </footer>
    
    </>
  );
};

export default HomeDashboard;
