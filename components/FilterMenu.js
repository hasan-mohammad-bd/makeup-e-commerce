"use client";
import { toggleFilterPanel } from "@/store/features/commonSlice";
import React from "react";
import { HiOutlineFilter } from "react-icons/hi";
import { useDispatch } from "react-redux";

export default function FilterMenu() {
  const dispatch = useDispatch();
  const toggleFilter = () => {
    dispatch(toggleFilterPanel());
  };
  return (
    <div
      className="flex items-center gap-3 w-full h-full bg-slate-50 rounded-xl px-4 py-3 cursor-pointer"
      onClick={toggleFilter}
    >
      <HiOutlineFilter size={20} />
      <span className="text-base text-slate-900">ফিল্টার করুন</span>
    </div>
  );
}
