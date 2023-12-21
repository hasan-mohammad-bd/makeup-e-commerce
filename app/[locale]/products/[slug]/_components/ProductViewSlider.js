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

			<div className="lg:w-[32.75rem] preview-slider grid relative">
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
						<SwiperSlide key={index} className="!h-[100vw] md:!h-[32.75rem]">
							<div className="slider-imag h-full lg:rounded-xl lg:border border-slate-300">
								<Image
									src={slide?.image}
									alt=""
									width={524}
									height={524}
									className="object-contain h-full"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="product-action top-2 md:top-4 right-2 lg:right-4 absolute z-10 ">
					<button
						aria-label="Add To Wishlist"
						className="action-btn inline-flex justify-center items-center w-11 h-11 bg-white border border-slate-300 hover:border-primary rounded-lg hover:text-primary"
						onClick={(e) => handleAddToWishlist(product.id)}
					>
						<HiOutlineHeart size={18} />
					</button>
				</div>
			</div>
		</div>
	);
});

ProductViewSlider.displayName = "ProductViewSlider";

export default ProductViewSlider;
