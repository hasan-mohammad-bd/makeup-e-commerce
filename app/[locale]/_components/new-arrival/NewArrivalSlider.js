"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import ProductVerticalCard from "@/components/cards/ProductVerticalCard";

const NewArrivalSlider = ({ productsChunks }) => {
	return (
		<>
			<Swiper
				modules={[Navigation]}
				slidesPerView={3}
				spaceBetween={20}
				navigation={{
					prevEl: ".custom_prev_n",
					nextEl: ".custom_next_n",
				}}
			>
				{productsChunks?.map((product, i) => (
					<SwiperSlide key={i}>
						{product.map((product, i) => (
							<ProductVerticalCard product={product} key={i} />
						))}
					</SwiperSlide>
				))}
			</Swiper>

			<div className="slider-arrow hidden lg:block">
				<span className="slider-btn slider-prev slick-arrow custom_prev_n">
					<TfiAngleLeft />
				</span>
				<span className="slider-btn slider-next slick-arrow custom_next_n">
					<TfiAngleRight />
				</span>
			</div>
		</>
	);
};

export default NewArrivalSlider;
