'use client'

import { useEffect, useState } from "react";

const CategoryFilter = ({ setFilters, updateProductFilters }) => {
    
    const categories = [
        {   
            label: "একশন ক্যামেরা (২৩২)",
            value: "action-camera"},
        {
            label: "হেডফোন (১৩১)",
            value: "headphone"
        },
        {
            label: "স্মার্ট ওয়াচ (৫৩২)",
            value: "smart-watch"
        },
        {
            label: "স্মার্ট ইলেকট্রনিক্স (৬৭৩)",
            value: "smart-elec"
        },
        {
            label: "পাওয়ার ব্যাংক (৭৭)",
            value: "power-bank"
        },
    ];

    const handleChange = (e) => {

        if(e.target.checked){
            setFilters(prev => (
                {
                    ...prev,
                    [e.target.name]: prev[e.target.name] ? [...prev[e.target.name], e.target.value] : [e.target.value] 
                }
            ))
        } else {
            setFilters(prev => (

                {
                    ...prev,
                    [e.target.name]: prev[e.target.name]?.filter(item => item !== e.target.value)
                }
                
            ))
        }
        
    }

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
                <h6 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">ক্যাটাগরি থেকে কেনাকাটা</h6>
                <div className="category-filter">
                    {categories?.map((cat, i) => (
                        <div className="input-grp mt-3" key={i}>
                            <label className="flex items-center gap-2 text-base text-slate-700 cursor-pointer" htmlFor={`cat-${i}`}>
                                <input type="checkbox" id={`cat-${i}`} name="category" value={cat.value} onChange={handleChange} />
                                {cat.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryFilter;
