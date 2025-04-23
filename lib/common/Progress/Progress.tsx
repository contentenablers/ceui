import React from 'react';
import './progressBar.css';

interface ProgressBarProps {
  type?: 'bar' | 'circle';
  value: number; // Percentage value
  width?: number;
  height?: number;
  animation?:boolean;
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
  animation = false
}) => {
  const themeColors: Record<string, string> = {
    primary: '#0F63E3',
    secondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  };

  if (type === 'circle') {
    const radius = width / 2 - 5;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div className={`progress-circle ${animation?"animate" : "" }`} style={{ width, height: width }}>
        <svg width={width} height={width}>
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="5"
            fill="transparent"
          />
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            stroke={themeColors[theme]}
            strokeWidth="5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={animation ? circumference : offset} 
            strokeLinecap="round"
            style={{
              '--circumference': circumference, 
              '--progress-offset': offset, 
            } as React.CSSProperties}
            transform={`rotate(0 ${width / 2} ${width / 2})`}

          />
        </svg>
        {showLabel && (
          <div className="progress-label">
            {value}%
          </div>
        )}
      </div>
    );
  }


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
        className={`progess-fill${animation? " animate":""}`}
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
        <div style={{fontSize:"14px"}}>{value}%</div>
      )}
    </div>
  );
};

export default ProgressBar;
