const ProductTitle = ({ productTitle, extraClasses }) => {
  return (
    <h3 className={`text-xl font-bold ${extraClasses}`}>{productTitle}</h3>
  );
};

export default ProductTitle;
