'use client'

import { useEffect, useState } from "react";

const CategoryFilter = ({ updateProductFilters }) => {
    
    const categories = [
        {value: "একশন ক্যামেরা (২৩২)"},
        {value: "হেডফোন (১৩১)"},
        {value: "স্মার্ট ওয়াচ (৫৩২)"},
        {value: "স্মার্ট ইলেকট্রনিক্স (৬৭৩)"},
        {value: "পাওয়ার ব্যাংক (৭৭)"},
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
            <div className="category-filter">
                {categories?.map((cat, i) => (
                    <div className="input-grp mt-3" key={i}>
                        <label className="flex items-center gap-2 text-base text-slate-700 cursor-pointer" htmlFor={i}>
                            <input type="checkbox" id={i} />
                            {cat.value}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CategoryFilter;
