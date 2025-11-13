import React from 'react';

interface Bill {
  id: string;
  date: string;
  kwh: number;
  amount: number;
  tokensEarned: number;
  status: 'verified' | 'pending' | 'low-quality';
}

const BillSummaryCards: React.FC = () => {
  const bills: Bill[] = [
    {
      id: '1',
      date: 'Nov 2025',
      kwh: 345,
      amount: 2450,
      tokensEarned: 29,
      status: 'verified',
    },
    {
      id: '2',
      date: 'Oct 2025',
      kwh: 360,
      amount: 2610,
      tokensEarned: 24,
      status: 'verified',
    },
    {
      id: '3',
      date: 'Sep 2025',
      kwh: 370,
      amount: 2750,
      tokensEarned: 20,
      status: 'pending',
    },
    {
      id: '4',
      date: 'Aug 2025',
      kwh: 380,
      amount: 2900,
      tokensEarned: 18,
      status: 'low-quality',
    },
  ];

  const getStatusIcon = (status: Bill['status']) => {
    switch (status) {
      case 'verified':
        return <span className="text-green-400">✅</span>;
      case 'pending':
        return <span className="text-yellow-400">⏳</span>;
      case 'low-quality':
        return <span className="text-red-400">⚠️</span>;
    }
  };

  const getStatusLabel = (status: Bill['status']) => {
    switch (status) {
      case 'verified':
        return 'Verified & Analyzed';
      case 'pending':
        return 'Pending OCR';
      case 'low-quality':
        return 'Low Data Quality';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-800">
            <th className="text-left py-3 px-4 font-semibold text-neutral-300">Bill Date</th>
            <th className="text-right py-3 px-4 font-semibold text-neutral-300">kWh Consumed</th>
            <th className="text-right py-3 px-4 font-semibold text-neutral-300">Bill Amount</th>
            <th className="text-right py-3 px-4 font-semibold text-neutral-300">Tokens Earned</th>
            <th className="text-center py-3 px-4 font-semibold text-neutral-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id} className="border-b border-neutral-900 hover:bg-neutral-900/50 transition">
              <td className="py-3 px-4 text-neutral-200">{bill.date}</td>
              <td className="py-3 px-4 text-right text-neutral-200">{bill.kwh} kWh</td>
              <td className="py-3 px-4 text-right text-neutral-200">₱{bill.amount.toLocaleString('en-PH')}</td>
              <td className="py-3 px-4 text-right text-emerald-400 font-semibold">{bill.tokensEarned} SIN</td>
              <td className="py-3 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <div>{getStatusIcon(bill.status)}</div>
                  <span className="text-xs text-neutral-400">{getStatusLabel(bill.status)}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillSummaryCards;
