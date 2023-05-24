import Link from "next/link";
import Image from "next/image";
import Filter from "@/app/components/Filter";
import SortSelect from "@/app/elements/SortSelect";

// ** Imoprt icons
import AllProducts from "@/app/components/AllProducts";

const page = ({params}) => {

    const {slug} = params

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
            <div className="breadcrumb bg-[url('/assets/images/banner/pdctpage-banner.png')] bg-no-repeat bg-cover py-20">
                <div className="container">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold font-title text-white mb-4">একশন ক্যামেরা</h3>
                        <div>
                            <Link href={`/`} className="text-base text-white hover:text-primary">হোম</Link>
                            <Link href={`/products/camera`} className="text-base text-white hover:text-primary">একশন ক্যামেরা</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-slate-300 py-8">
                <div className="container">
                    <h6 className="text-base font-semibold font-title text-slate-900 mb-4">সেরা ৫টি ক্যাটাগরি</h6>
                    <div className="flex items-center gap-5">
                        {data?.slice(0,5)?.map((cat, i) => (
                            <div className="category flex flex-1 items-center gap-4 border border-slate-300 rounded-xl p-3.5" key={i}>
                                <div className="image flex items-center justify-center w-12 h-12 bg-amber-50 rounded-2xl">
                                    <Link href={`/products/${cat.title}`}><Image src={`/assets/images/category/${cat.image}`} alt="cat.title" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/></Link>
                                </div>
                                <Link href={`/products/${cat.title}`} className="text-base text-slate-900">{cat.title}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="toolbar grid grid-cols-5 gap-5 my-5">
                    <div className="relative col-span-1">
                        <Filter/>
                    </div>
                    <div className="col-span-4 flex justify-between items-center bg-slate-50 rounded-xl px-4 py-3">
                        <p>এখানে ৬৭ টি প্রডাক্ট আছে</p>
                        <SortSelect/>
                    </div>
                </div>
                <AllProducts/>
            </div>


        </>
    )
}

export default page;