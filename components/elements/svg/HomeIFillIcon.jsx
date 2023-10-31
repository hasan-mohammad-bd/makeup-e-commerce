import * as React from "react";
import { twMerge } from "tailwind-merge";
const SvgComponent = ({ fillClass, strokeClass, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={25}
		height={24}
		fill="none"
		{...props}
	>
		<path
			className={twMerge(
				`fill-slate-400 stroke-slate-400`,
				fillClass,
				strokeClass
			)}
			d="M10.843 3.15c1.084-.871 2.825-.866 3.925.01v.001l6.546 5.237h.002c.377.31.704.791.914 1.343.211.551.29 1.129.216 1.61l-1.259 7.533v.002c-.25 1.433-1.644 2.614-3.087 2.614H7.5c-1.464 0-2.827-1.152-3.077-2.604l-1.26-7.538v-.002c-.082-.484-.008-1.063.202-1.614.21-.551.54-1.033.927-1.341l6.55-5.25Zm1.957 16.1c.686 0 1.25-.564 1.25-1.25v-3c0-.686-.564-1.25-1.25-1.25s-1.25.564-1.25 1.25v3c0 .686.564 1.25 1.25 1.25Z"
		/>
	</svg>
);
export default SvgComponent;
