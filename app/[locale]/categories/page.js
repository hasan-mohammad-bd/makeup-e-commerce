import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/utils/fetchData";
import noImage from "@/public/assets/images/no-image.png";

const page = async () => {
	const data = await fetchData({ api: "categories?no_child=1" });
	const categories = data?.data || [];

	return (
		<section className="bg-slate-100 lg:bg-white pt-16 lg:pt-0">
			<div className="breadcrumb breadcrumb-2 py-5 border-b border-slate-200 hidden lg:block">
				<div className="container">
					<div>
						<Link
							href={`/`}
							className="text-base text-slate-600 hover:text-primary"
						>
							হোম
						</Link>
						<Link
							href={`/categories`}
							className="text-base text-slate-900 hover:text-primary"
						>
							ক্যাটাগরি
						</Link>
					</div>
				</div>
			</div>

			<div className="lg:pt-12 py-3 lg:pb-8 bg-white">
				<div className="container">
					<h3 className="font-title text-center text-lg/7 lg:text-3xl text-slate-900 my-5 lg:my-12 font-bold">
						সব ক্যাটেগরি
					</h3>
					<div className="grid grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-5 pt-2">
						{categories?.map((category, i) => (
							<div
								className="category text-center w-[74px] lg:w-[116px] mb-4"
								key={i}
							>
								<Link
									href={`/categories/${category.slug}`}
									className="category-img flex justify-center items-center py-[18px] border border-slate-300 px-2 h-[74px] lg:h-[78px] rounded-lg"
								>
									<Image
										src={category?.icon || noImage}
										alt={category.category_name}
										width={116}
										height={78}
										className="h-full w-full object-contain"
									/>
								</Link>
								<Link
									href={`/categories/${category.slug}`}
									className="block text-sm/5 lg:text-lg text-slate-700 mt-4"
								>
									{category.category_name}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
