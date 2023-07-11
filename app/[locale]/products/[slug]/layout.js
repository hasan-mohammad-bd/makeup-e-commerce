import Link from "next/link";
import AllProducts from "@/components/AllProducts";
import LatestViews from "@/components/LatestViews";
import ProductDetails from "./ProductDetails";
import ActiveLink from "@/components/elements/ActiveLink";

export default function ProductDetailsLayout({ children, params }) {
  const tabItems = [
    { id: 1, title: "প্রডাক্টের বিবরণ", path: `/products/${params.slug}` },
    {
      id: 2,
      title: "স্পেসিফিকেশন",
      path: `/products/${params.slug}/specifications`,
    },
    {
      id: 3,
      title: "রেটিং ও রিভিউ",
      path: `/products/${params.slug}/reviews`,
    },
    {
      id: 4,
      title: "প্রশ্ন ও উত্তর",
      path: `/products/${params.slug}/qna`,
    },
  ];
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
              <Link
                href={`/products`}
                className="text-base text-slate-600 hover:text-primary"
              >
                প্রডাক্টস
              </Link>
              <Link
                href={`/products/${params.slug}`}
                className={`text-base text-slate-900 hover:text-primary`}
              >
                {params.slug}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ProductDetails />
        <div className="flex justify-end">
          <div className="w-1/2">
            {/* tabs view */}
            <ul className="product-tab-links flex justify-between items-center border-b border-slate-200 py-5 mt-5">
              {tabItems.map((item) => (
                <li key={item.id}>
                  <ActiveLink href={item.path}>{item.title}</ActiveLink>
                </li>
              ))}
            </ul>
            {/* tabs content  */}
            <div className="product-tab-content pt-8 pb-4 border-b-4 border-slate-200">
              {children}
            </div>
          </div>
        </div>
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
}
