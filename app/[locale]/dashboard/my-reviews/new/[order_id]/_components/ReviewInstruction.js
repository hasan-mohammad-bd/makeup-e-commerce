import Modal from "@/components/elements/Modal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import React from "react";
import { useSelector } from "react-redux";

const ReviewInstruction = ({ isActive, setIsActive }) => {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const { translations } = useSelector((state) => state.common);
	const pageContent = (
		<div className="text-[#334155] ml-2">
			<div>
				<h3 className="font-semibold text-4">
					{translations["necessary-steps"] || "Necessary Steps"}:
				</h3>
				<ul className="list-outside list-disc whitespace-pre-line ml-6 leading-7 mt-1">
					<li>
						{translations["focus-on-product"] ||
							"Focus on the product you would like to review"}
					</li>
					<li>
						{translations["discuss-about-the-product"] ||
							"Discuss about the product you would like to review"}
					</li>
					<li>
						{translations["review-feeling"] ||
							"Review the feeling of the product you would like to review"}
					</li>
				</ul>
			</div>
			<div className="mt-6 ">
				<h3 className="font-semibold text-4">
					{translations["what-not-to-do"] || "What not to do"}:
				</h3>
				<ul className="list-outside list-disc whitespace-pre-line ml-6 leading-7 mt-1">
					<li>
						{translations["dont-share"] ||
							"Don't share irrelevant information"}
					</li>
					<li className="">
						{translations["dont-mislead"] ||
							"Please don't include false or misleading information"}
					</li>
					<li>
						{translations["use-good-language"] ||
							"Don't share any inappropriate language"}
					</li>
					<li>
						{translations["dont-share-other-info"] ||
							"Don't share any other information"}
					</li>
					<li>
						{translations["unauthorized-tread-mark"] ||
							"Don't include any unauthorized tread marks"}
					</li>
				</ul>
			</div>
		</div>
	);

	return isMobile ? (
		<Modal
			showModal={isActive}
			setShowModal={setIsActive}
			// title={translations["select-variant"] || "নির্বাচন করুন"}
			class
		>
			{pageContent}
		</Modal>
	) : (
		<div className="p-6 w-[578px] shadow-top text-[#334155] absolute right-[-40px] top-10 rounded-xl bg-white">
			<div className="absolute top-0 right-6 -z-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-6 bg-white"></div>
			{pageContent}
		</div>
	);
};

export default ReviewInstruction;
