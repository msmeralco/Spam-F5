import React from 'react';
import { Header, QuickSummary } from '../../components';
import ConsumptionChart from '../../components/Charts/ConsumptionChart';
import GeminiChat from '../../components/GeminiChat/GeminiChat';
import Achievements from '../../components/Achievements/Achievements';
import { Sparkles, FileText, PieChart, Crown, Users, Zap } from "lucide-react";
import '../../components/ui/glass-box.css';
import { Button } from "@/components/ui/button";
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import { sinagContext } from '../../context/sinagContext';



const HomeDashboard: React.FC = () => {
  const { EnvironmentalImpact, toOffset, savedPercentage } = React.useContext(sinagContext);
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

    useEffect(() => {
    document.title = "Dashboard | Sinag";
  }, []);

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
      <h1 style={valueStyle}>Welcome Back!</h1>
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
              Your savings = <strong>{EnvironmentalImpact} kg CO₂</strong> avoided — planting <strong>{toOffset} trees</strong> 🌱
            </p>
          </div>

          <div className="glass-box rounded-lg p-6">
            <h3 className="font-semibold">Quick Insight</h3>
            <p className="mt-2 text-sm text-neutral-400">
              You reduced usage by <strong>{savedPercentage}%</strong> vs last month. Keep it up!
            </p>
          </div>
        </aside>
      </section>

      {/* Bottom: AI Insights + Achievements */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-box z-0 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">AI Insights & Recommendation</h2>
            <GeminiChat />
          </div>
        </div>

        <div className="glass-box rounded-lg p-6">
          <Achievements />
        </div>
      </section>
     <Footer />
    </>
  );
};

export default HomeDashboard;
