import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState(null);

  return (
    <CartContext.Provider value={{ cartProduct, setCartProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
