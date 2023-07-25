import ProductTitleLink from './ProductTitleLink';
import ProductPrice from './ProductPrice';

const ProductPerCategory = ({ title, price, img, id, category, addToCart }) => {
  return (
    <div className="grid h-full content-around justify-items-center">
      <div className="mb-2 flex max-h-[10rem] min-h-[10rem] w-full max-w-[10rem] items-center justify-center rounded-xl border-2 border-dark-100 p-6">
        <img
          src={img}
          alt={title}
          className="max-h-[10rem] rounded-xl"
        />
      </div>
      <ProductTitleLink
        productTitle={title}
        extraClasses="text-center"
        href={`/category/${category}/${id}`}
      />
      <ProductPrice price={price} />
      <a
        href="#"
        className="underline hover:text-primary-500"
        onClick={addToCart}
      >
        Comprar
      </a>
    </div>
  );
};

export default ProductPerCategory;
