"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Modal from "../elements/Modal";
import { useForm } from "react-hook-form";
import axiosInstance from "@/lib/axios-instance";
import { addDiscountInfo } from "@/store/slices/cartSlice";
import { setGlobalLoader } from "@/store/slices/commonSlice";

const CouponModal = ({ showModal, setShowModal, total }) => {
	const { translations } = useSelector((state) => state.common);
	const [error, setError] = useState("");
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// console.log(total, "total");
	const onSubmit = async (data, event) => {
		event.preventDefault();
		setError("");
		dispatch(setGlobalLoader(true));
		try {
			const coupon = data.coupon_code;
			const response = await axiosInstance.get(`coupons/${coupon}`);
			dispatch(setGlobalLoader(false));
			if (response.status === 200) {
				dispatch(addDiscountInfo(response.data.data));
				toast.success(
					`Coupon added, Applicable for minimum order amount ${response.data.data.minimum_order_amount}`
				);
				setShowModal(false); //closing coupon modal
			} else {
				setError("Invalid coupon code");
			}
		} catch (error) {
			setError(error?.response?.data?.message || "Invalid coupon code");
			dispatch(setGlobalLoader(false));
		}
	};
	return (
		<Modal
			showModal={showModal}
			setShowModal={setShowModal}
			title={translations["coupon-code"] || "Coupon code"}
		>
			<div className="md:w-[27rem] text-slate-500">
				<form className="" onSubmit={handleSubmit(onSubmit)}>
					<div className="mt-5 mb-6 md:mb-8 form-control">
						<input
							type="text"
							className=""
							name="coupon_code"
							placeholder={translations["type-coupon"] || "Your coupon code"}
							{...register("coupon_code", {
								required: "Coupon code is required.",
							})}
						/>
						{errors.coupon_code && (
							<p className="errorMsg">{errors.coupon_code.message}</p>
						)}
						{error && (
							<p className="errorMsg">
								{translations["invalid-coupon-msg"] ||
									"Invalid coupon code. Please try again."}
							</p>
						)}
					</div>
					<div className="form-control mb-2 md:mb-0">
						<button type="submit" className="primary-btn w-full">
							{translations["verify-coupon"] || "Verify coupon"}
						</button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default CouponModal;
