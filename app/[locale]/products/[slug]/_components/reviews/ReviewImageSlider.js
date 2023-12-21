import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ReviewImageSlider({ images }) {
	// console.log(review);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="w-full lg:w-[531px]">
			<div className="h-[20.25rem] lg:h-[31.25rem] preview-slider bg-slate-900 rounded-md">
				<Swiper
					style={{
						"--swiper-navigation-color": "#fff",
						"--swiper-pagination-color": "#fff",
						"--swiper-navigation-size": "24px",
					}}
					loop={true}
					spaceBetween={10}
					navigation={true}
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
					}}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper2"
					direction="horizontal"
					slidesPerView={1}
				>
					{images.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="w-full h-full flex justify-center items-center ">
								<Image
									src={slide.image}
									alt="slide"
									width={400}
									height={500}
									className="h-[20.25rem] lg:h-[31.25rem] w-[15rem] lg:w-[25rem]  object-contain"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="thumb-slider mt-6 hidden lg:block">
				<Swiper
					onSwiper={setThumbsSwiper}
					loop={true}
					spaceBetween={12}
					slidesPerView={5}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper"
					direction="horizontal"
				>
					{images.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className=" h-[74px] lg:h-[90px] w-[74px] lg:w-[90px] box-content">
								<Image
									src={slide.image}
									alt="thumb-slide"
									width={90}
									height={90}
									className="w-full h-full object-contain border border-transparent rounded-lg cursor-pointer bg-slate-100"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
