import React from 'react';
import { useCardContext } from './CardContext';
import CardActions from './CardActions';
interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  const { layout,buttons,position } = useCardContext();
  return (
    <div className="card-content">
      <div>
        {children}
        </div>
      {position==="atEnd" && 
      <div className='card-content-button'>
        <CardActions ></CardActions>
      </div>
      }
    </div>
  );
};

export default CardContent;
