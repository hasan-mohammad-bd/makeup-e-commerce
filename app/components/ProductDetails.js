
'use client'

import Image from "next/image";
import Link from "next/link";
import ThumbSlider from "../elements/sliders/ThumbSlider";

// ** Import Icon
import { HiStar, HiChatBubbleLeftRight, HiShare } from "react-icons/hi2";
import { TfiAngleRight } from "react-icons/tfi";
import { TbTag } from "react-icons/tb";
import { IoCopy } from "react-icons/io5";
const ProductDetails = ({product}) => {
    return (
        <>
            <div className="product-details">
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <ThumbSlider product={product}/>
                    </div>
                    <div className="w-1/2">
                        <div className="product-content-wrap">
                            <p className="text-sm font-bold text-primary capitalize mb-2">{product?.brand || 'Havit'}</p>
                            <h5 className="text-2xl font-bold font-title text-slate-900">{product?.title || 'Insta360 GO 2 একশন ক্যামেরা 9MP 3K জলরোধী একশন ক্যামেরা'}</h5>
                            <div className="meta-data flex items-center gap-8 my-2">
                                <div className="rating-point flex gap-1">
                                    <span><HiStar size={20}/></span>
                                    <span><HiStar size={20}/></span>
                                    <span><HiStar size={20}/></span>
                                    <span><HiStar size={20}/></span>
                                    <span><HiStar size={20}/></span>
                                    <span>4.5</span>
                                </div>
                                <p>1265 রেটিং</p>
                                <p><HiChatBubbleLeftRight size={20} className="text-secondary-700"/> 32 প্রশ্ন এবং উত্তর</p>
                                <p><HiShare size={20}/> শেয়ার করুন</p>
                            </div>
                            <p className="desc text-base text-slate-600">{product?.desc || "nsta360 GO 2 9MP 3K ওয়াটারপ্রুফ স্মল অ্যাকশন ক্যামেরা Insta360 GO 2 9MP 3K ওয়াটারপ্রুফ স্মল অ্যাকশন ক্যামেরা সহ আসে। এই অ্যাকশন ক্যামেরাটি ফ্লোস্টেট স্ট্যাবিলাইজেশন, হাইপারল্যাপস, ওয়াইফাই প্রিভিউ, হ্যান্ডস-ফ্রি, মাউন্ট এনিহোয়ার, 1440p 50fps সহ বৈশিষ্ট্যযুক্ত। 4m (13ft) পর্যন্ত জলরোধী এবং এটি 13' পর্যন্ত IPX8 জলরোধী"}</p>
                            <div className="product-price flex items-center gap-4 border-b border-slate-200 py-5">
                                <span className="text-3xl/[48px] font-bold font-title text-slate-900">{product?.price || '৳ 22,153'} </span>
                                <del className="old-price text-lg/[24px] font-normal text-slate-400">{product?.oldPrice ? `$ ${product?.oldPrice}`: '৳ 32,999'}</del>
                                <span className="discount inline-block text-base font-semibold font-title text-white bg-red-500 rounded-md py-1 px-2">{product?.discount?.percentage || '-44'}%</span>
                            </div>
                            <div className="color-select my-5">
                                <p className="text-slate-900 mb-2">কালার নির্বাচন করুন:</p>
                                <div className="flex  gap-2">
                                    {new Array(8).fill(8)?.map((clr, i) => (
                                        <div className="input-grp" key={i}>
                                            <input type="radio" id={`clr-${i}`} name="color" value="" className="peer hidden"/>
                                            <label className="inline-block border border-slate-300 rounded-lg p-1 cursor-pointer peer-checked:border-primary" htmlFor={`cat-${i}`}>
                                                <Image src={`/assets/images/shop/color-product.png`} width={52} height={52} alt="" />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="size-select">
                                <div className="flex justify-between items-center">
                                    <p className="text-slate-900 mb-2">সাইজ নির্বাচন করুন:</p>
                                    <p className="text-base text-secondary-700 mb-2">সাইজ চার্ট দেখুন <TfiAngleRight/></p>
                                </div>
                                <div className="flex  gap-2">
                                    {new Array(6).fill(8)?.map((size, i) => (
                                        <div className="input-grp" key={i}>
                                            <input type="radio" id={`size-${i}`} name="size" value="" className="peer hidden"/>
                                            <label className="inline-block text-slate-700 border border-slate-300 rounded-lg px-4 py-3 whitespace-nowrap cursor-pointer peer-checked:text-primary peer-checked:bg-[#FFF6EB] peer-checked:border-primary" htmlFor={`size-${i}`}>
                                                Extra Large
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="my-5">
                                <p className="font-semibold font-title text-slate-900 mb-2">সেরা অফার <TbTag size={24} className="text-primary mb-1"/></p>
                                <ul className="coupon-info">
                                    <li className="relative text-slate-900 pl-4">কুপন ডিসকাউন্ট: <span className="font-semibold text-title text-secondary-700">&#2547;400 ছাড়!</span></li>
                                    <li className="relative text-slate-900 pl-4 my-2 before:!top-3">কুপন কোড: <span className="inline-block text-primary border border-dashed border-primary rounded px-2 py-1 ml-1">SST2023A <IoCopy size={20} className="text-primary mb-1"/></span></li>
                                    <li className="relative text-slate-900 pl-4 mb-3">প্রযোজ্য: ৳2000 উপরে অর্ডারে (শুধুমাত্র প্রথম কেনাকাটায়)</li>
                                </ul>
                                <Link href="#" className="text-secondary-700 underline">অফারের সকল প্রডাক্ট দেখুন</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;