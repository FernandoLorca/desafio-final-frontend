import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const initialStateToken = localStorage.getItem('token');

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState(null);

  const saveInputValue = value => setInputValue(value);

  useEffect(() => {
    if (token) {
      getUserProfile(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserProfile = async accessToken => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/auth/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();
      setResponse(res);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const saveToken = accessToken => {
    setToken(accessToken);
    localStorage.setItem('token', accessToken);
  };

  const logOut = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        response,
        token,
        saveToken,
        getUserProfile,
        user,
        saveInputValue,
        inputValue,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
