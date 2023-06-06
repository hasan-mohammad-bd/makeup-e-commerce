import SingleProduct from "./SingleProduct";
import { fetchData } from "@/utils/fetchData";

const AllProducts = async () => {
  const data = await fetchData({ api: "products", revalidate: 60 });
  const allProducts = data?.products || [];

  return (
    <>
      <div className="products-wpr grid grid-cols-5 gap-x-5 gap-y-12 mb-12">
        {allProducts?.map((product, i) => (
          <div className="col-span-1" key={i}>
            <SingleProduct product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
