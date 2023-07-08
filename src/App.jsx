import { Routes, Route } from 'react-router-dom';

import HomePublic from './pages/HomePublic';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const App = () => {
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
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default App;
