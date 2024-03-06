"use client";
import React from "react";
import Modal from "../elements/Modal";
import ViewHTML from "../elements/ViewHTML";
import { useSelector } from "react-redux";

const SizeChartModal = ({ showModal, setShowModal, sizeChart }) => {
	const { translations } = useSelector((state) => state.common);
	return (
		<Modal
			showModal={showModal}
			setShowModal={setShowModal}
			title={translations["size-chart"] || "Size Chart"}
		>
			<div className="w-full lg:min-w-[27rem] text-slate-600">
				<ViewHTML htmlText={sizeChart} />
			</div>
		</Modal>
	);
};

export default SizeChartModal;
