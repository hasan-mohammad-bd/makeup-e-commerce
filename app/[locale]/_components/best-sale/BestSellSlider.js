"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "@/components/cards/ProductCard";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const BestSellSlider = ({ bestProducts, translations }) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={24}
        loop={false}
        breakpoints={{
					0: {
						slidesPerView: 2,
					},
					540: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 5,
					},
				}}
        navigation={{
          prevEl: ".custom_prev_b",
          nextEl: ".custom_next_b",
        }}
      >
        {bestProducts?.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductCard
              product={product}
              isBestSale={true}
              translations={translations}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-arrow hidden lg:block">
        <span className="slider-btn slider-prev slick-arrow custom_prev_b !bg-primary">
          <TfiAngleLeft className="text-white" />
        </span>
        <span className="slider-btn slider-next slick-arrow custom_next_b !bg-primary">
          <TfiAngleRight className="text-white" />
        </span>
      </div>
    </>
  );
};

export default BestSellSlider;
