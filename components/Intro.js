import { fetchData } from "@/utils/fetchData";
import IntroSlider from "./elements/sliders/IntroSlider";

const Intro = async () => {
  const { data: sliders = [] } = await fetchData({
    api: "sliders",
  });
  return <IntroSlider sliders={sliders} />;
};

export default Intro;
