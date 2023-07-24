import { fetchData } from "@/utils/fetchData";
import SingleProduct from "./SingleProduct";

const AllProducts = async ({ searchParams = {} }) => {
  // console.log(searchParams);
  const params = new URLSearchParams(searchParams);
  const data = await fetchData({ api: `products?${params.toString()}` });
  const allProducts = data?.data || [];

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
