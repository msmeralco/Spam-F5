import React, { useState, useMemo } from 'react';

// Simple inline SVG chart comparing baseline vs actual across months.
const ConsumptionChart: React.FC = () => {
  // sample data (months, baseline, actual)
  const data = useMemo(
    () => [
      { month: 'Jul', baseline: 400, actual: 380 },
      { month: 'Aug', baseline: 380, actual: 360 },
      { month: 'Sep', baseline: 370, actual: 345 },
      { month: 'Oct', baseline: 360, actual: 330 },
      { month: 'Nov', baseline: 350, actual: 345 },
    ],
    []
  );

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const width = 700;
  const height = 220;
  const padding = 28;

  const maxVal = Math.max(...data.map((d) => Math.max(d.baseline, d.actual)));

  const xStep = (width - padding * 2) / (data.length - 1);

  const toX = (i: number) => padding + i * xStep;
  const toY = (v: number) => padding + (height - padding * 2) * (1 - v / maxVal);

  const baselinePath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(d.baseline)}`)
    .join(' ');
  const actualPath = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(d.actual)}`)
    .join(' ');

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* background grid */}
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0f1724" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#0f1724" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* baseline line */}
        <path d={baselinePath} fill="none" stroke="#60a5fa" strokeWidth={2} strokeDasharray="6 4" />

        {/* actual line */}
        <path d={actualPath} fill="none" stroke="#34d399" strokeWidth={3} strokeLinecap="round" />

        {/* area between baseline and actual (transparent) */}
        <path
          d={`M ${toX(0)} ${toY(data[0].actual)} ${data
            .slice(1)
            .map((d, i) => `L ${toX(i + 1)} ${toY(d.actual)}`)
            .join(' ')} L ${toX(data.length - 1)} ${toY(data[data.length - 1].baseline)} ${data
            .slice(0)
            .reverse()
            .map((d, i) => `L ${toX(data.length - 1 - i)} ${toY(d.baseline)}`)
            .join(' ')} Z`}
          fill="#065f46"
          fillOpacity={0.06}
        />

        {/* x labels and hover points */}
        {data.map((d, i) => {
          const x = toX(i);
          const yActual = toY(d.actual);
          const yBaseline = toY(d.baseline);
          return (
            <g key={d.month} onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)}>
              <text x={x} y={height - 6} textAnchor="middle" fill="#94a3b8" fontSize={11}>
                {d.month}
              </text>

              <circle cx={x} cy={yActual} r={hoverIndex === i ? 5 : 3} fill="#34d399" />
              <circle cx={x} cy={yBaseline} r={hoverIndex === i ? 4 : 2} fill="#60a5fa" />
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoverIndex !== null && (
        <div className="absolute -mt-2 p-2 bg-neutral-800 border border-neutral-700 text-sm rounded text-white z-50" style={{ left: `${(hoverIndex / (data.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}>
          <div className="font-medium">{data[hoverIndex].month}</div>
          <div className="text-xs text-neutral-300">Actual: {data[hoverIndex].actual} kWh</div>
          <div className="text-xs text-neutral-300">Baseline: {data[hoverIndex].baseline} kWh</div>
          <div className="text-xs text-green-300">
            {Math.round(((data[hoverIndex].baseline - data[hoverIndex].actual) / data[hoverIndex].baseline) * 100)}% saved
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsumptionChart;
