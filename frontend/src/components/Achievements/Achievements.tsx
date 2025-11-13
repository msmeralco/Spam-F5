import React from 'react';

const badges = ['Eco Starter', '5% Saver', 'Carbon Hero'];

const Achievements: React.FC = () => {
  const progress = 62; // percent to next tier (sample)

  return (
    <div className="p-4 bg-neutral-900 rounded">
      <h3 className="font-semibold mb-3">Achievements</h3>

      <div className="flex gap-2 flex-wrap">
        {badges.map((b) => (
          <span key={b} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-200 border border-neutral-700">
            {b}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <div className="text-sm text-neutral-300">Progress to next reward tier</div>
        <div className="w-full bg-neutral-800 rounded h-3 mt-2 overflow-hidden">
          <div className="h-3 bg-emerald-500" style={{ width: `${progress}%` }} />
        </div>
        <div className="text-xs text-neutral-400 mt-2">{progress}% to the next tier</div>
      </div>
    </div>
  );
};

export default Achievements;
