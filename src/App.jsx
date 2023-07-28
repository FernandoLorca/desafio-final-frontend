import { Routes, Route } from 'react-router-dom';

import AuthProvider from './context/AuthContext';
import ProductsProvider from './context/ProductsContext';
import CartProvider from './context/CartContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import CategoryOfProduct from './pages/CategoryOfProduct';
import ProductPage from './pages/ProductPage';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import CartPage from './pages/CartPage';

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
          <AuthProvider>
            <ProductsProvider>
              <CartProvider>
                <ProductPage />
              </CartProvider>
            </ProductsProvider>
          </AuthProvider>
        }
      />
      <Route
        path="/perfil/:id"
        element={<Profile />}
      />
      <Route
        path="/carro"
        element={
          <CartProvider>
            <CartPage />
          </CartProvider>
        }
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
