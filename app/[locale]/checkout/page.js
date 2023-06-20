"use client";
import CartCard from "@/components/CartCard";
import CustomRadio from "@/components/elements/CustomRadio";
import PayOptionIcon from "@/components/elements/svg/PayOptionIcon";
import Image from "next/image";
import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";

const payOptions = [
  {
    key: "cash_on_delivery",
    title: "ক্যাশ অন ডেলিভারি",
    images: [
      { url: "/assets/images/payments/cash-on-del.png", height: 35, width: 35 },
    ],
  },
  {
    key: "bkash",
    title: "বিকাশ পেমেন্ট",
    images: [
      { url: "/assets/images/payments/bkash.png", height: 35, width: 64 },
    ],
  },
  {
    key: "visa",
    title: "অনলাইন পেমেন্ট",
    images: [
      { url: "/assets/images/payments/visa-icon.png", height: 35, width: 35 },
      { url: "/assets/images/payments/visa.png", height: 35, width: 64 },
    ],
  },
];

const deliveryMethods = [
  { key: "inside_dhaka", title: "ঢাকার ভিতরে", charges: 60 },
  { key: "outside_dhaka", title: "ঢাকার বাহিরে", charges: 130 },
];

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState(payOptions[0]);
  const [deliveryMethod, setDeliveryMethod] = useState(deliveryMethods[0]);
  const [orderCollapsed, setOrderCollapsed] = useState(false);

  //slicing cart items based on orderCollapsed
  const cart = new Array(5).fill(3);
  const cartItems = orderCollapsed ? cart : cart.slice(0, 3);

  const handlePayOptionChange = (option) => {
    setSelectedOption(option);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();
  };

  return (
    <section className="container py-8">
      <div className="grid lg:grid-cols-2 mb-8 gap-8">
        <div className="lg:order-last bg-slate-200 rounded-lg p-6">
          <h3 className="text-xl text-slate-700 font-bold">আপনার অর্ডার</h3>
          <div className="mt-4">
            {cartItems.map((item, index) =>
              index == 2 && !orderCollapsed ? (
                <div key={item} className="relative">
                  <CartCard item={item} />
                  <div className="w-full h-full rounded absolute left-0 top-0 flex-center backdrop-blur-sm">
                    <button
                      className="text-btn mt-20 font-bold"
                      onClick={() => setOrderCollapsed(true)}
                    >
                      <FiPlus />
                      আরও ৩
                    </button>
                  </div>
                </div>
              ) : (
                <CartCard key={item} item={item} />
              )
            )}
          </div>
          <div className="p-4 mt-8 bg-amber-200 shadow border border-primary rounded-lg">
            <h4 className="text-slate-700 font-bold">
              ডেলিভারি মেথড নির্বাচন করুন
            </h4>
            <div className="flex justify-between items-center py-3">
              {deliveryMethods.map((dm) => (
                <div key={dm.key} className="flex gap-2 items-center">
                  <CustomRadio
                    isChecked={deliveryMethod.key === dm.key}
                    label={dm.title}
                    onClick={() => setDeliveryMethod(dm)}
                  />
                  <p className="font-bold">৳{dm.charges}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-slate-700 p-4 rounded-lg shadow bg-white my-3">
            <div className="flex-between my-2">
              <p>মোট টাকার পরিমান</p>
              <p>৳5968.00</p>
            </div>
            <div className="flex-between my-2">
              <p>ডিসকাউন্ট পাচ্ছেন</p>
              <p className="text-red-500">-৳2654.00</p>
            </div>
            <div className="flex-between my-2">
              <p>কুপন/প্রোমো ডিসকাউন্ট</p>
              <p className="text-primary underline cursor-pointer">
                কোড যোগ করুন
              </p>
            </div>
            <div className="border-b border-slate-300 my-2"></div>
            <div className="flex-between my-2">
              <p>মোট পরিমান</p>
              <p>-৳3314.00</p>
            </div>
            <div className="flex-between my-2">
              <p>ডেলিভারি খরচ</p>
              <p>৳60.00</p>
            </div>
            <div className="border-b border-slate-900 my-2"></div>
            <div className="flex-between my-2 font-bold">
              <p>পরিশোধ করতে হবে</p>
              <p>৳3374.00</p>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-slate-700 text-xl font-bold border-b border-slate-300 py-4">
            অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে{" "}
            <span className="text-primary">অর্ডার কনফার্ম করুন</span> বাটনে
            ক্লিক করুন
          </h3>
          <form className="w-full mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control mb-4">
                <label className="block text-base text-slate-900 mb-2">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="নাম লিখুন"
                  {...register("name", {
                    required: "Name is required.",
                  })}
                />
                {errors.name && (
                  <p className="errorMsg">{errors.name.message}</p>
                )}
              </div>

              <div className="form-control mb-4">
                <label className="block text-base text-slate-900 mb-2">
                  মোবাইল নাম্বার
                </label>
                <input
                  type="mobile"
                  name="mobile"
                  defaultValue={"01768572658"}
                  placeholder="ইমেইল লিখুন"
                  {...register("mobile", {})}
                  disabled={true}
                  className="cursor-not-allowed"
                />
                {errors.mobile && (
                  <p className="errorMsg">{errors.mobile.message}</p>
                )}
              </div>
            </div>
            <div className="form-control mb-4">
              <label className="block text-base text-slate-900 mb-2">
                আপনার ঠিকানা
              </label>
              <textarea
                className="h-[148px] border border-slate-300 p-4"
                type="text"
                name="address"
                placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                {...register("address", {
                  required: "Address is required.",
                })}
              />
              {errors.address && (
                <p className="errorMsg">{errors.address.message}</p>
              )}
            </div>
            <div className="form-control my-8">
              <div className="border-b-2 border-slate-300 border-dashed"></div>
            </div>
            <div className="form-control">
              <h3 className="inline-flex gap-2 text-xl font-bold">
                <PayOptionIcon />
                <span>আপনি কিভাবে পরিশোধ করতে চান</span>
              </h3>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {payOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => handlePayOptionChange(option)}
                    className={`rounded-lg ${
                      selectedOption.key === option.key
                        ? "bg-amber-200 border border-primary"
                        : "bg-slate-100"
                    } p-4 relative text-slate-700 flex flex-col justify-between gap-2`}
                  >
                    <div className="flex justify-end">
                      <CustomRadio
                        isChecked={selectedOption.key === option.key}
                      />
                    </div>
                    <div className="flex gap-4">
                      {option.images.map((image) => (
                        <Image
                          key={image.url}
                          src={image.url}
                          height={image.height}
                          width={image.width}
                          alt="icon"
                          sizes="100vh"
                        />
                      ))}
                    </div>
                    <h3>{option.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-control mt-11">
              <button type="submit" className="primary-btn w-full">
                অর্ডার কনফার্ম করুন
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
