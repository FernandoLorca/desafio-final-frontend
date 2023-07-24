/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import { AuthContext } from '../context/AuthContext';
import { ProductsContext } from '../context/ProductsContext';

import ProductsPerCategory from '../components/Products/ProductsPerCategory';
import Footer from '../components/Footer/Footer';
import TitleOne from '../components/Titles/TitleOne';
import NavbarMain from '../components/Navbar/NavbarMain';

const CategoryOfProduct = () => {
  const { user } = useContext(AuthContext);
  const { products, setCategory, category } = useContext(ProductsContext);
  const params = useParams();

  useEffect(() => {
    setCategory(params.category);
  }, [params]);

  const displayTitle = category => {
    const title =
      category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');

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
            products={products}
            category={category}
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
