/* eslint-disable react-hooks/exhaustive-deps */
import {
  BsFillCaretLeftFill,
  BsFillCaretRightFill,
  BsFillTrashFill,
} from 'react-icons/bs';
import { useContext, useState, useEffect } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

const CartQuantity = ({ quantity, product }) => {
  const { token } = useContext(AuthContext);
  const { setVirtualQuantity, cartData } = useContext(CartContext);

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    removeFromCart(product.product_id, 1);
  };

  const increaseQuantity = () => {
    addItemToCart(product.product_id, 1);
  };

  useEffect(
    () => setVirtualQuantity(quantity),
    [setVirtualQuantity],
  );

  const addItemToCart = async (productId, quantity) => {
    try {
      await fetch(import.meta.env.VITE_API_URL + '/cart/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: [
            {product_id: productId,
            quantity: quantity,
        }]
        }),
      });
      cartData();
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (productId, quantity) => {
    try {
      await fetch(import.meta.env.VITE_API_URL + '/cart/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: [
            {
              product_id: productId,
              quantity: quantity,
            },
          ],
        }),
      });

      cartData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => decreaseQuantity()}
        className={`hover:text-white rounded-full border border-dark-500 p-1 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100 ${
          quantity <= 1 && 'cursor-not-allowed'
        }`}
      >
        <BsFillCaretLeftFill />
      </button>
      <p className="text-lg">{quantity}</p>
      <button
        onClick={() => increaseQuantity()}
        className="hover:text-white cursor-pointer rounded-full border border-dark-500 p-1 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100"
      >
        <BsFillCaretRightFill />
      </button>
      <button
        className="flex items-center justify-center text-primary-500 hover:opacity-75"
        onClick={() => removeFromCart(product.product_id, quantity)}
      >
        <BsFillTrashFill />
      </button>
    </div>
  );
};

export default CartQuantity;
