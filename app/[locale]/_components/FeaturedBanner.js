import Image from "next/image";
import { Link } from "@/navigation";
import { fetchData } from "@/lib/fetch-data";
import noImage from "@/public/assets/images/no-image.png";

const FeaturedBanner = async () => {
  const { data: featuredBanner = [] } = await fetchData({ api: "banners" });
  if (!featuredBanner?.length) return null;
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-x-0 md:gap-x-4 lg:gap-6">
        <Link href={featuredBanner[0].url || "/"} className="block relative">
          <Image
            src={featuredBanner[0].image || noImage}
            alt="Banner"
            width={0}
            height={0}
            sizes=""
            className="w-full  md:h-[41rem] object-cover"
          />
        </Link>

        <div className="">
          <div className="col-span-2">
            <div className="md:flex md:h-[20rem] gap-4 justify-center items-center">
              <div className="">
                <Link
                  href={featuredBanner[1]?.url || "/"}
                  className="banner-img"
                >
                  <Image
                    src={featuredBanner[1]?.image || noImage}
                    alt="Banner"
                    width={80}
                    height={142}
                    sizes=""
                    className="w-full md:h-[20rem] object-cover"
                  />
                </Link>
              </div>

              <div className="">
                <Link
                  href={featuredBanner[2]?.url || "/"}
                  className="banner-img"
                >
                  <Image
                    src={featuredBanner[2]?.image || noImage}
                    alt="Banner"
                    width={80}
                    height={142}
                    sizes=""
                    className="w-full md:h-[20rem] object-cover mt-4 md:mt-0"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-4">
            <Link href={featuredBanner[3]?.url || "/"} className="banner-img">
              <Image
                src={featuredBanner[3]?.image || noImage}
                alt="Banner"
                width={0}
                height={0}
                sizes=""
                className="w-full md:h-[20rem] object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedBanner;
