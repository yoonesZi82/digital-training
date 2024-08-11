import LatestNews from "./components/latest-news/LatestNews";
import SliderMain from "./components/slider/SliderMain";
import WorkGroups from "./components/work-group/WorkGroups";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="w-full">
          <SliderMain />
          <LatestNews />
          <WorkGroups />
        </div>
      </div>
    </div>
  );
}
