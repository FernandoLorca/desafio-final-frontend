const ProductPrice = ({ price }) => {
  return (
    <p className="mb-2 text-lg">
      $
      {price &&
        [price].length > 0 &&
        price.toLocaleString('es-ES', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          useGrouping: true,
        })}
    </p>
  );
};

export default ProductPrice;
