'use client'

import { useEffect, useState, useRef } from "react";

const ColorFilter = ({ setFilters, updateProductFilters, checkedElms }) => {
    
    const colors = [
        {
            label: "লাল (২)",
            value: "red",
        },
        {
            label: "নিল (৬)",
            value: "blue",
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
                <h6 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">কালার</h6>
                <div className="category-filter">
                    {/* bg-blue-500 */}
                    {colors?.map((color, i) => (
                        <div className="input-grp mt-3" key={i}>
                            <label className="flex items-center gap-2 text-base text-slate-700 cursor-pointer" htmlFor={`clr-${i}`}>
                                <input type="checkbox" id={`clr-${i}`} name="color" value={color.value} ref={element => checkedElms?.current.push(element)} onChange={handleChange} />
                                <span className={`inline-block w-3 h-3 bg-${color.value}-500 rounded-full`}></span>
                                {color.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ColorFilter;
