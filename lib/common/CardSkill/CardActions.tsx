import React from 'react';
import { useCardContext } from './CardContext';
import { BUTTON_VARIANT, SIZE } from '../../utils/ThemeList';
import Button from '../SkillButton';
export interface CardButton {
  label: string;
  onClick: () => void;
  variant?: keyof typeof BUTTON_VARIANT;
  size?: keyof typeof SIZE;
}
const CardActions= ({  }) => {
  const { layout,button,position } = useCardContext();
  return (
    <div
      className={`card-actions ${position} ${layout}`}
    >
      {button.map((btn, idx) => (
        <Button 
        key={idx}
        onClick={btn.onClick} 
        className={"button-sKill-card"}
        variant={btn.variant}
        size={btn.size}
        style={{borderColor:"transparent"}}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
};

export default CardActions;
