import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsContext } from '../context/ProductsContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import Footer from '../components/Footer/Footer';
import TitleOne from '../components/Titles.jsx/TitleOne';
import TitleTwo from '../components/Titles.jsx/TitleTwo';
import ButtonCta from '../components/Buttons/ButtonCta';

const ProductPage = () => {
  const { product, category, setProductId } = useContext(ProductsContext);
  const { id } = useParams();

  let categoryFromContext;
  switch (category) {
    case 'discos':
      categoryFromContext = 'Ssd y Hdd';
      break;
    case 'fuentes-poder':
      categoryFromContext = 'Fuentes de poder';
      break;
    case 'tarjetas-video':
      categoryFromContext = 'Tarjetas de video';
      break;
  }

  useEffect(() => {
    setProductId(id);
  }, [id, setProductId]);

  const formatPrice = price => {
    const priceString = price.toString();
    const isGreaterThan100000 = price >= 100000;

    if (isGreaterThan100000) {
      const thousands = priceString.slice(0, -3);
      const rest = priceString.slice(-3);
      return `${thousands}.${rest}`;
    } else {
      const decimalPart = priceString.slice(-3);
      const rest = priceString.slice(0, -3);
      return `${rest}.${decimalPart}`;
    }
  };
  const formattedPrice = product && product.price && formatPrice(product.price);

  return (
    <>
      <NavbarMain />
      <div>
        <img
          src={product.image_url}
          alt=""
        />
      </div>
      <div>
        <TitleOne
          title={product && [product].length > 0 && product.product_name}
        />
        <p>
          Categoría: {product && [product].length > 0 && categoryFromContext}
        </p>
        <p>Stock: {product && [product].length > 0 && product.stock}</p>
      </div>
      <TitleTwo title={formattedPrice} />
      <ButtonCta text="Comprar" />
      <Footer />
    </>
  );
};

export default ProductPage;
