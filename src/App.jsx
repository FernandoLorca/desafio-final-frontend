import { Routes, Route } from 'react-router-dom';

import HomePublic from './pages/HomePublic';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

import AuthProvider from './context/AuthContext';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePublic />}
      />
      <Route
        path="/login"
        element={
          <AuthProvider>
            <Login />
          </AuthProvider>
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default App;
