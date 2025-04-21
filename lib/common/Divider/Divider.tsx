import React from 'react';
import {
  DIVIDER_VARIANTS,
  DIVIDER_POSITIONS,
  DIVIDER_ORIENTATIONS,
  DIVIDER_COLORS,
  DIVIDER_THICKNESS,
} from './dividerTheme';
import './divider.css';

type DividerProps = {
  variant?: keyof typeof DIVIDER_VARIANTS;
  position?: keyof typeof DIVIDER_POSITIONS;
  orientation?: keyof typeof DIVIDER_ORIENTATIONS;
  thickness?: keyof typeof DIVIDER_THICKNESS;
  color?: keyof typeof DIVIDER_COLORS;
  padding?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties; // ✅ Added `style` for custom dimensions
};

const Divider: React.FC<DividerProps> = ({
  variant = 'solid',
  position = 'center',
  orientation = 'horizontal',
  thickness = 'medium',
  color = 'gray',
  padding = '0',
  label = '',
  className = '',
  style = {},
}) => {
  const dividerClass = `divider ${variant} ${orientation} ${position} ${className}`;
  if (orientation === 'vertical') {
    return (
      <div
        className={dividerClass}
        style={{
          height: '100%', // ✅ Inherits parent height
          borderLeft: `${DIVIDER_THICKNESS[thickness]}px ${variant} ${DIVIDER_COLORS[color]}`,
        }}
      />
    );
  }
  

  if (!label) {
    return (
      <div
        className={`divider-full ${className}`}
        style={{
          borderTop: `${DIVIDER_THICKNESS[thickness]}px ${variant} ${DIVIDER_COLORS[color] || '#808080'}`,
        }}
      />
    );
  }

  return (
    <div className={`divider-container ${position} ${className}`} style={{ padding }}>
      <div
        className={`line ${thickness}`}
        style={{
          borderTop: `${DIVIDER_THICKNESS[thickness]}px ${variant} ${DIVIDER_COLORS[color] || '#808080'}`,
          width: '40%',
        }}
      />
      <span className="divider-text">{label}</span>
      <div
        className={`line ${thickness}`}
        style={{
          borderTop: `${DIVIDER_THICKNESS[thickness]}px ${variant} ${DIVIDER_COLORS[color] || '#808080'}`,
          width: '40%',
        }}
      />
    </div>
  );
};

export default Divider;
