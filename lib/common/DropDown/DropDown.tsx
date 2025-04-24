import React, { useCallback } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Suspense } from 'react';
import Button from '../Button';
import './DropDown.css';
import {SELECT_BOX_VARIANT} from '../../utils/ThemeList'

// Dynamically import Icon component
const Icon = React.lazy(() => import('../Icon'));

// Define types for the props
interface DropDownItem {
  label: string;
  value: string;
  data?:any
}

/**
 * A dropdown menu component that takes a label and an array of items.
 * @param {string} label - The label to display on the button.
 * @param {DropDownItem[]} items - The items to render in the dropdown menu.
 * @param {string} [className] - Additional CSS classes to apply to the dropdown menu.
 * @param {string} [variant] - The variant of the dropdown menu. Can SELECT_BOX_VARIANT
 * @returns {JSX.Element} The rendered dropdown menu component.
 */
interface DropDownProps {
  value: string;
  items: DropDownItem[];
  className?: string;
  variant?: keyof typeof SELECT_BOX_VARIANT;
  onClick: (e: DropDownItem) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  value,
  items,
  onClick,
  className = '',
  variant='primary',
}) => {

 const handleClick = useCallback(
  (item: DropDownItem) => () =>{
     onClick(item)
    },
  []
);

  return (
    <div className={`${className}`}>
      <Menu>
        <MenuButton
          className={`inline-flex items-center menu-${className} ${SELECT_BOX_VARIANT[variant]['s']} py-1.5  shadow-inner shadow-white/10 focus:outline-none`}
        >
           <span className='selected-menu'>{value}</span> 
        
            <Suspense fallback={<span>...</span>}>
              <Icon name={'drop_down'} />
            </Suspense>
        </MenuButton>

        <MenuItems
           transition
           anchor="bottom end"
           className={`ceui-drop-down menu-items-${className}  w-52 origin-top-right rounded-xl border ${SELECT_BOX_VARIANT[variant]['d']} border-white/5 bg-white/5 p-1   transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0`}
        >
          {items.map((item, index) => (
            <MenuItem key={index}>
             <Button onClick={handleClick(item)} className={`ceui-element ceui-drop-down-menu  menu-item-${className}  group border-none ${SELECT_BOX_VARIANT[variant]['di']} flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10`} variant='default'>
                {item?.label}
             </Button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default DropDown;
