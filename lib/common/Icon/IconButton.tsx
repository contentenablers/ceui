import IconsList from "./IconsList";

/**
 * A function component that renders an SVG icon. The available icons are
 * defined in `./IconsList.tsx` and can be accessed by their name.
 *
 * @param {string} name - The name of the icon to render.
 * @param {number} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - An optional CSS class to add to the SVG element.
 * @param {React.SVGAttributes<SVGElement>} props - Additional props to spread
 *     onto the SVG element.
 */
export interface IconButtonProps extends React.SVGAttributes<SVGElement> {
  name: keyof typeof IconsList;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 24,
  className,
  onClick,
  ...props
}) => {
  const iconElement = IconsList[name] ?? null;

  return (
    <button
      role="button"
      className={`${className} p-2 border-none interactive-element`}
      onClick={onClick}
      aria-label={name}
    >
      <svg
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 24 24"
        role="img"
        className={`${className}-svg`}
        {...props}
      >
        {iconElement}
      </svg>
    </button>
  );
};

export default IconButton;
