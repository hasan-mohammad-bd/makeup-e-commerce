import { fetchData } from "@/lib/fetch-data";
import ProductDetails from "./_components/ProductDetails";
import { Link } from "@/navigation";
import SectionTitle from "@/components/elements/SectionTitle";
import AllProducts from "@/components/products/AllProducts";
import { SeeAll } from "@/components/elements/buttons";
import LastVisitedProducts from "@/components/products/LastVisitedProducts";
import { getSlicedText } from "@/utils/format-text";
import DynamicBackgroundComponent from "@/components/utility/BackgroundImage";
import ProductTabsView from "./_components/ProductTabsView";
import ServiceFeatures from "../../_components/service-features";

const ProductDetailsView = async ({ params }) => {
  const { slug } = params;
  const [settingsRes, productRes, tranRes] = await Promise.allSettled([
    fetchData({ api: `info/basic` }),
    fetchData({ api: `products/${slug}` }),
    fetchData({ api: `translations` }),
  ]);

  const settings =
    settingsRes.status === "fulfilled" ? settingsRes.value?.data || {} : {};
  const product =
    productRes.status === "fulfilled" ? productRes.value?.data || [] : [];
  const translations =
    tranRes.status === "fulfilled" ? tranRes.value?.data || {} : {};

  //Category Filter
  const customSearchParams = {
    category_id: product?.category?.id,
    per_page: 20,
  };

  return (
    <div className="mb-32 lg:mb-0  mx-auto">

    {settingsRes.value.data.product_details_banner_image && (
              <div className="">
          <DynamicBackgroundComponent
            heading={"Product Details"}
            imageUrl={settingsRes.value.data.product_details_banner_image}
            height={"30vh"}
            mobileHeight={"15vh"}
          >
            <div className="text-lg">
              <Link href={`/`} className=" hover:text-primary text-white">
                {translations["home"] || "হোম"}
              </Link>
              <span className="text-primary mx-3 font-extrabold">/</span>{" "}
              <Link
                href={`/products`}
                className=" hover:text-primary text-white"
              >
                {translations["products"] || "Products"}
              </Link>
              {/*               <Link
                href={`/products/${slug}`}
                aria-disabled="true"
                className={`text-base text-slate-900 pointer-events-none`}
              >
                {getSlicedText(slug, 50)}
              </Link> */}
            </div>
          </DynamicBackgroundComponent>
        </div>
    )}

      <div className="container mx-auto mt-5 md:mt-20">
        <ProductDetails
          product={product}
          settings={settings}
          translations={translations}
        />
      </div>
      <div>
        <ProductTabsView
          product={product}
          settings={settings}
          translations={translations}
        />
      </div>
      <section>
        <div className="h-2 w-full bg-slate-200 lg:hidden"></div>
        <div className="small-container mx-auto mt-4 lg:mt-12 mb-6 lg:mb-12">
          <SectionTitle
            className={"justify-start"}
            title={
              translations["same-category-products"] ||
              "Similar Products in this Category"
            }
            buttonText={translations["see-all"]}
          />
          <div className="category-products mt-1 lg:mt-6">
            <AllProducts
              customSearchParams={customSearchParams}
              translations={translations}
            />
            <SeeAll
              href={`/categories/${product?.category?.slug}`}
              buttonText={translations["see-all"]}
            />
          </div>
        </div>
      </section>
      <LastVisitedProducts
        visitedProductId={product?.id}
        translations={translations}
      />
      <section className="service-features small-container mx-auto mt-3 lg:mt-5">
        <ServiceFeatures />
      </section>
    </div>
  );
};

export default ProductDetailsView;
