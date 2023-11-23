import Image from "next/image";
import React from "react";

export default function loading() {
	return (
		<div className="flex h-screen w-screen justify-center items-center">
			<Image
				className={`h-[300px] w-[300px]`}
				src={"/assets/images/logo.svg"}
				alt={"loader"}
				width={226}
				height={226}
			/>
		</div>
	);
}
