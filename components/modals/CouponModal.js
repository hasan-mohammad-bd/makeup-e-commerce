"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Modal from "../elements/Modal";
import { useForm } from "react-hook-form";
import axiosInstance from "@/utils/axiosInstance";
import { addDiscountInfo } from "@/store/features/cartSlice";

const CouponModal = ({ showModal, setShowModal, title }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    event.preventDefault();
    setError(false);
    try {
      const coupon = data.coupon_code;
      const response = await axiosInstance.get(`coupons/${coupon}`);
      if (response.status === 200) {
        toast.success("coupon discount applied");
        dispatch(addDiscountInfo(response.data.data));
        setShowModal(false); //closing coupon modal
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };
  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title={title}>
      <div className="w-[27rem] text-slate-500">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-6 mb-8 form-control">
            <input
              type="text"
              className=""
              name="coupon_code"
              placeholder="কুপন কোড লিখুন"
              {...register("coupon_code", {
                required: "Coupon code is required.",
              })}
            />
            {errors.coupon_code && (
              <p className="errorMsg">{errors.coupon_code.message}</p>
            )}
            {error && (
              <p className="errorMsg">
                এই কোডে ভাউচার পাওয়া যায় নি, সঠিক কোড খুজে আবার চেষ্টা করুন
              </p>
            )}
          </div>
          <div className="form-control">
            <label></label>
            <button type="submit" className="primary-btn w-full">
              যাচাই করুন
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CouponModal;
