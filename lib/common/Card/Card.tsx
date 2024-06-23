import React from 'react';
// import './Card.css';
import '../../styles.css'

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (


    <div className="flex font-sans hadow-2xl bg-white flex   shadow-2xl rounded-lg">
  <div className="flex-none w-48 relative">
    <img src={image} alt={title}  className="absolute inset-0 w-full h-full object-cover rounded-l-lg "  />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
       {title}
      </h1>
   
    </div>
    
     
    <p className="text-sm text-slate-700">
      {description}
    </p>
  </form>
</div>

    // <div  className="shadow-2xl bg-white flex font-sans shadow-2xl rounded-lg">
    //   <img src={image} alt={title} className="card-image" />
    //   <div className="card-content">
    //     <h2 className="card-title">{title}</h2>
    //     <p className="card-description">{description}</p>
    //   </div>
    // </div>
  );
};

export default Card;
