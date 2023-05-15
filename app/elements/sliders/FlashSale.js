'use client'

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleProduct from "../../components/SingleProduct";

SwiperCore.use([Navigation]);

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const FlashSale = ({saleProducts}) => {

    return (
        <>
            <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={15}
                loop={false}
                navigation={{
                    prevEl: ".custom_prev_n",
                    nextEl: ".custom_next_n",
                }}
            >
                {saleProducts.map((product, i) => (
                    <SwiperSlide key={i}>
                        <SingleProduct product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="slider-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_n">
                    <TfiAngleLeft/>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_n">
                    <TfiAngleRight/>
                </span>
            </div>
        </>
    );
};

export default FlashSale;
