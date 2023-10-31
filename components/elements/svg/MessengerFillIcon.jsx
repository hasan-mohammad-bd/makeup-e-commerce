import * as React from "react";
import { twMerge } from "tailwind-merge";
const MessengerFillIcon = ({ fillClass, strokeClass, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 50 50"
		fill="currentColor"
		className={twMerge(`fill-slate-400`, fillClass)}
		{...props}
	>
		<path
			className={twMerge(`stroke-slate-400`, strokeClass)}
			d="M25 2C12.3 2 2 11.602 2 23.5c0 6.3 2.898 12.2 8 16.3v8.802l8.602-4.5c2.097.597 4.199.796 6.398.796 12.7 0 23-9.597 23-21.5C48 11.602 37.7 2 25 2Zm2.3 28.602-5.8-6.204L10.7 30.5l12-12.7 5.902 5.9 10.5-5.9Z"
		/>
	</svg>
);
export default MessengerFillIcon;
