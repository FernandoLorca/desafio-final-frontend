import ProductPrice from './ProductPrice';
import ProductTitle from './ProductTitle';

const Product = ({ img, productTitle, price }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-2 flex justify-center rounded-xl bg-dark-200">
        <img
          src={img}
          alt=""
          className="rounded-xl"
        />
      </div>
      <ProductTitle productTitle={productTitle} />
      <ProductPrice price={price} />
      <a
        href="#"
        className="text-lg underline hover:text-primary-500"
      >
        Detalles
      </a>
    </div>
  );
};

export default Product;
