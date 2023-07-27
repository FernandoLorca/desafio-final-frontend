const CartQuantity = ({ quantity, updateQuantity }) => {
  // Debo crear una función que se encargue de disminuir la cantidad de productos en el carrito. Se me ocurre que la cantidad que viene del back se guarde en un estado. Con este estado dismonuir o aumentar la cantidad y al mismo momento que se aumenta o disminuye se valla actualizando el carrito para que se valla mostrando la cantidad total.
  // La cantidad que se muestra en el componente siempre es la cantidad real que viene desde el back y no la cantidad que se muestra en el estado. El estado lo uso solamente para realiar las operaciones de suma y resta.

  const descreaseQuantity = () => {
    console.log('Resta');
    if (quantity > 1) {
      updateQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    console.log('Suma');
    updateQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <div
        onClick={() => descreaseQuantity()}
        className={`hover:text-white cursor-pointer rounded-full border border-dark-500 px-2 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100 ${
          quantity <= 1 && 'cursor-not-allowed'
        }`}
      >
        {'<'}
      </div>
      <p className="text-lg">{quantity}</p>
      <div
        onClick={() => increaseQuantity()}
        className="hover:text-white cursor-pointer rounded-full border border-dark-500 px-2 text-dark-500 hover:border-dark-100 hover:bg-dark-500 hover:text-dark-100"
      >
        {'>'}
      </div>
    </div>
  );
};

export default CartQuantity;
