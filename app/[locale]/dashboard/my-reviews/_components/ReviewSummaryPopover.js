import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import EmojiSmile from "@/components/elements/svg/EmojiSmile";

export default function ReviewSummaryPopover({ review, translations = {} }) {
	return (
		<div className="absolute right-0 top-[40px] z-10">
			<div className="relative bg-white p-3 lg:p-6 border w-[22.5rem] lg:w-[33.5rem] border-slate-300 rounded-lg">
				<div className="absolute top-0 right-4 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-6 bg-white border-l border-t border-slate-300"></div>
				<div className="content-area flex gap-4">
					<div className="bg-slate-100 h-[8.75rem] w-[8rem] lg:w-[10.5rem] flex flex-col justify-between gap-2 items-center p-4">
						<span className="flex items-center gap-1 text-primary">
							<Rating
								initialValue={review?.rating || 5}
								allowFraction
								readonly
								size={24}
								transition
								fillColor="#F59E0B"
							/>
						</span>
						<p>{translations["outstanding"] || "অসাধারণ"}</p>
						<p className="text-primary">
							<EmojiSmile />
						</p>
					</div>
					<div className="">
						<p>{review?.comment}</p>
						<div className="flex gap-3 lg:gap-4 mt-3 flex-wrap">
							{review?.images?.map((item, index) => (
								<Image
									key={index}
									src={item.image}
									height={88}
									width={88}
									alt="product-img"
									className="rounded-lg h-[80px] lg:h-[88px] w-[80px] lg:w-[88px]"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
