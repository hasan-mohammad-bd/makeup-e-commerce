import Link from "next/link";
import Image from "next/image";
import Filter from "@/components/Filter";
import SortSelect from "@/components/elements/SortSelect";

// ** Imoprt icons
import AllProducts from "@/components/AllProducts";
import { fetchData } from "@/utils/fetchData";
import noImage from "@/public/assets/images/no-image.png";

const page = async ({ params }) => {
  const { slug } = params;
  const [categoryResponse, dataResponse] = await Promise.allSettled([
    fetchData({ api: `category/${slug}` }),
    fetchData({ api: "popular-categories" }),
  ]);

  const category =
    categoryResponse.status === "fulfilled"
      ? categoryResponse.value?.data || {}
      : {};
  const popularCategories =
    dataResponse.status === "fulfilled" ? dataResponse.value?.data || [] : [];

  return (
    <>
      <div
        className={`breadcrumb bg-[url('/assets/images/banner/pdctpage-banner.png')] bg-no-repeat bg-cover py-20`}
      >
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-title text-white mb-4">
              {category?.category_name}
            </h3>
            <div>
              <Link
                href={`/`}
                className="text-base text-white hover:text-primary"
              >
                হোম
              </Link>
              <Link
                href={`/products/category/${category.slug}`}
                className="text-base text-white hover:text-primary"
              >
                {category?.category_name}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-300 py-8">
        <div className="container">
          <h6 className="text-base font-semibold font-title text-slate-900 mb-4">
            সেরা ৫টি ক্যাটাগরি
          </h6>
          <div className="flex items-center gap-5">
            {popularCategories?.slice(0, 5)?.map((cat, i) => (
              <div
                className="category flex flex-1 items-center gap-4 border border-slate-300 rounded-xl p-3.5"
                key={i}
              >
                <div className="image flex items-center justify-center w-12 h-12 bg-amber-50 rounded-2xl">
                  <Link href={`/products/category/${cat.slug}`}>
                    <Image
                      src={cat?.image || noImage}
                      alt={cat.category_name}
                      width={48}
                      height={31}
                      className="w-[48px] h-[31px] object-contain"
                    />
                  </Link>
                </div>
                <Link
                  href={`/products/category/${cat.slug}`}
                  className="text-base text-slate-900"
                >
                  {cat.category_name}
                </Link>
              </div>
            ))}
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
            <SortSelect />
          </div>
        </div>
        <AllProducts />
      </div>
    </>
  );
};

export default page;
