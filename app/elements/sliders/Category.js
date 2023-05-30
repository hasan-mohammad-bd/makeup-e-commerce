'use client'

import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const Brands = ({category}) => {

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
                {category?.map((category, i) => (
                    <SwiperSlide key={i}>
                        <Link href={`/products/${category.title}`} className="category-img flex justify-center items-center w-[164px] h-[164px] bg-white rounded-full">
                            <Image src={`/assets/images/category/${category.image}`} alt={category.title} width={116} height={78} style={{ width: 'auto', height: 'auto' }}/>
                        </Link>
                        <Link href={`/products/${category.title}`} className="block text-lg text-white text-center mt-4">{category.title}</Link>
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

export default Brands;
