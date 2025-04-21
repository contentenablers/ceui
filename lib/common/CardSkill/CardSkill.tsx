// Card.tsx
import React from 'react';
import { CardProvider } from './CardContext';
import { variantStyles, sizeStyles } from './cardTheme';
import './card.css';
import CardImage from './CardImage';
import { BUTTON_VARIANT, SIZE } from '../../utils/ThemeList';


interface Button {
  label: string;
  onClick: () => void;
  variant: keyof typeof BUTTON_VARIANT;
  size: keyof typeof SIZE;
}



interface CardProps {
  children: React.ReactNode;
  buttons: Button[];
  position: 'onImage' | 'atEnd';
  layout: 'card-col' | 'card-row';
  width?: string ,
  height?: string ,
  mediaHeight:number,
  menu?:boolean,
  mediaType?:'image' | 'video',
  src: string,
  title: string
  header?:React.ReactNode
}

const CardSkill: React.FC<CardProps> = ({ header, layout, position, buttons, children ,width, height,title,src , menu=false, mediaHeight=0.7,mediaType="image" }) => {
  const heightImage= Number(height?.split('px')[0])
  return (
    <CardProvider layout={layout} position={position} buttons={buttons}>
      <div className={`card ${layout}`} style={{"maxWidth":width || "auto", "minHeight":height || "auto" }}>
        {header && <div className='p-4'>
        {header}
        </div>}
        {mediaType === 'image' ? 
        <CardImage alt={title} src={src} height={mediaHeight*heightImage} menu={menu}></CardImage>
        :
        <video src={src} height={mediaHeight*heightImage + 'px'} style={{"height":mediaHeight*heightImage}}controls></video>
        }
        {children}
      </div>
    </CardProvider>
  );
};

export default CardSkill;
