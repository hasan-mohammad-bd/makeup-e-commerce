"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAddToWishListMutation } from "@/store/api/wishListAPI";
import noImage from "@/public/assets/images/no-image.png";

// ** Import Icon
import { HiOutlineHeart, HiPlayCircle } from "react-icons/hi2";

const ProductViewSlider = ({ product }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const { user } = useSelector((state) => state.auth);
	const [addToWishlist] = useAddToWishListMutation();

	const handleWishlist = async (productId) => {
		if (!user) {
			toast.error("You're not logged in");
			return;
		}
		try {
			await addToWishlist({ product_id: productId });
			toast.success("Product added to Wishlist!");
		} catch (error) {
			toast.error("Failed to add to wishlist");
		}
	};

	//setting default image if no image is provided
	const photos = product?.photos?.length ? product?.photos : [noImage];

	return (
		<div className="lg:grid grid-cols-[64px_1fr] items-start">
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
					{photos.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="slider-image cursor-pointer">
								<Image
									src={slide}
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

			<div className="h-[20.25rem] lg:h-[32.75rem] lg:w-[32.75rem] preview-slider lg:mx-4 grid border">
				<Swiper
					className="product-preview-slider"
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
					{photos.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="slider-imag relative">
								<Image
									src={slide}
									alt=""
									width={524}
									height={524}
									// sizes="100vw"
									className="object-cover lg:object-contain lg:rounded-lg"
								/>
								<div className="product-action absolute top-4 right-4">
									<button
										aria-label="Add To Wishlist"
										className="action-btn inline-flex justify-center items-center w-11 h-11 bg-white border-slate-300 rounded-lg hover:bg-primary hover:text-white"
										onClick={(e) => handleWishlist(product.id)}
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
};

export default ProductViewSlider;
