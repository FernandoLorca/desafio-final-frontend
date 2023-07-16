import { createContext, useState } from 'react';

export const AuthContext = createContext();

const initialStateToken = localStorage.getItem('token');

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [user, setUser] = useState(null);

  const getUserProfile = async (accessToken, email, password) => {
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/users/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const saveToken = accessToken => {
    setToken(accessToken);
    localStorage.setItem('token', accessToken);
  };

  const saveUser = user => setUser(user);

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
        getUserProfile,
        user,
        saveUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
