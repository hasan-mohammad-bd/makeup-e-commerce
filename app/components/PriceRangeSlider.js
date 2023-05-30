'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Slider from 'rc-slider';

const PriceRangeSlider = ({ setFilters, updateProductFilters }) => {
    
    // const Router = useRouter();
    // const searchTerm = Router.query.search;

    const [price, setPrice] = useState({ value: { min: 3200, max: 8800 } });

    useEffect(() => {

        setFilters(prev =>(
            {
                ...prev,
                price : price.value
            }
        ))

    }, [price, setFilters]);

    return (
        <div className="price-range pr-5">
            <h6 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3 mb-3">প্রইজ</h6>
            <Slider
                range
                allowCross={false}
                defaultValue={[3200, 8800]}
                min={3200}
                max={8800}
                onChange={(value) => setPrice({ value: { min: value[0], max: value[1] } })}
            />

            <div className="flex justify-between mt-2">
                <span className="text-sm font-medium text-slate-900">৳{price.value.min}</span>
                <span className="text-sm font-medium text-slate-900">৳{price.value.max}</span>
            </div>
        </div>
    );
};

export default PriceRangeSlider;
