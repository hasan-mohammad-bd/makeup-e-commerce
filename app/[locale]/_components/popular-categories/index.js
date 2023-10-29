"use client";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
const CategorySlider = dynamic(() => import("./CategorySlider"));
const CategoryList = dynamic(() => import("./CategoryList"));
import { useGetPopularCategoriesQuery } from "@/store/features/api/categoriesAPI";

const PopularCategories = () => {
	const { locale } = useParams();
	const { data: categoriesData } = useGetPopularCategoriesQuery({ locale });
	const popularCategories = categoriesData?.data || [];
	const matches = useMediaQuery("(max-width: 768px)");
	return (
		<>
			{!matches ? (
				<CategorySlider categoryList={popularCategories} />
			) : (
				<CategoryList categories={popularCategories} />
			)}
		</>
	);
};

export default PopularCategories;
