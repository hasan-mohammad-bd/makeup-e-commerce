import { Link } from "@/navigation";
import Image from "next/image";
import { fetchData } from "@/lib/fetch-data";

const NavItemsList = async () => {
	// const { data: settings = {} } = await fetchData({ api: "info/basic" });
	// const { data: categories = [] } = await fetchData({ api: "categories" });

	const [settingsRes, categoriesRes] = await Promise.allSettled([
		fetchData({ api: `info/basic` }),
		fetchData({ api: "categories" }),
	]);

	const settings =
		settingsRes.status === "fulfilled" ? settingsRes.value?.data || {} : {};
	const categories =
		categoriesRes.status === "fulfilled" ? categoriesRes.value?.data || [] : [];

	return (
		<>
			<div className="header-left flex items-center gap-4">
				<Link href="/" className="logo">
					<Image
						src={settings?.logo}
						alt={settings?.name}
						width={200}
						height={48}
					/>
				</Link>
				<div className="nav-menu flex items-center">
					{categories.slice(0, 2).map((category) => (
						<div key={category.id} className="group inline-block">
							<Link
								href={`/categories/${category.slug}`}
								className="px-2 py-4 bg-white rounded-sm flex items-center"
							>
								{category.category_name}
							</Link>
							{category.child_categories.length ? (
								<ul className="py-2 box-border nav-nested-menu z-20 bg-white border rounded-lg transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-[12rem]">
									{category.child_categories.map((subCategory) => (
										<li
											key={subCategory.id}
											className="rounded-sm relative p-3 pl-5 hover:bg-gray-100"
										>
											<Link
												href={`/categories/${subCategory.slug}`}
												className="w-full text-left flex items-center outline-none focus:outline-none"
											>
												<span className="pr-1 flex-1">
													{subCategory.category_name}
												</span>
												{subCategory.child_categories.length ? (
													<span className="mr-auto">
														<svg
															className="fill-current h-4 w-4 transition duration-150 ease-in-out"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
														>
															<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
														</svg>
													</span>
												) : null}
											</Link>
											{subCategory.child_categories.length ? (
												<ul className="bg-white border rounded-lg px-2 absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-[12rem]">
													{subCategory.child_categories.map((childCategory) => (
														<li
															key={childCategory.id}
															className="p-3 hover:bg-gray-100"
														>
															<Link
																href={`/categories/${childCategory.slug}`}
																className="w-full text-left flex items-center outline-none focus:outline-none"
															>
																{childCategory.category_name}
															</Link>
														</li>
													))}
												</ul>
											) : null}
										</li>
									))}
								</ul>
							) : null}
						</div>
					))}
					<Link
						href={`/products`}
						className="px-2 py-3 bg-white rounded-sm flex items-center"
					>
						More
					</Link>
				</div>
			</div>
		</>
	);
};

export default NavItemsList;
