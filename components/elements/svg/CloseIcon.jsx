import * as React from "react";
const CloseIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={32}
		height={32}
		fill="none"
		{...props}
	>
		<path
			stroke="#0F172A"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M8 24 24 8M8 8l16 16"
		/>
	</svg>
);
export default CloseIcon;
