"use client";

import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ColorFilter = ({
  setFilters,
  checkedElms,
  colors,
  selectedColors,
  setSelectedColors,
}) => {
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
      const colorNames = [...selectedColors, e.target.name];
      setSelectedColors(colorNames);
      router.push(
        pathname + "?" + createQueryString("colors", colorNames.join(","))
      );
    } else {
      const colorNames = [...selectedColors];
      const index = colorNames.findIndex((name) => name === e.target.name);
      if (index !== -1) {
        colorNames.splice(index, 1);
      }
      setSelectedColors(colorNames);
      router.push(
        pathname + "?" + createQueryString("colors", colorNames.join(","))
      );
    }
  };

  //   console.log(colors);
  return (
    <>
      <div className="pr-5">
        <h6 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">
          কালার
        </h6>
        <div className="category-filter">
          {/* bg-blue-500 */}
          {colors?.map((color, i) => (
            <div className="input-grp mt-3" key={i}>
              <label
                className="flex items-center gap-2 text-base text-slate-700 cursor-pointer"
                htmlFor={`clr-${i}`}
              >
                <input
                  type="checkbox"
                  id={`clr-${i}`}
                  name={color.name}
                  value={color.code}
                  ref={(element) => checkedElms?.current.push(element)}
                  onChange={handleChange}
                />
                <span
                  className={`inline-block w-3 h-3 rounded-full`}
                  style={{ background: color.code }}
                ></span>
                <span className="pt-1 capitalize">{color.name}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
