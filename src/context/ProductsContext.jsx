/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  switch (category) {
    case 'ssd-y-hdd':
      setCategory('discos');
      break;
    case 'fuentes-de-poder':
      setCategory('fuentes-poder');
      break;
    case 'tarjetas-de-video':
      setCategory('tarjetas-video');
      break;
  }

  const getProductsData = async () => {
    try {
      if (category && [category].length > 0) {
        const res = await fetch(
          import.meta.env.VITE_API_URL +
            `/products/category/${category}?limit=40`
        );
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    getProductsData();
  }, [category]);

  return (
    <ProductsContext.Provider value={{ products, setCategory, category }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
