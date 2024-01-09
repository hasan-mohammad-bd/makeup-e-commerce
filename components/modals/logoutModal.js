"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Modal from "../elements/Modal";
import { useForm } from "react-hook-form";
import { logoutUser } from "@/store/slices/authSlice";
import LogoutIcon from "../elements/svg/LogoutIcon";


const LogoutModal = ({ showModal, setShowModal }) => {
  const { translations } = useSelector((state) => state.common);

  const dispatch = useDispatch();
  const {
    formState: { errors },
  } = useForm();

  const handleLogout = () => {
    dispatch(logoutUser());
		toast.success("Logout successfully");
    setShowModal(false);


  };

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title={""}>
      <div className="md:w-[27rem] ">
        <div className="text-center">
          <div className="w-[96px] h-[96px] rounded-full bg-red-200 mx-auto flex justify-center items-center">
            <LogoutIcon />
          </div>
        </div>
        <div className="text text-center">
          <h4 className="mt-5 text-[30px] font-extrabold text-red-500">
            {translations["log-out"] || "লগ-আউট"}
          </h4>
          <p className="mx-auto text-[18px] mt-5 text-slate-800 max-w-[350px]">
            {" "}
            {translations["are-you-sure"] ||
              "আপনি কি নিশ্চিত সততা স্টল থেকে লগ আউট করতে চাচ্ছেন?"}
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 mt-12 font-semibold text-[18px] mb-2">
          <button
            onClick={() => setShowModal(false)}
            className="w-[169px] h-[54px] rounded-[8px] bg-slate-200"
          >
            {translations["no"] || "না"}
          </button>
          <button
            onClick={handleLogout}
            className="w-[169px] h-[54px] rounded-[8px] bg-primary text-white"
          >
            {translations["yes"] || "হ্যাঁ"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
