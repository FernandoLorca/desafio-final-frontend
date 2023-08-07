import CartQuantity from './CartQuantity';
import CartTotalPrice from './CartTotalPrice';

const CartQuantityPrice = ({ quantity, cartProduct, product, formatPrice }) => {

  return (
    <div className="flex h-full w-24 flex-col gap-1">
      <CartQuantity
        product={product}
        quantity={quantity}
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
