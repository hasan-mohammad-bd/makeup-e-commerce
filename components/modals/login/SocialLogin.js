"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, useSession } from "next-auth/react";
import { setUser, setUserLoading } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SocialLogin = () => {
  const { data: session, status } = useSession();
  console.log(session, "hello");
  const dispatch = useDispatch();
  const router = useRouter();  
  const searchParams = useSearchParams();

  useEffect(() => {
    if (session) {
      dispatch(setUser(session.data));
      dispatch(setUserLoading(false));
      localStorage.setItem("token", session.token);
      const redirect = searchParams.get("redirect");
      router.push(redirect || "/dashboard");
     
    }
  }, [session, dispatch, router, searchParams]);
  const { translations } = useSelector((state) => state.common);

  return (
    <div className="social-login">
      <p className="pt-4 md:pt-7 pb-3 lg:pb-4">
        {translations["or-login"] || "অথবা, লগ-ইন করুন"}:
      </p>
      <div className="flex justify-between items-center gap-x-3 font-semibold">
        <button className="social-icon-btn">
          <Image
            src={"/assets/icons/social/facebook.png"}
            alt="facebook"
            height={24}
            width={24}
            sizes="100vh"
          />
          <span>{translations["facebook"] || "ফেসবুক"}</span>
        </button>
        <button onClick={() => signIn("google")} className="social-icon-btn">
          <Image
            src={"/assets/icons/social/google.png"}
            alt="google"
            height={24}
            width={24}
            sizes="100vh"
          />
          <span>{translations["google"] || "গুগল"}</span>
        </button>
{/*         <button className="social-icon-btn">
          <Image
            src={"/assets/icons/social/twitter.png"}
            alt="facebook"
            height={24}
            width={24}
            sizes="100vh"
          />
          <span>{translations["twitter"] || "টুইটার"}</span>
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
