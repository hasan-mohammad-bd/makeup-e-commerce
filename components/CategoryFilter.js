"use client";

import { useGetCategoriesQuery } from "@/store/features/api/categoriesAPI";
import { usePathname, useRouter } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

const CategoryFilter = ({ selectedCategory }) => {
  console.log(selectedCategory);
  const { data: categoriesData } = useGetCategoriesQuery();
  const categories = categoriesData?.data || [];

  const router = useRouter();
  let pathname = usePathname();

  const handleCategoryChange = (category) => {
    router.push(`/categories/${category.slug}`);
  };

  const categoryWithChildren = (categoryParam) => (
    <ul className="space-y-2">
      <li>
        <button
          className={`cursor-pointer pl-4 text-primary`}
          // onClick={() => handleCategoryChange(mainCategory)}
        >
          {categoryParam.child_categories?.length > 0 ? (
            <>
              <IoChevronBackOutline /> {categoryParam.category_name}
            </>
          ) : (
            <div className="ml-4">{categoryParam.category_name}</div>
          )}
        </button>

        {/* sub categories  */}
        <ul className="pl-8 space-y-2">
          {categoryParam.child_categories.map((child) => (
            <li key={child.id} className="pl-4">
              <button
                className={`cursor-pointer`}
                onClick={() => handleCategoryChange(child)}
              >
                {child.category_name}
              </button>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );

  const renderCategories = (categoryList) => {
    if (
      selectedCategory?.id &&
      (selectedCategory?.parent_id ||
        selectedCategory?.child_categories?.length > 0)
    ) {
      return (
        <>
          <button
            className={`cursor-pointer hover:font-bold`}
            onClick={() => router.push("/products")}
          >
            <IoChevronBackOutline />
            All Categories
          </button>
          {!selectedCategory.parent_id ? (
            categoryWithChildren(selectedCategory)
          ) : (
            <ul className="space-y-2">
              <li>
                <button
                  className={`cursor-pointer pl-4`}
                  onClick={() =>
                    handleCategoryChange({ slug: selectedCategory.parent_slug })
                  }
                >
                  <IoChevronBackOutline />
                  {selectedCategory.parent_name}
                </button>
                <div className="pl-4">
                  {categoryWithChildren(selectedCategory)}
                </div>
              </li>
            </ul>
          )}
        </>
      );
    }
    return (
      <ul className="space-y-2">
        {categoryList.map((category) => (
          <li key={category.id}>
            <button
              className={`cursor-pointer ${
                selectedCategory?.id === category.id ? "font-bold" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category.category_name}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="pr-5">
        <h6 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3">
          ক্যাটাগরি থেকে কেনাকাটা
        </h6>
        <div className="category-filter">{renderCategories(categories)}</div>
      </div>
    </>
  );
};

export default CategoryFilter;
