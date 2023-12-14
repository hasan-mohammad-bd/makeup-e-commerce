"use client";

import { useEffect, useState } from "react";

// ** Import Util Functions
import { useSelector } from "react-redux";
import getCountDownValues from "../../utils/countdown";

const FlashSellTimer = ({ targetDate }) => {
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
			<div className="sale-counter flex items-center text-primary justify-center text-[12px] md:text-[14px] font-bold md:font-normal">
				<div className="">
					<p
						suppressHydrationWarning
					>
						{days}:
					</p>

				</div>
				<div className="single-counter">
					<p
						className="count-num"
						suppressHydrationWarning
					>
						{hours}:
					</p>

				</div>
				<div className="single-counter">
					<p
						className="count-num"
						suppressHydrationWarning
					>
						{minutes}:
					</p>

				</div>
				<div className="single-counter">
					<p
						className="count-num"
						suppressHydrationWarning
					>
						{seconds}
					</p>

				</div>
			</div>
		</>
	);
};

export default FlashSellTimer;
