/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import TitleTwo from '../components/Titles/TitleTwo';
import Footer from '../components/Footer/Footer';
import ButtonCta from '../components/Buttons/ButtonCta';

const Cart = () => {
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

  console.log(cartProduct);

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
          {cartProduct &&
            typeof cartProduct === 'object' &&
            cartProduct !== null &&
            cartProduct.product.map(product => (
              <div
                className="flex items-center justify-between gap-3"
                key={product.product_id}
              >
                <div className="flex gap-5">
                  <div className="h-16 w-16 rounded-md bg-dark-200">
                    <img
                      src={product.image_url}
                      alt={product.product_name}
                    />
                  </div>
                  <div>
                    <TitleTwo
                      title={product.product_name}
                      textSize="-mb-1 text-primary-500"
                    />
                    <p>
                      $
                      {cartProduct &&
                        typeof cartProduct === 'object' &&
                        cartProduct !== null &&
                        formatPrice(product.price_x_quantity)}
                    </p>
                  </div>
                </div>
                <div className="flex h-full w-24 flex-col gap-1">
                  <div className="flex items-center justify-center gap-2">
                    <a
                      onClick={
                        quantity <= 1 ? null : () => setQuantity(quantity - 1)
                      }
                      href="#"
                      className={`hover:text-white rounded-full border border-dark-500 px-2 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100 ${
                        quantity <= 1 && 'cursor-not-allowed'
                      }`}
                    >
                      {'<'}
                    </a>
                    <p className="text-lg">{quantity}</p>
                    <a
                      onClick={() => setQuantity(quantity + 1)}
                      href="#"
                      className="hover:text-white rounded-full border border-dark-500 px-2 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100"
                    >
                      {'>'}
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">Total:</p>
                    <p>
                      $
                      {cartProduct &&
                        typeof cartProduct === 'object' &&
                        cartProduct !== null &&
                        formatPrice(
                          product.price_x_quantity * product.product_quantity
                        )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <div>
            <ButtonCta text="Finalizar Compra" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
