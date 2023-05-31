'use client'

import Image from "next/image";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Navigation]);

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const ProductReview = ({products}) => {

    return (
        <>
            <Swiper
                modules={[Navigation]}
                slidesPerView={3.5}
                spaceBetween={16}
                loop={false}
                navigation={{
                    prevEl: ".custom_prev_pr",
                    nextEl: ".custom_next_pr",
                }}
            >
                <SwiperSlide>
                    <div className="single-slider">
                        <Image
                            src="/assets/images/shop/review-img1.jpg"
                            alt="Product"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="animated w-auto rounded-lg"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="single-slider">
                        <Image
                            src="/assets/images/shop/review-img2.jpg"
                            alt="Product"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="animated w-auto rounded-lg"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="single-slider">
                        <Image
                            src="/assets/images/shop/review-img3.jpg"
                            alt="Product"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="animated w-auto rounded-lg"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="single-slider">
                        <Image
                            src="/assets/images/shop/review-img4.jpg"
                            alt="Product"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="animated w-auto rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                
            </Swiper>

            <div className="slider-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_pr">
                    <TfiAngleLeft/>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_pr">
                    <TfiAngleRight/>
                </span>
            </div>
        </>
    );
};

export default ProductReview;
