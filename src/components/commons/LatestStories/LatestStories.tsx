import LatestSlide from "./components/LatestSlide";
import LatestHeader from "./components/LatestHeader";

const LatestStories = () => {
  return (
    <section className="mb-6">
      <h2 className="font-semibold text-lg mb-4">Latest Stories</h2>
      <LatestHeader />
      <LatestSlide />
    </section>
  );
};

export default LatestStories;
