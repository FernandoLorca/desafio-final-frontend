import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Product from './Product';

const Products = ({ title }) => {
  return (
    <div className="px-5">
      <h2 className="mb-5 text-4xl font-bold md:px-20">{title}</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        pagination={false}
        modules={[FreeMode]}
      >
        <SwiperSlide>
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Products;
