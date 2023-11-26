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
			<div className="sale-counter flex gap-2 lg:gap-3">
				<div className="single-counter flex flex-col justify-center items-center w-[52px] lg:w-14 h-12 lg:h-14 bg-red-500 rounded-lg">
					<p
						className="count-num text-base font-semibold font-title text-white"
						suppressHydrationWarning
					>
						{days}
					</p>
					<p className="text-xs text-white">{translations["days"] || "দিন"}</p>
				</div>
				<div className="single-counter flex flex-col justify-center items-center w-[52px] lg:w-14 h-12 lg:h-14 bg-red-500 rounded-lg">
					<p
						className="count-num text-base font-semibold font-title text-white"
						suppressHydrationWarning
					>
						{hours}
					</p>
					<p className="text-xs text-white">
						{translations["hours"] || "ঘন্টা"}
					</p>
				</div>
				<div className="single-counter flex flex-col justify-center items-center w-[52px] lg:w-14 h-12 lg:h-14 bg-red-500 rounded-lg">
					<p
						className="count-num text-base font-semibold font-title text-white"
						suppressHydrationWarning
					>
						{minutes}
					</p>
					<p className="text-xs text-white">
						{translations["minutes"] || "মিনিট"}
					</p>
				</div>
				<div className="single-counter flex flex-col justify-center items-center w-[52px] lg:w-14 h-12 lg:h-14 bg-red-500 rounded-lg">
					<p
						className="count-num text-base font-semibold font-title text-white"
						suppressHydrationWarning
					>
						{seconds}
					</p>
					<p className="text-xs text-white">
						{translations["seconds"] || "সেকেন্ড"}
					</p>
				</div>
			</div>
		</>
	);
};

export default Timer;
