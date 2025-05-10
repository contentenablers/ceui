import React from 'react';
import './Navbar.css';
import Divider from '../Divider';

const Input = React.lazy(() => import('../Input'));
const Icon = React.lazy(() => import('../Icon'));
const Chip = React.lazy(() => import('../Chip'));
const divider = React.lazy(()=> import('../Divider'))
const LazyImage = React.lazy(() => import('../LazyImage'));

interface NavbarProps {
  brandLogo?: string;
  actions?: Array<{ element: React.ReactNode }>;
  theme?: 'white' | 'gray';
  className?: string;
  searchArgs?: Parameters<typeof Input>[0];
}

const Navbar: React.FC<NavbarProps> = ({
  brandLogo = '',
  actions = [],
  theme = 'white',
  className = '',
  searchArgs = {},
  ...props
}) => {
  return (
    <nav 
      {...props}
      className={`ceui-navbar ${className} ceui-${theme}-navbar`}
    >
      <div className="ceui-navbar-brand">
        <div className="ceui-navbar-brand-logo">
          <LazyImage
            src={brandLogo}
            alt="Brand Logo"
            className="brand-log-img"
            height="100%"
            width="100%"
            loading="lazy"
          />
        </div>
        <Divider orientation="vertical" variant="solid" thickness="medium" color="navbar" height="30px" />
      </div>

      <div className="ceui-navbar-search">
        <Input
          prefix={<Icon name="search" />}
          suffix={
            <Chip
              label="Shift + F"
              className="ceui-navbar-search-chip"
              variant="navbar"
            />
          }
          {...searchArgs}
          variant="prefix_suffix"
          className="ceui-navbar-search-input"
          placeholder="Search Files, Templates & More..."
        />
      </div>

      <div className="ceui-navbar-actions">
        {actions.map((act, index) => (
          <span key={index}>{act.element}</span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
