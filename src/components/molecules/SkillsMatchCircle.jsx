import React from 'react';

export const SkillsMatchCircle = ({ percentage }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const strokeColor = percentage >= 70 ? '#10b981' : percentage >= 40 ? '#f59e0b' : '#ef4444';

  return (
    <div className="relative w-24 h-24">
      <svg className="transform -rotate-90 w-24 h-24">
        <circle 
          cx="48" 
          cy="48" 
          r="45" 
          stroke="#e2e8f0" 
          strokeWidth="6" 
          fill="none" 
        />
        <circle
          cx="48" 
          cy="48" 
          r="45"
          stroke={strokeColor}
          strokeWidth="6" 
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
        <span className="text-xs text-gray-500">Match</span>
      </div>
    </div>
  );
};
