"use client";

import { useCallback, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const BrandFilter = ({
  setFilters,
  checkedElms,
  filteredBrands,
  brandIds,
  setBrandIds,
}) => {
  const [showAll, setShowAll] = useState(false);
  let brands = filteredBrands || [];

  //   console.log(brands);
  if (!showAll && brands?.length > 6) {
    brands = brands?.slice(0, 6);
  }

  const router = useRouter();
  let pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e) => {
    if (e.target.checked) {
      const ids = [...brandIds, e.target.value];
      // console.log(ids);
      setBrandIds(ids);
      router.push(
        pathname + "?" + createQueryString("brand_ids", ids.join(","))
      );
    } else {
      const ids = [...brandIds];
      const index = ids.findIndex((id) => id === e.target.value);
      if (index !== -1) {
        ids.splice(index, 1);
      }
      // console.log(ids);
      setBrandIds(ids);
      router.push(
        pathname + "?" + createQueryString("brand_ids", ids.join(","))
      );
    }
  };

  return (
    <>
      <div className="pr-5">
        <h6 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">
          ব্র্যান্ড সমূহ
        </h6>
        <div className="category-filter">
          {brands?.map((brand) => (
            <div className="input-grp mt-3" key={brand.id}>
              <label
                className="flex items-center gap-2 text-base text-slate-700 cursor-pointer"
                htmlFor={`brd-${brand.id}`}
              >
                <input
                  type="checkbox"
                  id={`brd-${brand.id}`}
                  // checked={brandIds.includes(brand.id)}
                  name={brand.brand_name}
                  value={brand.id}
                  ref={(element) => checkedElms?.current.push(element)}
                  onChange={handleChange}
                />
                {brand.brand_name}
              </label>
            </div>
          ))}
          {!showAll && filteredBrands?.length > 6 ? (
            <div className="text-center mt-3">
              <span
                onClick={() => setShowAll(true)}
                className="inline-flex items-center text-primary cursor-pointer"
              >
                <FiPlus size={24} className="mr-2" />
                আরও {filteredBrands?.length - 6}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default BrandFilter;

// const handleChange = (e) => {
// if (e.target.checked) {
//   setFilters((prev) => ({
//     ...prev,
//     [e.target.name]: prev[e.target.name]
//       ? [...prev[e.target.name], e.target.value]
//       : [e.target.value],
//   }));
// } else {
//   setFilters((prev) => ({
//     ...prev,
//     [e.target.name]: prev[e.target.name]?.filter(
//       (item) => item !== e.target.value
//     ),
//   }));
// }
//   };
