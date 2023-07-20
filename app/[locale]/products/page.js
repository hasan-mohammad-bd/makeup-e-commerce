import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Filter from "@/components/Filter";
import SortSelect from "@/components/elements/SortSelect";

// ** Imoprt icons
import AllProducts from "@/components/products/AllProducts";

// ** Search Fallback
function SearchBarFallback() {
  return <>placeholder</>;
}

const page = ({ params }) => {
  const { slug } = params;

  return (
    <>
      <div className="breadcrumb bg-[url('/assets/images/banner/pdctpage-banner.png')] bg-no-repeat bg-cover py-20">
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-title text-white mb-4">
              সকল প্রডাক্ট
            </h3>
            <div>
              <Link
                href={`/`}
                className="text-base text-white hover:text-primary"
              >
                হোম
              </Link>
              <Link
                href={`/products`}
                className="text-base text-white hover:text-primary"
              >
                সকল প্রডাক্ট
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="toolbar grid grid-cols-5 gap-5 my-5">
          <div className="relative col-span-1">
            <Filter />
          </div>
          <div className="col-span-4 flex justify-between items-center bg-slate-50 rounded-xl px-4 py-3">
            <p>এখানে ৬৭ টি প্রডাক্ট আছে</p>
            <Suspense fallback={<SearchBarFallback />}>
              <SortSelect />
            </Suspense>
          </div>
        </div>
        <AllProducts />
      </div>
    </>
  );
};

export default page;
