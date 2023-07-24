"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper";

// ** Import Icon
import { HiOutlineHeart, HiPlayCircle } from "react-icons/hi2";

const ThumbSlider = ({ product }) => {
  const [imagesNavSlider, setImagesNavSlider] = useState(null);

  return (
    <>
      <div className="slider">
        <div className="thumb-slider">
          <Swiper
            onSwiper={setImagesNavSlider}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            direction="vertical"
            slidesPerView={"auto"}
            breakpoints={{
              0: {
                direction: "horizontal",
              },
              768: {
                direction: "vertical",
              },
            }}
            modules={[Thumbs, Autoplay]}
          >
            {product.photos.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slider-image cursor-pointer">
                  <Image
                    src={slide}
                    alt=""
                    width={64}
                    height={64}
                    className="border border-transparent h-16 w-16 cursor-pointer rounded-lg mb-3"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="preview-slider grid mx-4">
          <Swiper
            thumbs={{ swiper: imagesNavSlider }}
            direction="horizontal"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            breakpoints={{
              0: {
                direction: "horizontal",
              },
              768: {
                direction: "horizontal",
              },
            }}
            modules={[Thumbs, Autoplay]}
          >
            {product.photos.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slider-imag relative">
                  <Image
                    src={slide}
                    alt=""
                    width={524}
                    height={524}
                    // sizes="100vw"
                    className="h-[32.75rem] w-[32.75rem] object-contain rounded-lg"
                  />
                  <div className="product-action absolute top-4 right-4">
                    <Link
                      href={""}
                      aria-label="Add To Wishlist"
                      className="action-btn inline-flex justify-center items-center w-11 h-11 bg-white border-slate-300 rounded-lg hover:bg-primary hover:text-white"
                      onClick={(e) => handleWishlist(product)}
                    >
                      <HiOutlineHeart size={18} />
                    </Link>
                  </div>
                  {true && (
                    <Link
                      href="https://www.youtube.com/"
                      target="_blank"
                      className="vid-icon absolute inline-flex justify-center items-center top-1/2 left-1/2 w-[72px] h-[72px] rounded-full drop-shadow-[0_0px_60px_rgba(0,0,0,0.16)] translate-x-[-50%] translate-y-[-50%]"
                    >
                      <HiPlayCircle
                        size={60}
                        className="text-white hover:text-primary"
                      />
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ThumbSlider;
