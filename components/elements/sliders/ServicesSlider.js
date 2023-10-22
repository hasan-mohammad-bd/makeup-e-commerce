"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const ServicesSlider = () => {
	return (
		<>
			<Swiper
				// modules={[Navigation]}
				slidesPerView={4}
				spaceBetween={20}
				loop={false}
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
						spaceBetween: 150,
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
							<span className="text-primary">৭ দিনের মধ্যে</span> বিনামূল্যে
							পরিবর্তনযোগ্য
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
							ঢাকার মধ্যে{" "}
							<span className="text-primary">ফ্রি হোম ডেলিভারি</span>
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
							<span className="text-primary">নিরাপদে পেমেন্ট</span> করার সহজ
							মাধ্যম
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
							<span className="text-primary">সর্বাক্ষনিক</span> ও দ্রুত গ্রাহক
							সেবা{" "}
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default ServicesSlider;
