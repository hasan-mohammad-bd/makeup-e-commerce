"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SingleProduct from "@/components/products/SingleProduct";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const BestSellSlider = ({ bestProducts }) => {
	return (
		<>
			<Swiper
				modules={[Navigation]}
				slidesPerView={5}
				spaceBetween={20}
				loop={false}
				navigation={{
					prevEl: ".custom_prev_b",
					nextEl: ".custom_next_b",
				}}
				breakpoints={{
					0: {
						slidesPerView: 2,
						// spaceBetween: 260,
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
			>
				{bestProducts?.map((product, i) => (
					<SwiperSlide key={i}>
						<SingleProduct product={product} isBestSale={true} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="slider-arrow hidden lg:block">
				<span className="slider-btn slider-prev slick-arrow custom_prev_b">
					<TfiAngleLeft />
				</span>
				<span className="slider-btn slider-next slick-arrow custom_next_b">
					<TfiAngleRight />
				</span>
			</div>
		</>
	);
};

export default BestSellSlider;
