import Link from "next/link";
import Image from "next/image";
import SingleProduct from "@/components/SingleProduct";
import SortSelect from "@/components/elements/SortSelect";

// ** Imoprt icons
import { HiOutlineFilter } from "react-icons/hi";
import AllProducts from "@/components/AllProducts";

const page = ({ params }) => {
  const { slug } = params;

  var data = [
    {
      id: 1,
      title: "স্মার্ট ইলেকট্রনিক্স",
      image: "1.png",
    },
    {
      id: 2,
      title: "অডিও ডিভাইস",
      image: "2.png",
    },
    {
      id: 3,
      title: "ভিডিও গেমস",
      image: "3.png",
    },
    {
      id: 4,
      title: "একশন ক্যামেরা",
      image: "4.png",
    },
    {
      id: 5,
      title: "হেডফোন",
      image: "5.png",
    },
    {
      id: 6,
      title: "স্মার্ট ওয়াচ",
      image: "6.png",
    },
    {
      id: 7,
      title: "Smart Umbrella",
      image: "6.png",
    },
  ];

  return (
    <>
      <div className="breadcrumb breadcrumb-2 py-5 border-b border-slate-200">
        <div className="container">
          <div>
            <Link
              href={`/`}
              className="text-base text-slate-600 hover:text-primary"
            >
              হোম
            </Link>
            <Link
              href={`/products/camera`}
              className="text-base text-slate-900 hover:text-primary"
            >
              একশন ক্যামেরা
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-12 mb-24">
        <div className="flex justify-between items-center flex-wrap gap-10">
          {data?.map((category, i) => (
            <div className="category" key={i}>
              <Link
                href={`/`}
                className="category-img flex justify-center items-center w-[164px] h-[164px] bg-amber-50 rounded-full"
              >
                <Image
                  src={`/assets/images/category/${category.image}`}
                  alt={category.title}
                  width={116}
                  height={78}
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
              <Link
                href={`/products/${category.title}`}
                className="block text-lg text-slate-700 text-center mt-4"
              >
                {category.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
