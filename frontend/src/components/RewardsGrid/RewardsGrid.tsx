import React from 'react';

type Reward = {
  id: string;
  title: string;
  cost: number;
  category?: string;
  image?: string;
};

const RewardsGrid: React.FC<{ rewards: Reward[]; onRedeem?: (id: string) => void }> = ({ rewards, onRedeem }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {rewards.map((r) => (
        <div key={r.id} className="p-4 rounded flex flex-col" 
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
          }}
        >
          <div className="h-40 bg-neutral-900 rounded mb-4 flex items-center justify-center text-neutral-500">{r.image ? <img src={r.image} alt={r.title} /> : <div className="text-2xl">🎁</div>}</div>
          <h3 className="font-semibold text-sm text-neutral-200">{r.title}</h3>
          <div className="text-xs text-neutral-400 mb-3">{r.category}</div>
          <div className="mt-auto flex items-center justify-between">
            <div className="font-bold text-emerald-400">{r.cost} SIN</div>
            <button
              onClick={() => onRedeem?.(r.id)}
              className="px-3 py-1 bg-[#FE9126] hover:bg-[#FE9126] rounded text-black text-sm transition"
            >
              Redeem
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RewardsGrid;
