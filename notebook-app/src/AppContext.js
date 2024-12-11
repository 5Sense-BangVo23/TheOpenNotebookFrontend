import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(process.env.REACT_APP_ADMIN === 'true');

  return (
    <AppContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AppContext.Provider>
  );
};
