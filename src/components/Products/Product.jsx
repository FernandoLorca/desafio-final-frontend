const Product = ({ img, productTitle, price }) => {
  return (
    <>
      <div className="mb-2 rounded-xl bg-dark-200">
        <img
          src={img}
          alt=""
          className="rounded-xl"
        />
      </div>
      <div className="px-2">
        <h3 className="text-xl font-bold">{productTitle}</h3>
        <p className="mb-2 text-lg">{price}</p>
        <a
          href="#"
          className="text-lg underline hover:text-primary-500"
        >
          Detalles
        </a>
      </div>
    </>
  );
};

export default Product;
