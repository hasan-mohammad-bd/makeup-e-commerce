import { Link } from "@/navigation";
import Image from "next/image";
import { fetchData } from "@/lib/fetch-data";
import noImage from "@/public/assets/images/no-image.png";

const page = async () => {
  const [categoriesRes, transRes] = await Promise.allSettled([
    fetchData({ api: `categories` }),
    fetchData({ api: `translations` }),
  ]);

  const categories =
    categoriesRes.status === "fulfilled" ? categoriesRes.value?.data || [] : [];
  const translations =
    transRes.status === "fulfilled" ? transRes.value?.data || {} : {};

  // console.log(translations);

  return (
    <section>
      <div className="breadcrumb breadcrumb-2 py-5 border-b border-slate-200 hidden lg:block">
        <div className="container">
          <div>
            <Link
              href={`/`}
              className="text-base text-slate-600 hover:text-primary"
            >
              {translations["home"] || "হোম"}
            </Link>
            <Link
              href={`/categories`}
              className="text-base text-slate-900 hover:text-primary"
            >
              {translations["category"] || "ক্যাটাগরি"}
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen lg:h-auto lg:pt-12 py-3 lg:pb-8 bg-white">
        <div className="container">
          <h3 className="font-title text-center text-lg/7 lg:text-3xl text-slate-900 my-5 lg:my-12 font-bold">
            {translations["all-categories"] || "সব ক্যাটেগরি"}
          </h3>
          <div className="grid grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-5 pt-2">
            {categories?.map((category, i) => (
              <div
                className="category text-center w-[74px] lg:w-[90px] mb-4"
                key={i}
              >
                <Link
                  href={`/categories/${category.slug}`}
                  className="category-img flex justify-center items-center py-[18px] border border-slate-300 px-2 h-[74px] lg:h-[78px] rounded-sm"
                >
                  <Image
                    src={category?.icon || noImage}
                    alt={category.category_name}
                    width={116}
                    height={78}
                    className="h-full w-full object-contain"
                  />
                </Link>
                <Link
                  href={`/categories/${category.slug}`}
                  className="block text-sm/5 lg:text-lg text-slate-700 mt-4"
                >
                  {category.category_name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
