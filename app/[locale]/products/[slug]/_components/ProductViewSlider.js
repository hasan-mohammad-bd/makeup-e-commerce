"use client";
import { forwardRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay, Pagination } from "swiper/modules";
import useWishList from "@/hooks/useWishList";
import noImage from "@/public/assets/images/no-image.png";

// ** Import Icon
import { HiOutlineHeart } from "react-icons/hi2";

const ProductViewSlider = forwardRef(({ product }, ref) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const { handleAddToWishlist } = useWishList(); //custom hook for reusing

	//setting default image if no image is provided
	const slides = product?.photos?.length
		? product?.photos
		: [
				{
					image: noImage,
				},
		  ];
	// console.log(slides);

	return (
		<div className="lg:grid grid-cols-[64px_1fr] lg:gap-4 items-start">
			<div className="thumb-slider hidden lg:block">
				<Swiper
					onSwiper={setThumbsSwiper}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					direction="vertical"
					slidesPerView={"auto"}
					breakpoints={{
						0: {
							direction: "horizontal",
						},
						768: {
							direction: "vertical",
						},
					}}
					modules={[Thumbs, Autoplay]}
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="slider-image cursor-pointer">
								<Image
									src={slide?.image}
									alt=""
									width={64}
									height={64}
									className="border border-transparent h-16 w-16 cursor-pointer rounded-lg mb-3"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="lg:w-[32.75rem] preview-slider grid">
				<Swiper
					ref={ref}
					className="product-preview-slider [&_.swiper-wrapper]:pb-3 lg:[&_.swiper-wrapper]:pb-0"
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
					}}
					direction="horizontal"
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					slidesPerView={1}
					pagination={{ clickable: true }}
					breakpoints={{
						0: {
							direction: "horizontal",
							pagination: { clickable: true },
						},
						768: {
							direction: "horizontal",
							pagination: false,
						},
					}}
					modules={[Thumbs, Autoplay, Pagination]}
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index} className="!h-[20.25rem] lg:!h-[32.75rem]">
							<div className="slider-imag relative h-full">
								<Image
									src={slide?.image}
									alt=""
									width={524}
									height={524}
									// sizes="100vw"
									className="object-cover object-top h-full lg:object-contain lg:rounded-xl"
								/>
								<div className="product-action absolute top-4 right-4">
									<button
										aria-label="Add To Wishlist"
										className="action-btn inline-flex justify-center items-center w-11 h-11 bg-white border-slate-300 rounded-lg hover:bg-primary hover:text-white"
										onClick={(e) => handleAddToWishlist(product.id)}
									>
										<HiOutlineHeart size={18} />
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
});

ProductViewSlider.displayName = "ProductViewSlider";

export default ProductViewSlider;
