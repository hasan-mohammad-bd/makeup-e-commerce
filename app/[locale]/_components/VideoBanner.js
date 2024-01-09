import { fetchData } from "@/lib/fetch-data";
import { Link } from "@/navigation";

// ** Import Icons
import { HiPlay } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";

const VideoBanner = async ({ translations }) => {
	const data = await fetchData({ api: "info/basic" });
	const settings = data?.data || {};

	return (
		<>
			<div
				className="bg-no-repeat bg-cover bg-center py-8 lg:py-12"
				style={{
					backgroundImage: `url(${settings.home_review_banner})`,
				}}
			>
				<div className="content text-center container">
					<h3 className="text-2xl lg:text-4xl/[48px] font-bold font-title text-white">
						{translations["review_banner_title"]}
					</h3>
					<p className="max-w-sm text-sm lg:text-lg font-normal text-white mt-3 lg:mt-5 mx-auto">
						{translations["review_banner_subtitle"]}
					</p>
					<Link
						href={settings?.review_video_link || "https://youtube.com"}
						target="_blank"
						className="inline-block text-lg/[26px] font-semibold text-white bg-primary p-3 rounded-lg mt-4 lg:mt-8"
					>
						<HiPlay className="mr-1" />
						{translations["watch-video"]}
					</Link>
				</div>
				<div className="text-center">
					<Link
						href={settings.youtube_link}
						target="_blank"
						className="inline-block text-sm text-red-500 mt-9 lg:mt-14"
					>
						{translations["visit-youtube-channel"]}{" "}
						<HiArrowLongRight className="text-lg ml-1" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default VideoBanner;
