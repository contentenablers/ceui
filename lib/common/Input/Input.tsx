import React,{lazy, useMemo} from 'react';
import "./Input.css";
import {InputList} from './InputList';

// // Dynamically import Icon component based on the variant
// const PrefixSuffixInput = lazy(() => import('./Prefix-suffix'));


/**
 * A function component that renders a basic input.
 *
 * @param {string} [name] - The name of the input.
 * @param {string} [value] - The value of the input.
 * @param {string} [label] - The label of the input.
 * @param {string} [type=text] - The type of the input.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - The function to call when the value changes.
 * @param {string} [variant] - The variant of the input.
 * @param {JSX.Element} [prefix] - The prefix element to render before the input.
 * @param {JSX.Element} [suffix] - The suffix element to render after the input.
 * @param {string} [className] - Additional CSS classes to apply to the input element.
 * @param {React.Ref<HTMLDivElement>} [ref] - A React ref to pass to the div element (it is not included in props; we need to handle the ref separately).
 * @param {object} [props] - Any additional props to spread onto the input element.
 * @returns {JSX.Element} The rendered input component.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    variant?:keyof typeof InputList;
    className?:string;
    label?:string;
    suffix?:any,
    prefix?:any,
    ref?: React.Ref<HTMLDivElement>;
}


const Input: React.FC<InputProps> = ({
    name,
    value,
    label,
    type = 'text',
    onChange,
    variant,
    prefix,
    suffix,
    className,
    ref=null,
    ...props
}) => {

    const class_name=`${variant}-input rounded-md  ceui-element ${className}`;
    const inputType = useMemo(() => InputList[(variant??'default')], [variant]);

    
    return (
        <div className={`${variant}-input-box input`}>
            {label && <label>{label}</label>}
            {inputType?.({
              name,
              value,
              type,
              onChange,
              prefix,
              suffix,
              ref,
              className:class_name,
              ...props  
            })}
        </div>
    );
};

export default Input;

