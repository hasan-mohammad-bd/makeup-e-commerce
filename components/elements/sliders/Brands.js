"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import noImage from "@/public/assets/images/no-image.png";

// ** Import Icons
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const Brands = ({ brands }) => {
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
						<div className="barnd-img inline-block border-slate-300 rounded-xl border p-2">
							<div className="h-[96px] lg:h-[118px] w-[96px] lg:w-[118px] flex items-center justify-center">
								<Image
									src={brand.brand_image || noImage}
									alt={brand.title}
									width={118}
									height={118}
									className="w-full object-contain"
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className="slider-arrow hidden lg:block">
				<span className="slider-btn slider-prev slick-arrow custom_prev_br -mt-5 -ml-5">
					<TfiAngleLeft />
				</span>
				<span className="slider-btn slider-next slick-arrow custom_next_br -mt-5 -mr-5">
					<TfiAngleRight />
				</span>
			</div>
		</>
	);
};

export default Brands;
