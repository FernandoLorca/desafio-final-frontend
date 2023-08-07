/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState(null);
  const [loader, setLoader] = useState(false);

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
    setLoader(true);
    try {
      if (category && [category].length > 0) {
        const res = await fetch(
          import.meta.env.VITE_API_URL +
            `/products/category/${category}?limit=40`
        );
        res.status === 200 && setLoader(false);
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

  const getProductData = async () => {
    try {
      if (productId && [productId].length > 0) {
        const res = await fetch(
          import.meta.env.VITE_API_URL + `/products/${productId}`
        );
        const data = await res.json();
        setProduct(data);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getProduct = async (product_id) => {
    try {
      if (product_id) {
        const res = await fetch(
          import.meta.env.VITE_API_URL + `/products/${product_id}`
        );

        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    getProductData();
  }, [productId]);

  return (
    <ProductsContext.Provider
      value={{ products, setCategory, category, product, setProductId, productId, loader, getProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
