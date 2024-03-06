"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilterPanel } from "@/store/slices/commonSlice";
import Filter from "../filters/Filter";
import Drawer from "../elements/Drawer";

const FilterPanel = ({ category }) => {
	//Drawer logics
	const dispatch = useDispatch();
	const { isFilterPanelOpen, translations } = useSelector(
		(state) => state.common
	);
	const closeFilterPanel = () => {
		dispatch(toggleFilterPanel());
	};

	return (
		<Drawer
			title={translations["filter"] || "Filter"}
			show={isFilterPanelOpen}
			position={"left"}
			className={"lg:w-[25rem]"}
			setShow={closeFilterPanel}
		>
			<div className="py-3 lg:p-4">
				{isFilterPanelOpen && <Filter category={category} />}
			</div>
		</Drawer>
	);
};

export default FilterPanel;
