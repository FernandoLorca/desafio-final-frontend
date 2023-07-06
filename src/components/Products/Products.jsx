import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Product from './Product';
import TitleTwo from '../Titles.jsx/TitleTwo';

const Products = ({ title }) => {
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
      <div className="hidden px-20 lg:block">
        <h2 className="mb-5 text-4xl font-bold">{title}</h2>
        <div className="flex gap-5">
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
          <Product
            img="/categories/video.webp"
            productTitle="Nvidia RTX 3080"
            price="$699.900"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
