import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import Link from '../Buttons/Link';

const Product = ({ item }) => {
  let productItem;

  if (item && [item].length > 0) {
    productItem = item;
  }

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex max-h-[10rem] min-h-[10rem] w-full max-w-[10rem] items-center justify-center rounded-xl border-2 border-dark-100 p-6">
        <img
          src={item && [item].length > 0 && productItem.image_url}
          alt=""
          className="max-h-[10rem] rounded-xl"
        />
      </div>
      <ProductTitle
        productTitle={item && [item].length > 0 && productItem.product_name}
      />
      <ProductPrice price={item && [item].length > 0 && productItem.price} />
      <Link
        text="Comprar"
        href="#"
        fontSize="text-md"
      />
    </div>
  );
};

export default Product;
