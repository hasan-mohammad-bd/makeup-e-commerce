"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import OtpForm from "./OtpForm";
import Modal from "@/components/elements/Modal";

const LoginModal = ({ showModal, setShowModal, title }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setOtpSent(true);
    setPhone(data.phone);
  };

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title={title}>
      <div className="w-[27rem] text-slate-500">
        <div>
          <Image
            src={`/assets/images/logo.png`}
            alt={"Logo"}
            width={200}
            height={48}
          />
        </div>
        <p className="py-6 ">
          {otpSent
            ? `এইমাত্র আমরা আপনার মোবাইল নাম্বারে একটি ৬ সংখ্যার OTP  কোড পাঠিয়েছি (${phone})`
            : `শুধুমাত্র মোবাইল নাম্বার যাচাই করে সততা স্টলের একজন আদর্শ মেম্বার হয়ে
          যান`}
        </p>
        {!otpSent ? (
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mb-8">
              <label className="block text-base mb-2">মোবাইল</label>
              <input
                type="text"
                className="w-full rounded-lg"
                name="phone"
                placeholder="আপনার মোবাইল নাম্বার"
                {...register("phone", {
                  required: "Phone number is required.",
                })}
              />
              {errors.phone && (
                <p className="errorMsg">{errors.phone.message}</p>
              )}
            </div>

            <div className="form-control">
              <label></label>
              <button type="submit" className="primary-btn w-full">
                কোড পাঠান
              </button>
            </div>
          </form>
        ) : (
          <OtpForm />
        )}
        <SocialLogin />
      </div>
    </Modal>
  );
};

export default LoginModal;
