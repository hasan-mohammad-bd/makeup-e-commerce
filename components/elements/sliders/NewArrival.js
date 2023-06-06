"use client";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleProduct from "../../../components/SingleProductList";

SwiperCore.use([Navigation]);

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const NewArrival = ({ newProducts, chunk_size }) => {
  const productChunks = (newProducts, chunk_size = 2) =>
    new Array(Math.ceil(newProducts.length / chunk_size))
      .fill()
      .map((_, index) => index * chunk_size)
      .map((begin) => newProducts.slice(begin, begin + chunk_size));

  const newProductsArray = productChunks(newProducts, chunk_size);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        loop={false}
        navigation={{
          prevEl: ".custom_prev_n",
          nextEl: ".custom_next_n",
        }}
      >
        {newProductsArray?.map((product, i) => (
          <SwiperSlide key={i}>
            {product.map((product, i) => (
              <SingleProduct product={product} key={i} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-arrow">
        <span className="slider-btn slider-prev slick-arrow custom_prev_n">
          <TfiAngleLeft />
        </span>
        <span className="slider-btn slider-next slick-arrow custom_next_n">
          <TfiAngleRight />
        </span>
      </div>
    </>
  );
};

export default NewArrival;
