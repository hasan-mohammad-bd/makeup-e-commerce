import { Suspense } from "react";
import Image from "next/image";
import SortSelect from "@/components/elements/SortSelect";
import ProductList from "@/components/products/ProductList";

// ** Imoprt icons
import Timer from "@/components/elements/Timer";
import { fetchData } from "@/utils/fetchData";
import { notFound } from "next/navigation";

// ** Search Fallback
function SearchBarFallback() {
  return <>placeholder</>;
}

const page = async () => {
  const flashSaleResponse = await fetchData({ api: "product-flash-sale" });
  const flashSaleInfo = flashSaleResponse?.flashSale || {};
  const products = flashSaleResponse?.data || [];
  if (flashSaleResponse?.status === false) return notFound();

  return (
    <>
      <div className="breadcrumb bg-[url('/assets/images/banner/flash-banner.png')] bg-no-repeat bg-cover py-6">
        <div className="container">
          <div className="max-w-1/2 flex items-center gap-10 mx-auto">
            <div className="content flex-1">
              <h3 className="text-3xl font-bold font-title text-slate-900 mb-2">
                {flashSaleInfo?.title}
              </h3>
              <p className="text-lgtext-slate-600 mb-4">অফার চলবে আর মাত্র</p>
              <Timer targetDate={flashSaleInfo?.expire_time} />
            </div>
            <div className="img flex-1">
              <Image
                src={`/assets/images/banner/robot.png`}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="toolbar flex justify-between items-center bg-slate-50 rounded-xl px-4 py-3 my-5">
          <p>এখানে {products?.length} টি প্রডাক্ট আছে</p>
          <Suspense fallback={<SearchBarFallback />}>
            <SortSelect />
          </Suspense>
        </div>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default page;
