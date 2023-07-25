import { Link } from 'react-router-dom';

import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';

const Product = ({ item }) => {
  let productItem;
  let category;

  if (item && [item].length > 0) {
    productItem = item;
  }

  switch (item.category_id) {
    case 1:
      category = 'placas-madre';
      break;
    case 2:
      category = 'ram';
      break;
    case 3:
      category = 'discos';
      break;
    case 4:
      category = 'gabinetes';
      break;
    case 5:
      category = 'fuentes-poder';
      break;
    case 6:
      category = 'tarjetas-video';
      break;
    case 7:
      category = 'procesadores';
      break;
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
      <Link to={`/category/${category}/${item.id}`}>
        <ProductTitle
          productTitle={item && [item].length > 0 && productItem.product_name}
          extraClasses="text-primary-600"
        />
      </Link>
      <ProductPrice price={item && [item].length > 0 && productItem.price} />
    </div>
  );
};

export default Product;
