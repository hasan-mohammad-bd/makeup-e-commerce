import Link from "next/link";
import Image from "next/image";
import ViewHTML from "@/components/elements/ViewHTML";
import { BsFillTelephoneFill } from "react-icons/bs";
import VideoPlayer from "@/components/elements/VideoPlayer";

const Descriptions = ({ settings, product, translations }) => {
	return (
		<section id="product-descriptions">
			<div className="description">
				<h4 className="text-2xl font-bold font-title text-slate-900 mb-3">
					{translations["product-description"] || "প্রডাক্টের বিবরণ"}:
				</h4>
				<ViewHTML htmlText={product?.details} />
			</div>
			{/* {product.includedProducts?.length ? ( */}
			<div className="mt-6 lg:mt-8">
				<h4 className="text-2xl font-bold font-title text-slate-900">
					{translations["product-includes"] || "যা যা সাথে থাকবে"}
				</h4>
				<Image
					src={
						product.includedProducts[0]?.image ||
						`/assets/images/product-includes.png`
					}
					alt="Product Includes"
					width={628}
					height={510}
					className="w-full h-[17.5rem] lg:h-[31.875rem] rounded-xl mt-3"
				/>
			</div>
			{/* ) : null} */}
			{product?.review_video && (
				<div className="mt-6 lg:mt-8">
					<h4 className="text-2xl font-bold font-title text-slate-900">
						{translations["review-video"] || "রিভিউ ভিডিও"}
					</h4>
					<div className="mt-3">
						<VideoPlayer
							url={product?.review_video}
							loop={true}
							muted={true}
							// playing={true}
							controls={true}
							className={"h-[12rem] md:h-[21.875rem]"}
						/>
					</div>
				</div>
			)}
			{settings?.phone?.length && (
				<div className="contact mt-8 bg-amber-200 border border-primary rounded-xl p-5 text-center">
					<h5 className="text-2xl font-bold font-title text-slate-900 mb-3">
						{translations["know-more"] || "আরও কিছু জানার থাকলে"}
					</h5>
					<p className="flex justify-center items-center gap-4">
						<span className="text-base text-slate-900">
							{translations["call-us"] || "কল করুন"}:
						</span>{" "}
						<Link
							href={`tel:${settings?.phone[0]}`}
							className="text-2xl font-bold font-title text-primary"
						>
							<BsFillTelephoneFill /> {settings?.phone[0]}
						</Link>
					</p>
				</div>
			)}
		</section>
	);
};

export default Descriptions;
