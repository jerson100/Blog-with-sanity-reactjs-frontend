import WorldNewsCenter from "./WorldNewsCenter";
import WorldNewsLeft from "./WorldNewsLeft";
import WorldNewsRight from "./WorldNewsRight";

const WorldNews = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:flex-shrink-1 lg:basis-2/12 order-3 lg:order-1">
        <WorldNewsLeft />
      </div>
      <div className="lg:flex-shrink-1 lg:basis-6/12 order-1 lg:order-2">
        <WorldNewsCenter />
      </div>
      <div className="lg:flex-shrink-1 lg:basis-4/12 order-2 lg:order-3">
        <WorldNewsRight />
      </div>
    </div>
  );
};

export default WorldNews;
