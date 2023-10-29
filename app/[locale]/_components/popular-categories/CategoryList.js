"use client";

import Link from "next/link";
import Image from "next/image";
import noImage from "@/public/assets/images/no-image.png";

const CategoryList = ({ categories }) => {
	return (
		<div className="grid grid-cols-2 justify-center items-center gap-4">
			{categories?.slice(0, 6)?.map((category) => (
				<div key={category?.id} className="w-[116px] justify-self-center">
					<Link
						href={`/categories/${category.slug}`}
						className="category-img flex justify-center items-center h-[116px] bg-white rounded-full"
					>
						<Image
							src={category?.icon || noImage}
							alt={category.category_name}
							width={116}
							height={78}
							className="w-[92px] h-[62px] object-contain hover:scale-110"
						/>
					</Link>
					<Link
						href={`/categories/${category.slug}`}
						className="block text-sm text-white text-center mt-4"
					>
						{category.category_name}
					</Link>
				</div>
			))}
		</div>
	);
};

export default CategoryList;
