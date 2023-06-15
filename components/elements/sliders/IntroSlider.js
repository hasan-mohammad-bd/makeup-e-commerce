"use client";

import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// ** Import Iocns
import { HiChevronRight } from "react-icons/hi2";

const IntroSlider = ({ sliders }) => {

  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        loop={false}
        pagination={{ clickable: true }}
        className="hero-slider"
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide?.id} className="mt-6 mb-8">
            <div className="single-hero-slider bg-black rounded-2xl px-12 py-10">
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-7">
                  <div className="hero-slider-content">
                    <p className="text-lg/[24px] font-normal font-body text-white mb-4">
                      {slide?.title}
                    </p>
                    <h1 className="text-5xl font-bold font-title text-white">
                      {slide?.title_2}
                    </h1>
                    <h2 className="text-4xl/[48px] font-bold font-title text-white my-5">
                      {slide?.text}
                    </h2>
                    <Link
                      href={slide?.url}
                      className="inline-block w-44 h-12 text-white bg-primary rounded-lg text-center leading-[48px]"
                    >
                      সবগুলো দেখুন{" "}
                      <HiChevronRight
                        size={20}
                        color="#fff"
                        className="inline align-sub"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="single-slider-img text-right">
                    <Image
                      className="animated slider-1-1"
                      src="/assets/images/banner/banner-1.png"
                      alt="Watch"
                      width={472}
                      height={252}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default IntroSlider;
