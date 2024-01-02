"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { forwardRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Pagination } from "swiper/modules";
import useWishList from "@/hooks/useWishList";
import noImage from "@/public/assets/images/no-image.png";

// ** Import Icon
import { HiOutlineHeart, HiPlayCircle } from "react-icons/hi2";
import { startVideoPlayer } from "@/store/slices/commonSlice";

const ProductViewSlider = forwardRef(({ product, selectedColor }, ref) => {
	const dispatch = useDispatch();
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const { handleAddToWishlist } = useWishList(); //custom hook for reusing

	//setting default image if no image is provided
	let slides = product?.photos?.length
		? product?.photos
		: [
				{
					image: noImage,
				},
		  ];

	//filtering slides based on selected color
	if (selectedColor) {
		const filteredSlides = slides.filter(
			(slide) => slide.color_name === selectedColor
		);
		filteredSlides.length && (slides = filteredSlides);
	}

	return (
		<>
			<div className="lg:grid grid-cols-[64px_1fr] lg:gap-4 items-start">
				<div className="thumb-slider hidden lg:block">
					<Swiper
						onSwiper={setThumbsSwiper}
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
						modules={[Thumbs]}
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
						className="product-preview-slider [&_.swiper-wrapper]:pb-3 lg:[&_.swiper-wrapper]:pb-0 lg:rounded-xl lg:border border-slate-300"
						thumbs={{
							swiper:
								thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
						}}
						direction="horizontal"
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
						modules={[Thumbs, Pagination]}
					>
						{slides.map((slide, index) => (
							<SwiperSlide key={index} className="!h-[100vw] md:!h-[32.75rem]">
								<div className="slider-imag h-full">
									<Image
										src={slide?.image}
										alt=""
										width={524}
										height={524}
										className="object-contain h-full"
									/>
								</div>
								{slide.video_link && (
									<button
										onClick={() =>
											dispatch(
												startVideoPlayer({
													url: slide?.video_link,
													playing: true,
													title: product.product_name,
													// className: "md:h-[480px] md:w-[854px]",
												})
											)
										}
										className="z-10 vid-icon absolute inline-flex justify-center items-center top-1/2 left-1/2 w-[72px] h-[72px] rounded-full drop-shadow-[0_0px_60px_rgba(0,0,0,0.16)] translate-x-[-50%] translate-y-[-50%]"
									>
										<HiPlayCircle
											size={60}
											className="text-white hover:text-primary"
										/>
									</button>
								)}
							</SwiperSlide>
						))}
					</Swiper>
					<div className="product-action top-2 md:top-4 right-2 lg:right-4 absolute z-10 ">
						<button
							aria-label="Add To Wishlist"
							className="action-btn inline-flex justify-center items-center w-11 h-11 bg-white rounded-lg hover:text-primary"
							onClick={(e) => handleAddToWishlist(product.id)}
						>
							<HiOutlineHeart size={18} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
});

ProductViewSlider.displayName = "ProductViewSlider";

export default ProductViewSlider;
