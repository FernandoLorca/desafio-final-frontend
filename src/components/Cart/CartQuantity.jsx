const CartQuantity = ({ quantity, setQuantity }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <a
        onClick={quantity <= 1 ? null : () => setQuantity(quantity - 1)}
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
  );
};

export default CartQuantity;
