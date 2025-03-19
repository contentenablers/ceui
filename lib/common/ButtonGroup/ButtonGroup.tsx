import React, { lazy,useCallback,useState } from "react";
import "./ButtonGroup.css";
import { SIZE, BUTTON_GROUP_VARIANT } from "../../utils/ThemeList";
import clsx from 'clsx'

const Button = lazy(() => import("../Button"));

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  children: any;
  className?:string
}


export interface ButtonGroupProps{
  variant?: keyof typeof BUTTON_GROUP_VARIANT;
  buttonsArgs: ButtonProps[];
  size?: keyof typeof SIZE;
  className?:string;
  onClick?: () => void,
  active:Number
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
    variant='default',
    buttonsArgs=[],
    size,
    className,
    active
}) => {

  const [activeButton, setActiveButton] = useState<number>();  // Track the active button
  
  const handleButtonClick = useCallback((index: number) => {
    setActiveButton(index); // Update active button state on click
    buttonsArgs[index]?.onClick?.(); 
  },[]);

  return ( <div className={`ceui-button-group inline-flex rounded-md shadow-xs ${className}`} role="group" >
      {buttonsArgs.map((button:any, index:number) => {
        const hasClicked=(index===activeButton|| active)
       return <Button
          key={index}
          {...button}
          className={clsx(
            'ceui-button-group-button', 
            hasClicked && 'ceui-active-btn', // Conditional class based on hasClicked
            BUTTON_GROUP_VARIANT[variant], 
            SIZE[size], 
            button?.className
          )}
          variant= "default"
          onClick={()=>handleButtonClick(index)}
        >
          {button.children}
        </Button>
     })}
  </div>);

}

export default ButtonGroup