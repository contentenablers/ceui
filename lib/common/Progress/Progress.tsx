import React, { useState, useEffect } from 'react';
import './progressBar.css';

interface ProgressBarProps {
  type?: 'bar' | 'circle';
  value: number; // Percentage value
  width?: number;
  height?: number;
  animation?: boolean;
  theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  type = 'bar',
  value,
  width = 200,
  height = 20,
  theme = 'primary',
  showLabel = true,
  animation = false,
}) => {
  const [circleVars, setCircleVars] = useState<{
    circleComplete: string;
    circleFull: string;
    circleWidth: string;
    circleHeight: string;
    circleInner: string;
  } | null>(null);

  useEffect(() => {
    if (type === 'circle' && typeof document !== 'undefined') {
      const root = document.documentElement;
      const getVar = (name: string) => getComputedStyle(root).getPropertyValue(name).trim();

      const vars = {
        circleComplete: getVar('--progress-bar-circle-complete') || '#23C376', // Default
        circleFull: getVar('--progress-bar-circle-full') || 'rgba(35,195,118,0.08)', // Default
        circleWidth: getVar('--progress-bar-circle-width') || '32',       // Default
        circleHeight: getVar('--progress-bar-circle-height') || '32',     // Default
        circleInner: getVar('--progress-bar-circle-inner') || '#FFFACD',     // Default
      };
      setCircleVars(vars);
    }
  }, [type]); // Dependency on type

  const themeColors: Record<string, string> = {
    primary: '#0F63E3',
    secondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  };

  if (type === 'circle' && circleVars) {
    const { circleWidth, circleHeight, circleFull, circleInner, circleComplete } = circleVars;
    const numericWidth = parseInt(circleWidth, 10);
    const numericHeight = parseInt(circleHeight, 10);
    const radius = numericWidth / 2 - 5;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div className={`progress-circle ${animation ? "animate" : ""}`} style={{ width: numericWidth, height: numericHeight }}>
        <svg width={numericWidth} height={numericHeight}>
          <circle
            cx={numericWidth / 2}
            cy={numericHeight / 2}
            r={radius}
            stroke={circleFull}
            strokeWidth="3.3"
            fill={circleInner}
            style = {{opacity:"100%"}}
          />
          <circle
            cx={numericWidth / 2}
            cy={numericHeight / 2}
            r={radius}
            stroke={circleComplete || themeColors[theme]} // Fallback to theme
            strokeWidth="3.3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={animation ? circumference : offset}
            strokeLinecap="round"
            style={{
              '--circumference': circumference,
              '--progress-offset': offset,
            } as React.CSSProperties}
            transform={`rotate(0 ${numericWidth / 2} ${numericHeight / 2})`}

          />
        </svg>
      </div>
    );
  }

  // Bar implementation -  DO NOT MODIFY
  return (
    <div className='flex gap-2 items-center'>
      <div
        className="progress-bar"
        style={{
          width,
          height,
          backgroundColor: '#e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >

        <div
          className={`progess-fill${animation ? " animate" : ""}`}
          style={{
            '--progress-value': `${value}%`,
            '--progress-color': themeColors[theme],
            width: `${value}%`,
            height: '100%',
            backgroundColor: themeColors[theme],
          } as React.CSSProperties}
        />
      </div>
      {showLabel && (
        <div style={{ fontSize: "14px" }}>{value}%</div>
      )}
    </div>
  );
};

export default ProgressBar;
