const CartImage = ({ product }) => {
  return (
    <div className="h-16 w-16 rounded-md bg-dark-200">
      <img
        src={product.image_url}
        alt={product.product_name}
      />
    </div>
  );
};

export default CartImage;
