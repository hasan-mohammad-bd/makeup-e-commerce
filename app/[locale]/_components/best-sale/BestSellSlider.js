"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "@/components/cards/ProductCard";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const BestSellSlider = ({ bestProducts, translations }) => {
	return (
		<>
			<Swiper
				modules={[Navigation]}
				slidesPerView={5}
				spaceBetween={24}
				loop={false}
				navigation={{
					prevEl: ".custom_prev_b",
					nextEl: ".custom_next_b",
				}}
			>
				{bestProducts?.map((product, i) => (
					<SwiperSlide key={i}>
						<ProductCard
							product={product}
							isBestSale={true}
							translations={translations}
						/>
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
