"use client";

import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";

const sizes = [
  "Small",
  "Medium",
  "Large",
  "Extra Large",
  "2XL Large",
  "3XL Large",
];

const CartCard = ({ item }) => {
  return (
    <div className="relative cart-card p-3 bg-white shadow rounded-lg mb-3">
      <button className="absolute right-1.5 top-1 bg-transparent text-red-500">
        <MdDeleteSweep />
      </button>
      <div className="flex gap-2">
        <Image
          src={"/assets/images/review/image-2.png"}
          alt="product"
          height={84}
          width={84}
          sizes="84px"
        />
        <div className="flex flex-col justify-between">
          <h5 className="text-primary">Havit</h5>
          <h4>
            {`প্রিমিয়াম কোয়ালিটির ইয়ার ব্লুটুথ হেডফোন, মাইক্রোফোন সহ বাচ্চাদের
              এবং প্রাপ্তবয়স্কদের জন্য কমফোর্ট ফোল্ডেবল হেডসেট`.slice(0, 50) +
              "..."}
          </h4>
          <div className="flex gap-3 items-center">
            <h3 className="text-xl text-red-500">৳ 1,657</h3>
            <h4 className="text-md text-slate-300 line-through">৳2,984</h4>
            <div className="rounded-full px-3 text-white bg-red-500">
              XL 44% OFF
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm mt-4">
        <div className="flex items-center gap-3">
          <div className="px-2 border border-slate-300 rounded">সাদা</div>
          <div>
            <select className="w-28 bg-slate-50 bg-transparent border border-slate-300 text-slate-900 rounded focus:ring-primary focus:border-primary block px-2.5 appearance-none pr-2">
              {sizes.map((size) => (
                <option key={size} selected>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3 text-slate-900">
          <button className="bg-transparent border border-primary rounded px-1">
            <FiPlus />
          </button>
          <div className="mx-1 font-bold">01</div>
          <button className="bg-transparent border border-primary rounded px-1">
            <FiMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
