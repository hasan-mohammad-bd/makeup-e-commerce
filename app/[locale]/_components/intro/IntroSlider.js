"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

// ** Import Iocns
import { HiChevronRight } from "react-icons/hi2";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import DynamicBackgroundComponent from "@/components/utility/BackgroundImage";

const IntroSlider = ({ sliders }) => {
  // console.log(sliders);

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        effect={"fade"}
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
          <SwiperSlide key={slide?.id} className="">
            <DynamicBackgroundComponent
              imageUrl={slide?.image}
              height={"50vh"}
              mobileHeight={"40vh"}
            >
              <div
                className={`flex ${
                  index % 2 === 0 && "flex-row-reverse !text-center"
                } justify-around w-full container items-center h-full`}
              >
                <>
                  <div className="w-1/2">
                    <div className="hero-slider-content ">
                      <p className="text-lg/3 lg:text-5xl font-medium text-black mb-2 lg:mb-4">
                        {slide?.title}
                      </p>
                      <h1 className="text-lg/3 lg:text-5xl font-medium text-black">
                        {slide?.title_2}
                      </h1>
                      <h3 className="lg:bg-transparent px-2 py-1 lg:p-0 text-sm lg:text-xl/[48px] w-3/4 mx-auto text-slate-600 font-normal my-2">
                        {slide?.text}
                      </h3>
                      <Link
                        href={slide?.url}
                        className="inline-block w-fit lg:px-4 text-sm lg:text-lg/[48px] text-white p-2 md:p-0 bg-primary text-center"
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
                  <div className="w-1/2">
                    <div className="single-slider-img flex justify-end">
                      <p className="text-black"></p>
                      {/*                       <Image
                        className="animated slider-1-1 object-cover h-[122px] lg:h-[252px] w-[140px] lg:w-[472px]"
                        src={
                          slide?.image || `/assets/images/banner/banner-1.png`
                        }
                        alt="Watch"
                        width={472}
                        height={252}
                      /> */}
                    </div>
                  </div>
                </>
              </div>
            </DynamicBackgroundComponent>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-arrow hidden lg:block">
        <span className="slider-btn slider-prev slick-arrow intro_prev_b !bg-primary ml-2">
          <TfiAngleLeft className=" text-white !font-bold" />
        </span>
        <span className="slider-btn slider-next slick-arrow intro_prev_b !bg-primary mr-2">
          <TfiAngleRight className=" text-white !font-bold" />
        </span>
      </div>
    </div>
  );
};

export default IntroSlider;
