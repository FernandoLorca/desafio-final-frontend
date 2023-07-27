import { createContext, useContext, useState } from 'react';

import { AuthContext } from './AuthContext';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [cartProduct, setCartProduct] = useState(null);
  const [virtualQuantity, setVirtualQuantity] = useState(null);

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

  const buyHandler = async () => {
    try {
      await fetch(import.meta.env.VITE_API_URL + '/cart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify({
        //   product: [
        //     {
        //       product_id: product.id,
        //       quantity: 1,
        //     },
        //   ],
        // }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartProduct,
        setCartProduct,
        virtualQuantity,
        setVirtualQuantity,
        cartData,
        buyHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
