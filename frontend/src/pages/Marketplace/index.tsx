import React, { useMemo, useState } from 'react';
import RewardsGrid from '../../components/RewardsGrid/RewardsGrid';
import RedeemModal from '../../components/RedeemModal/RedeemModal';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

type Category = 'All' | 'Appliance' | 'Voucher' | 'Donation' | 'Partner';

const Marketplace: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const [isRedeemOpen, setIsRedeemOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('Dashboard');
    const navigate = useNavigate();
    const location = useLocation();
  
  const rewards = useMemo(
    () => [
      { id: 'r1', title: 'LED Bulb Pack (10)', cost: 30, category: 'Appliance', image: '' },
      { id: 'r2', title: 'Smart Power Strip', cost: 50, category: 'Appliance', image: '' },
      { id: 'r3', title: 'Solar Charger', cost: 75, category: 'Appliance', image: '' },
      { id: 'r4', title: '₱500 Lazada Voucher', cost: 40, category: 'Voucher', image: '' },
      { id: 'r5', title: 'Donate 10 kWh Equivalent', cost: 20, category: 'Donation', image: '' },
      { id: 'r6', title: 'SM Appliance 10% Off', cost: 25, category: 'Partner', image: '' },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (filter === 'All') return rewards;
    return rewards.filter((r) => r.category === filter);
  }, [filter, rewards]);

  const partners = ['Meralco', 'SM Appliance', 'Anihan Foundation'];
  useEffect(() => {
      const path = location.pathname.toLowerCase();
      if (path.includes('/community')) setActiveNav('Community');
      else if (path.includes('/billtracker')) setActiveNav('Bill Tracker');
      else if (path.includes('/marketplace')) setActiveNav('Marketplace');
      else if (path.includes('/wallet')) setActiveNav('Wallet');
      else if (path.includes('/settings')) setActiveNav('Settings');
      else setActiveNav('Dashboard');
    }, [location.pathname]);
    
  return (
    <>
              
      <section className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">Rewards Marketplace</h1>
        <p className="text-sm text-neutral-400">Redeem your SINAG tokens for products, vouchers, donations, and partner discounts.</p>
      </section>

      {/* Partner carousel */}
      <section className="mb-6">
        <div className="overflow-x-auto py-3">
          <div className="flex gap-6 items-center px-2">
            {partners.map((p) => (
              <div key={p} className="flex-shrink-0 w-48 h-20 bg-neutral border border-neutral-800 rounded flex items-center justify-center text-sm text-neutral-300">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          {(['All', 'Appliance', 'Voucher', 'Donation', 'Partner'] as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1 text-sm rounded ${filter === c ? 'bg-blue-600 text-white' : 'bg-neutral text-neutral-300 border border-neutral-800'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="text-sm text-neutral-400">Community Goal: When users collectively save <strong>10,000 kWh</strong>, Meralco will plant <strong>500 trees</strong> 🌳</div>
      </section>

      {/* Rewards grid */}
      <section className="mb-8">
        <RewardsGrid rewards={filtered} onRedeem={() => setIsRedeemOpen(true)} />
      </section>

      {isRedeemOpen && <RedeemModal onClose={() => setIsRedeemOpen(false)} tokenBalance={75} />}
    </>
  );
};

export default Marketplace;
