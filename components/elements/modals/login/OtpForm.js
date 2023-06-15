"use client";

import React, { useState } from "react";

const OtpForm = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
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

  console.log(otp, "touhid-otp");
  return (
    <div className="otp">
      <div className="flex w-full items-center justify-between mb-8">
        {[...Array(6)].map((_, index) => (
          <React.Fragment key={index}>
            <input
              type="text"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-3xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
            {index !== 5 && <span className="text-3xl text-slate-300">-</span>}
          </React.Fragment>
        ))}
      </div>
      <button type="submit" className="primary-btn w-full">
        কোড নিশ্চিত করুন
      </button>
    </div>
  );
};

export default OtpForm;
