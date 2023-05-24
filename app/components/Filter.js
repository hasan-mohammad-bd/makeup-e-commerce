'use client'

import { useState } from "react";
import CategoryFilter from "./CategoryFilter";

// ** Imoprt icons
import { HiOutlineFilter } from "react-icons/hi";
const Filter = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex items-center gap-3 w-full h-full bg-slate-50 rounded-xl px-4 py-3 cursor-pointer" onClick={()=> setOpen(!open)}>
                <HiOutlineFilter size={20}/>
                <span className="text-base text-slate-900">ফিল্টার করুন</span>
            </div>
            <div className={`filter-sidebar absolute top-0 left-0 ${open ? 'block' : 'hidden'} w-full bg-white z-10`}> 
                <CategoryFilter/>
            </div>
        </>
    )
}

export default Filter;