import FlashSaleSlider from "./elements/sliders/FlashSale";
import Timer from "@/components/elements/Timer";
import { fetchData } from "@/utils/fetchData";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const FlashSale = async () => {
  const flashSaleResponse = await fetchData({ api: "product-flash-sale" });
  const flashSaleInfo = flashSaleResponse?.flashSale || {};
  const saleProducts = flashSaleResponse?.data || [];
  if (flashSaleResponse?.status === false) return null;

  return (
    <section className="flash-sale mt-28">
      <div className="container relative">
        <div className="sec-heading absolute top-[-30px] left-0 w-full flex justify-between items-center px-8">
          <div className="flex gap-4 bg-white">
            <div>
              <h2 className="sec-title">{flashSaleInfo?.title}</h2>
              <p>অফার চলবে আর মাত্র</p>
            </div>
            <Timer targetDate={flashSaleInfo?.expire_time} />
          </div>
          <Link href="/products/flash-sale" className="all-btn bg-white">
            সবগুলো দেখুন <HiArrowLongRight size={24} />{" "}
          </Link>
        </div>

        <div className="flashSale-slider border border-primary rounded-2xl p-6 pt-16">
          <FlashSaleSlider saleProducts={saleProducts} />
        </div>
      </div>
    </section>
  );
};

export default FlashSale;

// {
//   "status": false,
//   "message": "No flash sale abaiable at this moment"
// }
