import Story from "../../../../../components/commons/Story";
import Divider from "../../../../../components/commons/Divider";

const stories = [
  {
    _id: 1,
    category: "Technology",
    title:
      "Macro Matters Analysis: Indonesia's defences start crumbling against relentless dollar",
    date: "7:03 PM GMT-5",
  },
  {
    _id: 2,
    category: "Technology",
    title: "Kakao shares slump as outage sparks calls for regulatory scrutiny",
    date: "10 min ago",
  },
  {
    _id: 3,
    category: "World",
    title:
      "Malta demonstrators mark five years since Daphne Caruana Galizia's murder",
    date: "1:50 PM GMT-5",
  },
  {
    _id: 4,
    category: "World",
    title: "Thousands take to the streets of Paris to protest soaring prices",
    date: "4:35 PM GMT-5",
  },
  {
    _id: 5,
    category: "World",
    title:
      "Calm returns to Syria rebel enclave after deadly internecine fighting",
    date: "5:30 PM GMT-5",
  },
  {
    _id: 6,
    category: "World",
    title: "Argentina to give workers income tax relief from November",
    date: "1:44 PM GMT-5",
  },
];

const WorldNewsLeft = () => {
  return (
    <div>
      <h1 className="py-4">
        <a
          href=""
          className="hover:underline text-orange-600 font-bold text-2xl"
        >
          World News
        </a>
      </h1>
      <Divider />
      <ul>
        <li>
          {stories.map(({ category, date, title, _id }) => (
            <Story key={_id} category={category}>
              <Story.Title to="/" className="mb-2">
                {title}
              </Story.Title>
              <Story.Time>{date}</Story.Time>
            </Story>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default WorldNewsLeft;
