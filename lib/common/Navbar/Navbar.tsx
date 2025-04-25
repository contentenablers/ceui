import React from 'react';
import './Navbar.css';
const Input=React.lazy(()=>import ('../Input'));
const Icon =React.lazy(()=>import('../Icon'));
const Chip=React.lazy(()=>import('../Chip'));
const LazyImage=React.lazy(()=>import('../LazyImage'));

/**
 * A React functional component for rendering a customizable navigation bar.
 *
 * @param {string} [brandLogo=''] - The URL of the logo image to display in the navbar.
 * @param {Array<{ element: React.ReactNode }>} [actions] - An array of elements to display as actions or links in the navbar.
 * @param {'white'|'gray'} [theme] - The theme of the navbar, which can be either 'white' or 'gray'.
 * @param {string} [className] - Additional CSS classes to apply to the navbar for custom styling.
 * @param {Parameters<typeof Input>[0]} [searchArgs] - Props to pass to the search input component.
 * @param {object} props - Additional props to be spread onto the <nav> element.
 * 
 * @returns {JSX.Element} The rendered navbar component.
 */

interface NavbarProps {
  brandLogo?: string;
  actions?: any,
  theme?: 'white' | 'gray';
  className?: string
  searchArgs?: Parameters<typeof Input>[0]
}



const Navbar: React.FC<NavbarProps> = ({ brandLogo='', actions, theme, className, searchArgs={}, ...props }) => {

  return (
    <nav {...props} className={`ceui-navbar className grid grid-cols-3 ${className}  ceui-${theme}-navbar`}>
      <div className="ceui-navbar-brand">
          <div className='ceui-navbar-brand-logo'>
            <LazyImage src={brandLogo} alt="Brand Logo" className='brand-log-img' height='100%' width='100%'  loading='lazy' />
          </div>
      </div>
      <div className="ceui-navbar-search space-x-6">
          <Input 
           prefix={<Icon name="search"  />}
           suffix={<Chip label="Shift + F" className='ceui-navbar-search-chip' variant="default" />}
           {...searchArgs}
           variant="prefix_suffix"
           className={`ceui-${theme}-navbar ceui-navbar-search-input`}
           placeholder="Search Files, Templates & More..."  
           />
      </div>
      <div className='ceui-navbar-actions display-flex space-x-4'>
        {actions?.map((act:any, index:number) => (
          <span key={index}>
             {act.element}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
