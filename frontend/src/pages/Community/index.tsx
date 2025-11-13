import React from 'react';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Crown, PieChart, Map } from 'lucide-react';

const Community: React.FC = () => {
  const totalCO2 = 2350; // kg
  const totalTokens = 12340;
  const userCityRank = 12; // sample
  const [activeNav, setActiveNav] = useState<string>('Dashboard');
  const navigate = useNavigate();
  const location = useLocation();

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

      {/* Glassmorphic Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-4 sm:mb-8 tracking-tight"
          style={{
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
          }}
        >
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDA205]" />
          <span className="text-xs sm:text-sm text-[#B4AFA8] font-secondary">Sinag Community Leaderboard</span>
        </div>
       
      <section className="mb-6">
        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-1 sm:mb-2 tracking-tight">
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDA205]" />
          <span className="text-xs sm:text-sm text-[#B4AFA8] font-secondary">
            Sinag Community Leaderboard
          </span>
        </div>

        <h1 className="text-3xl font-semibold mb-2">Community Impact</h1>
        <p className="text-sm text-neutral-400">
          Encourage friendly competition and collective environmental impact across regions.
        </p>
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
          <div className="bg-white/3 border border-white/[0.02]  backdrop-blur-md shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.12)] rounded-lg p-6">
          <div className="flex items-center gap-2.5 mb-5">
          <PieChart className="w-5 sm:w-6 h-5 sm:h-6 text-sinag-orange-start" />
            <h4 className="font-semibold">Community Stats</h4>
          </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
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

          <div className="p-4 bg-neutral rounded border border-neutral-800">
          <div className="flex items-center gap-2.5 mb-5">
          <Map className="w-5 sm:w-6 h-5 sm:h-6 text-sinag-orange-start" />
            <h4 className="font-semibold">Regional Impact</h4>
            </div>
            <div className="mt-3 h-40 bg-neutral-950/10 rounded flex items-center justify-center text-neutral-500">
              {/* Placeholder for animated map of the Philippines */}
              Animated map placeholder
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
          </div>
        </aside>
      </div>
    </>
  );
};

export default Community;
