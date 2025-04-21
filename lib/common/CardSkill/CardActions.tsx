import React from 'react';
import { useCardContext } from './CardContext';
import Button from '../Button';

const CardActions= ({  }) => {
  const { layout,buttons,position } = useCardContext();
  return (
    <div
      className={`card-actions ${position} ${layout}`}
    >
      {buttons.map((btn, idx) => (
        <Button 
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
