import * as React from "react";
import { twMerge } from "tailwind-merge";
const MessengerIcon = ({ fillClass, strokeClass, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 50 50"
		fill="currentColor"
		className={twMerge(`fill-slate-400`, fillClass)}
		{...props}
	>
		<path d="M25 2C12.348 2 2 11.598 2 23.5c0 6.508 3.133 12.285 8 16.219v8.937l1.469-.781 7.219-3.75C20.703 44.665 22.8 45 25 45c12.652 0 23-9.598 23-21.5S37.652 2 25 2Zm0 2c11.645 0 21 8.758 21 19.5S36.645 43 25 43c-2.164 0-4.258-.313-6.219-.875l-.375-.094-.343.188L12 45.375v-6.563l-.375-.28C6.961 34.941 4 29.538 4 23.5 4 12.758 13.355 4 25 4Zm-2.281 13.719-12.032 12.75L21.5 24.406l5.781 6.188 11.875-12.875-10.531 5.906Z" />
	</svg>
);
export default MessengerIcon;
