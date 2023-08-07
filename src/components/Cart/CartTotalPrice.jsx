const CartTotalPrice = ({ cartProduct, product, formatPrice }) => {
  return (
    <div className="text-center">
      <p className="font-bold">Total:</p>
      <p>
        $
        {cartProduct &&
          typeof cartProduct === 'object' &&
          cartProduct !== null &&
          formatPrice(product.price_x_quantity)}
      </p>
    </div>
  );
};

export default CartTotalPrice;
