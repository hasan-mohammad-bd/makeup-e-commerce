"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// ** Import Iocns
import { HiChevronRight } from "react-icons/hi2";

const IntroSlider = ({ sliders }) => {
	// console.log(sliders);

	return (
		<>
			<Swiper
				modules={[Pagination, Autoplay]}
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				pagination={{ clickable: true }}
				className="hero-slider"
				autoplay={{ delay: 3000 }}
				// height={"100%"}
			>
				{sliders.map((slide) => (
					<SwiperSlide
						key={slide?.id}
						className="bg-black rounded-2xl p-4 lg:p-12"
					>
						<div className="single-hero-slider">
							<div className="grid grid-cols-12 items-center justify-between">
								<div className="col-span-7">
									<div className="hero-slider-content">
										<p className="text-xs lg:text-lg/[24px] font-normal font-body text-white mb-2 lg:mb-4">
											{slide?.title}
										</p>
										<h1 className="text-lg/5 lg:text-5xl font-bold font-title text-white">
											{slide?.title_2}
										</h1>
										<h3 className="w-fit rounded-full bg-primary lg:bg-transparent px-2 py-1 lg:p-0 text-sm lg:text-4xl/[48px] font-bold font-title text-white my-5">
											{slide?.text}
										</h3>
										<Link
											href={slide?.url}
											className="inline-block w-fit lg:px-4 text-sm lg:text-lg/[48px] text-white lg:bg-primary rounded-lg text-center"
										>
											সবগুলো দেখুন{" "}
											<HiChevronRight
												size={20}
												color="#fff"
												className="inline align-sub"
											/>
										</Link>
									</div>
								</div>
								<div className="col-span-5">
									<div className="single-slider-img flex justify-end">
										<Image
											className="animated slider-1-1 object-cover h-[122px] lg:h-[252px] w-[140px] lg:w-[472px]"
											src={slide?.image || `/assets/images/banner/banner-1.png`}
											alt="Watch"
											width={472}
											height={252}
										/>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default IntroSlider;
