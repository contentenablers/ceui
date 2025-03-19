import React,{useCallback} from 'react';
import "./Chip.css";
import IconsList from '../Icon/IconsList';
import { SIZE, CHIP_VARIANT } from "../../utils/ThemeList";
import SuspenseWrapper from "../../utils/SuspenseWrapper";

// Dynamically import Icon component
const Icon = React.lazy(() => import("../Icon"));

/**
 * A function component that renders a basic input.
 * @param {string} size 
 * @param {string} label - The name of the input.
 * @param {string} value - The value of the input.
 * @param {function} onChange - The function to call when the value changes.
 * @param {object} rest - Any additional props to spread onto the input element.
 */

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    size ?:keyof typeof SIZE;
    onClick?: () => void;
    className?:string;
    label?:string;
    startIcon?: keyof typeof IconsList;
    endIcon?: keyof typeof IconsList;
    iconArgs?: Parameters<typeof Icon>[0];
    variant?: keyof typeof CHIP_VARIANT,
    ref?: React.Ref<HTMLDivElement>;
};


const Chip: React.FC<ChipProps> = ({
    size='small',
    label,
    onClick,
    startIcon,
    endIcon,
    className,
    iconArgs,
    variant='default',
    ref=null
}) => {    

    const getIcon = (name: keyof typeof IconsList) => {
          return (
            <SuspenseWrapper>
              <Icon {...iconArgs} name={name} />
            </SuspenseWrapper>
          );
        }

    return (
        <div className={`ceui-chip-element ${className} ${SIZE[size]}  ${CHIP_VARIANT[variant]}`} ref={ref} onClick={onClick}>
              {startIcon && getIcon(startIcon)}
              <span className='label'>{label}</span>
              {endIcon && getIcon(endIcon)}
        </div>
    );
};

export default Chip;

