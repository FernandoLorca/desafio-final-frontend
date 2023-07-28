import CartImage from './CartImage';
import CartTitlePrice from './CartTitlePrice';
import CartQuantityPrice from './CartQuantityPrice';
import ButtonCta from '../Buttons/ButtonCta';

const Cart = ({ cartProduct, formatPrice }) => {
  const emptyCartMessage =
    'Tu carro se encuentra vacio, debes agregar productos para visualizarlos';
  const isCartEmpty =
    !cartProduct ||
    typeof cartProduct !== 'object' ||
    !cartProduct.product ||
    cartProduct.result === emptyCartMessage;

  return (
    <div className="flex flex-col gap-5">
      {isCartEmpty ? (
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-bold">Carrito vacío</h1>
        </div>
      ) : (
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
              cartProduct={cartProduct}
              product={product}
              formatPrice={formatPrice}
            />
          </div>
        ))
      )}
      <div
        className={`mt-5 ${
          cartProduct.result !== emptyCartMessage ? 'block' : 'hidden'
        }`}
      >
        <ButtonCta text="Finalizar Compra" />
      </div>
    </div>
  );
};

export default Cart;
