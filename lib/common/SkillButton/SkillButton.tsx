import "./styles.css";
import React, { useEffect, useState } from "react";
import IconsList from "../Icon/IconsList";
import { SIZE, BUTTON_VARIANT } from "../../utils/ThemeList";
import SuspenseWrapper from "../../utils/SuspenseWrapper";

const Icon = React.lazy(() => import("../Icon"));

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BUTTON_VARIANT;
  startIcon?: keyof typeof IconsList;
  endIcon?: keyof typeof IconsList;
  size?: keyof typeof SIZE;
  iconArgs?: Parameters<typeof Icon>[0];
  ref?: React.Ref<HTMLButtonElement>;
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
  ref,
  ...rest
}) => {
  const [themeVars, setThemeVars] = useState<React.CSSProperties>({});
  useEffect(() => {
    // Inject the fixed-tokens-theme class ONCE
    if (typeof document !== "undefined") {
      const el = document.documentElement; // or document.body
      if (!el.classList.contains("fixed-tokens-theme")) {
        el.classList.add("fixed-tokens-theme");
      }
    }
  }, []);
  
  useEffect(() => {
    const root = document.querySelector(".fixed-tokens-theme") || document.documentElement;
    const getVar = (name: string) =>
      getComputedStyle(root).getPropertyValue(name)?.trim();

    const v = variant;
    setThemeVars({
      // Variant-based values
      backgroundColor: getVar(`--button-${v}-background-color`),
      color: getVar(`--button-${v}-color`),
      borderColor: getVar(`--button-${v}-border-color`),
      borderWidth: getVar(`--button-${v}-border-width`),
      borderStyle: getVar(`--button-${v}-border-style`),

      // Static tokens (don't change with variant)
      padding: getVar(`--button-padding-primary`),
      borderRadius: getVar(`--button-border-radius-priamry`),
      fontFamily: getVar(`--button-typography-primary-fontFamily`),
      fontWeight: getVar(`--button-typography-primary-fontWeight`),
      fontSize: getVar(`--button-typography-primary-fontSize`),
    });
  }, [variant]);

  const getIcon = (name: keyof typeof IconsList) => (
    <SuspenseWrapper>
      <Icon {...iconArgs} name={name} />
    </SuspenseWrapper>
  );

  return (
    <button
      {...rest}
      role="button"
      disabled={disabled}
      className={`flex items-center gap-1 ${className} ${SIZE[size]}`}
      style={{ ...themeVars, ...style }}
      ref={ref}
    >
      {startIcon && getIcon(startIcon)}
      <span>{children}</span>
      {endIcon && getIcon(endIcon)}
    </button>
  );
};

export default Button;
