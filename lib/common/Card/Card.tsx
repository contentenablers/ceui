import '../../styles.css';

interface CardProps {
  title: string;
  image: string;
  description: string;
  buttons?: { label: string; onClick: () => void; variant: 'primary' | 'secondary' | 'outline' }[];
  position?: 'onImage' | 'belowImage' | 'atEnd';
  layout?: 'card-col' | 'card-row';
}

const variantStyles = {
  primary: 'bg-[#fa103f] text-white border-[#fa103f]',
  secondary: 'bg-white text-[#fa103f]',
  outline: 'bg-black/50 text-white border border-white',
};

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  buttons = [],
  position = 'belowImage',
  layout = 'card-col',
}) => {
  const isOnImage = position === 'onImage';

  return (
    <div className={`flex font-sans bg-white shadow-2xl rounded-lg overflow-hidden`}>
      <div className="flex-none w-48 relative group">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-l-lg transition-shadow duration-300 shadow-none group-hover:shadow-lg"
        />

        {isOnImage && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={`rounded-full px-4 py-2 ${variantStyles[btn.variant]}`}
                onClick={btn.onClick}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {title}
          </h1>
        </div>

        <p className="text-sm text-slate-700">{description}</p>

        {position === 'belowImage' && (
          <div className="flex space-x-2 mt-4">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={`rounded-full px-4 py-2 ${variantStyles[btn.variant]}`}
                onClick={btn.onClick}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}

        {position === 'atEnd' && (
          <div className="flex justify-end space-x-2 mt-4">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={`rounded-full px-4 py-2 ${variantStyles[btn.variant]}`}
                onClick={btn.onClick}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
