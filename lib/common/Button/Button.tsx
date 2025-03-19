import "./Button.css";
import React from "react";
import IconsList from "../Icon/IconsList";
import { SIZE, BUTTON_VARIANT } from "../../utils/ThemeList";
import SuspenseWrapper from "../../utils/SuspenseWrapper";

// Dynamically import Icon component
const Icon = React.lazy(() => import("../Icon"));

/**
 * A function component that renders a button with a specific theme (theme listing and creation we have buttonThemeList).
 *
 * @param {string} [variant=primary] - The theme of the button. Can be buttonThemeList
 * @param {string} [startIcon] - The name of the icon to render at the start of the button.
 * @param {string} [endIcon] - The name of the icon to render at the end of the  button.
 * @param {React.CSSProperties} [style] - Additional styles for the button element.
 * @param {boolean} [disabled=false] - Whether the button should be disabled.
 * @param {React.ReactNode} children - The content of the button.
 * @param {string} [className=''] - Additional CSS classes for the button element.
 * @param {string} [size='medium'] - The size of the button. Can be buttonThemeList.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_VARIANT;
  startIcon?: keyof typeof IconsList;
  endIcon?: keyof typeof IconsList;
  size?: keyof typeof SIZE;
  iconArgs?: Parameters<typeof Icon>[0];
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  startIcon,
  endIcon,
  style,
  disabled,
  children,
  className,
  size = "medium",
  iconArgs = {},
  ...rest
}) => {
  
  const getIcon =(name: keyof typeof IconsList) => {
      return (
        <SuspenseWrapper>
          <Icon {...iconArgs} name={name} />
        </SuspenseWrapper>
      );
    }

  return (
    <button
      {...rest}
      role="button"
      disabled={disabled}
      className={`py-1.5 px-2 flex items-center gap-1 ${className} ${BUTTON_VARIANT[variant]} ${SIZE[size]}`}
    >
      {startIcon && getIcon(startIcon)}
      <span>{children}</span>
      {endIcon && getIcon(endIcon)}
    </button>
  );
};

export default Button;
