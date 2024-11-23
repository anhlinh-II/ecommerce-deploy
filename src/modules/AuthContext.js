import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [isAuthenticate, setIsAuthenticate] = useState(false);
     const [isAdmin, setIsAdmin] = useState(false);

     return (
          <AuthContext.Provider value={{ isAuthenticate, setIsAuthenticate, isAdmin, setIsAdmin }}>
               {children}
          </AuthContext.Provider>
     );
};

export const useAuth = () => useContext(AuthContext);
