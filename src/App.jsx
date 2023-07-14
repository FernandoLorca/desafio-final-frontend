import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from './context/AuthContext';

import HomePublic from './pages/HomePublic';
import HomePrivate from './pages/HomePrivate';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

const App = () => {
  const { user } = useContext(AuthContext);
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
        path="/register"
        element={<Register />}
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
