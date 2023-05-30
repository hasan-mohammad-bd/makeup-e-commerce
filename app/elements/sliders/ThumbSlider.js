'use client'

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";

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

            <div className="slider">

                <div className="thumb-slider">
                    <Swiper
                        onSwiper={setImagesNavSlider}
                        direction="vertical"
                        slidesPerView={5}
                        breakpoints={{
                        0: {
                            direction: "horizontal"
                        },
                        768: {
                            direction: "vertical"
                        }
                        }}
                        modules={[Thumbs]}
                    >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slider-image cursor-pointer">
                                        <Image src={`/assets/images/shop/product-thumb-${index + 1}.png`} alt="" width={64} height={64} className="border-2 border-transparent rounded-lg mb-3" />
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>

                <div className="preview-slider grid mx-4">
                    <Swiper
                        thumbs={{ swiper: imagesNavSlider }}
                        direction="horizontal"
                        slidesPerView={1}
                        breakpoints={{
                            0: {
                            direction: "horizontal"
                            },
                            768: {
                            direction: "horizontal"
                            }
                        }}
                        modules={[Thumbs]}
                    >
                        {slides.map((slide, index) => {
                            return (
                            <SwiperSlide key={index}>
                                <div className="slider-image">
                                    <Image src={`/assets/images/shop/product-preview.png`} alt="" width={0} height={0} sizes="100vw" className="w-full"/>
                                </div>
                            </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ThumbSlider;
