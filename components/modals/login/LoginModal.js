"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import OtpForm from "./OtpForm";
import Modal from "@/components/elements/Modal";

//Hooks
import {
  useGetCountriesQuery,
  useOtpLoginMutation,
} from "@/store/features/api/authAPI";
import { toast } from "react-toastify";

const LoginModal = ({ showModal, setShowModal, title }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Bangladesh",
    flag: "🇧🇩",
    code: "BD",
    dial_code: "+880",
  });
  const { data, isLoading } = useGetCountriesQuery();

  const getCountryName = (dialCode) => {
    const country = countries.find((country) => country.dial_code === dialCode);
    return country || selectedCountry;
  };

  const countries = data?.data || [];

  const [sendOTP, { isSuccess, data: otpResponse, isError }] =
    useOtpLoginMutation();

  useEffect(() => {
    if (isSuccess && otpResponse) {
      toast.success("OTP has been sent to your mobile");
      toast(otpResponse?.otp_message);
      console.log(otpResponse, "OTP Response");
      setOtpSent(true);
    } else if (isError) {
      console.error("Failed to send OTP");
    }
  }, [isSuccess, isError, otpResponse]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const country = getCountryName(data.dial_code);
    const loginData = {
      phone_no: data.phone,
      country: country?.name,
    };
    // console.log(loginData, "loginData");
    setPhone(data.phone);
    setSelectedCountry(country);
    sendOTP(loginData);
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
            ? `এইমাত্র আমরা আপনার মোবাইল নাম্বারে একটি ৬ সংখ্যার OTP  কোড পাঠিয়েছি (${
                selectedCountry.dial_code + phone
              })`
            : `শুধুমাত্র মোবাইল নাম্বার যাচাই করে সততা স্টলের একজন আদর্শ মেম্বার হয়ে
          যান`}
        </p>
        {!otpSent ? (
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8">
              <label className="block text-base mb-2">মোবাইল</label>
              <div className="flex items-center">
                <select
                  className="h-12 text-base font-title font-normal px-2 rounded-s-lg border border-gray-300 focus:outline-none focus:border-primary"
                  {...register("dial_code")}
                >
                  {countries.map((country) => (
                    <option
                      selected={country.name === selectedCountry.name}
                      key={country.name}
                      value={country.dial_code}
                    >
                      {country.code} ({country.dial_code})
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  className="w-full rounded-s-none rounded-e-lg border border-l-0 border-gray-300 focus:outline-none focus:border-primary"
                  name="phone"
                  placeholder="আপনার মোবাইল নাম্বার"
                  {...register("phone", {
                    required: "Phone number is required.",
                  })}
                />
              </div>
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
          <OtpForm
            phone={phone}
            selectedCountry={selectedCountry}
            setShowModal={setShowModal}
          />
        )}
        <SocialLogin />
      </div>
    </Modal>
  );
};

export default LoginModal;
