import TitleTwo from '../Titles/TitleTwo';

const CartTitlePrice = ({ cartProduct, product, formatPrice }) => {
  return (
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
  );
};

export default CartTitlePrice;
