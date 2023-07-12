import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const saveInputValue = value => setInputValue(value);

  const getUserProfile = async accessToken => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/auth/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const saveToken = accessToken => setToken(accessToken);

  return (
    <AuthContext.Provider
      value={{
        token,
        saveToken,
        getUserProfile,
        user,
        saveInputValue,
        inputValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
