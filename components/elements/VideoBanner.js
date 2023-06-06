import Link from "next/link";

// ** Import Icons
import { HiPlay } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2"


const VideoBanner = () => {

    return (
        <>
            <div className="vid-banner bg-[url('/assets/images/banner/vid-banner.jpg')] bg-no-repeat bg-cover py-12">
                <div className="content text-center">
                    <h3 className="text-4xl/[48px] font-bold font-title text-white">আমাদের সর্বশেষ প্রডাক্টের কিছু রিভিউ ভিডিও দেখুন</h3>
                    <p className="max-w-sm text-lg font-normal text-white my-7 mx-auto">এছাড়াও আমাদের অফিশিয়াল ইউটিউব চ্যানেলে পাবেন সকল প্রডাক্টের রিভিউ</p>
                    <Link href="/" target="_blank" className="inline-block text-lg/[26px] font-semibold text-white bg-primary p-3 rounded-lg"><HiPlay className="mr-1"/>ভিডিও দেখুন</Link>
                </div>
                <div className="text-center">
                    <Link href="/" className="inline-block text-sm text-red-500 mt-14">ইউটিউব চ্যানেল ভিজিট করুন <HiArrowLongRight className="text-lg ml-1"/></Link>
                </div>
            </div>
        </>
    )
}

export default VideoBanner;