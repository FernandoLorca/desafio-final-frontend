import { useEffect, useState } from 'react';
import ProductPerCategory from './ProductPerCategory';

const ProductsPerCategory = ({ title, products }) => {
  const [detailedProducts, setDetailedProducts] = useState([]);

  useEffect(() => {
    const fetchDetailedProducts = async () => {
      const fetchPromises = products.map(product =>
        fetch(product.href).then(res => res.json())
      );

      try {
        const responses = await Promise.all(fetchPromises);
        setDetailedProducts(responses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetailedProducts();
  }, [products]);

  return detailedProducts.map((product, i) => (
    <div key={i}>
      <ProductPerCategory
        title={product.product_name}
        price={product.price}
        img={product.image_url}
      />
    </div>
  ));
};

export default ProductsPerCategory;
