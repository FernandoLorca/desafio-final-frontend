/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductsPerCategory from '../components/Products/ProductsPerCategory';

const CategoryOfProduct = () => {
  let { category } = useParams();
  const [products, setProducts] = useState([]);

  console.log(category);

  switch (category) {
    case 'ssd-y-hdd':
      category = 'discos';
      break;
    case 'fuentes-de-poder':
      category = 'fuentes-poder';
      break;
    case 'tarjetas-de-video':
      category = 'tarjetas-video';
      break;
  }

  const getVideoCards = async () => {
    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL +
          `/products/category/${category}?limit=100`
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    getVideoCards();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5 px-5 md:grid-cols-3 md:px-20">
      {products && products.length > 0 && (
        <ProductsPerCategory
          title="Tarjetas de video"
          products={products}
        />
      )}
    </div>
  );
};

export default CategoryOfProduct;
