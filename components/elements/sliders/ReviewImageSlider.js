import Image from "next/image";
import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [1, 2, 3, 4, 5];

export default function ReviewImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="preview-slider grid mx-4 bg-slate-900 rounded-md">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          direction="horizontal"
          slidesPerView={1}
          breakpoints={{
            0: {
              direction: "horizontal",
            },
            768: {
              direction: "horizontal",
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-[31.25rem] w-auto flex justify-center items-center">
                <Image
                  src={`https://picsum.photos/1920/1084`}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="thumb-slider my-6 px-2">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          // freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          direction="horizontal"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer flex justify-start items-center">
                <Image
                  src={`/assets/images/shop/product-${index + 1}.png`}
                  alt=""
                  width={64}
                  height={64}
                  className="border border-transparent rounded-lg "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
