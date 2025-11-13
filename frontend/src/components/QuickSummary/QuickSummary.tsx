import React from 'react';

const QuickSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 bg-neutral-900 rounded">Current Usage<br/><strong>345 kWh</strong></div>
      <div className="p-4 bg-neutral-900 rounded">Energy Saved<br/><strong>29 kWh</strong></div>
      <div className="p-4 bg-neutral-900 rounded">Sinag Tokens<br/><strong>29 SIN</strong></div>
      <div className="p-4 bg-neutral-900 rounded">Bill Estimate<br/><strong>₱2,450</strong></div>
    </div>
  );
};

export default QuickSummary;
