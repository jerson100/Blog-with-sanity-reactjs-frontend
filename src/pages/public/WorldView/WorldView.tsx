import LatestStories from "../../../components/commons/LatestStories";
import WorldNews from "../components/WorldNews";

const WorldView = () => {
  return (
    <div className="container max-w-7xl pl-4 pr-4 ml-auto mr-auto">
      <WorldNews />
      <LatestStories />
    </div>
  );
};

export default WorldView;
