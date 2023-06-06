import Link from "next/link";

// ** Imoprt icons
import AllProducts from "@/components/AllProducts";
import LatestViews from "@/components/LatestViews";
import ProductDetails from "@/components/ProductDetails";

const page = ({ params }) => {
  const { slug } = params;

  return (
    <>
      <div className="container">
        <div className="breadcrumb breadcrumb-2 py-5">
          <div className="container">
            <div>
              <Link
                href={`/`}
                className="text-base text-slate-600 hover:text-primary"
              >
                হোম
              </Link>
              {Object.keys(params).map((key, indx) => (
                <Link
                  href={`/${params[key]}`}
                  className={`text-base ${
                    params[key] === slug ? "text-slate-900" : "text-slate-600"
                  } hover:text-primary`}
                  key={indx}
                >
                  {params[key]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ProductDetails />
      </div>
      <div className="all-products py-14">
        <div className="container">
          <div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
            <h2 className="sec-title">একই ক্যাটাগরির আরও প্রোডাক্ট</h2>
          </div>

          <div className="bestSell-slider mt-6">
            <AllProducts />
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="latest-viewed-products bg-slate-50 border border-slate-100 rounded-xl p-6 pt-8 mb-14">
          <div className="sec-heading w-full flex justify-between items-center border-b border-slate-200 pb-3">
            <h2 className="sec-title">সর্বশেষ যে প্রোডাক্ট গুলো দেখেছেন</h2>
          </div>

          <div className="mt-6 ">
            <LatestViews />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
