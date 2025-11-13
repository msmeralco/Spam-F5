import React from 'react';
import { Header, QuickSummary } from '../../components';
import ConsumptionChart from '../../components/Charts/ConsumptionChart';
import GeminiChat from '../../components/GeminiChat/GeminiChat';
import Achievements from '../../components/Achievements/Achievements';

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
  <div className="flex flex-col lg:flex-row items-start justify-between">
    {/* Left side: Greeting + subtext */}
    <div className="flex flex-col items-start">
      <h1 style={valueStyle}>Good evening, Kien! 🌙</h1>
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
          <div className="bg-white/3 border border-white/[0.02] backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">Consumption Trend</h2>
            <ConsumptionChart />
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white/3 border border-white/[0.02] backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
            <h3 className="font-semibold">Carbon Impact</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Your savings = <strong>14.5 kg CO₂</strong> avoided — planting <strong>2 trees</strong> 🌱
            </p>
          </div>

          <div className="bg-white/3 border border-white/[0.02] backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
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
          <div className="bg-white/3 border border-white/[0.02] backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">AI Insights</h2>
            <GeminiChat />
          </div>
        </div>

        <div className="bg-white/3 border border-white/[0.02] backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
          <Achievements />
        </div>
      </section>
    </>
  );
};

export default HomeDashboard;
