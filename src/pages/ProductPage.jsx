import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from '../context/CartContext';

import NavbarMain from '../components/Navbar/NavbarMain';
import Footer from '../components/Footer/Footer';
import TitleOne from '../components/Titles/TitleOne';
import TitleTwo from '../components/Titles/TitleTwo';
import ButtonCta from '../components/Buttons/ButtonCta';

const ProductPage = () => {
  const { user } = useContext(AuthContext);
  const { product, category, setProductId } = useContext(ProductsContext);
  const { setProductBuy } = useContext(CartContext);
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
    default:
      categoryFromContext =
        category.charAt(0).toUpperCase() + category.slice(1);
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
      <NavbarMain user={user} />
      <div className="m-5 rounded-xl border-2 border-dark-100 p-5 md:m-auto md:my-10 md:max-w-lg">
        <div className="flex justify-center">
          <img
            src={product.image_url}
            alt=""
            className="w-full max-w-[14rem]"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-primary-600">
            <TitleOne
              title={product && [product].length > 0 && product.product_name}
              classProperty="text-3xl text-center mt-5"
            />
          </div>
          <p>
            Categoría: {product && [product].length > 0 && categoryFromContext}
          </p>
          <p>Stock: {product && [product].length > 0 && product.stock}</p>
        </div>
        <TitleTwo
          title={`$${formattedPrice}`}
          textSize="text-center text-4xl mt-5 text-secondary-700"
        />
        <div className="px-5">
          <ButtonCta
            text="Comprar"
            onclick={() => {
              setProductBuy(product);
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
