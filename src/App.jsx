import { Routes, Route } from 'react-router-dom';

import HomePublic from './pages/HomePublic';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePublic />}
      />
      <Route
        path="*"
        element={<h1>404</h1>}
      />
    </Routes>
  );
};

export default App;
