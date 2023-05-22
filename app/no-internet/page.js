'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

// ** Imoprt icons
import { BsFillTelephoneFill } from "react-icons/bs";

export const metadata = {
    title: 'No Internet Connection',
};

export default function NoInterNet() {

    const router = useRouter();

    return (
        <>
            <div className="container">
                <div className="content flex flex-col items-center py-28">
                    <Image src={`/assets/images/banner/no-internet.png`} width={340} height={311} alt="Not Internet" className="mb-12"/>
                    <h2 className="text-3xl font-bold font-title text-slate-900">আপনার ডিভাইসে ইন্টারনেট সংযোগ নাই</h2>
                    <p className="text-lg text-slate-600 mt-6 mb-8">দয়া  করে আপনার ইন্টারনেট সংযোগ চেক করুন এবং আবার চেষ্টা করুন</p>
                    <Link href="javascript:void(0)" onClick={()=> router.back()} className="inline-block font-semibold text-white bg-primary rounded-lg px-8 py-3">পেজ রিলোড করুন</Link>
                </div>
                <div className="contact pb-12 text-center">
                    <p className="flex justify-center items-center gap-5 bg-amber-200 border border-primary rounded-xl p-4"><span className="text-xl font-bold font-title text-slate-900">যে কোন জিজ্ঞাসা বা অর্ডার করতে আমাদের কল করুন:</span> <Link href="tel:01720060958" className="text-xl font-bold font-title text-primary"><BsFillTelephoneFill/> 01720060958</Link></p>
                </div>
            </div>
        </>
    );
  }