import React from 'react';
import { sinagContext } from '@/context/sinagContext';

const QuickSummary: React.FC = () => {
  const { currentUsage, energySaved, sinagTokens, Baseline } = React.useContext(sinagContext);
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 100, // Light weight for labels
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '20.8px',
    letterSpacing: '1px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF8F',
  };

  const valueStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 1000, // Slightly bolder for values
    fontStyle: 'normal',
    fontSize: '30px', // Increased font size
    lineHeight: '27px',
    letterSpacing: '1px',
    textAlign: 'center',
    marginTop: '4px',
    // Gradient text
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.56) 0%, #FFFFFF 75%)',
    WebkitBackgroundClip: 'text', // Required for Chrome/Safari
    WebkitTextFillColor: 'transparent', // Make text transparent to show gradient
  };

  const sinagTokenValueStyle: React.CSSProperties = {
    ...valueStyle,
    background: 'none',
    WebkitBackgroundClip: 'unset',
    WebkitTextFillColor: 'unset',
    color: '#FE9126',
  };

  const summaryBoxClasses = "p-4 bg-neutral flex flex-col items-center justify-center";

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border-l border-transparent">
      {/* Current Usage */}
      <div className={`${summaryBoxClasses} border-r border-white/20`}>
        <span style={labelStyle}>Current Usage</span>
        <strong style={valueStyle}>{currentUsage || 0} kWh</strong>
      </div>
      {/* Energy Saved */}
      <div className={`${summaryBoxClasses} border-r border-white/20`}>
        <span style={labelStyle}>Energy Saved</span>
        <strong style={valueStyle}>{energySaved || 0} kWh</strong>
      </div>
      {/* Sinag Tokens */}
      <div className={`${summaryBoxClasses} border-r border-white/20`}>
        <span style={labelStyle}>Sinag Tokens</span>
        <strong style={sinagTokenValueStyle}>{sinagTokens || 0} SIN</strong>
      </div>
    </div>
  );
};

export default QuickSummary;
