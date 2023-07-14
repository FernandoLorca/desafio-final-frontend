import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from './context/AuthContext';

import HomePublic from './pages/HomePublic';
import HomePrivate from './pages/HomePrivate';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const App = () => {
  const { user, response } = useContext(AuthContext);
  console.log(user);
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePublic />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/auth"
        element={user ? <HomePrivate /> : <Navigate to="/login" />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default App;
