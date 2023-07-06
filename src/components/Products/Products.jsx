import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Products = () => {
  return (
    <div className="px-5">
      <h2 className="mb-5 text-4xl font-bold md:px-20">Categorias</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        pagination={false}
        modules={[FreeMode]}
      >
        <SwiperSlide>
          <div className="mb-2 rounded-xl bg-dark-200">
            <img
              src="/categories/video.webp"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="px-2">
            <h3 className="text-2xl font-bold">Rtx 3080</h3>
            <p className="mb-3 text-lg">$699.900</p>
            <a
              href="#"
              className="underline"
            >
              Detalles
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Products;
