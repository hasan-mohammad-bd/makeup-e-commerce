"use client";

import { useEffect, useState } from "react";

// ** Import Util Functions
import { useSelector } from "react-redux";
import getCountDownValues from "../../utils/countdown";

const Timer = ({ targetDate }) => {
  const { translations } = useSelector((state) => state.common);
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  const [days, hours, minutes, seconds] = getCountDownValues(countDown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <>
      <div className="sale-counter flex gap-2 lg:gap-3 md:my-5">
        <div className="single-counter flex flex-col justify-center items-center w-[52px] lg:w-24 h-12 lg:h-24 bg-secondary rounded-lg shadow-2xl">
          <p
            className="count-num font-bold font-title text-3xl text-black"
            suppressHydrationWarning
          >
            {days}
          </p>
          <p className="text-lg font-normal text-black">
            {translations["days"] || "দিন"}
          </p>
        </div>
        <span className="flex justify-center items-center text-4xl font-semibold">
          :
        </span>
        <div className="single-counter flex flex-col justify-center items-center w-[52px] lg:w-24 h-12 lg:h-24 bg-secondary rounded-lg shadow-2xl">
          <p
            className="count-num font-bold font-title text-3xl text-black"
            suppressHydrationWarning
          >
            {hours}
          </p>
          <p className="text-lg font-normal text-black">
            {translations["hours"] || "ঘন্টা"}
          </p>
        </div>
				<span className="flex justify-center items-center text-4xl font-semibold">
          :
        </span>
        <div className="single-counter flex flex-col justify-center items-center w-[52px] lg:w-24 h-12 lg:h-24 bg-secondary rounded-lg shadow-2xl">
          <p
            className="count-num font-bold font-title text-3xl text-black"
            suppressHydrationWarning
          >
            {minutes}
          </p>
          <p className="text-lg font-normal text-black">
            {translations["minutes"] || "মিনিট"}
          </p>
        </div>
				<span className="flex justify-center items-center text-4xl font-semibold">
          :
        </span>
        <div className="single-counter flex flex-col justify-center items-center w-[52px] lg:w-24 h-12 lg:h-24 bg-secondary rounded-lg shadow-2xl">
          <p
            className="count-num font-bold font-title text-3xl text-black"
            suppressHydrationWarning
          >
            {seconds}
          </p>
          <p className="text-lg font-normal text-black">
            {translations["seconds"] || "সেকেন্ড"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Timer;
