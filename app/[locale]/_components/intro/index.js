import { fetchData } from "@/lib/fetch-data";
import IntroSlider from "./IntroSlider";
import { Link } from "@/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import CategoryItems from "@/components/CategoryItems";

const Intro = async () => {
  const [categoriesRes, transRes] = await Promise.allSettled([
    fetchData({ api: `categories` }),
    fetchData({ api: `translations` }),
  ]);

  const categoriesList = categoriesRes?.value?.data || [];

  const { data: sliders = [] } = await fetchData({
    api: "sliders",
  });
  return (
    <div className="container mx-auto lg:px-10  2xl:px-0 grid grid-cols-1 md:grid-cols-6">
      <div className="md:col-span-1 hidden md:block">
        <CategoryItems />
      </div>
      <div className="col-span-5">
        <IntroSlider sliders={sliders} />
      </div>
    </div>
  );
};

export default Intro;
