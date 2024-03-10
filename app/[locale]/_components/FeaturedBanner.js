import Image from "next/image";
import { Link } from "@/navigation";
import { fetchData } from "@/lib/fetch-data";
import noImage from "@/public/assets/images/no-image.png";
import { FaArrowRight } from "react-icons/fa";

const FeaturedBanner = async () => {
  const { data: featuredBanner = [] } = await fetchData({ api: "banners" });

  console.log(featuredBanner);

  if (!featuredBanner?.length) return null;
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 gap-x-0 md:gap-x-4 lg:gap-6">
        <Link
          href={featuredBanner[0].url || "/"}
          className="block relative  md:col-span-2"
        >
          <Image
            src={featuredBanner[0].image || noImage}
            alt="Banner"
            width={0}
            height={0}
            sizes=""
            className="w-full  md:h-[41rem] object-cover"
          />
          <span className="absolute -translate-y-1/2 md:translate-y-0 top-1/2 md:top-10 left-10 ">
            <p>{featuredBanner[0]?.title || ""}</p>
            <h2 className="text-xl md:text-2xl font-semibold w-[200px] my-3">
              {featuredBanner[0]?.title_2 || ""}
            </h2>
            <p>
              View Discount{" "}
              <FaArrowRight className="text-primary ml-3" size={14} />
            </p>
          </span>
        </Link>

        <div className="md:col-span-3">
          <div className="">
            <div className="md:flex md:h-[20rem] gap-4 md:gap-6 justify-center items-center">
              <div className="">
                <Link
                  href={featuredBanner[1]?.url || "/"}
                  className="banner-img relative"
                >
                  <Image
                    src={featuredBanner[1]?.image || noImage}
                    alt="Banner"
                    width={80}
                    height={142}
                    sizes=""
                    className="w-full md:h-[20rem] object-cover"
                  />
                  <span className="absolute -translate-y-1/2 md:translate-y-0 top-1/2  md:top-10 left-10 ">
                    <p>{featuredBanner[1]?.title || ""}</p>
                    <h2 className="text-xl md:text-2xl font-semibold w-[250px] my-3">
                      {featuredBanner[1]?.title_2 || ""}
                    </h2>
                    <p>
                      View Discount{" "}
                      <FaArrowRight className="text-primary ml-3" size={14} />
                    </p>
                  </span>
                </Link>
              </div>

              <div className="">
                <Link
                  href={featuredBanner[2]?.url || "/"}
                  className="banner-img relative"
                >
                  <Image
                    src={featuredBanner[2]?.image || noImage}
                    alt="Banner"
                    width={80}
                    height={142}
                    sizes=""
                    className="w-full md:h-[20rem] object-cover mt-4 md:mt-0"
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 md:translate-y-0 md:top-10 left-10 ">
                    <p>{featuredBanner[2]?.title || ""}</p>
                    <h2 className="text-xl md:text-2xl font-semibold w-[250px] my-3">
                      {featuredBanner[2]?.title_2 || ""}
                    </h2>
                    <p>
                      View Discount{" "}
                      <FaArrowRight className="text-primary ml-3" size={14} />
                    </p>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-6">
            <Link
              href={featuredBanner[3]?.url || "/"}
              className="banner-img relative "
            >
              <Image
                src={featuredBanner[3]?.image || noImage}
                alt="Banner"
                width={0}
                height={0}
                sizes=""
                className="w-full h-[50vh] md:h-[19.5rem] object-cover  "
              />
              <span className="absolute top-1/2 -translate-y-1/2 md:translate-y-0 md:top-10 left-10 ">
                <p>{featuredBanner[3]?.title || ""}</p>
                <h2 className="text-xl md:text-2xl font-semibold w-[200px] my-3">
                  {featuredBanner[3]?.title_2 || ""}
                </h2>
                <p>
                  View Discount{" "}
                  <FaArrowRight className="text-primary ml-3" size={14} />
                </p>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedBanner;
