import Link from "next/link";

// ** Imoprt icons
import { BsFillTelephoneFill } from "react-icons/bs";

const page = ({params}) => {

    return (
        <>
            <div className="breadcrumb breadcrumb-2 py-5 border-b border-slate-200">
                <div className="container">
                    <div>
                        <Link href={`/`} className="text-base text-slate-600 hover:text-primary">হোম</Link>
                        <Link href={`/booking-policy`} className="text-base text-slate-900 hover:text-primary">প্রাইভেসি পলিসি</Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="booking-policy mb-4">
                    <div className="heading border-b border-slate-200 py-4 mb-4">
                        <h3 className="text-4xl/[48px] font-bold font-title text-slate-900">সততা স্টলের বুকিং পলিসি</h3>
                    </div>
                    <ul className="list-stl">
                        <li className="text-lg text-slate-600 mb-4">বর্তমানে বাংলাদেশের যেকোনো প্রান্তে নির্দিষ্ট পণ্যে ক্যাশ অন ডেলিভারি সুবিধা রয়েছে</li>
                        <li className="text-lg text-slate-600 mb-4">অনলাইন ডেলিভারির ক্ষেত্রে ডেলিভারি চার্জ/ কুরিয়ার চার্জ প্রযোজ্য</li>
                        <li className="text-lg text-slate-600 mb-4">ঢাকা/গাজীপুর/রংপুর/চট্টগ্রাম/খুলনা শহরে আমাদের নিজস্ব কুরিয়ার সার্ভিস এর মাধ্যমে পণ্য ডেলিভারি করে থাকি, এছাড়াও অন্যন্য শহরগুলোতে আমরা কুরিয়ার সার্ভিস এর মাধ্যমে পণ্য ডেলিভারি সম্পন্ন করে থাকি</li>
                        <li className="text-lg text-slate-600 mb-4">কুরিয়ারের মাধ্যমে ডেলিভারকৃত পণ্যের মূল্যের সম্পূর্ণ অথবা আংশিক মূল্য বিকাশ, ব্যাংকট্রান্সফার অথবা অনলাইন পেমেন্ট এর মাধ্যমে এডভান্স পেমেন্ট করে অর্ডার কনফার্ম করতে হবে</li>
                        <li className="text-lg text-slate-600 mb-4">ঢাকা/গাজীপুর/রংপুর/চট্টগ্রাম/খুলনা শহরে পণ্যের মূল্য ২০,০০০ টাকার উপরে হয়ে থাকলে পণ্যের আংশিক মূল্য পরিশোধ করতে হতে পারে</li>
                        <li className="text-lg text-slate-600 mb-4">কুরিয়ারের মাধ্যমে ডেলিভারকৃত পণ্যের সম্পূর্ণ কুরিয়ার চার্জ ক্রেতাকে বহন করতে হবে</li>
                        <li className="text-lg text-slate-600 mb-4">বর্তমানে অনলাইন অর্ডারে ডেলিভারির ক্ষেত্রে সময় ১ থেকে ৩ দিন অথবা তারও বেশি লাগতে পারে</li>
                        <li className="text-lg text-slate-600 mb-4">পেমেন্ট কনফার্মেশনের এসএমএস পাবার পর ৩ দিনের মধ্যে ক্রেতাকে পেমেন্ট করতে হবে। এর পর পেমেন্ট করলে পণ্য স্টক শেষ হয়ে যেতে পারে অথবা মূল্য পরিবর্তিত হতে পারে</li>
                        <li className="text-lg text-slate-600 mb-4">অর্ডারক্রীত পণ্য স্টকে না থাকলে ক্রেতার সম্মতিক্রমে পণ্য পরিবর্তন অথবা মূল্য রিফান্ড করা হবে</li>
                        <li className="text-lg text-slate-600 mb-4">বর্তমানে করোনা সংক্রমণ রোধে বিল্ডিং এর ভেতরে নির্দিষ্ট ফ্ল্যাট এ গিয়ে ডেলিভারি সাময়িক বন্ধ রাখা হয়েছে। ক্রেতাকে বিল্ডিং এর মেইন গেট থেকে পণ্য রিসিভ করতে হবে</li>
                        <li className="text-lg text-slate-600 mb-4">চট্টগ্রাম শহরের নির্দিষ্ট এরিয়াতে হোম ডেলিভারি সুবিধা রয়েছে। এরিয়াগুলো হল - আগ্রাবাদ, চৌমুহনী, দেওয়ানহাট, টাইগারপাস, লালখান বাজার, ওয়াসা, জিইসি মোড়, ২ নাম্বার গেট, মুরাদপুর, প্রবর্তক মোড়, জামালখান, চকবাজার, নাসিরাবাদ হাউজিং, খাতুনগঞ্জ, আসাদ্গঞ্জ, কাতাল্গঞ্জ, কোতোয়ালি, আন্দরকিল্লা, গনি বেকারি, কাজির দেউরি, মেহেদীবাগ, নিউ মার্কেট, কদমতলী, ফিরিঙ্গিবাজার, মাদারবাড়ী, বারিক বিল্ডিং, ডিসি হিল, ঈদগাহ, বউবাজার, পাহাড়তলি, সিডিএ আবাসিক, চট্টেশ্বরী, বরপুল, কাস্টমস, এয়ারপোর্ট, পতেঙ্গা,নেভাল, স্টিলমিল, ফ্রিপোর্ট, হালিশহর, সাগরিকা, অলংকার, একে খান, সিটি গেইট, সিএনভি, রাস্তার মাথা, চাদ্গাও আবাসিক, নতুন ব্রিজ, বাহাদুরঘাট, অক্সিজেন</li>
                        <li className="text-lg text-slate-600 mb-4">গাজীপুর শহরের নির্দিষ্ট এরিয়াতে হোম ডেলিভারি সুবিধা রয়েছে। এরিয়াগুলো হল - টাকশাল, শিমুলতলী, অডিয়েন্স, বিওএফ, ডুয়েট, মিষ্ট , জয়দেবপুর বাসস্ট্যান্ড, উত্তর ছায়াবীথি / দক্ষিণ ছায়াবীথি, জোড়পুকুর-মোড় , রাজদিঘীর পাড়, রাজবাড়ী মাঠ, রানীবিলাশ মনি স্কুল, ভ্যাট-ট্যাক্স ও ডিসি অফিস, জয়দেবপুর পাসপোর্ট অফিস, রেলওয়ে স্টেশন, রথ খোলা, সদর হসপিটাল, সিভিল সার্জন অফিস, সিটি কর্পোরেশন, ডাকঘর, ধান গবেষণা, কৃষি গবেষণা, পল্লী বিদ্যুৎ, ওয়্যারলেস গেট, স্যাটেলাইট অফিস , গ্রেট ওয়াল সিটি, নলজানী, চেরাগআলী (বেক্সিমকো ফার্মা), কলেজ গেট (সুরতরঙ্গ রোড / হাউস বিল্ডিং / শফিউদ্দিন রোড), বনমালা রোড (দত্তপাড়া হাউস বিল্ডিং / ব্র্যাক টাউন),</li>
                        <li className="text-lg text-slate-600 mb-4">এই এরিয়াগুলো মেইনরোড ও তারপাশে ডেলিভারি করা হবে - হোসেন মার্কেট , গাজীপুরা, বড়বাড়ি, তারগাছ , বোর্ড বাজার, ইসলামিক বিশ্ববিদ্যালয়, উন্মুক্ত বিশ্ববিদ্যালয়, জাতীয় বিশ্ববিদ্যালয়, সাইনবোর্ড ,মালেকের বাড়ি, কলম্বিয়া, ভোগড়া, বাইপাস,ভাওয়াল কলেজ, নাওজোড়, কড্ডা ব্রিজ, কোনাবাড়ি মার্কেট, কেন্দীয় মসজিদ কোনাবাড়ি, কৃষি বিশ্ববিদ্যালয়, হোতাপাড়া, সালনা বাজার</li>
                        <li className="text-lg text-slate-600 mb-4">ইন্টারন্যাশনাল পেমেন্টের ক্ষেত্রে ক্রেতা যে কার্ডের মাধ্যমে পেমেন্ট করেছেন অবশ্যই সেই কার্ডের স্বচ্ছ ছবি এবং কার্ডহোল্ডারের ভোটার আইডি / ন্যাশনাল আইডি / ড্রাইভিং লাইসেন্স / পাসপোর্ট এর স্বচ্ছ ছবি আমাদের অফিশিয়াল ইমেইল অথবা ফেসবুক পেজে পাঠাতে হবে। (ছবিতে অবশ্যই কার্ড নাম্বারের প্রথম এবং শেষ ৪ ডিজিট স্পষ্ট বুঝা যেতে হবে)</li>
                        <li className="text-lg text-slate-600 mb-4">ইন্টারন্যাশনাল কার্ডে কোন ইএমআই(EMI) প্রযোজ্য নয়</li>
                        <li className="text-lg text-slate-600 mb-4">কোন স্পেশাল ক্যাম্পেইন অফারের পণ্যে / কোন পণ্যে ভাউচার বা কুপন ব্যাবহার করে ডিস্কাউন্ট পেলে সে পণ্য থেকে স্টার পয়েন্ট অর্জিত হবে না। তদ্রূপ কোন অফারের পণ্যে / স্পেশাল ডিস্কাউন্টযুক্ত পণ্যে আর কোন কুপন ব্যাবহার করা যাবে না</li>
                    </ul>
                    <div className="policy mb-6">
                        <h3 className="text-2xl font-bold font-title text-slate-900 mb-4">এক্সপ্রেস ডেলিভারির শর্তাবলি</h3>
                        <ul className="list-stl">
                            <li className="text-lg text-slate-600 mb-4">শুধুমাত্র পণ্য নির্দিষ্ট স্টকে থাকলে এক্সপ্রেস ডেলিভারিতে অর্ডার নেয়া হয়ে থাকে</li>
                            <li className="text-lg text-slate-600 mb-4">অর্ডার কনফার্মের সময় থেকে ২৪ কর্মঘণ্টার মধ্যে এক্সপ্রেস ডেলিভারি করে দেয়া হয়, এবং ডেলিভারি করতে ২৪ কর্মঘন্টার বেশি সময় লাগলে ক্রেতাকে কোন ডেলিভারি চার্জ বহন করতে হবে না। (শর্ত প্রযোজ্য)</li>
                            <li className="text-lg text-slate-600 mb-4">ডেলিভারি চার্জ পণ্যের আকার এবং ওজনের উপর নির্ভর করবে। অর্ডার কনফার্ম করার পূর্বে আমাদের এজেন্ট কল করে ডেলিভারি সম্পর্কিত বিস্তারিত তথ্য প্রদান করবেন</li>
                            <li className="text-lg text-slate-600 mb-4">এক্সপ্রেস ডেলিভারি উক্ত দিন দুপুর ১২টার আগে কনফার্ম করলে সেই দিনেই ডেলিভারি করে দেয়া হবে</li>
                            <li className="text-lg text-slate-600">নির্দিষ্ট দিনে দুপুর ১২ টার পর এক্সপ্রেস ডেলিভারি কনফার্ম করলে তা পরবর্তী দিন ডেলিভারি দেয়া হবে</li>
                        </ul>
                    </div>
                    <div className="contact flex justify-center items-center border-t border-slate-200 gap-5 py-4">
                        <span className="text-xl font-bold font-title text-slate-900">যে কোন জিজ্ঞাসা বা অর্ডার করতে আমাদের কল করুন:</span> <Link href="tel:01720060958" className="text-xl font-bold font-title text-primary"><BsFillTelephoneFill/> 01720060958</Link> <span className="text-sm text-slate-500">অথবা</span> <Link href="tel:01720060977" className="text-xl font-bold font-title text-primary"><BsFillTelephoneFill/> 01720060977</Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default page;