import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Product from './Product';
import TitleTwo from '../Titles.jsx/TitleTwo';

const Products = ({ title, products }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productDetails = await Promise.all(
        products.map(product =>
          fetch(product.href).then(response => response.json())
        )
      );
      setProductData(productDetails);
    };

    products && products.length > 0 && fetchProductData();
  }, [products]);

  return (
    <div className="pt-10">
      <div className="px-5 md:px-20 lg:hidden">
        <TitleTwo
          title={title}
          textSize="text-4xl"
        />
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
          pagination={false}
          modules={[FreeMode]}
        >
          {products &&
            products.length > 0 &&
            productData.map((product, i) => (
              <SwiperSlide key={i}>
                <Product item={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="hidden px-20 lg:block">
        <h2 className="mb-5 text-4xl font-bold">{title}</h2>
        <div className="flex justify-between gap-5">
          {products &&
            products.length > 0 &&
            productData.map((product, i) => (
              <div key={i}>
                <Product item={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
