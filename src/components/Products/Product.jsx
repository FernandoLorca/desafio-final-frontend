import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import Link from '../Buttons/Link';

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
      <Link
        text="Detalles"
        href="#"
        fontSize="text-lg"
      />
    </div>
  );
};

export default Product;
