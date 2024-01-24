"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

// ** Import Iocns
import { HiChevronRight } from "react-icons/hi2";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const IntroSlider = ({ sliders }) => {
  // console.log(sliders);

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={{
          prevEl: ".intro_prev_b",
          nextEl: ".intro_next_b",
        }}
        // pagination={{ clickable: true }}
        // className="intro-slider [&_.swiper-wrapper]:pb-3"
        autoplay={{ delay: 3000 }}
        // effect="fade"
        speed={2000}
      >
        {sliders.map((slide, index) => (
          <SwiperSlide
            key={slide?.id}
            className=" bg-[#DCDDDF] !h-[200px] md:!h-[654px] p-4 lg:p-12"
          >
            <div
              className={`flex ${
                index % 2 === 0 && "flex-row-reverse !text-center"
              } justify-between container items-center h-full`}
            >
              <>
                <div className="">
                  <div className="hero-slider-content">
                    <p className="text-lg/3 lg:text-5xl font-medium text-black mb-2 lg:mb-4">
                      {slide?.title}
                    </p>
                    <h1 className="text-lg/3 lg:text-5xl font-medium text-black">
                      {slide?.title_2}
                    </h1>
                    <h3 className="w-full rounded-full bg-primary lg:bg-transparent px-2 py-1 lg:p-0 text-sm lg:text-xl/[48px] text-slate-600 font-normal my-5">
                      {slide?.text}
                    </h3>
                    <Link
                      href={slide?.url}
                      className="inline-block w-fit lg:px-4 text-sm lg:text-lg/[48px] text-white lg:bg-primary text-center"
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
                <div className="">
                  <div className="single-slider-img flex justify-end">
                    <p className="text-black"></p>
                    <Image
                      className="animated slider-1-1 object-cover h-[122px] lg:h-[252px] w-[140px] lg:w-[472px]"
                      src={slide?.image || `/assets/images/banner/banner-1.png`}
                      alt="Watch"
                      width={472}
                      height={252}
                    />
                  </div>
                </div>
              </>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-arrow hidden lg:block">
        <span className="slider-btn slider-prev slick-arrow intro_prev_b">
          <TfiAngleLeft />
        </span>
        <span className="slider-btn slider-next slick-arrow intro_next_b">
          <TfiAngleRight />
        </span>
      </div>
    </>
  );
};

export default IntroSlider;
