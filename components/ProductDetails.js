"use client";

import Image from "next/image";
import Link from "next/link";
import ThumbSlider from "./elements/sliders/ThumbSlider";
import ProductBanner from "./elements/sliders/ProductBanner";
import ProductReview from "./elements/sliders/ProductReview";

// ** Import Icon
import {
  HiStar,
  HiChatBubbleLeftRight,
  HiShare,
  HiPlayCircle,
} from "react-icons/hi2";
import { TfiAngleRight } from "react-icons/tfi";
import { TbTag } from "react-icons/tb";
import { IoCopy } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { QuestionAnswer } from "@/app/products/[slug]/QuestionAnswer";

const ProductDetails = ({ product }) => {
  return (
    <>
      <div className="product-details">
        <div className="flex gap-5">
          <div className="w-1/2">
            <ThumbSlider product={product} />
          </div>
          <div className="w-1/2">
            <div className="product-content-wrap">
              <p className="text-sm font-bold text-primary capitalize mb-2">
                {product?.brand || "Havit"}
              </p>
              <h5 className="text-2xl font-bold font-title text-slate-900">
                {product?.title ||
                  "Insta360 GO 2 একশন ক্যামেরা 9MP 3K জলরোধী একশন ক্যামেরা"}
              </h5>
              <div className="meta-data flex items-center gap-8 my-2">
                <div className="rating-point flex gap-1">
                  <span>
                    <HiStar size={20} />
                  </span>
                  <span>
                    <HiStar size={20} />
                  </span>
                  <span>
                    <HiStar size={20} />
                  </span>
                  <span>
                    <HiStar size={20} />
                  </span>
                  <span>
                    <HiStar size={20} />
                  </span>
                  <span>4.5</span>
                </div>
                <p>1265 রেটিং</p>
                <p>
                  <HiChatBubbleLeftRight
                    size={20}
                    className="text-secondary-700"
                  />{" "}
                  32 প্রশ্ন এবং উত্তর
                </p>
                <p>
                  <HiShare size={20} /> শেয়ার করুন
                </p>
              </div>
              <p className="desc text-base text-slate-600">
                {product?.desc ||
                  "nsta360 GO 2 9MP 3K ওয়াটারপ্রুফ স্মল অ্যাকশন ক্যামেরা Insta360 GO 2 9MP 3K ওয়াটারপ্রুফ স্মল অ্যাকশন ক্যামেরা সহ আসে। এই অ্যাকশন ক্যামেরাটি ফ্লোস্টেট স্ট্যাবিলাইজেশন, হাইপারল্যাপস, ওয়াইফাই প্রিভিউ, হ্যান্ডস-ফ্রি, মাউন্ট এনিহোয়ার, 1440p 50fps সহ বৈশিষ্ট্যযুক্ত। 4m (13ft) পর্যন্ত জলরোধী এবং এটি 13' পর্যন্ত IPX8 জলরোধী"}
              </p>
              <div className="product-price flex items-center gap-4 border-b border-slate-200 py-5">
                <span className="text-3xl/[48px] font-bold font-title text-slate-900">
                  {product?.price || "৳ 22,153"}{" "}
                </span>
                <del className="old-price text-lg/[24px] font-normal text-slate-400">
                  {product?.oldPrice ? `$ ${product?.oldPrice}` : "৳ 32,999"}
                </del>
                <span className="discount inline-block text-base font-semibold font-title text-white bg-red-500 rounded-md py-1 px-2">
                  {product?.discount?.percentage || "-44"}%
                </span>
              </div>
              <div className="color-select my-5">
                <p className="text-slate-900 mb-2">কালার নির্বাচন করুন:</p>
                <div className="flex  gap-2">
                  {new Array(8).fill(8)?.map((clr, i) => (
                    <div className="input-grp" key={i}>
                      <input
                        type="radio"
                        id={`clr-${i}`}
                        name="color"
                        value=""
                        className="peer hidden"
                      />
                      <label
                        className="inline-block border border-slate-300 rounded-lg p-1 cursor-pointer peer-checked:border-primary"
                        htmlFor={`cat-${i}`}
                      >
                        <Image
                          src={`/assets/images/shop/color-product.png`}
                          width={52}
                          height={52}
                          alt=""
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="size-select">
                <div className="flex justify-between items-center">
                  <p className="text-slate-900 mb-2">সাইজ নির্বাচন করুন:</p>
                  <p className="text-base text-secondary-700 mb-2">
                    সাইজ চার্ট দেখুন <TfiAngleRight />
                  </p>
                </div>
                <div className="flex  gap-2">
                  {new Array(6).fill(8)?.map((size, i) => (
                    <div className="input-grp" key={i}>
                      <input
                        type="radio"
                        id={`size-${i}`}
                        name="size"
                        value=""
                        className="peer hidden"
                      />
                      <label
                        className="inline-block text-slate-700 border border-slate-300 rounded-lg px-4 py-3 whitespace-nowrap cursor-pointer peer-checked:text-primary peer-checked:bg-[#FFF6EB] peer-checked:border-primary"
                        htmlFor={`size-${i}`}
                      >
                        Extra Large
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 mb-8">
                <p className="font-semibold font-title text-slate-900 mb-2">
                  সেরা অফার <TbTag size={24} className="text-primary mb-1" />
                </p>
                <ul className="coupon-info">
                  <li className="relative text-slate-900 pl-4">
                    কুপন ডিসকাউন্ট:{" "}
                    <span className="font-semibold text-title text-secondary-700">
                      &#2547;400 ছাড়!
                    </span>
                  </li>
                  <li className="relative text-slate-900 pl-4 my-2 before:!top-3">
                    কুপন কোড:{" "}
                    <span className="inline-block text-primary border border-dashed border-primary rounded px-2 py-1 ml-1">
                      SST2023A{" "}
                      <IoCopy size={20} className="text-primary mb-1" />
                    </span>
                  </li>
                  <li className="relative text-slate-900 pl-4 mb-3">
                    প্রযোজ্য: ৳2000 উপরে অর্ডারে (শুধুমাত্র প্রথম কেনাকাটায়)
                  </li>
                </ul>
                <Link href="#" className="text-secondary-700 underline">
                  অফারের সকল প্রডাক্ট দেখুন
                </Link>
              </div>
              <div className="delivery flex flex-wrap gap-y-7 bg-slate-50 border border-slate-200 rounded-lg py-4">
                <div className="single-info">
                  <Image
                    src={`/assets/images/icons/inside.png`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                  />
                  <div>
                    <p className="text-slate-600">ডেলিভারি খরচ:</p>
                    <p className="text-slate-600">ঢাকার ভিতরে - ৬০ টাকা</p>
                  </div>
                </div>
                <div className="single-info border-l border-slate-200">
                  <Image
                    src={`/assets/images/icons/outside.png`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                  />
                  <div>
                    <p className="text-slate-600">ডেলিভারি খরচ:</p>
                    <p className="text-slate-600">ঢাকার বাইরে - ১৩০ টাকা</p>
                  </div>
                </div>
                <div className="single-info">
                  <Image
                    src={`/assets/images/icons/COD.png`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                  />
                  <div>
                    <p className="text-slate-600">
                      সারাদেশ এ ক্যাশ অন ডেলিভারি
                    </p>
                  </div>
                </div>
                <div className="single-info border-l border-slate-200">
                  <Image
                    src={`/assets/images/icons/paymnt.png`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                  />
                  <div>
                    <p className="text-slate-600">
                      নিরাপদ পেমেন্ট করার সহজ মাধ্যম
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* tabs view */}
            <ul className="product-tab-links flex justify-between items-center border-b border-slate-200 py-5 mt-5">
              <li>
                <Link href={`#`} className="active">
                  প্রডাক্টের বিবরণ
                </Link>
              </li>
              <li>
                <Link href={`#`}>স্পেসিফিকেশন</Link>
              </li>
              <li>
                <Link href={`#`}>রেটিং ও রিভিউ</Link>
              </li>
              <li>
                <Link href={`#`}>প্রশ্ন ও উত্তর</Link>
              </li>
            </ul>
            <div className="product-tab-content py-8 border-b-4 border-slate-200">
              <div className="description">
                <h4 className="text-2xl font-bold font-title text-slate-900">
                  প্রডাক্টের বিবরণ:
                </h4>
                <p className="text-slate-700 my-5">
                  Insta360 Go 2 Tiny Mighty Action Camera 1440P 50fps স্পোর্টস
                  ক্যামেরা IPX8 4M ওয়াটারপ্রুফ ফ্লোস্টেট স্ট্যাবিলাইজেশন
                  হাইপারল্যাপ্স স্লো মোশন রি-মোট কন্ট্রোল অটো এডিটিং WI-FI
                  প্রিভিউ সমর্থন করে
                  <br />
                  <br />
                  Insta360 GO 2 হল বিশ্বের সবচেয়ে ছোট অ্যাকশন ক্যামেরা৷ এটির
                  ওজন আপনার পুরানো অ্যাকশনের তুলনায় প্রায় 6X হালকা। 1/2.3
                  ইঞ্চি ইমেজ সেন্সর সহ, 1440P 50fps মসৃণ এবং পরিষ্কার ভিডিও
                  রেকর্ড করতে পারে; লেন্স গার্ড সহ 4 মিটার IPX8 ওয়াটারপ্রুফ
                  সমর্থন করে【 মাউন্ট এনিহোয়ার】 GO 2 এত ছোট, এটি যেকোনো
                  জায়গায় ফিট করে৷ গিটার? সহজ। বিড়াল? আচ্ছা...যতক্ষণ আপনার
                  বিড়াল আসলে আপনার কথা শোনে। যেকোন জায়গায় মাউন্ট আপ করতে এবং
                  আপনার জীবনের সেরা মুহূর্তগুলি ক্যাপচার করতে ইন-দ্য-বক্স
                  আনুষাঙ্গিকগুলি ব্যবহার করুন৷ দিগন্ত লক পুরোপুরি দিগন্ত সমতল
                  করতে পারে; স্লো মোশন ফাংশন সুপার স্মুথ 120fps-এ একটি
                  গুরুত্বপূর্ণ মুহূর্তকে 4X স্লো-মোতে কমিয়ে দিতে পারে
                </p>
                <ol className="list-decimal ps-4">
                  <li className="text-slate-700 mb-4">
                    আরও বেশি জায়গায় GO 2 মাউন্ট করুন এবং অ্যাকশনের জন্য
                    প্রস্তুত হন
                  </li>
                  <li className="text-slate-700 mb-4">
                    1/4&#x201D; স্ক্রু মাউন্ট এবং 2-প্রং মাউন্ট আনুষাঙ্গিক
                    সমর্থন করে
                  </li>
                  <li className="text-slate-700 mb-4">
                    দুটি আঠালো বেস সহ যেকোনো পৃষ্ঠে GO 2 আটকে দিন।
                  </li>
                </ol>
                <div className="feature">
                  <h6 className="text-base[16px] font-semibold font-title text-slate-700 mb-3">
                    মূল বৈশিষ্ট্য:
                  </h6>
                  <ul className="list-disc ps-4">
                    <li className="text-slate-700 mb-4">
                      ক্ষুদ্র এবং পরাক্রমশালী: থাম্ব-আকারের অ্যাকশন ক্যামেরা যার
                      ওজন মাত্র 1 আউজ। চটকদার 1440p ভিডিও শুট করতে একটি
                      শক্তিশালী 1/2.3” ইমেজ সেন্সর ব্যবহার করে। 13ft পর্যন্ত
                      শ্রমসাধ্য এবং জলরোধী
                    </li>
                    <li className="text-slate-700 mb-4">
                      যেকোনো জায়গায় মাউন্ট করুন: পরিধানযোগ্য ক্যামেরা ডিজাইন।
                      মাউন্ট GO 2 এর ম্যাগনেটিক ইন-দ্য-বক্স আনুষাঙ্গিক সহ যেকোনো
                      জায়গায় হ্যান্ডস-ফ্রি শুট করুন
                    </li>
                    <li className="text-slate-700 mb-4">
                      ফ্লোস্টেট স্টেবিলাইজেশন: ইমেজ স্টেবিলাইজেশন এবং হরাইজন
                      লেভেলিং অ্যালগরিদম আপনার ভিডিও স্থির রাখে আপনি যেখানেই GO
                      2 মাউন্ট করুন না কেন। অ্যাকশন স্পোর্ট প্রস্তুত
                    </li>
                    <li className="text-slate-700 mb-4">
                      মাল্টি-ইউজ চার্জ কেস: একটি পকেট-আকারের কেস সহ আসে যা একটি
                      চার্জার, রিমোট কন্ট্রোল এবং ট্রাইপড সবই এক। 150 মিনিট
                      পর্যন্ত ব্যাটারির আয়ু বাড়ায়
                    </li>
                    <li className="text-slate-700 mb-4">
                      বাক্সে: 1x Insta360 GO 2, 1x চার্জ কেস, 1x লেন্স গার্ড
                      (প্রি-ইনস্টল), 1x ম্যাগনেট পেন্ডেন্ট, 1x পিভট স্ট্যান্ড,
                      1x ইজি ক্লিপ এবং 1x টাইপ-সি চার্জ ক্যাবল।
                    </li>
                  </ul>
                  <Image
                    src={`/assets/images/shop/insta360.jpg`}
                    alt="Insta 360"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto mt-4"
                  />
                  <Image
                    src={`/assets/images/shop/insta-quality.jpg`}
                    alt="Insta 360"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto mt-6"
                  />
                </div>
              </div>
              <div className="blogs my-8">
                <p className="text-primary mb-1">ফ্লোস্টেট স্টেবিলাইজেশন</p>
                <h4 className="text-2xl font-bold font-title text-slate-900">
                  বাটারী মসৃণ ধার্মিকতা
                </h4>
                <p className="text-slate-700 mt-5">
                  এটা বিশ্বাস করার জন্য আপনাকে দেখতে হবে। ফ্লোস্টেট
                  স্টেবিলাইজেশন আপনার শট এবং দিগন্তকে পুরোপুরি স্থির রাখে।
                  ঝাঁকান, বাম্প এবং রোল প্রস্তুত।
                </p>
                <div className="grid grid-cols-2 gap-5 mt-10">
                  <div className="col-span-1">
                    <div className="blog">
                      <Image
                        src={`/assets/images/shop/slowmo.jpg`}
                        alt="Slow Motion"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto"
                      />
                      <div className="content">
                        <h5 className="text-2xl font-bold font-title text-slate-900 my-4">
                          ওওওওহ আস্তে আস্তে
                        </h5>
                        <p className="text-slate-700">
                          গতি সামলাতে পারেননি? মাখন-মসৃণ 120fps-এ একটি
                          গুরুত্বপূর্ণ মুহূর্তকে 4x স্লো-মোতে স্লো করুন
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="blog">
                      <Image
                        src={`/assets/images/shop/ai.jpg`}
                        alt="AI"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto"
                      />
                      <div className="content">
                        <h5 className="text-2xl font-bold font-title text-slate-900 my-4">
                          AI হল দখল...
                        </h5>
                        <p className="text-slate-700">
                          FlashCut 2.0 এর সাথে আপনার সম্পাদনা করুন। AI আপনার
                          পছন্দের ক্লিপগুলি নেয়, সেগুলিকে একটি গল্পে রাখে
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="blog flex items-center gap-5">
                      <Image
                        src={`/assets/images/shop/magnet.jpg`}
                        alt="Magnet"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto"
                      />
                      <div className="content">
                        <h5 className="text-2xl font-bold font-title text-slate-900 my-4">
                          দেখো, হাত নেই!
                        </h5>
                        <p className="text-slate-700">
                          শট পেতে আর কোন ফিডলিং নেই। ম্যাগনেট প্যান্ডেন্টের সাথে
                          আপনার শার্টে GO 2 পপ করুন, রেকর্ড করতে এবং শুটিং করতে
                          টিপুন। এমনকি একটি বাচ্চাও এটি বের করতে পারে।
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="blog flex items-center gap-5">
                      <div className="content">
                        <h5 className="text-2xl font-bold font-title text-slate-900 my-4">
                          ওওআহহহ এটা দ্রুত।
                        </h5>
                        <p className="text-slate-700">
                          জ্যাম টাইমশিফ্ট মোডের সাথে একটি দ্রুত হাইপারল্যাপসে
                          সমস্ত অ্যাকশন প্যাক করুন। বাস্তব জীবনের চেয়ে 6 গুণ
                          দ্রুত।
                        </p>
                      </div>
                      <Image
                        src={`/assets/images/shop/fastmo.jpg`}
                        alt="Magnet"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold font-title text-slate-900 mb-4">
                  পৃথিবী তোমার খেলার মাঠ
                </h4>
                <div className="relative bg-slate-100 border-slate-200 rounded-xl p-4 pb-8">
                  <ProductBanner />
                </div>
                <div className="relative bg-slate-100 border-slate-200 rounded-xl p-4 mt-8">
                  <ProductReview />
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-2xl font-bold font-title text-slate-900 mb-4">
                  যা যা সাথে থাকবে
                </h4>
                <Image
                  src={`/assets/images/shop/accessories.jpg`}
                  alt="Insta 360"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto"
                />
              </div>
              <div className="my-8">
                <h4 className="text-2xl font-bold font-title text-slate-900">
                  রিভিউ ভিডিও
                </h4>
                <div className="slider-imag relative mt-4">
                  <Image
                    src={`/assets/images/shop/video-review.jpg`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto"
                  />
                  <a
                    href="youtube.com"
                    target="_blank"
                    className="vid-icon absolute inline-flex justify-center items-center top-1/2 left-1/2 w-[72px] h-[72px] rounded-full drop-shadow-[0_0px_60px_rgba(0,0,0,0.16)] translate-x-[-50%] translate-y-[-50%]"
                  >
                    <HiPlayCircle
                      size={60}
                      className="text-white hover:text-primary"
                    />
                  </a>
                </div>
              </div>
              {/* Product QA  */}
              <QuestionAnswer />
              <div className="contact bg-amber-200 border border-primary rounded-xl p-5 text-center">
                <h5 className="text-2xl font-bold font-title text-slate-900 mb-3">
                  আরও কিছু জানার থাকলে
                </h5>
                <p className="flex justify-center items-center gap-4">
                  <span className="text-base text-slate-900">কল করুন:</span>{" "}
                  <Link
                    href="tel:01720060958"
                    className="text-2xl font-bold font-title text-primary"
                  >
                    <BsFillTelephoneFill /> 01720060958
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
