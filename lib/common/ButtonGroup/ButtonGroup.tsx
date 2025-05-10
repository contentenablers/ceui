import React, { lazy, useCallback, useState, useEffect } from "react";
import "./ButtonGroup.css";
import { SIZE, BUTTON_GROUP_VARIANT } from "../../utils/ThemeList";
import clsx from "clsx";

// Lazy-load Button component
const Button = lazy(() => import("../Button"));

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}
type GroupButtonThemeVars = {
  parent:React.CSSProperties;
  button:React.CSSProperties;
  selected:React.CSSProperties;
  notSelected:React.CSSProperties;
};


export interface ButtonGroupProps {
  variant?: keyof typeof BUTTON_GROUP_VARIANT;
  buttonsArgs: ButtonProps[];
  size?: keyof typeof SIZE;
  className?: string;
  onClick?: () => void;
  active?: number; // optional and type fixed
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant = "default",
  buttonsArgs = [],
  size = "medium", // default size to prevent undefined index
  className,
  active,
}) => {
  const [activeButton, setActiveButton] = useState<number>();
  const [themeVars, setThemeVars] = useState<GroupButtonThemeVars| null>(null);
  

  const handleButtonClick = useCallback(
    (index: number) => {
      setActiveButton(index);
      buttonsArgs[index]?.onClick?.();
    },
    [buttonsArgs]
  );
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
  
    setThemeVars({
      // Shared styles
      parent: {
        backgroundColor: getVar("--group-button-parent-backgroundcolor"),
        borderRadius: getVar("--group-button-parent-border-radius"),
        borderColor: getVar("--group-button-parent-border-color"),
        borderWidth: getVar("--group-button-parent-border-width"),
        borderStyle: getVar("--group-button-parent-border-style"),
        padding: getVar("--group-button-parent-padding"),
      },
      button: {
        padding: getVar("--group-button-button-padding"),
          fontFamily: getVar("--group-button-typography-fontFamily"),
          fontWeight: getVar("--group-button-typography-fontWeight"),
          lineHeight: getVar("--group-button-typography-lineHeight"),
          borderRadius: getVar("--group-button-buttons")
      },
      selected: {
        backgroundColor: getVar("--group-button-selected-button-background-color"),
        color: getVar("--group-button-selected-button-color"),
      },
      notSelected: {
        color: getVar("--group-button-not-selected-button-color"),
        opacity: getVar("--group-button-not-selected-button-opacity"),
      },
    });
  }, []);
  

  return (
    <div
      className={clsx(
        "ceui-button-group inline-flex  shadow-xs",
        className
      )}
      style={{...themeVars?.parent}}
      role="group"
    >
      {buttonsArgs.map((button, index) => {
        const isActive = index === activeButton || index === active;
        return (
          <Button
            key={index}
            {...button}
            // className={clsx(
            //   "ceui-button-group-button",
            //   isActive && "ceui-active-btn",
            //   BUTTON_GROUP_VARIANT[variant],
            //   SIZE[size],
            //   button?.className
            // )}
            style={isActive?{...themeVars?.selected,...themeVars?.button,border:"none"}:{...themeVars?.notSelected,...themeVars?.button,border:"none"}}
            variant="default"
            onClick={() => handleButtonClick(index)}
          >
            {button.children}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
