"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "@/store/features/api/authAPI";
import { setUser, setUserLoading } from "@/store/features/authSlice";

// The purpose of this component to get the logged user again after page load
const PersistUser = () => {
  const { isLoading, data: userData, isSuccess } = useGetUserQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(setUserLoading(true));
      return;
    }

    if (userData?.status && isSuccess) {
      //   console.log(userData.data);
      dispatch(setUser(userData.data));
    } else {
      dispatch(setUserLoading(false));
    }
  }, [dispatch, isLoading, userData, isSuccess]);

  return null;
};

export default PersistUser;
