import { Routes, Route } from 'react-router-dom';

import HomePublic from './pages/HomePublic';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

import InputProvider from './context/InputContext.jsx';

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
          <InputProvider>
            <Login />
          </InputProvider>
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
