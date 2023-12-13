"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "@/components/cards/ProductCard";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const FlashSaleSlider = ({ saleProducts, translations }) => {
	return (
		<>
			<Swiper
				modules={[Navigation]}
				slidesPerView={5}
				spaceBetween={12}
				navigation={{
					prevEl: ".custom_prev_f",
					nextEl: ".custom_next_f",
				}}
			>
				{saleProducts?.map((product, i) => (
					<SwiperSlide key={i}>
						<ProductCard
							product={product}
							isFlashSale
							translations={translations}
						/>
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
