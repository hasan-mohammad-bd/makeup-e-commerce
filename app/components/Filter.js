'use client'

import { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import PriceRangeSlider from "./PriceRangeSlider";

// ** Imoprt icons
import { HiOutlineFilter } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Filter = () => {

    const [open, setOpen] = useState(false);

    const [productFilters, setProductFilters] = useState({})

    const removeFilter = (key,val) => {
        console.log(key,val)
        setProductFilters(prev => (
            {
                ...prev,
                [key] : prev[key].filter(item => item !== val)
            }
        ))
    }

    useEffect(() => {
        
    }, [productFilters])

    return (
        <>
            <div className="flex items-center gap-3 w-full h-full bg-slate-50 rounded-xl px-4 py-3 cursor-pointer" onClick={()=> setOpen(!open)}>
                <HiOutlineFilter size={20}/>
                <span className="text-base text-slate-900">ফিল্টার করুন</span>
            </div>
            <div className={`filter-sidebar absolute top-0 left-0 ${open ? 'flex flex-col' : 'hidden'} w-full bg-white border-r border-slate-200 gap-y-7 z-10`}>
                <div className="flex justify-between items-center gap-4 border-b border-slate-200 py-6 pr-5">
                    <h6 className="text-base/[16px] font-semibold text-primary">ফিল্টার</h6>
                    <div className="flex items-center gap-1">
                        <button className="text-sm text-red-500 hidden lg:block" onClick={() => setProductFilters({})}>রিসেট করুন</button>
                        <IoCloseOutline size={24} className="text-red-500 cursor-pointer lg:hidden" onClick={() => removeFilter(key,val)}/>
                    </div>
                </div>
                {Object.keys(productFilters).some( key => productFilters[key].length !== 0) &&
                    <div className="flex items-center flex-wrap gap-2">
                        {Object.keys(productFilters).map( key => (
                            productFilters[key].map((val, indx) => (
                                <div className="flex items-center gap-1 bg-slate-100 border-slate-200 rounded px-2 py-1" key={indx}>
                                    {key === 'color' && <span className={`inline-block w-3 h-3 bg-${val}-500 rounded-full`}></span>}
                                    <p className="text-sm text-slate-900">{val}</p>
                                    <IoCloseOutline size={24} className="text-red-500 cursor-pointer" onClick={() => removeFilter(key,val)}/>
                                </div>
                            ))
                        ))}

                    </div>
                }

                <CategoryFilter setFilters={setProductFilters}/>
                <BrandFilter setFilters={setProductFilters}/>
                <PriceRangeSlider setFilters={setProductFilters}/>
                <ColorFilter setFilters={setProductFilters}/>

            </div>
        </>
    )
}

export default Filter;