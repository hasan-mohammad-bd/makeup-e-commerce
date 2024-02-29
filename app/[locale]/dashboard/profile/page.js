"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ProfileImageUpload from "./ProfileImageUpload";
import { getFormattedDate } from "@/utils/format-date";
import NestedPageTitle from "../_components/NestedPageTitle";
import { siteConfig } from "@/config/site";
import useProfileUpdate from "@/hooks/useProfileUpdate";

const MyProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const { translations } = useSelector((state) => state.common);
  const { handleUserUpdate } = useProfileUpdate();
  const [editMode, setEditMode] = useState(false);
  const [profileImageFile, setProfileImageFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateUser = async (data) => {
    const updatedProfileData = {
      ...data,
      profileImageFile,
    };
    const isSuccess = await handleUserUpdate(updatedProfileData);
    if (isSuccess) {
      setEditMode(false);
    }
  };

  // if (isLoading) return <p className="text-2xl text-red-500">Loading.....</p>;

  return (
    <div className="mb-24 lg:mb-14">
      <NestedPageTitle
        title={translations["my-profile"] || "আমার প্রফাইল"}
        href={"/dashboard"}
      />
      <form
        className="basis-3/5 px-3 lg:px-10 mt-3 lg:mt-2"
        onSubmit={handleSubmit(updateUser)}
      >
        <ProfileImageUpload
          profileImageFile={profileImageFile}
          setProfileImageFile={setProfileImageFile}
          editMode={editMode}
          user={user}
        />
        <div className="grid grid-cols-2 gap-8 border border-slate-200 rounded-lg lg:border-none p-3 lg:p-0">
          <div className="form-control col-span-2 lg:col-span-1">
            <label className="block font-semibold text-base text-slate-500 mb-2 capitalize">
              {translations["your-name"] || "আপনার নাম"}
            </label>
            {!editMode ? (
              <p className="text-slate-800">
                {user?.name || (
                  <span className="text-slate-300">
                    {translations["enter-your-name"] || "আপনার নাম লিখুন"}
                  </span>
                )}
              </p>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.name}
                  placeholder={
                    translations["enter-your-name"] || "আপনার নাম লিখুন"
                  }
                  {...register("name", {
                    required: "Name is required.",
                    maxLength: {
                      value: 30,
                      message: "Name is too large",
                    },
                  })}
                />
                {errors.name && (
                  <p className="errorMsg">{errors.name.message}</p>
                )}
              </>
            )}
          </div>

          <div className="form-control col-span-1">
            <label className="font-semibold block text-base text-slate-500 mb-2 capitalize">
              {translations["date-of-birth"] || "জন্ম তারিখ"}
            </label>
            {!editMode ? (
              <p>
                {user?.birth_date && user?.birth_date !== "0000-00-00" ? (
                  getFormattedDate(user?.birth_date)
                ) : (
                  <span className="text-slate-300">
                    {translations["day-month-year"] || "দিন/মাস/বছর"}
                  </span>
                )}
              </p>
            ) : (
              <>
                <input
                  type="date"
                  name="birth_date"
                  defaultValue={user?.birth_date}
                  {...register("birth_date")}
                />
                {errors.birth_date && (
                  <p className="errorMsg">{errors.birth_date.message}</p>
                )}
              </>
            )}
          </div>
          <div className="form-control col-span-1">
            <label className="block text-base text-slate-500 capitalize mb-2 font-semibold">
              {translations["gender"] || "লিঙ্গ"}
            </label>
            {!editMode ? (
              <p className="text-slate-800">
                {user?.gender && user?.gender !== "Unknown" ? (
                  user?.gender
                ) : (
                  <span className="text-slate-300">
                    {translations["select-gender"] || "লিঙ্গ নির্বাচন করুন"}
                  </span>
                )}
              </p>
            ) : (
              <>
                <select
                  className="select w-full h-12 text-base font-title px-2 rounded-lg border font-semibold border-gray-300 focus:outline-none focus:border-primary"
                  {...register("gender", { required: "Gender is Required" })}
                  defaultValue={user?.gender}
                >
                  <option disabled>
                    {translations["select-gender"] || "লিঙ্গ নির্বাচন করুন"}
                  </option>
                  <option key="Male" value="Male">
                    Male
                  </option>
                  <option key="Female" value="Female">
                    Female
                  </option>
                  <option key="Others" value="Other">
                    Others
                  </option>
                </select>
                {errors.gender && (
                  <p className="errorMsg">{errors.gender.message}</p>
                )}
              </>
            )}
          </div>
          <div className="form-control col-span-2 lg:col-span-1">
            <label className="block text-base text-slate-500 mb-2 capitalize font-semibold">
              {translations["your-email-(if-any)"] || "আপনার ইমেইল (যদি থাকে)"}
            </label>
            {!editMode ? (
              <p className="text-slate-800">
                {user?.email || (
                  <span className="text-slate-300">
                    {translations["enter-email-address"] ||
                      "ইমেইল এড্রেস লিখুন"}
                  </span>
                )}
              </p>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder={
                    translations["enter-email-address"] || "ইমেইল এড্রেস লিখুন"
                  }
                  {...register("email", {
                    pattern: {
                      value: siteConfig.email.pattern,
                      message: "Email is not valid.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="errorMsg">{errors.email.message}</p>
                )}
              </>
            )}
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="block text-slate-500 mb-2 font-semibold">
              {translations["phone-number"] || "ফোন নাম্বার"}
            </label>
            {!editMode ? (
              <p className="text-slate-800">
                {(user?.phone && siteConfig.phone.countryCode + user.phone) || (
                  <span className="text-slate-300">
                    {translations["enter-the-phone-number"] ||
                      "ফোন নাম্বার লিখুন"}
                  </span>
                )}
              </p>
            ) : (
              <>
                <input
                  type="text"
                  className="w-full rounded-lg border bg-slate-100 border-gray-300 focus:outline-none cursor-not-allowed"
                  name="phone"
                  disabled={true}
                  defaultValue={siteConfig.phone.countryCode + user?.phone}
                />
                {/* </div> */}
                {errors.phone && (
                  <p className="errorMsg">{errors.phone.message}</p>
                )}
              </>
            )}
          </div>
          <div className="col-span-2 lg:col-span-1">
            <label className="block text-slate-500 mb-2 font-semibold">
              {translations["alternate-phone-number"] || "বিকল্প ফোন নাম্বার"}
            </label>
            {!editMode ? (
              <p className="text-slate-800">
                {(user?.alt_phone_no &&
                  siteConfig.phone.countryCode + user.alt_phone_no) || (
                  <span className="text-slate-300">
                    {translations["enter-alternate-phone-number"] ||
                      "বিকল্প ফোন নাম্বার লিখুন"}
                  </span>
                )}
              </p>
            ) : (
              <>
                <div className="flex items-center group">
                  <div className="h-12 py-3 min-w-fit text-base font-title font-normal px-2 rounded-s-lg border bg-slate-100 border-gray-300 group-focus-within:border-primary group-focus-within:border-r-gray-300">
                    <p>{siteConfig.phone.prefix}</p>
                  </div>
                  <input
                    type="number"
                    className="w-full rounded-s-none rounded-e-lg border border-l-0 border-gray-300 focus:outline-none group-focus:border-primary"
                    name="alt_phone_no"
                    placeholder={
                      translations["enter-alternate-phone-number"] ||
                      "বিকল্প ফোন নাম্বার লিখুন"
                    }
                    defaultValue={user?.alt_phone_no}
                    {...register("alt_phone_no", {
                      pattern: {
                        value: siteConfig.phone.pattern,
                        message: "Please enter a valid phone number",
                      },
                    })}
                  />
                </div>
                {errors.alt_phone_no && (
                  <p className="errorMsg">{errors.alt_phone_no.message}</p>
                )}
              </>
            )}
          </div>
          <div className="form-control col-span-2 lg:col-span-1">
            <label className="block text-base text-slate-500 mb-2 capitalize font-semibold">
              {translations["your-address"] || "আপনার ঠিকানা"}
            </label>
            {!editMode ? (
              <p className="text-slate-800">
                {user?.address || (
                  <span className="text-slate-300">
                    {translations["type-your-address"] ||
                      "আপনার সম্পূর্ণ ঠিকানা লিখুন"}
                  </span>
                )}
              </p>
            ) : (
              <>
                <textarea
                  className="h-[100px] border border-slate-300 p-4"
                  type="text"
                  defaultValue={user?.address}
                  name="address"
                  placeholder={
                    translations["type-your-address"] ||
                    "আপনার সম্পূর্ণ ঠিকানা লিখুন"
                  }
                  {...register("address")}
                />
                {errors.address && (
                  <p className="errorMsg">{errors.address.message}</p>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-10 responsive-action">
          <div className="form-control text-right lg:w-fit">
            <button
              type="button"
              onClick={() => setEditMode((prevMode) => !prevMode)}
              className="py-3 px-4 text-primary border border-primary"
            >
              {editMode ? (
                <>{translations["cancel"] || "বাতিল করুন"}</>
              ) : (
                <>{translations["edit"] || "সম্পাদন করুন"}</>
              )}
            </button>
          </div>
          {editMode ? (
            <div className="form-control w-full lg:w-auto">
              <button type="submit" className="py-3 px-4 bg-primary text-white">
                {translations["save"] || "সংরক্ষন করুন"}
              </button>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
