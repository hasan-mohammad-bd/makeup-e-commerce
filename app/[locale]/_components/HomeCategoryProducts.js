import Link from "next/link";
import { fetchData } from "@/lib/fetch-data";
import ProductSlider from "@/components/ProductSlider";
import { SeeAll } from "@/components/elements/buttons";
import SectionTitle from "@/components/elements/SectionTitle";
// import { useSelector } from "react-redux";

const HomeCategoryProducts = async () => {
  const [transRes] = await Promise.allSettled([
    fetchData({ api: "translations" }),
  ]);
  const translations =
    transRes.status === "fulfilled" ? transRes.value?.data || {} : {};
  const data = await fetchData({ api: "homepage-category?no_child=1" });
  const categoryWiseProducts = data?.data || [];

  return categoryWiseProducts?.length
    ? categoryWiseProducts.map(({ category, products }, index) => (
        <div key={index} className="container">
          <div className="py-10 flex items-center justify-between">
            {/* <h2 className="sec-title pb-3">{category?.category_name}</h2> */}
            <SectionTitle title={category?.category_name} />

            {/*             <Link
              href={`/categories/${category?.slug}`}
              className="text-lg hover:text-secondary"
            >
              {translations["see-all"] || "See All"}{" "}
            </Link> */}
          </div>
          <div className="">
            <ProductSlider products={products} sliderId={index} />
            <SeeAll
              href={`/categories/${category?.slug}`}
              buttonText={translations["see-all"]}
            />
          </div>

        </div>
      ))
    : null;
};

export default HomeCategoryProducts;
