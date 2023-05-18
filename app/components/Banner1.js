import Image from "next/image";
import Link from "next/link";

// ** Import Iocns 
import { HiArrowLongRight } from "react-icons/hi2"
const Banner1 = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1 relative">
                    <div className="banner-img">
                        <Image src={`/assets/images/banner/ads-lg-banner.jpg`} alt="Banner" width={0} height={0} sizes="100vw" className="w-full h-auto rounded-2xl"/>
                    </div>
                    <div className="content absolute top-0 left-1/3 w-2/3 h-full flex flex-col justify-center pr-6">
                        <p className="text-base font-medium font-title text-white mb-4">আপনার শোনার অভিজ্ঞতাকে পরবর্তী স্তরে নিয়ে যাওয়া</p>
                        <h3 className="text-4xl font-semibold font-title text-white">বিট হেডফোন</h3>
                        <div className="flex items-center gap-3 my-9">
                            <h3 className="text-4xl font-bold font-title text-red-500">৳2698</h3>
                            <del className="text-2xl font-title text-white">৳2698</del>
                        </div>
                        <Link href={`/`} className="inline-block w-max text-base font-semibold font-title text-white bg-primary px-4 py-3 rounded-lg">এখুনি কিনুন <HiArrowLongRight size={20}/></Link>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2">
                            <div className="grid grid-cols-12 items-center bg-amber-50 rounded-2xl p-6 pb-9">
                                <div className="content col-span-9">
                                    <p className="text-sm mb-1">বাজারের সেরা দামে</p>
                                    <p className="text-lg font-bold font-title">আইফোন ১১ পাচ্ছন মাত্র</p>
                                    <div className="flex items-center gap-1 mt-3">
                                        <h4 className="text-2xl font-bold text-red-500">৳৩৬৯৯৯</h4>
                                        <span className="text-sm text-slate-500">টাকায়</span>
                                    </div>
                                </div>
                                <div className="banner-img col-span-3">
                                    <Image src={`/assets/images/shop/phone.png`} alt="Banner" width={80} height={142} className="rounded-2xl"/>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 items-center bg-slate-100 rounded-2xl p-6 mt-6">
                                <div className="content col-span-1 flex flex-col justify-between gap-11">
                                    <div className="">
                                        <p className="text-sm mb-1">শাওমি ৩৪ ইঞ্চি মনিটর কিনুন</p>
                                        <p className="text-lg font-bold font-title">সহজ কিস্তিতে</p>
                                    </div>
                                    <Link href={`/`} className="text-xs font-semibold text-primary">বিস্তারিত জানুন <HiArrowLongRight size={24}/></Link>
                                </div>
                                <div className="banner-img col-span-1">
                                    <Image src={`/assets/images/shop/monitor.png`} alt="Banner" width={0} height={0} sizes="100vw" className="w-full h-auto rounded-2xl"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                        <div className="banner-img">
                                <Image src={`/assets/images/banner/ads-banner.jpg`} alt="Banner" width={0} height={0} sizes="100vw" className="w-full h-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner1;