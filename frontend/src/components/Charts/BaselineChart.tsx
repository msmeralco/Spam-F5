import React, { useState, useMemo } from 'react';

const BaselineChart: React.FC = () => {
  // Sample data for AI baseline comparison
  const data = useMemo(
    () => [
      { month: 'Jul', baseline: 420, actual: 380 },
      { month: 'Aug', baseline: 410, actual: 360 },
      { month: 'Sep', baseline: 400, actual: 370 },
      { month: 'Oct', baseline: 390, actual: 330 },
      { month: 'Nov', baseline: 380, actual: 345 },
    ],
    []
  );

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const width = 700;
  const height = 240;
  const padding = 32;

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

  // Area between baseline and actual (energy saved)
  const areaPath = `M ${toX(0)} ${toY(data[0].baseline)} ${data
    .slice(1)
    .map((d, i) => `L ${toX(i + 1)} ${toY(d.baseline)}`)
    .join(' ')} L ${toX(data.length - 1)} ${toY(data[data.length - 1].actual)} ${data
    .slice(0)
    .reverse()
    .map((d, i) => `L ${toX(data.length - 1 - i)} ${toY(d.actual)}`)
    .join(' ')} Z`;

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Grid lines (optional) */}
        <defs>
          <linearGradient id="areGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Area between baseline and actual (energy saved) */}
        <path d={areaPath} fill="url(#areGradient)" fillOpacity={0.4} />

        {/* Baseline line (AI prediction) */}
        <path d={baselinePath} fill="none" stroke="#3b82f6" strokeWidth={2.5} strokeLinecap="round" />

        {/* Actual line (real usage) */}
        <path d={actualPath} fill="none" stroke="#10b981" strokeWidth={3} strokeLinecap="round" />

        {/* X labels and hover points */}
        {data.map((d, i) => {
          const x = toX(i);
          const yBaseline = toY(d.baseline);
          const yActual = toY(d.actual);
          return (
            <g key={d.month} onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)}>
              <text x={x} y={height - 8} textAnchor="middle" fill="#94a3b8" fontSize={11}>
                {d.month}
              </text>

              <circle cx={x} cy={yBaseline} r={hoverIndex === i ? 5 : 3} fill="#3b82f6" />
              <circle cx={x} cy={yActual} r={hoverIndex === i ? 5 : 3} fill="#10b981" />
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoverIndex !== null && (
        <div
          className="absolute -mt-2 p-3 bg-neutral-800 border border-neutral-700 text-sm rounded text-white"
          style={{
            left: `${(hoverIndex / (data.length - 1)) * 100}%`,
            transform: 'translateX(-50%)',
            zIndex: 50,
          }}
        >
          <div className="font-semibold">{data[hoverIndex].month}</div>
          <div className="text-xs text-blue-300 mt-1">Baseline: {data[hoverIndex].baseline} kWh</div>
          <div className="text-xs text-green-300">Actual: {data[hoverIndex].actual} kWh</div>
          <div className="text-xs text-cyan-300 mt-1">
            💾 Energy Saved: <strong>{data[hoverIndex].baseline - data[hoverIndex].actual} kWh</strong>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-blue-500" />
          <span className="text-neutral-400">Baseline Usage (AI)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-green-500" />
          <span className="text-neutral-400">Actual Usage</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-1 bg-cyan-400/40" />
          <span className="text-neutral-400">Area Saved</span>
        </div>
      </div>
    </div>
  );
};

export default BaselineChart;
