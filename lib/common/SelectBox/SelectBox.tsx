import React, { useEffect, useState } from 'react';
import './SelectBox.css';
import { SELECT_VARIANT } from "../../utils/ThemeList";

interface RadioSelectProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: keyof typeof SELECT_VARIANT;
  label?:string;
}

const SelectBox = ({ checked, onChange, variant='primary', label  }: RadioSelectProps) => {
  const [selected, setSelected] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelected = e.target.checked;
    setSelected(newSelected);
    onChange(newSelected);
  };

  useEffect(()=>{
    if(checked !== selected)setSelected(checked)
  },[checked])


  return (
    <div>
      <label className={`container `}>
        <input
          className={`absolute opacity-0 cursor-pointer h-0 w-0 rounded-[5px] `}
          type="checkbox"
          checked={selected}
          onChange={handleChange}
        />
        <div className={`${selected ? 'checked' : ''} ${SELECT_VARIANT[variant] || ''} checkmark`}></div>
        {label??''}
      </label>
    </div>
  );
}; 

export default SelectBox;

