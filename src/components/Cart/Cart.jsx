import CartImage from './CartImage';
import CartTitlePrice from './CartTitlePrice';
import CartQuantityPrice from './CartQuantityPrice';

const Cart = ({ cartProduct, formatPrice, updateProductQuantity }) => {
  return (
    <div className="flex flex-col gap-5">
      {cartProduct &&
        typeof cartProduct === 'object' &&
        cartProduct !== null &&
        cartProduct.product.map(product => (
          <div
            className="flex items-center justify-between gap-3"
            key={product.product_id}
          >
            <div className="flex gap-5">
              <CartImage product={product} />
              <CartTitlePrice
                cartProduct={cartProduct}
                product={product}
                formatPrice={formatPrice}
              />
            </div>
            <CartQuantityPrice
              quantity={product.product_quantity}
              updateQuantity={newQuantity =>
                updateProductQuantity(product.product_id, newQuantity)
              }
              cartProduct={cartProduct}
              product={product}
              formatPrice={formatPrice}
            />
          </div>
        ))}
    </div>
  );
};

export default Cart;
