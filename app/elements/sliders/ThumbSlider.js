'use client'

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper";

const slides = [
    "https://picsum.photos/1920/1080",
    "https://picsum.photos/1920/1081",
    "https://picsum.photos/1920/1082",
    "https://picsum.photos/1920/1083",
    "https://picsum.photos/1920/1084"
];

const ThumbSlider = ({product}) => {

    const [imagesNavSlider, setImagesNavSlider] = useState(null);

    return (
        <>
            <section className="slider">
                <div className="slider-flex">
                    <div className="slider-col">
                        <div className="slider-prev">Prev</div>

                        <div className="slider-thumbs">
                        <Swiper
                            onSwiper={setImagesNavSlider}
                            direction="vertical"
                            spaceBetween={24}
                            slidesPerView={3}
                            navigation={{
                            nextEl: ".slider-next",
                            prevEl: ".slider-prev"
                            }}
                            className="swiper-container1"
                            breakpoints={{
                            0: {
                                direction: "horizontal"
                            },
                            768: {
                                direction: "vertical"
                            }
                            }}
                            modules={[Navigation, Thumbs]}
                        >
                            {slides.map((slide, index) => {
                            return (
                                <SwiperSlide key={index}>
                                <div className="slider-image">
                                    <Image src={`/assets/images/shop/product-thumb.png`} alt="" width={150} height={150} />
                                </div>
                                </SwiperSlide>
                            );
                            })}
                        </Swiper>
                        </div>

                        <div className="slider-next">Next</div>
                    </div>

                    <div className="slider-images">
                        <Swiper
                        thumbs={{ swiper: imagesNavSlider }}
                        direction="horizontal"
                        slidesPerView={1}
                        spaceBetween={32}
                        mousewheel={true}
                        navigation={{
                            nextEl: ".slider-next",
                            prevEl: ".slider-prev"
                        }}
                        breakpoints={{
                            0: {
                            direction: "horizontal"
                            },
                            768: {
                            direction: "horizontal"
                            }
                        }}
                        className="swiper-container2"
                        modules={[Navigation, Thumbs, Mousewheel]}
                        >
                        {slides.map((slide, index) => {
                            return (
                            <SwiperSlide key={index}>
                                <div className="slider-image">
                                    <Image src={`/assets/images/shop/product-preview.png`} alt="" width={524} height={524} />
                                </div>
                            </SwiperSlide>
                            );
                        })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ThumbSlider;
