import React, { useContext, useReducer } from 'react';

type UIState = {
  show: boolean;
};

type UIAction = { type: 'showNavbar' } | { type: 'hideNavbar' };

type UIContextType = [state: UIState, dispatch: React.Dispatch<UIAction>];

const UIContext = React.createContext({} as UIContextType);

const uiReducer = (state: UIState, action: UIAction) => {
  switch (action.type) {
    case 'showNavbar': {
      return { show: true };
    }

    case 'hideNavbar': {
      return { show: false };
    }

    default:
      return state;
  }
};

interface UIProviderProps {
  children: React.ReactNode;
}

const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, {
    show: false,
  });

  return (
    <UIContext.Provider value={[state, dispatch]}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;

export const useUI = () => {
  const [state, dispatch] = useContext(UIContext);

  return { state, dispatch };
};
