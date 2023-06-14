import { Suspense } from "react";
import Image from "next/image";
import SortSelect from "@/components/elements/SortSelect";

// ** Imoprt icons
import { HiOutlineFilter } from "react-icons/hi";
import AllProducts from "@/components/AllProducts";
import Timer from "@/components/elements/Timer";

// ** Search Fallback
function SearchBarFallback() {
  return <>placeholder</>;
}

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
      title: "হেডফোন",
      image: "5.png",
    },
    {
      id: 3,
      title: "স্মার্ট ওয়াচ",
      image: "6.png",
    },
    {
      id: 4,
      title: "একশন ক্যামেরা",
      image: "4.png",
    },
    {
      id: 5,
      title: "অডিও ডিভাইস",
      image: "2.png",
    },
  ];

  return (
    <>
      <div className="breadcrumb bg-[url('/assets/images/banner/flash-banner.png')] bg-no-repeat bg-cover py-6">
        <div className="container">
          <div className="max-w-1/2 flex items-center gap-10 mx-auto">
            <div className="content flex-1">
              <h3 className="text-3xl font-bold font-title text-slate-900 mb-2">
                ফ্ল্যাশ সেল চলছে
              </h3>
              <p className="text-lgtext-slate-600 mb-4">অফার চলবে আর মাত্র</p>
              <Timer targetDate="2023-5-31" />
            </div>
            <div className="img flex-1">
              <Image
                src={`/assets/images/banner/robot.png`}
                alt="image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="toolbar flex justify-between items-center bg-slate-50 rounded-xl px-4 py-3 my-5">
          <p>এখানে ৬৭ টি প্রডাক্ট আছে</p>
          <Suspense fallback={<SearchBarFallback />}>
            <SortSelect />
          </Suspense>
        </div>
        <AllProducts />
      </div>
    </>
  );
};

export default page;
