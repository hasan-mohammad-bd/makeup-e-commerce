import ThumbSlider from "../elements/sliders/ThumbSlider";

const ProductDetails = ({product}) => {
    return (
        <>
            <div className="product-details">
                <div className="flex gap-6">
                    <div className="flex-1">
                        <ThumbSlider product={product}/>
                    </div>
                    <div className="flex-1">
                        <div className="product-content-wrap">
                            <p className="text-sm font-bold text-primary capitalize">{product?.brand || 'Havit'}</p>
                            <h5 className="text-2xl font-bold font-title text-slate-900">{product?.title || 'Insta360 GO 2 একশন ক্যামেরা 9MP 3K জলরোধী একশন ক্যামেরা'}</h5>
                            <p className="desc text-base text-slate-600">{product?.desc || "nsta360 GO 2 9MP 3K ওয়াটারপ্রুফ স্মল অ্যাকশন ক্যামেরা Insta360 GO 2 9MP 3K ওয়াটারপ্রুফ স্মল অ্যাকশন ক্যামেরা সহ আসে। এই অ্যাকশন ক্যামেরাটি ফ্লোস্টেট স্ট্যাবিলাইজেশন, হাইপারল্যাপস, ওয়াইফাই প্রিভিউ, হ্যান্ডস-ফ্রি, মাউন্ট এনিহোয়ার, 1440p 50fps সহ বৈশিষ্ট্যযুক্ত। 4m (13ft) পর্যন্ত জলরোধী এবং এটি 13' পর্যন্ত IPX8 জলরোধী"}</p>
                            <div className="product-price flex items-center gap-4">
                                <span className="text-3xl/[48px] font-bold font-title text-slate-900">{product?.price || '৳ 22,153'} </span>
                                <del className="old-price text-lg/[24px] font-normal text-slate-400">{product?.oldPrice ? `$ ${product?.oldPrice}`: '৳ 32,999'}</del>
                                <span className="discount inline-block text-base font-semibold font-title text-white bg-red-500 rounded-md py-1 px-2">{product?.discount?.percentage || '-44'}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;