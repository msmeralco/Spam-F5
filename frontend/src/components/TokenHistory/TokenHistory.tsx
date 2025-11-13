import React from 'react';

interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: string;
  type: 'earn' | 'spend';
}

const TokenHistory: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      amount: 5,
      description: 'Saved 5 kWh',
      date: 'Nov 13, 2025',
      type: 'earn',
    },
    {
      id: '2',
      amount: 10,
      description: 'Challenge Completed: 5% Saver',
      date: 'Nov 12, 2025',
      type: 'earn',
    },
    {
      id: '3',
      amount: 20,
      description: 'Redeemed for 5% Bill Rebate',
      date: 'Nov 10, 2025',
      type: 'spend',
    },
    {
      id: '4',
      amount: 8,
      description: 'Daily streak bonus (7 days)',
      date: 'Nov 9, 2025',
      type: 'earn',
    },
    {
      id: '5',
      amount: 15,
      description: 'Redeemed LED Bulb Pack',
      date: 'Nov 5, 2025',
      type: 'spend',
    },
    {
      id: '6',
      amount: 12,
      description: 'Energy savings achievement',
      date: 'Oct 28, 2025',
      type: 'earn',
    },
  ];

  return (
    <div className="space-y-2">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800 rounded hover:bg-neutral-800/50 transition"
        >
          <div className="flex items-center gap-4 flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                tx.type === 'earn'
                  ? 'bg-emerald-900/30 text-emerald-400'
                  : 'bg-orange-900/30 text-orange-400'
              }`}
            >
              {tx.type === 'earn' ? '📈' : '📉'}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-200">{tx.description}</p>
              <p className="text-xs text-neutral-500">{tx.date}</p>
            </div>
          </div>
          <div className={`text-lg font-bold ${tx.type === 'earn' ? 'text-emerald-400' : 'text-orange-400'}`}>
            {tx.type === 'earn' ? '+' : '−'}{tx.amount} SIN
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenHistory;
