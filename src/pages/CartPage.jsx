/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import Footer from '../components/Footer/Footer';
import ButtonCta from '../components/Buttons/ButtonCta';
import Cart from '../components/Cart/Cart';

const CartPage = () => {
  const { user, token } = useContext(AuthContext);
  const { cartProduct, setCartProduct } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const cartData = async () => {
    try {
      const data = await fetch(import.meta.env.VITE_API_URL + '/cart/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const cart = await data.json();
      setCartProduct(cart);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cartData();
  }, []);

  const formatPrice = price => {
    const priceString = price.toString();
    const isGreaterThan1000000 = price >= 1000000;

    if (isGreaterThan1000000) {
      const millions = priceString.slice(0, -6);
      const thousands = priceString.slice(-6, -3);
      const rest = priceString.slice(-3);
      return `${millions}.${thousands}.${rest}`;
    } else if (price >= 100000) {
      const thousands = priceString.slice(0, -3);
      const rest = priceString.slice(-3);
      return `${thousands}.${rest}`;
    } else {
      const decimalPart = priceString.slice(-3);
      const rest = priceString.slice(0, -3);
      return `${rest}.${decimalPart}`;
    }
  };

  const updateProductQuantity = (productId, newQuantity) => {
    setCartProduct(prevCartProduct => ({
      ...prevCartProduct,
      product: prevCartProduct.product.map(product =>
        product.product_id === productId
          ? { ...product, quantity: newQuantity }
          : product
      ),
    }));
  };

  return (
    <>
      <NavbarMain user={user} />
      <div className="flex h-screen justify-center">
        <div className="m-5 flex h-fit w-full flex-grow flex-col gap-5 rounded-xl border-2 border-dark-100 p-5 md:mx-16 lg:max-w-lg">
          <Cart
            cartProduct={cartProduct}
            formatPrice={formatPrice}
            updateProductQuantity={updateProductQuantity}
          />
          <div className="mt-5">
            <ButtonCta text="Finalizar Compra" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
