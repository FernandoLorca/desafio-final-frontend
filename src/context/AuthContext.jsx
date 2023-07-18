/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const initialStateToken = localStorage.getItem('token');

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [user, setUser] = useState(null);

  const saveToken = accessToken => {
    setToken(accessToken);
    localStorage.setItem('token', accessToken);
  };

  const saveUser = user => setUser(user);

  // use effect para invocar getUser con cambio de token
  const getUser = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/users/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      saveUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  const logOut = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        saveToken,
        user,
        saveUser,
        getUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
