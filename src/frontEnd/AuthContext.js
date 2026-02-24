import React, { createContext, useState, useContext } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email, password) => {
    if (email === 'teste@teste.com' && password === '123456') {
      const userData = {
        email,
        name: 'Usuário Silva',
        token: 'fake-jwt-token'
      };

      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return true;
      
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
