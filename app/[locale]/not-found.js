import Link from "next/link";
import Image from "next/image";

// ** Imoprt icons
import { BsFillTelephoneFill } from "react-icons/bs";

export default function NotFound() {
    return (
        <>
            <div className="container">
                <div className="content flex flex-col items-center py-28">
                    <Image src={`/assets/images/banner/404.png`} width={340} height={340} alt="Not Found" className="mb-12"/>
                    <h2 className="text-3xl font-bold font-title text-slate-900">পৃষ্ঠা খুঁজে পাওয়া যায়নি!</h2>
                    <p className="text-lg text-slate-600 mt-6 mb-8">আমরা দুঃখিত, কিন্তু আপনার অনুরোধ করা পৃষ্ঠাটি পাওয়া যায়নি</p>
                    <Link href="/" className="inline-block font-semibold text-white bg-primary rounded-lg px-8 py-3">হোমে ফিরে যান</Link>
                </div>
                <div className="contact pb-12 text-center">
                    <p className="flex justify-center items-center gap-5 bg-amber-200 border border-primary rounded-xl p-4"><span className="text-xl font-bold font-title text-slate-900">যে কোন জিজ্ঞাসা বা অর্ডার করতে আমাদের কল করুন:</span> <Link href="tel:01720060958" className="text-xl font-bold font-title text-primary"><BsFillTelephoneFill/> 01720060958</Link></p>
                </div>
            </div>
        </>
    );
  }