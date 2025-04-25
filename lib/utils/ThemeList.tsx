

 export const SIZE = {
    'small':'py-1 px-2 text-sm',
    'medium':'py-2 px-4 text-base',
    'large':'py-3 px-6 text-lg', 
  };

export const BUTTON_VARIANT = { //ceui-element rounded-xl
    'primary':'bg-c1 text-white ceui-element rounded-xl',
    'secondary':'bg-c2 text-white ceui-element rounded-xl',
    'primary-outline':'border-c1 text-c1 :hover:bg-c1 :hover:text-white ceui-element rounded-xl',
    'secondary-outline':'border-c2 text-c2 :hover:bg-c2 :hover:text-white ceui-element rounded-xl',
    'primary-card': 'bg-c2 text-white border-c2',
    'secondary-card': 'bg-white text-c2 border-white',
    'default':''
};

export const CHIP_VARIANT = {
  'default':'bg-[color:var(--color-p4)] text-c1',
  'primary':'bg-c1 text-white',
  'secondary':'bg-c2 text-white',
  'primary-outline':'border-c1 text-c1 :hover:bg-c1 :hover:text-white',
  'secondary-outline':'border-c2 text-c2 :hover:bg-c2 :hover:text-white',
};

export const BUTTON_GROUP_VARIANT = {
  'primary':'bg-c1 text-white border-[c1]',
  'secondary':'bg-c2 text-white  border-[c2]',
  'primary-outline':'border-c1 text-c1 :hover:bg-c1 :hover:text-white',
  'secondary-outline':'border-c2 text-c2 :hover:bg-c2 :hover:text-white',
   'default':''
}

/**
 * select box themes are 3 way 
 * selected item, drop down, and dropdown item
 * s-d-di
 */
export const SELECT_BOX_VARIANT={
  'primary':{
    's':'bg-[color:var(--color-p1)] text-white rounded-md px-3',
    'd':'bg-[color-mix(in_srgb,var(--color-white,#fff)_80%,transparent)]',
    'di':'text-c1',
   },
   'primary-outline':{
    's':'border-c1 text-c1 :hover:bg-c1 :hover:text-white rounded-md px-3',
    'd':'bg-[color-mix(in_srgb,var(--color-white,#fff)_80%,transparent)]',
    'di':'text-c1',
   },
   'secondary-outline':{
    's':'border-c2 text-c2 :hover:bg-c2 :hover:text-white rounded-md px-3',
    'd':'bg-[color-mix(in_srgb,var(--color-white,#fff)_80%,transparent)]',
    'di':'text-c2',
   },
   'black':{
    's':'bg-gray-800 text-white rounded-md px-3',
    'd':'bg-[color-mix(in_srgb,var(--color-white,#fff)_80%,transparent)]',
    'di':'text-c1',
  },
  'rounded-primary':{
    's':'text-c1 rounded-3xl px-1',
    'd':'bg-[color-mix(in_srgb,var(--color-p4)_90%,transparent)]',
    'di':'text-c1',
  },
}

export const SELECT_VARIANT={
  'default':'bg-[color:var(--color-p4)] border-[#fff] rounded-[5px]',
  'primary':'bg-[color:var(--color-p1)] rounded-[5px]',
  // 'primary-outline':'bg-[color:var(--color-p4) border-[var(--color-p1)]]',
   'secondary':'bg-[color:var(--color-p2)] rounded-[5px]',
   'rounded-primary':'bg-[color:var(--color-p1)] rounded-[50%] '
}
