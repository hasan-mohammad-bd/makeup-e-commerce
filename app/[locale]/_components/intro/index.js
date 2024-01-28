import { fetchData } from "@/lib/fetch-data";
import IntroSlider from "./IntroSlider";
import { Link } from "@/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const Intro = async () => {
  const [categoriesRes, transRes] = await Promise.allSettled([
    fetchData({ api: `categories` }),
    fetchData({ api: `translations` }),
  ]);
  console.log(categoriesRes);
  const categoriesList = categoriesRes?.value?.data || [];
  console.log(categoriesList.child_categories);
  const { data: sliders = [] } = await fetchData({
    api: "sliders",
  });
  return (
    <div className="container mx-auto flex">
      <div className="category-section w-1/2 flex flex-col h-auto">
        <div className="!h-full relative">
          {categoriesList.map((item) => (
            <div className="!w-full sub-menu" key={item.id}>
              <Link
                className={` hover:text-primary flex items-center justify-between px-3 !w-full py-2 rounded shadow mb-2 text-lg ${
                  item.child_categories.length >= 1 && "sub-menu"
                }`}
                key={item.id}
                href={
                  item.child_categories.length >= 1
                    ? "/"
                    : `categories/${item.slug}`
                }
              >
                {item.category_name}
                {item.child_categories.length >= 1 && (
                  <span className="ml-1">
                    <MdOutlineKeyboardArrowRight size={20} />
                  </span>
                )}
              </Link>
              {item.child_categories.length >= 1 && (
                <div className="absolute top-0 right-0 translate-x-full sub-item z-40 shadow-lg  bg-white rounded-lg !w-full !h-full">
                  {item.child_categories.length >= 1 &&
                    item.child_categories.map((subItem) => (
                      <div className="second-sub-menu" key={subItem.id}>
                        <Link
                          className={` pl-3 hover:text-primary py-2  flex items-center justify-between px-3 rounded shadow text-lg mb-2 w-full ${
                            subItem.child_categories?.length >= 1 &&
                            "second-sub-menu"
                          }`}
                          href={`/categories/${subItem.slug}`}
                          key={subItem.id}
                        >
                          {subItem.category_name}
                          {subItem?.child_categories?.length >= 1 && (
                            <span className="ml-1">
                              <MdOutlineKeyboardArrowRight size={20} />
                            </span>
                          )}
                        </Link>
                        <div className="absolute  top-0 right-0 translate-x-full bg-white second-sub-item z-40 shadow-lg  bg-blue rounded-lg !w-[1050px]  !h-full">
                          <div className="grid grid-cols-3 gap-3">
                            {subItem?.child_categories?.length >= 1 &&
                              subItem.child_categories.map((subItem2) => (
                                <div key={subItem2.id}>
                                  <Link
                                    className={` pl-3 hover:text-primary py-2 flex items-center justify-between  shadow text-lg mb-2rounded-full bg-gray-200 w-full ${
                                      subItem2.child_categories?.length >= 1 &&
                                      ""
                                    }`}
                                    href={`/categories/${subItem2.slug}`}
                                    key={subItem2.id}
                                  >
                                    <div className="p-4 rounded-full bg-gray-200 w-full">
                                      <span>
                                        <Image
                                          src={
                                            subItem?.Icon ||
                                            "../../../../public/assets/images/banner/lamp.png"
                                          }
                                          alt={subItem?.categories_name}
                                          width={0}
                                          height={0}
                                          className="h-[48px] min-h-[48px] py-2 object-contain object-left"
                                        />
                                      </span>
                                      <span>{subItem2.category_name}</span>
                                    </div>

                                    {subItem2?.child_categories?.length >=
                                      1 && (
                                      <span className="ml-1">
                                        <MdOutlineKeyboardArrowRight
                                          size={20}
                                        />
                                      </span>
                                    )}
                                  </Link>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <IntroSlider sliders={sliders} />
    </div>
  );
};

export default Intro;
