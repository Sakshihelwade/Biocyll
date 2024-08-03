import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userData')) || null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);



  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('token', authToken);
  };

  const logout = () => {
    // console.log(">>>>>>>")
    localStorage.clear();
    setUser(null);
    setToken(null);
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{
      user,
      token,
      login,
      logout,
    }}>
      {children}
    </UserContext.Provider>
  );
};


