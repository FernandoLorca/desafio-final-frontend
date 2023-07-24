import { Routes, Route } from 'react-router-dom';

import ProductsProvider from './context/ProductsContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import CategoryOfProduct from './pages/CategoryOfProduct';
import ProductPage from './pages/ProductPage';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
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
        path="/category/:category"
        element={
          <ProductsProvider>
            <CategoryOfProduct />
          </ProductsProvider>
        }
      />
      <Route
        path="/category/:category/:id"
        element={
          <ProductsProvider>
            <ProductPage />
          </ProductsProvider>
        }
      />
      <Route
        path="/perfil/:id"
        element={<Profile />}
      />
      <Route
        path="/carrito"
        element={<Cart />}
      />
      <Route
        path="/perfil/:id/editar-perfil"
        element={<ProfileEdit />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default App;
