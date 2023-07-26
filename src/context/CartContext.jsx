import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1);

  // Cuando hago click en el onclick del boton comprar de productpage.jsx no guardo el producto en un estado, si no que envio el producto al back y hago un get para despues mostrar el producto en el carrito a travez del context

  return (
    <CartContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
