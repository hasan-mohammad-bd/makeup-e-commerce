"use client";

import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import noImage from "@/public/assets/images/no-image.png";
import { getChunksList } from "@/utils/formatList";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const CategorySlider = ({ categoryList }) => {
	const matches = useMediaQuery("(max-width: 768px)");
	const categoriesChunks = getChunksList(categoryList, matches ? 3 : 1);
	return (
		<>
			<Swiper
				modules={[Pagination]}
				spaceBetween={50}
				loop={false}
				pagination={{ clickable: true }}
				breakpoints={{
					0: {
						slidesPerView: 2,
						pagination: false,
						navigation: false,
					},
					768: {
						slidesPerView: 6,
						pagination: { enabled: true },
						navigation: true,
					},
				}}
			>
				{categoriesChunks?.map((categories, i) => (
					<SwiperSlide key={i}>
						{categories?.map((category) => (
							<div
								key={category?.id}
								className="mb-5 lg:mb-0 w-[116px] lg:w-[164px]"
							>
								<Link
									href={`/categories/${category.slug}`}
									className="category-img flex justify-center items-center h-[116px] lg:h-[164px] bg-white rounded-full"
								>
									<Image
										src={category?.icon || noImage}
										alt={category.category_name}
										width={116}
										height={78}
										className="w-[92px] lg:w-[116px] h-[62px] lg:h-[78px] object-contain hover:scale-110"
									/>
								</Link>
								<Link
									href={`/categories/${category.slug}`}
									className="block text-sm lg:text-lg text-white text-center mt-4"
								>
									{category.category_name}
								</Link>
							</div>
						))}
					</SwiperSlide>
				))}
				{/* {categories?.map((category, i) => (
					<SwiperSlide key={i}>
						<Link
							href={`/categories/${category.slug}`}
							className="category-img flex justify-center items-center w-[164px] h-[164px] bg-white rounded-full"
						>
							<Image
								src={category?.icon || noImage}
								alt={category.category_name}
								width={116}
								height={78}
								//   style={{ width: "auto", height: "auto" }}
								className="w-[116px] h-[78px] object-contain hover:scale-110"
							/>
						</Link>
						<Link
							href={`/categories/${category.slug}`}
							className="block text-lg text-white text-center mt-4"
						>
							{category.category_name}
						</Link>
					</SwiperSlide>
				))} */}
			</Swiper>
		</>
	);
};

export default CategorySlider;
