import React, { useContext } from 'react';
import { sinagContext } from '@/context/sinagContext';

interface HistoryEntry {
  month?: string;
  kwh?: number;
  energy_saved?: number;
  tokensEarned?: number;
}

const BillSummaryCards: React.FC = () => {
  const { history } = useContext(sinagContext);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-800">
            <th className="text-left py-3 px-4 font-medium text-[#919191]">BILL DATE</th>
            <th className="text-right py-3 px-4 font-medium text-[#919191]">KWH CONSUMED</th>
            <th className="text-right py-3 px-4 font-medium text-[#919191]">SINAG TOKEN</th>
          </tr>
        </thead>
        <tbody>
          {history.length > 0 ? (
            history.map((entry: HistoryEntry, index: number) => (
              <tr key={index} className="border-b border-neutral-900 hover:bg-neutral-900/50 transition">
                <td className="py-3 px-4 text-neutral-200 font-bold text-[20px]">{entry.month || 'N/A'}</td>
                <td className="py-3 px-4 text-right text-neutral-200 font-bold text-[20px]">{entry.kwh || 0} kWh</td>
                <td className="py-3 px-4 text-right text-neutral-200 font-bold text-[20px]">{entry.tokensEarned || 0} $SIN</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="py-8 text-center text-neutral-500">
                No bill history available. Upload a bill to get started.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BillSummaryCards;
