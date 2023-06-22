"use client";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useVerifyOtpMutation } from "@/store/features/api/authAPI";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/features/authSlice";

const OtpForm = ({ selectedCountry, phone, setShowModal }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [verifyOTP, { isSuccess, data: user, isError }] =
    useVerifyOtpMutation();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess && user) {
      toast.success("Login successful");
      localStorage.setItem("token", user.token);
      dispatch(setUser(user.data));
      setShowModal(false);
      router.push("/dashboard");
      // console.log(user, "user Data");
    } else if (isError) {
      toast.error("Oops! OTP not Matched");
    }
  }, [isSuccess, isError, user, dispatch, router, setShowModal]);

  const handleOTPVerification = () => {
    const jointedOtp = otp.join("");
    if (jointedOtp.length < 6) {
      setError(true);
    } else {
      const optData = {
        phone_no: phone,
        country: selectedCountry?.name,
        code: jointedOtp,
      };
      // console.log(optData, "Otp data");
      verifyOTP(optData);
    }
  };

  const handleChange = (e, index) => {
    setError(false);
    const { value } = e.target;
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      // Move focus to the next input box
      if (value && index < 5) {
        const nextInput = e.target.nextSibling.nextSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }

      // Move focus to the previous input box when backspace is pressed and the current input is empty
      if (!value && index > 0) {
        const previousInput = e.target.previousSibling.previousSibling;
        if (previousInput) {
          previousInput.focus();
        }
      }

      return newOtp;
    });
  };

  // console.log(otp, "touhid-otp");
  return (
    <div className="otp">
      <div className=" mb-8">
        <div className="flex w-full items-center justify-between">
          {[...Array(6)].map((_, index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-3xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              {index !== 5 && (
                <span className="text-3xl text-slate-300">-</span>
              )}
            </React.Fragment>
          ))}
        </div>
        {error && <p className="errorMsg">6 digit valid OTP required</p>}
      </div>
      <button
        type="submit"
        onClick={handleOTPVerification}
        className="primary-btn w-full"
      >
        কোড নিশ্চিত করুন
      </button>
    </div>
  );
};

export default OtpForm;
