"use client";
import { Link } from "@/navigation";
import { useParams } from "next/navigation";
import Timer from "@/components/elements/Timer";
import { HiArrowLongRight } from "react-icons/hi2";
import { useGetProductFlashSaleQuery } from "@/store/api/productFlashSaleAPI";
import FlashSaleSlider from "./FlashSaleSlider";
import { SeeAll } from "@/components/elements/buttons";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProductCard from "@/components/cards/ProductCard";
import HorizontalScrollView from "@/components/elements/HorizontalScrollView";
import DynamicBackgroundComponent from "@/components/utility/BackgroundImage";
import VideoPlayerIcon from "@/components/elements/svg/VideoPlayerIcon";

const FlashSale = ({ translations }) => {
  const { locale } = useParams();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { data: flashSaleData, isLoading } = useGetProductFlashSaleQuery({
    locale,
  });

  const flashSaleInfo = flashSaleData?.flashSale || {};
  const saleProducts = flashSaleData?.data || [];
  console.log(flashSaleInfo);
  if (flashSaleData?.status === false || isLoading || !flashSaleData)
    return null;

  return (
    <section className="flash-sale my-24">
      <div className="container">
        <div className="relative">
          <div className="sec-heading absolute z-20 top-1/2 translate-y-[-50%] left-5 w-full flex justify-center lg:justify-between items-center pl-6">
            <div className="flex flex-col gap-4 bg-transparent px-3">
              <div className="text-center lg:text-left">
                <h3 className="text-primary font-semibold">
                  Hurry up and Get 25% Discount
                </h3>
                <h2 className="sec-title my-5">{flashSaleInfo?.title}</h2>
                <p className="max-w-[300px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta
                </p>
                {/* 								<p>
									{translations["the-offer-will-only-last"] ||
										"অফার চলবে আর মাত্র"}
								</p> */}
              </div>
              <Timer targetDate={flashSaleInfo?.expire_time} />
              <Link
                href="/flash-sale"
                className=" bg-primary py-3 max-w-[170px] pl-4 !text-white lg:!block !inline-block"
              >
                Show Collection <HiArrowLongRight size={24} />{" "}
              </Link>
            </div>
          </div>

          <div className="flashSale-slider">
            {isMobile ? (
              <HorizontalScrollView className={"space-x-2 p-2"}>
                {saleProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    isFlashSale
                    isLarge
                    translations={translations}
                  />
                ))}
              </HorizontalScrollView>
            ) : (
              <>
                <DynamicBackgroundComponent
                  imageUrl={flashSaleInfo?.banner_image}
                  height={"50vh"}
                />
              </>
              /*               <FlashSaleSlider
                saleProducts={saleProducts}
                translations={translations}
              /> */
            )}
          </div>
          <SeeAll href="/flash-sale" buttonText={translations["see-all"]} />
          <a href="https://www.youtube.com/watch?v=J2X5mJ3HDYE">
            <VideoPlayerIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
