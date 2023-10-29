import { fetchData } from "@/utils/fetchData";
import IntroSlider from "./IntroSlider";

const Intro = async () => {
	const { data: sliders = [] } = await fetchData({
		api: "sliders",
	});
	return (
		<div className="container">
			<IntroSlider sliders={sliders} />
		</div>
	);
};

export default Intro;
