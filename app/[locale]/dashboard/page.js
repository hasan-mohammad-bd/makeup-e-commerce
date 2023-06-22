"use client";
import { useGetUserQuery } from "@/store/features/api/authAPI";
import React from "react";
// import { useSelector } from "react-redux";

const MyProfile = () => {
  // const { user } = useSelector((state) => state.auth); //we can store user data to stop useless fetching

  //ways to get user after reload
  const { data, isLoading, isError } = useGetUserQuery();
  if (isLoading) return <p>Loading............</p>;
  if (isError) console.log("error occurred");
  const user = data?.data || {};

  return (
    <div className="p-6 bg-secondary-700">
      <h2 className="text-slate-900 font-bold text-xl">আমার প্রফাইল</h2>
      <p>User Name: {user?.name || "Name not Found"}</p>
      <p>User Phone: {user?.phone || "Phone not Found"}</p>
    </div>
  );
};

export default MyProfile;
