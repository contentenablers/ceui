import React from 'react';
import { useCardContext } from './CardContext';
import CardActions from './CardActions';
import Icon from '../Icon';

interface CardImageProps {
  src: string;
  alt: string;
  height: number;
  menu: boolean;
  onMenuClick?: () => void;
}



const CardImage: React.FC<CardImageProps> = ({ src, alt, height, menu , onMenuClick}) => {
  const [editMode, setEditMode] = React.useState(false);
  const { layout, button, position } = useCardContext();
  // console.log(height)

  return (
    <div className="card-image-container" style={{ "height": `${height}px` }}>
      <img src={src} alt={alt} className="card-image" />
      {position === "onImage" &&
        <>
          {menu && <div className='card-three-dots' onClick={onMenuClick}>
            <Icon name="edit" size={20}  />
          </div>}
          <div className='backdrop'></div>
          <div className='card-image-buttons'>
            <CardActions ></CardActions>
          </div>
        </>
      }


    </div>
  );
};

export default CardImage;
