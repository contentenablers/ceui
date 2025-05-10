// CardContext.tsx
import React, { createContext, useContext } from 'react';
import {ButtonProps} from '../SkillButton/SkillButton';

// interface Button {
//   size: "small" | "medium" | "large" | undefined;
//   variant: "default" | "primary" | "secondary" | "primary-outline" | "secondary-outline" | "primary-card" | "secondary-card" | undefined;
//   label: string;
//   onClick: () => void;
// }

interface CardContextProps {
  layout: 'card-col' | 'card-row';
  position: 'onImage' | 'atEnd';
  button: (ButtonProps & { label: string })[];
}

const CardContext = createContext<CardContextProps | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) throw new Error('useCardContext must be used within a Card');
  return context;
};

interface CardProviderProps extends CardContextProps {
  children: React.ReactNode;
}

export const CardProvider: React.FC<CardProviderProps> = ({
  layout,
  position,
  button,
  children
}) => (
  <CardContext.Provider value={{ layout, position, button }}>
    {children}
  </CardContext.Provider>
);
