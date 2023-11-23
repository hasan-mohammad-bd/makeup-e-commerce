"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import ProductVerticalCard from "@/components/cards/ProductVerticalCard";
import { getChunksList } from "@/utils/format-list";

const NewArrivalSlider = ({ newProducts }) => {
	const productsChunks = getChunksList(newProducts, 2);

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
				breakpoints={{
					0: {
						slidesPerView: 2,
						spaceBetween: 260,
						loop: true,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
						loop: false,
					},
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
