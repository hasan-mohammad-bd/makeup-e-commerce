import React from "react";

const LogoutIcon = ({ fillClass, strokeClass, ...props }) => {
	return (
		<svg
			width="36"
			height="36"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M33.6 4H28.4C22 4 18 8 18 14.4V22.5H26.88L22.74 18.36C22.44 18.06 22.3 17.68 22.3 17.3C22.3 16.92 22.44 16.54 22.74 16.24C23.32 15.66 24.28 15.66 24.86 16.24L31.56 22.94C32.14 23.52 32.14 24.48 31.56 25.06L24.86 31.76C24.28 32.34 23.32 32.34 22.74 31.76C22.16 31.18 22.16 30.22 22.74 29.64L26.88 25.5H18V33.6C18 40 22 44 28.4 44H33.58C39.98 44 43.98 40 43.98 33.6V14.4C44 8 40 4 33.6 4Z"
				fill="#EF4444"
			/>
			<path
				d="M4.5 24C4.5 23.4561 4.95614 23 5.5 23H17.5V25H5.5C4.95614 25 4.5 24.5439 4.5 24Z"
				fill="#EF4444"
				stroke="#EF4444"
			/>
		</svg>
	);
};

export default LogoutIcon;
