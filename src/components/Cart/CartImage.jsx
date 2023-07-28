const CartImage = ({ product }) => {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-md">
      <img
        src={product.image_url}
        alt={product.product_name}
      />
    </div>
  );
};

export default CartImage;
