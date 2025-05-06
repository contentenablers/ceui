import React from 'react';
import { useCardContext } from './CardContext';
import { BUTTON_VARIANT, SIZE } from '../../utils/ThemeList';
import Button from '../Button';
export interface CardButton {
  label: string;
  onClick: () => void;
  variant?: keyof typeof BUTTON_VARIANT;
  size?: keyof typeof SIZE;
}
const CardActions= ({  }) => {
  const { layout,buttons,position } = useCardContext();
  return (
    <div
      className={`card-actions ${position} ${layout}`}
    >
      {buttons.map((btn, idx) => (
        <Button 
        key={idx}
        onClick={btn.onClick} 
        className={"button-sKill-card"}
        variant={btn.variant}
        size={btn.size}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
};

export default CardActions;
