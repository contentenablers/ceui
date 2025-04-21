// CardContext.tsx
import React, { createContext, useContext } from 'react';

interface Button {
  label: string;
  onClick: () => void;
}

interface CardContextProps {
  layout: 'card-col' | 'card-row';
  position: 'onImage' | 'atEnd';
  buttons: Button[];
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
  buttons,
  children
}) => (
  <CardContext.Provider value={{ layout, position, buttons }}>
    {children}
  </CardContext.Provider>
);
