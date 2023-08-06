import Link from "next/link";
import ProductsWithFilter from "@/components/products/ProductsWithFilter";
// import Pagination from "@/components/Pagination";

// ** Search Fallback
function SearchBarFallback() {
  return <>placeholder</>;
}

const page = ({ params, searchParams }) => {
  const { slug } = params;
  // console.log(searchParams);

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

      <ProductsWithFilter customSearchParams={searchParams} />
    </>
  );
};

export default page;
