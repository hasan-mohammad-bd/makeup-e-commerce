import Link from "next/link";
import Image from "next/image";

// ** Imoprt icons
import { fetchData } from "@/utils/fetchData";
import noImage from "@/public/assets/images/no-image.png";
import ProductsWithFilter from "@/components/products/ProductsWithFilter";

const page = async ({ params }) => {
  const { brand_id } = params;
  const [brandResponse, topBrands] = await Promise.allSettled([
    fetchData({ api: `brands/${brand_id}` }),
    fetchData({ api: "brands" }),
  ]);

  const brand =
    brandResponse.status === "fulfilled" ? brandResponse.value?.data || {} : {};
  const popularBrands =
    topBrands.status === "fulfilled" ? topBrands.value?.data || [] : [];

  const searchParams = {
    brand_id: brand?.id,
  };

  return (
    <>
      <div
        className={`breadcrumb bg-[url('/assets/images/banner/pdctpage-banner.png')] bg-no-repeat bg-cover py-20`}
      >
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-title text-white mb-4">
              {brand?.brand_name}
            </h3>
            <div>
              <Link
                href={`/`}
                className="text-base text-white hover:text-primary"
              >
                হোম
              </Link>
              <Link
                href={`/brands`}
                className="text-base text-white hover:text-primary"
              >
                ব্র্যান্ড সমূহ
              </Link>
              <Link
                href={`/brands/${brand?.id}`}
                className="text-base text-white hover:text-primary"
              >
                {brand?.brand_name}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-300 py-8">
        <div className="container">
          <h6 className="text-base font-semibold font-title text-slate-900 mb-4">
            সেরা ৫টি ব্র্যান্ড
          </h6>
          <div className="flex items-center gap-5">
            {popularBrands?.slice(0, 5)?.map((brand, i) => (
              <div
                className="brands flex flex-1 items-center gap-4 border border-slate-300 rounded-xl p-3.5"
                key={i}
              >
                <div className="image flex items-center justify-center w-12 h-12 bg-amber-50 rounded-2xl">
                  <Link href={`/brands/${brand.id}`}>
                    <Image
                      src={brand?.image || noImage}
                      alt={brand.brand_name}
                      width={48}
                      height={31}
                      className="w-[48px] h-[31px] object-contain"
                    />
                  </Link>
                </div>
                <Link
                  href={`/brands/${brand.id}`}
                  className="text-base text-slate-900"
                >
                  {brand.brand_name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProductsWithFilter searchParams={searchParams} />
    </>
  );
};

export default page;
