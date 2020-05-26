import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setAuth] = useState(() => {
    return sessionStorage.getItem('token') ? true : false;
  });
  const value = {
    isAuth,
    activateAuth: (token) => {
      sessionStorage.setItem('token', token);
      setAuth(token ? true : false);
    },
    removeAuth: () => {
      sessionStorage.removeItem('token');
      setAuth(false);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
