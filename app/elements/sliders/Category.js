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
                spaceBetween={20}
                loop={false}
                pagination={true}
                // navigation={{
                //     prevEl: ".custom_prev_cat",
                //     nextEl: ".custom_next_cat",
                // }}
            >
                {category?.map((category, i) => (
                    <SwiperSlide key={i}>
                        <Link href={`/`} className="category-img flex justify-center items-center w-[164px] h-[164px] bg-white rounded-full">
                            <Image src={`/assets/images/category/${category.image}`} alt={category.name} width={116} height={78}/>
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

export default Brands;
