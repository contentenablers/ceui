import React, { useEffect, useState } from 'react';
import './Chip.css';
import IconsList from '../Icon/IconsList';
import SuspenseWrapper from '../../utils/SuspenseWrapper';

const Icon = React.lazy(() => import('../Icon'));

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  className?: string;
  label?: string;
  startIcon?: keyof typeof IconsList;
  endIcon?: keyof typeof IconsList;
  iconArgs?: Parameters<typeof Icon>[0];
  variant?: 'primary' | 'secondary' | 'navbar';
  ref?: React.Ref<HTMLDivElement>;
}

type ChipThemeVars = {
  backgroundColor: string;
  color: string;
  padding: string;
  borderColor: string;
  borderWidth: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
};

const Chip: React.FC<ChipProps> = ({
  label,
  onClick,
  startIcon,
  endIcon,
  className,
  iconArgs,
  variant = 'primary',
  ref = null,
}) => {
  const [themeVars, setThemeVars] = useState<ChipThemeVars | null>(null);

  useEffect(() => {
    // Inject the theme class if not already present
    if (typeof document !== 'undefined') {
      const el = document.documentElement;
      if (!el.classList.contains('fixed-tokens-theme')) {
        el.classList.add('fixed-tokens-theme');
      }
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const getVar = (name: string) =>
      getComputedStyle(root).getPropertyValue(name)?.trim();

    const applyVars = () => {
      const prefix = `--chip-${variant}`;
      const backgroundColor = getVar(`${prefix}-background-color`);
      if (!backgroundColor) return false;

      const isNavbar = variant === 'navbar';
      const isPrimary = variant === 'primary';

      setThemeVars({
        backgroundColor,
        color: getVar(`${prefix}-color`),
        padding: getVar(`${prefix}-padding`),
        borderColor:
          isNavbar
            ? getVar('--chip-navbar-border-color')
            : isPrimary
            ? getVar('--chip-border-color')
            : '',
        borderWidth:
          isNavbar
            ? getVar('--chip-navbar-border-width')
            : isPrimary
            ? getVar('--chip-border-width')
            : '',
        fontSize:
          getVar(`${prefix}-typograhpy-fontSize`) ||
          getVar(`${prefix}-typography-fontSize`),
        fontWeight:
          getVar(`${prefix}-typograhpy-fontWeight`) ||
          getVar(`${prefix}-typography-fontWeight`),
        lineHeight:
          getVar(`${prefix}-typograhpy-lineHeight`) ||
          getVar(`${prefix}-typography-lineHeight`),
        letterSpacing:
          getVar(`${prefix}-typograhpy-letterSpacing`) || '',
      });

      return true;
    };

    if (applyVars()) return;

    const observer = new MutationObserver(() => {
      if (applyVars()) observer.disconnect();
    });

    observer.observe(root, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [variant]);

  const getIcon = (name: keyof typeof IconsList) => (
    <SuspenseWrapper>
      <Icon {...iconArgs} name={name} />
    </SuspenseWrapper>
  );

  return (
    <div
      className={`ceui-chip-element ${className || ''}`}
      ref={ref}
      onClick={onClick}
      style={{
        backgroundColor: themeVars?.backgroundColor,
        color: themeVars?.color,
        padding: themeVars?.padding,
        border:
          variant === 'secondary'
            ? 'none'
            : `${themeVars?.borderWidth} solid ${themeVars?.borderColor}`,
        borderRadius: '200px',
        fontSize: themeVars?.fontSize,
        fontWeight: themeVars?.fontWeight as any,
        lineHeight: themeVars?.lineHeight,
        letterSpacing: themeVars?.letterSpacing,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
      }}
    >
      {startIcon && getIcon(startIcon)}
      <span className="label">{label}</span>
      {endIcon && getIcon(endIcon)}
    </div>
  );
};

export default Chip;
