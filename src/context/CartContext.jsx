import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productBuy, setProductBuy] = useState();

  // Cuando hago click en el onclick del boton comprar de productpage.jsx no guardo el producto en un estado, si no que envio el producto al back y hago un get para despues mostrar el producto en el carrito a travez del context
  console.log(productBuy);

  /*
  1. Enviar token
  put /cart/
  */

  return (
    <CartContext.Provider value={{ setProductBuy }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
