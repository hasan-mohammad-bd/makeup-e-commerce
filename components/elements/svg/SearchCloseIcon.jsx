import * as React from "react";
const SearchCloseIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={18}
		height={18}
		fill="none"
		{...props}
	>
		<path
			stroke="#0F172A"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M6 18L18 6M6 6L18 18"
		/>
	</svg>
);
export default SearchCloseIcon;
