import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import Footer from '../../components/Footer';

const Settings: React.FC = () => {
  const [name, setName] = useState('Kien');
  const [email, setEmail] = useState('kien@example.com');
  const [meralcoAccount, setMeralcoAccount] = useState('M-123456789');
  const [notifyFrequency, setNotifyFrequency] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [energyGoal, setEnergyGoal] = useState(10);
  const [saved, setSaved] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('Settings');
      const navigate = useNavigate();
      const location = useLocation();

        useEffect(() => {
          document.title = "Profile | Sinag";
        }, []);
    
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: persist to API
    console.log('Saving settings', { name, email, meralcoAccount, notifyFrequency, energyGoal });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const sampleAddress = '0x742d35Cc6634C0532925a3b844Bc9e7595f42e0';

  return (
    <div className="max-w-4xl mx-auto">
        {/* Glassmorphic Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-4 sm:mb-8 tracking-tight"
          style={{
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
          }}
        >
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDA205]" />
          <span className="text-xs sm:text-sm text-[#B4AFA8] font-secondary">Your Sinag Profile</span>
        </div>
      <section className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">Profile & Settings</h1>
        <p className="text-sm text-neutral-400 font-secondary">Manage personal info, preferences, and connected wallets.</p>
      </section>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Personal Info */}
        <div
          className="p-4 rounded-[16px] border tracking-tight"
          style={{
            background: "rgba(255, 255, 255, 0.05)", // light glass background
            backdropFilter: "blur(12px)",             // glass blur effect
            border: "1px solid rgba(255, 255, 255, 0.1)", // subtle glass border
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)" // inner soft glow
          }}
        >
            <h2 className="font-semibold mb-3">Personal Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <label className="flex flex-col">
              <span className="text-xs text-neutral-400 mb-1">Full Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className="p-2 bg-neutral-800 border border-neutral-700 rounded-[10px] text-white" />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-neutral-400 mb-1">Email Address</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="p-2 bg-neutral-800 border border-neutral-700 rounded-[10px] text-white" />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-neutral-400 mb-1">Linked Meralco Account #</span>
              <input value={meralcoAccount} onChange={(e) => setMeralcoAccount(e.target.value)} className="p-2 bg-neutral-800 border border-neutral-700 rounded-[10px] text-white tracking-tight"
 />
            </label>
          </div>
        </div>

        {/* Preferences */}
        <div
          className="p-4 rounded-[16px] border tracking-tight"
          style={{
            background: "rgba(255, 255, 255, 0.05)", // light glass background
            backdropFilter: "blur(12px)",             // glass blur effect
            border: "1px solid rgba(255, 255, 255, 0.1)", // subtle glass border
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)" // inner soft glow
          }}
        >
          <h2 className="font-semibold mb-3">Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-neutral-400 mb-2">Notification frequency</div>
              <div className="flex gap-2">
                <label className={`px-3 py-2 rounded cursor-pointer ${notifyFrequency === 'daily' ? 'bg-[#FDA405] text-white' : 'bg-neutral-800 text-neutral-300 border border-neutral-700'}`}>
                  <input type="radio" name="notify" value="daily" className="hidden" onChange={() => setNotifyFrequency('daily')} checked={notifyFrequency === 'daily'} /> Daily
                </label>
                <label className={`px-3 py-2 rounded cursor-pointer ${notifyFrequency === 'weekly' ? 'bg-[#FDA405] text-white' : 'bg-neutral-800 text-neutral-300 border border-neutral-700'}`}>
                  <input type="radio" name="notify" value="weekly" className="hidden" onChange={() => setNotifyFrequency('weekly')} checked={notifyFrequency === 'weekly'} /> Weekly
                </label>
                <label className={`px-3 py-2 rounded cursor-pointer ${notifyFrequency === 'monthly' ? 'bg-[#FDA405] text-white' : 'bg-neutral-800 text-neutral-300 border border-neutral-700'}`}>
                  <input type="radio" name="notify" value="monthly" className="hidden" onChange={() => setNotifyFrequency('monthly')} checked={notifyFrequency === 'monthly'} /> Monthly
                </label>
              </div>
            </div>

            <div>
              <label className="flex flex-col">
                <span className="text-xs text-neutral-400 mb-2">Energy goal (% reduction this month)</span>
                <div className="flex items-center gap-3">
                  <input type="range" min={0} max={50} value={energyGoal} onChange={(e) => setEnergyGoal(Number(e.target.value))} className="w-full" />
                  <div className="w-12 text-right font-medium">{energyGoal}%</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Security */}
        <div
          className="p-4 rounded-[16px] border tracking-tight"
          style={{
            background: "rgba(255, 255, 255, 0.05)", // light glass background
            backdropFilter: "blur(12px)",             // glass blur effect
            border: "1px solid rgba(255, 255, 255, 0.1)", // subtle glass border
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)" // inner soft glow
          }}
        >
          <h2 className="font-semibold mb-3">Security & Connected Wallets</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Connected Wallet</div>
                <div className="text-xs text-neutral-400">MetaMask / Thirdweb</div>
              </div>
              <div>
                <button className="h-10 sm:h-12 md:h-[45px] px-6 sm:px-8 bg-gradient-to-b from-sinag-orange-start to-sinag-orange-end hover:opacity-90 transition-opacity rounded-[50px] text-black font-medium text-sm sm:text-base shadow-lg shadow-sinag-orange-start/20"
>Connect Wallet</button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">View Blockchain Transactions</div>
                <div className="text-xs text-neutral-400">Open your address on the blockchain explorer</div>
              </div>
              <div>
                <a href={`https://etherscan.io/address/${sampleAddress}`} target="_blank" rel="noreferrer" className="h-10 sm:h-12 md:h-[45px] px-6 py-3 sm:px-8 bg-gradient-to-b from-sinag-orange-start to-sinag-orange-end hover:opacity-90 transition-opacity rounded-[50px] text-black font-medium text-sm sm:text-base shadow-lg shadow-sinag-orange-start/20">View on Explorer</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="h-10 sm:h-12 md:h-[45px] px-6 sm:px-8 bg-gradient-to-b from-sinag-orange-start to-sinag-orange-end hover:opacity-90 transition-opacity rounded-[50px] text-black font-medium text-sm sm:text-base shadow-lg shadow-sinag-orange-start/20">Save Settings</button>
          <button type="button" onClick={() => { setName(''); setEmail(''); setMeralcoAccount(''); setNotifyFrequency('weekly'); setEnergyGoal(10); }} className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-[50px] text-neutral-200">Reset</button>
          {saved && <div className="text-sm text-emerald-400">Settings saved.</div>}
        </div>
      </form>
    <Footer />
    </div>
  );
};

export default Settings;
