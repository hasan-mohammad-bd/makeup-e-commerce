'use client'

import Link from "next/link";
import Image from "next/image";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


SwiperCore.use([Navigation]);

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const Brands = ({brands}) => {

    return (
        <>
            <Swiper
                modules={[Navigation]}
                slidesPerView={8}
                spaceBetween={20}
                loop={false}
                navigation={{
                    prevEl: ".custom_prev_br",
                    nextEl: ".custom_next_br",
                }}
            >
                {brands?.map((brand, i) => (
                    <SwiperSlide key={i}>
                        <Link href={`/`} className="barnd-img border border-slate-300 rounded-xl p-2">
                            <Image src={`/assets/images/brands/${brand.image}`} alt={brand.name} width={118} height={118}/>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="slider-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_br">
                    <TfiAngleLeft/>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_br">
                    <TfiAngleRight/>
                </span>
            </div>
        </>
    );
};

export default Brands;
