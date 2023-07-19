/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../context/AuthContext';

import ProductsPerCategory from '../components/Products/ProductsPerCategory';
import Footer from '../components/Footer/Footer';
import TitleOne from '../components/Titles.jsx/TitleOne';
import NavbarMain from '../components/Navbar/NavbarMain';

const CategoryOfProduct = () => {
  const { user } = useContext(AuthContext);
  let { category } = useParams();
  const [products, setProducts] = useState([]);

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

  const displayTitle = category => {
    const title =
      category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');

    console.log(title);
    if (title === 'Placas madre') return title;

    if (title === 'Discos') return 'Ssd y Hdd';

    if (title.split(' ').length === 1) {
      return (
        category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')
      );
    }

    if (title.split(' ').length >= 2) {
      const words = title.split(' ');
      const modifiedTitle = [words[0], 'de', words[1]].join(' ');

      return modifiedTitle;
    }
  };

  return (
    <>
      <NavbarMain user={user} />
      <div className="pt-10 text-center">
        <TitleOne
          title={displayTitle(category)}
          classProperty="text-3xl"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 px-5 py-10 md:grid-cols-3 md:px-20">
        {products && products.length > 0 && (
          <ProductsPerCategory
            title="Tarjetas de video"
            products={products}
          />
        )}
      </div>
      <div className="-mt-10">
        <Footer />
      </div>
    </>
  );
};

export default CategoryOfProduct;
