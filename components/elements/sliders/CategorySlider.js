"use client";

import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import noImage from "@/public/assets/images/no-image.png";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import ContentLoader from "react-content-loader";

const CategorySlider = ({ categories }) => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={6}
        spaceBetween={50}
        loop={false}
        pagination={{ clickable: true }}
        // navigation={{
        //     prevEl: ".custom_prev_cat",
        //     nextEl: ".custom_next_cat",
        // }}
      >
        {categories?.map((category, i) => (
          <SwiperSlide key={i}>
            <Link
              href={`/categories/${category.slug}`}
              className="category-img flex justify-center items-center w-[164px] h-[164px] bg-white rounded-full"
            >
              <Image
                src={category?.icon || noImage}
                alt={category.category_name}
                width={116}
                height={78}
                //   style={{ width: "auto", height: "auto" }}
                className="w-[116px] h-[78px] object-contain hover:scale-110"
              />
            </Link>
            <Link
              href={`/categories/${category.slug}`}
              className="block text-lg text-white text-center mt-4"
            >
              {category.category_name}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="slider-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_cat">
                    <TfiAngleLeft/>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_cat">
                    <TfiAngleRight/>
                </span>
            </div> */}
    </>
  );
};

export default CategorySlider;
