import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
import noImage from "@/public/assets/images/no-image.png";

const page = async () => {
  const data = await fetchData({ api: "brands" });
  const brands = data?.data || [];

  return (
    <>
      <div className="breadcrumb breadcrumb-2 py-5 border-b border-slate-200">
        <div className="container">
          <div>
            <Link
              href={`/`}
              className="text-base text-slate-600 hover:text-primary"
            >
              হোম
            </Link>
            <Link
              href={`/brands`}
              className="text-base text-slate-900 hover:text-primary"
            >
              ব্র্যান্ড সমূহ
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-12 mb-24">
        <div className="flex items-center flex-wrap gap-10">
          {brands?.map((brand, i) => (
            <div className="brand" key={i}>
              <Link
                href={`/brands/${brand.id}`}
                className="brand-img flex justify-center items-center w-[164px] h-[164px] bg-amber-50 rounded-full"
              >
                <Image
                  src={brand?.image || noImage}
                  alt={brand.brand_name}
                  width={116}
                  height={78}
                  // style={{ width: "auto", height: "auto" }}
                  className="w-[116px] h-[78px] object-contain"
                />
              </Link>
              <Link
                href={`/brands/${brand.id}`}
                className="block text-lg text-slate-700 text-center mt-4"
              >
                {brand.brand_name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
