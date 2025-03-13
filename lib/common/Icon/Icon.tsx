import IconsList from "./IconsList";

/**
 * A function component that renders an SVG icon. The available icons are
 * defined in `./IconsList.tsx` and can be accessed by their name.
 *
 * @param {string} name - The name of the icon to render.
 * @param {number} [size=24] - The size of the icon in pixels.
 * @param {string} [className] - An optional CSS class to add to the SVG element.
 * @param {React.SVGAttributes<SVGElement>} props - Additional props to spread
 *   
 */
export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: keyof typeof IconsList;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  ...props
}) => {
  const iconElement = IconsList[name] ?? null;

  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      className={className}
      {...props}
    >
      {iconElement}
    </svg>
  );
};

export default Icon;
