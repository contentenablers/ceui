import React, { useEffect, useState } from 'react';
import { CardProvider } from './CardContext';
import { ButtonProps } from '../SkillButton/SkillButton';
import './card.css';
import CardImage from './CardImage';
import { BUTTON_VARIANT, SIZE } from '../../utils/ThemeList';

type Variant = 'primary' | 'secondary' | 'header';


interface CardThemeVars {
  padding: string;
  height: string;
  width: string;
  borderRadius: string;
  borderColor: string;
  borderWidth: string;
}

interface CardProps {
  children: React.ReactNode;
  buttons: ( ButtonProps & { label: string })[];
  position: 'onImage' | 'atEnd';
  layout: 'card-col' | 'card-row';
  width?: string;
  height?: string;
  mediaHeight: number;
  menu?: boolean;
  mediaType?: 'image' | 'video';
  src: string;
  title: string;
  header?: React.ReactNode;
  variant?: Variant;
}

const CardSkill: React.FC<CardProps> = ({
  header,
  layout,
  position,
  buttons,
  children,
  width,
  height,
  title,
  src,
  menu = false,
  mediaHeight = 0.7,
  mediaType = 'image',
  variant = 'primary',
}) => {
  const [themeVars, setThemeVars] = useState<CardThemeVars | null>(null);

  useEffect(() => {
    // Inject theme class once
    const el = document.documentElement;
    if (!el.classList.contains('fixed-tokens-theme')) {
      el.classList.add('fixed-tokens-theme');
    }

    const getVar = (name: string) =>
      getComputedStyle(el).getPropertyValue(name)?.trim();

    const loadVars = () => {
      const padding = getVar('--card-padding-primary');
      if (!padding) return false;

      const prefix = `--card-${variant}`;
      setThemeVars({
        padding,
        height: getVar(`${prefix}-height`),
        width: getVar(`${prefix}-width`),
        borderRadius: getVar('--card-primary-border-radius'),
        borderColor: getVar('--card-primary-border-color'),
        borderWidth: getVar('--card-primary-border-width'),
      });
      return true;
    };

    if (loadVars()) return;

    const observer = new MutationObserver(() => {
      if (loadVars()) observer.disconnect();
    });

    observer.observe(el, { attributes: true, childList: true, subtree: true });
    return () => observer.disconnect();
  }, [variant]);

  const heightPx = themeVars?.height || height || 'auto';
  const mediaPixelHeight = parseFloat(heightPx) * mediaHeight;
  

  return (
    <CardProvider layout={layout} position={position} button={buttons}>
      <div
        className={`card ${layout} ${variant}`}
        style={{
          maxWidth: themeVars?.width || width || 'auto',
          minHeight: heightPx,
          border: `${themeVars?.borderWidth} solid ${themeVars?.borderColor}`,
          borderRadius: themeVars?.borderRadius,
        }}
      >
        {header && <div className="p-4">{header}</div>}

        {mediaType === 'image' ? (
          <CardImage alt={title} src={src} height={mediaPixelHeight} menu={menu} />
        ) : (
          <video
            src={src}
            style={{ height: mediaPixelHeight }}
            controls
          />
        )}
        <div style={{ padding: themeVars?.padding,}}>
        {children}
        </div>
      </div>
    </CardProvider>
  );
};

export default CardSkill;
