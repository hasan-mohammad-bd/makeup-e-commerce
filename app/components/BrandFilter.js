'use client'

import { useEffect, useState } from "react";

const BrandFilter = ({ updateProductFilters }) => {
    
    const brands = [
        {value: "DJI (8)"},
        {value: "Go Pro (6)"},
        {value: "Insta365 (2)"},
        {value: "EKEN (12)"},
        {value: "SJCAM (6)"},
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
                <h6 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">ব্র্যান্ড সমূহ</h6>
                <div className="category-filter">
                    {brands?.map((brand, i) => (
                        <div className="input-grp mt-3" key={i}>
                            <label className="flex items-center gap-2 text-base text-slate-700 cursor-pointer" htmlFor={i}>
                                <input type="checkbox" id={i} />
                                {brand.value}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BrandFilter;
