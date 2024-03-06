"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

const ServicesSlider = () => {
	const { translations } = useSelector((state) => state.common);
	return (
		<>
			<Swiper
				// modules={[Navigation]}
				slidesPerView={4}
				spaceBetween={20}
				loop={true}
				breakpoints={{
					0: {
						slidesPerView: 2,
						spaceBetween: 150,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 150,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 120,
					},
				}}
			>
				<SwiperSlide>
					<div className="col-span-3 flex items-center gap-4 w-[210px]">
						<Image
							src="/assets/images/icons/parcel.png"
							alt="Replacement"
							width={48}
							height={48}
						/>
						<p className="text-base/[22px] font-semibold font-title">
							{translations["free-exchange"] ||
								"7 days replacement policy"}
						</p>
					</div>{" "}
				</SwiperSlide>
				<SwiperSlide>
					<div className="single-feature col-span-3 flex items-center gap-4 w-[210px]">
						<Image
							src="/assets/images/icons/delivery.png"
							alt="Replacement"
							width={48}
							height={48}
						/>
						<p className="text-base/[22px] font-semibold font-title">
							{translations["free-delivery-offer"] ||
								"Free delivery in Dhaka"}
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="single-feature col-span-3 flex items-center gap-4 w-[220px]">
						<Image
							src="/assets/images/icons/pay.png"
							alt="Replacement"
							width={48}
							height={48}
						/>
						<p className="text-base/[22px] font-semibold font-title">
							{translations["easy-secure-payment"] ||
								"Easy and secure payment"}
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="single-feature col-span-3 flex items-center gap-4 w-[220px]">
						<Image
							src="/assets/images/icons/support.png"
							alt="Replacement"
							width={48}
							height={48}
						/>
						<p className="text-base/[22px] font-semibold font-title">
							{translations["fast-service"] ||
								"24/7 online customer support "}
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default ServicesSlider;
