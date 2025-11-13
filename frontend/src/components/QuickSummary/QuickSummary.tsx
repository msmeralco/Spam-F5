import React from 'react';

const QuickSummary: React.FC = () => {
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 100, // Light weight for labels
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '23.8px',
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

  const summaryBoxClasses = "p-4 bg-neutral flex flex-col items-center justify-center";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-l border-transparent">
      {/* Current Usage */}
      <div className={`${summaryBoxClasses} border-r border-white/20`}>
        <span style={labelStyle}>Current Usage</span>
        <strong style={valueStyle}>345 kWh</strong>
      </div>
      {/* Energy Saved */}
      <div className={`${summaryBoxClasses} border-r border-white/20`}>
        <span style={labelStyle}>Energy Saved</span>
        <strong style={valueStyle}>29 kWh</strong>
      </div>
      {/* Sinag Tokens */}
      <div className={`${summaryBoxClasses} border-r border-white/20`}>
        <span style={labelStyle}>Sinag Tokens</span>
        <strong style={valueStyle}>29 SIN</strong>
      </div>
      {/* Bill Estimate */}
      <div className={summaryBoxClasses}>
        <span style={labelStyle}>Bill Estimate</span>
        <strong style={valueStyle}>₱2,450</strong>
      </div>
    </div>
  );
};

export default QuickSummary;
