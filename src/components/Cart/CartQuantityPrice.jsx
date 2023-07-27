import CartQuantity from './CartQuantity';
import CartTotalPrice from './CartTotalPrice';

const CartQuantityPrice = ({
  quantity,
  setQuantity,
  cartProduct,
  product,
  formatPrice,
}) => {
  return (
    <div className="flex h-full w-24 flex-col gap-1">
      <CartQuantity
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <CartTotalPrice
        cartProduct={cartProduct}
        product={product}
        formatPrice={formatPrice}
      />
    </div>
  );
};

export default CartQuantityPrice;
