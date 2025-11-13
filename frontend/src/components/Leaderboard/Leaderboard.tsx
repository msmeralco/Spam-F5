import React from 'react';
import { Crown } from 'lucide-react';
import '../../components/ui/glass-box.css';

export type LeaderboardRow = {
  rank: number;
  username: string;
  tokens: number;
  kwhSaved: number;
  city?: string;
};

const Leaderboard: React.FC<{ rows?: LeaderboardRow[]; currentUser?: string }> = ({ rows, currentUser }) => {
  const sample: LeaderboardRow[] = rows || [
    { rank: 1, username: 'Ana', tokens: 240, kwhSaved: 120, city: 'Taguig' },
    { rank: 2, username: 'Luis', tokens: 210, kwhSaved: 98, city: 'Makati' },
    { rank: 3, username: 'Kien', tokens: 75, kwhSaved: 45, city: 'Quezon City' },
    { rank: 4, username: 'Maya', tokens: 60, kwhSaved: 32, city: 'Taguig' },
    { rank: 5, username: 'Rico', tokens: 50, kwhSaved: 28, city: 'Pasig' },
    { rank: 6, username: 'Bea', tokens: 45, kwhSaved: 25, city: 'Mandaluyong' },
    { rank: 7, username: 'Joel', tokens: 40, kwhSaved: 22, city: 'Taguig' },
    { rank: 8, username: 'Nina', tokens: 35, kwhSaved: 18, city: 'Makati' },
    { rank: 9, username: 'Sam', tokens: 30, kwhSaved: 15, city: 'Quezon City' },
    { rank: 10, username: 'Zara', tokens: 25, kwhSaved: 12, city: 'Pasig' },
  ];

  const data = sample;

  return (
    <div className="space-y-4">
      {/* 🔹 Table Section */}
      <div className="glass-box bg-neutral rounded border border-neutral-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-neutral-950/20">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-neutral-300">Rank</th>
                <th className="px-4 py-3 font-medium text-neutral-300">Username</th>
                <th className="px-4 py-3 font-medium text-neutral-300">City</th>
                <th className="px-4 py-3 font-medium text-neutral-300 text-right">Tokens</th>
                <th className="px-8 py-3 font-medium text-neutral-300 text-right">kWh Saved</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => {
                const isCurrent =
                  currentUser && row.username.toLowerCase() === currentUser.toLowerCase();
                return (
                  <tr
                    key={row.rank}
                    className={`${isCurrent ? 'bg-orange-900/10' : ''} border-b border-neutral-900`}
                  >
                    <td className="px-4 py-3">#{row.rank}</td>
                    <td className="px-4 py-3">{row.username}</td>
                    <td className="px-4 py-3 text-neutral-400">{row.city || '-'}</td>
                    <td className="px-4 py-3 text-right font-medium text-orange-400">
                      {row.tokens}
                    </td>
                    <td className="px-8 py-3 text-right text-neutral-200">{row.kwhSaved} kWh</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
