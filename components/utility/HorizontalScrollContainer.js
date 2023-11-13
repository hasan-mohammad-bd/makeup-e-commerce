import React from "react";

const HorizontalScrollContainer = ({ children }) => {
	return (
		<div className="custom-horizontal-scroll">
			<div className="flex flex-nowrap space-x-4 w-fit p-4 md:p-0">
				{children}
			</div>
		</div>
	);
};

export default HorizontalScrollContainer;
