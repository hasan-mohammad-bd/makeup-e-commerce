"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SingleProduct from "@/components/products/SingleProduct";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const FlashSaleSlider = ({ saleProducts }) => {
	return (
		<>
			<Swiper
				modules={[Navigation]}
				slidesPerView={5}
				spaceBetween={20}
				loop={false}
				navigation={{
					prevEl: ".custom_prev_f",
					nextEl: ".custom_next_f",
				}}
				breakpoints={{
					0: {
						slidesPerView: 2,
						spaceBetween: 60,
						navigation: false,
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				}}
			>
				{saleProducts?.map((product, i) => (
					<SwiperSlide key={i}>
						<SingleProduct product={product} isFlashSale />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="slider-arrow hidden lg:block">
				<span className="slider-btn slider-prev slick-arrow custom_prev_f">
					<TfiAngleLeft />
				</span>
				<span className="slider-btn slider-next slick-arrow custom_next_f">
					<TfiAngleRight />
				</span>
			</div>
		</>
	);
};

export default FlashSaleSlider;
