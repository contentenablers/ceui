import "./Button.css";
import React from "react";
import IconsList from "../Icon/IconsList";
import Icon from "../Icon";
import { sizes, variants } from "./ButtonThemeList";

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
 * @param {string} [size='md'] - The size of the button. Can be buttonThemeList.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "primary-outline" | "secondary-outline";
  startIcon?: keyof typeof IconsList;
  endIcon?: keyof typeof IconsList;
  size?: "sm" | "md" | "lg";
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
  size = "md",
  iconArgs,
  ...rest
}) => {
  return (
    <button
      {...rest}
      role="button"
      disabled={disabled}
      className={`py-1.5 px-2 flex items-center gap-1 interactive-element ${className} ${variants[variant]} ${sizes[size]}`}
    >
      {startIcon && <Icon {...iconArgs} name={startIcon} />}
      <span>{children}</span>
      {endIcon && <Icon {...iconArgs} name={endIcon} />}
    </button>
  );
};

export default Button;
