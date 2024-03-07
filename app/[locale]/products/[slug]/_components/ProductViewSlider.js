"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import React, { forwardRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Pagination, Mousewheel } from "swiper/modules";
// import useWishList from "@/hooks/useWishList";
import noImage from "@/public/assets/images/no-image.png";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";

// ** Import Icon
import { HiOutlineHeart, HiPlayCircle } from "react-icons/hi2";
import { startVideoPlayer } from "@/store/slices/commonSlice";
import HeartRedIcon from "@/components/elements/svg/HeartRedIcon";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";
import ProductZoomYetAnother from "./ProductZoomYetAnother";

const ProductViewSlider = forwardRef(
  
  ({ product, selectedColor, shortDetails }, ref) => {
    const dispatch = useDispatch();
    const [basicExampleOpen, setBasicExampleOpen] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    /*   const {
    handleAddToWishlist,
    handleWishListProductStatus,
    handleRemoveFromWishlist,
  } = useWishList(); //custom hook for reusing */

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

    let colorFlag = "";
    const isFirstItem = (colorName) => {
      if (colorFlag !== colorName) {
        colorFlag = colorName;
        return true;
      }
      return false;
    };

    // const isInWishList = handleWishListProductStatus(product.id);
    const onlyImages = slides.map((item) => item.image);

    const handleOpenZoom = (index) => {
      setOpen(true);
      setIndex(index);
    }

    return (
      <>
        {" "}
        <ProductZoomYetAnother open={open} setIndex={setIndex} index={index} setOpen={setOpen} images={slides} />
        <div className="px-3 md:px-0">
          <div className=" preview-slider grid relative">
            <Swiper
              ref={ref}
              className={`product-preview-slider [&_.swiper-wrapper]:pb-3  lg:[&_.swiper-wrapper]:pb-0 lg:border border-slate-300 ${
                shortDetails && "md:!w-[25rem]"
              }`}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              direction="horizontal"
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicMainBullets: 3,
                dynamicBullets: true,
              }}
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
              {/*               <Lightbox
                open={basicExampleOpen}
                close={() => setBasicExampleOpen(false)}
                slides={slide.image}
              /> */}
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className={`!h-[100vw] ${
                    shortDetails
                      ? "md:!h-[28.75rem] md:!w-full"
                      : "md:!h-[42.75rem] md:!w-full"
                  } `}
                >
                  <div className="slider-imag h-full w-full">
                    {/*                   <Image
                    src={slide?.image}
                    alt=""
                    width={524}
                    height={524}
                    className="object-contain h-full"
                  /> */}
                    {/* start from here */}

                    {isFirstItem(slide?.color_name) && slide?.video_link ? (
                      <>
                        <Image
                          src={slide?.image}
                          alt=""
                          width={524}
                          height={524}
                          className="object-cover object-top h-full w-full"
                        />

                        <button
                          onClick={() =>
                            dispatch(
                              startVideoPlayer({
                                url: slide?.video_link,
                                playing: true,
                                title: product.product_name,
                                controls: true,
                                // className: "md:h-[480px] md:w-[854px]",
                              })
                            )
                          }
                          className="z-20 vid-icon absolute inline-flex justify-center items-center top-1/2 left-1/2 w-[72px] h-[72px] rounded-full drop-shadow-[0_0px_60px_rgba(0,0,0,0.16)] translate-x-[-50%] translate-y-[-50%]"
                        >
                          <HiPlayCircle
                            size={60}
                            className="text-white hover:text-primary"
                          />
                        </button>
                      </>
                    ) : (
                      // <ImageZoom image={slide?.image} zoomImage={slide?.image} />
                      <>
                        <Image
                          onClick={() => handleOpenZoom(index)}
                          src={slide?.image}
                          alt=""
                          width={524}
                          height={524}
                          className="object-cover h-full w-full cursor-zoom-in"
                        />
                      </>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/*           <div className="product-action top-2 md:top-4 right-2 lg:right-4 absolute z-10 ">
            <button
              aria-label="Add To Wishlist"
              className="wishlist-action-btn-product-details inline-flex justify-center items-center"
              onClick={(e) =>
                isInWishList
                  ? handleRemoveFromWishlist(product.id)
                  : handleAddToWishlist(product.id)
              }
            >
              {isInWishList ? (
                <HeartRedIcon />
              ) : (
                <>
                  <span className="">
                    <HiOutlineHeart />
                  </span>
                </>
              )}
            </button>
          </div> */}
          </div>
          <div className="thumb-slider !w-[90vw] md:!w-[38.75rem] ">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={4}
              spaceBetween={5}
              // centeredSlides={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <HorizontalScrollView>
                {slides.map((slide, index) => (
                  <SwiperSlide className="!w-24" key={index}>
                    <div className="slider-image cursor-pointer mt-2 border border-slate-100 rounded-lg">
                      <Image
                        src={slide?.image}
                        alt=""
                        width={0}
                        height={0}
                        className="border border-slate-300 !w-24 !h-24 cursor-pointer p-2 mr-2 object-cover "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </HorizontalScrollView>
            </Swiper>
          </div>
        </div>
      </>
    );
  }
);

ProductViewSlider.displayName = "ProductViewSlider";

export default ProductViewSlider;
