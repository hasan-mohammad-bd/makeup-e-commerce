"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandCard from "./BrandCard";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const BrandsSlider = ({ brands }) => {
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
				breakpoints={{
					0: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 8,
					},
				}}
			>
				{brands?.map((brand, i) => (
					<SwiperSlide key={i}>
						<BrandCard brand={brand} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="slider-arrow hidden lg:block">
				<span className="slider-btn slider-prev slick-arrow custom_prev_br">
					<TfiAngleLeft />
				</span>
				<span className="slider-btn slider-next slick-arrow custom_next_br">
					<TfiAngleRight />
				</span>
			</div>
		</>
	);
};

export default BrandsSlider;
