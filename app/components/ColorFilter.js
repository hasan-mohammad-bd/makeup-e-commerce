'use client'

import { useEffect, useState } from "react";

const ColorFilter = ({ updateProductFilters }) => {
    
    const colors = [
        {
            value: "লাল (২)",
            color: "red-500",
        },
        {
            value: "নিল (৬)",
            color: "blue-500",
        },
    ];

    

    // const [selectedSizes, setSizes] = useState([]);
    // const [active, setActive] = useState(0);

    // useEffect(() => {
    //     const filters = {
    //         sizes: selectedSizes,
    //     };

    //     updateProductFilters(filters);
    // }, [selectedSizes]);

    // const handleClick = (i, target) => {
    //     setSizes(target);
    //     setActive(active == i ? 0 : i);
    // };

    return (
        <>
            <div className="pr-5">
                <h6 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">কালার</h6>
                <div className="category-filter">
                    {colors?.map((color, i) => (
                        <div className="input-grp mt-3" key={i}>
                            <label className="flex items-center gap-2 text-base text-slate-700 cursor-pointer" htmlFor={i}>
                                <input type="checkbox" id={i} />
                                <span className={`inline-block w-3 h-3 bg-${color.color} rounded-full`}></span>
                                {color.value}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ColorFilter;
