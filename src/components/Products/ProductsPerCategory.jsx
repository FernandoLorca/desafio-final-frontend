import { useEffect, useState, useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import ProductPerCategory from './ProductPerCategory';

const ProductsPerCategory = ({ products, category }) => {
  const { setProductBuy } = useContext(CartContext);
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
        id={product.id}
        category={category}
        addToCart={() => setProductBuy(product)}
      />
    </div>
  ));
};

export default ProductsPerCategory;
