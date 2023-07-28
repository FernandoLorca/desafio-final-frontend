/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';

import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const { cartProduct, cartData, emptyCart } = useContext(CartContext);

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

  return (
    <>
      <NavbarMain user={user} />
      <div className="flex h-screen justify-center">
        <div className="m-5 flex h-fit w-full flex-grow flex-col gap-5 rounded-xl border-2 border-dark-100 p-5 md:mx-16 lg:max-w-lg">
          {!emptyCart ? (
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-4xl font-bold">Carrito vacío</h1>
            </div>
          ) : (
            <>
              <Cart
                cartProduct={cartProduct}
                formatPrice={formatPrice}
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
