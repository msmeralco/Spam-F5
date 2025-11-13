import React from 'react';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../components/ui/glass-box.css';
import { Sparkles, PieChart, Award, Crown } from "lucide-react";
import Footer from '../../components/Footer';

const Community: React.FC = () => {
  const totalCO2 = 2350; // kg
  const totalTokens = 12340;
  const userCityRank = 12; // sample
  const [activeNav, setActiveNav] = useState<string>('Dashboard');
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
      document.title = "Community | Sinag";
    }, []);

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/community')) setActiveNav('Community');
    else if (path.includes('/billtracker')) setActiveNav('Bill Tracker');
    else if (path.includes('/marketplace')) setActiveNav('Marketplace');
    else if (path.includes('/wallet')) setActiveNav('Wallet');
    else if (path.includes('/settings')) setActiveNav('Settings');
    else setActiveNav('Community');
  }, [location.pathname]);

  return (
    <>
      <section className="mb-6">
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-1 sm:mb-2 tracking-tight">
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDA205]" />
          <span className="text-xs sm:text-sm text-[#B4AFA8] font-secondary">
            Sinag Community Leaderboard
          </span>
        </div>

        <h1 className="text-3xl font-semibold mb-2">Community Impact</h1>
        <p className="text-sm text-neutral-400 font-secondary">Encourage friendly competition and collective environmental impact across regions.</p>
      </section>

      {/* 🔹 Align Leaderboard + Stats horizontally */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-start">
        <div className="lg:col-span-2 space-y-5">
          {/* 🔹 Detached Header Section */}
      <div className="glass-box p-4 flex items-center gap-3 rounded border border-neutral-800">
        <Crown className="text-orange-400 w-5 h-5" />
        <div>
          <h3 className="font-semibold text-base sm:text-lg">Leaderboard</h3>
          <p className="text-sm text-neutral-400">Top users by tokens and kWh saved</p>
        </div>
      </div>

          <Leaderboard currentUser="Kien" />
        </div>

        <aside className="space-y-4">
          {/* 🔹 Community Stats */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PieChart className="w-5 h-5 text-orange-400" />
              <h2 className="text-xl font-semibold">Community Stats</h2>
            </div>

            {/* 🟠 Make this glass-box visually match the leaderboard height */}
            <div className="glass-box bg-white/3 border border-white/[0.02] backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6 h-full">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-neutral-950/20 rounded">
                  <div className="text-xs text-neutral-400">Total CO₂ avoided</div>
                  <div className="text-xl font-bold">{totalCO2} kg</div>
                </div>
                <div className="p-3 bg-neutral-950/20 rounded">
                  <div className="text-xs text-neutral-400">Total tokens minted</div>
                  <div className="text-xl font-bold">{totalTokens} SIN</div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Achievement Banners */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-orange-400" />
              <h2 className="text-xl font-semibold">Achievement Banners</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 glass-box rounded">
                <strong>Barangay Taguig reached 1,000 kWh savings goal!</strong>
                <p className="text-sm text-neutral-400 mt-1">
                  This milestone unlocked a community reward: 1000 SIN to be distributed among top contributors.
                </p>
              </div>

              <div className="p-4 glass-box border rounded">
                <strong>Citywide Challenge: 10% reduction this month</strong>
                <p className="text-sm text-neutral-400 mt-1">
                  Join the challenge and earn bonus tokens for sustained reductions.
                </p>
              </div>
              <div className="glass-box p-4 bg-neutral rounded border border-neutral-800">
            <h4 className="font-semibold">You're #{userCityRank} in your city!</h4>
            <p className="text-sm text-neutral-400">
              Keep participating in challenges to climb the leaderboard and earn more SINAG tokens.
            </p>
          </div>
            </div>
            </section>
          
        </aside>
      </div>
      <Footer />
    </>
  );
};

export default Community;
