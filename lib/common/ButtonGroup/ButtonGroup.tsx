import React, { lazy, useCallback, useState } from "react";
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

  const handleButtonClick = useCallback(
    (index: number) => {
      setActiveButton(index);
      buttonsArgs[index]?.onClick?.();
    },
    [buttonsArgs]
  );

  return (
    <div
      className={clsx(
        "ceui-button-group inline-flex rounded-md shadow-xs",
        className
      )}
      role="group"
    >
      {buttonsArgs.map((button, index) => {
        const isActive = index === activeButton || index === active;
        return (
          <Button
            key={index}
            {...button}
            className={clsx(
              "ceui-button-group-button",
              isActive && "ceui-active-btn",
              BUTTON_GROUP_VARIANT[variant],
              SIZE[size],
              button?.className
            )}
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
