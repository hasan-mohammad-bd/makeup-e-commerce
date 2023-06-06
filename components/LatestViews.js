import SingleProduct from "./SingleProductList";
import { fetchData } from "@/utils/fetchData";

const LatestViews = async () => {
  const data = await fetchData({ api: "products", revalidate: 60 });
  const allProducts = data?.products || [];
  const newProducts = allProducts.sort(function (a, b) {
    return a.created > b.created ? -1 : 1;
  });
  return (
    <>
      <div className="products-wpr grid grid-cols-4 gap-5">
        {newProducts?.slice(0, 16)?.map((product, i) => (
          <div className="col-span-1" key={i}>
            <SingleProduct product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestViews;
