import React from 'react';
import { useCardContext } from './CardContext';
import CardActions from './CardActions';

interface CardImageProps {
  src: string;
  alt: string;
  height: number;
  menu: boolean
}



const CardImage: React.FC<CardImageProps> = ({ src, alt, height, menu }) => {
  const { layout, button, position } = useCardContext();
  // console.log(height)

  return (
    <div className="card-image-container" style={{ "height": `${height}px` }}>
      <img src={src} alt={alt} className="card-image" />
      {position === "onImage" &&
        <>
          {menu && <div className='card-three-dots'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
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
