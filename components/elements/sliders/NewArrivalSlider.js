"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import ProductVerticalCard from "@/components/products/ProductVerticalCard";

const NewArrivalSlider = ({ newProducts, chunk_size }) => {
	const productChunks = (newProducts, chunk_size = 2) =>
		new Array(Math.ceil(newProducts.length / chunk_size))
			.fill()
			.map((_, index) => index * chunk_size)
			.map((begin) => newProducts.slice(begin, begin + chunk_size));

	const newProductsArray = productChunks(newProducts, chunk_size);

	return (
		<>
			<Swiper
				modules={[Navigation]}
				slidesPerView={3}
				spaceBetween={20}
				loop={false}
				navigation={{
					prevEl: ".custom_prev_n",
					nextEl: ".custom_next_n",
				}}
				breakpoints={{
					0: {
						slidesPerView: 2,
						spaceBetween: 260,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
			>
				{newProductsArray?.map((product, i) => (
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
