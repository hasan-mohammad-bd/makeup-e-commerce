'use client'

import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const ProductBanner = () => {
    return (
        <>
            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={false}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: ".custom_prev_pb",
                    nextEl: ".custom_next_pb",
                }}
                className="product-banner-slider"
            >
                <SwiperSlide>
                    <div className="single-slider">
                        <Image
                            src="/assets/images/shop/pbanner.jpg"
                            alt="Product"
                            width={0}
                            height={246}
                            sizes="100vw"
                            className="animated w-auto rounded-lg"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="single-slider">
                        <Image
                            src="/assets/images/shop/pbanner.jpg"
                            alt="Product"
                            width={0}
                            height={246}
                            sizes="100vw"
                            className="animated w-auto rounded-lg"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="single-slider">
                        <Image
                            src="/assets/images/shop/pbanner.jpg"
                            alt="Product"
                            width={0}
                            height={246}
                            sizes="100vw"
                            className="animated w-auto rounded-lg"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_pb">
                    <TfiAngleLeft/>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_pb">
                    <TfiAngleRight/>
                </span>
            </div>

        </>
    );
};

export default ProductBanner;
