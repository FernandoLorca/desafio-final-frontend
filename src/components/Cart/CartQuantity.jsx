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
  const { setVirtualQuantity } = useContext(CartContext);
  const [localQuantity, setLocalQuantity] = useState(quantity);
  useEffect(() => setLocalQuantity(quantity), [quantity]);

  const descreaseQuantity = () => {
    if (localQuantity <= 1) return;
    setLocalQuantity(localQuantity - 1);
  };

  const increaseQuantity = () => {
    setLocalQuantity(localQuantity + 1);
  };

  useEffect(
    () => setVirtualQuantity(localQuantity),
    [localQuantity, setVirtualQuantity]
  );

  const removeFromCart = async () => {
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
              product_id: product.product_id,
              quantity: localQuantity,
            },
          ],
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromCart = () => removeFromCart(product.product_id);

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => descreaseQuantity()}
        className={`hover:text-white rounded-full border border-dark-500 p-1 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100 ${
          localQuantity <= 1 && 'cursor-not-allowed'
        }`}
      >
        <BsFillCaretLeftFill />
      </button>
      <p className="text-lg">{localQuantity}</p>
      <button
        onClick={() => increaseQuantity()}
        className="hover:text-white cursor-pointer rounded-full border border-dark-500 p-1 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100"
      >
        <BsFillCaretRightFill />
      </button>
      <button
        className="flex items-center justify-center text-primary-500"
        onClick={handleRemoveFromCart}
      >
        <BsFillTrashFill />
      </button>
    </div>
  );
};

export default CartQuantity;
