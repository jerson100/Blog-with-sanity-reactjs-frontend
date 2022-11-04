import Story from "../../../../../components/commons/Story";

const stories = [
  {
    _id: 1,
    category: "World",
    title:
      "Gunmen kill 11 at Russian army base in new blow to Moscow's Ukraine campaign",
    date: "October 16, 2022 · 4:03 AM GMT-5",
    urlimg:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ICIOH3RD5BJMJFPK7UZKXGLXYI.jpg",
    description:
      "Fifteen people were wounded in the shooting in the Belgorod region that borders Ukraine, RIA reported, when two men gunned down a group who had volunteered to take part in the war. The attack took place a week after a blast damaged a bridge in Crimea.",
  },
  {
    _id: 2,
    category: "World",
    title:
      "China's Xi talks up security, reiterates COVID stance as congress opens",
    date: "3:04 AM GMT-5",
    description:
      "Chinese President called for accelerating the building of a world-class military while touting the fight against COVID-19 as he kicked off a Communist Party Congress by focussing heavily on security and reiterating policy priorities.",
  },
  {
    _id: 3,
    category: "World",
    title:
      "Iran airs video from Evin prison hours after fire, tells Biden to stop interfering",
    date: "3:43 AM GMT-5",
    description:
      "The fire at Tehran's notorious prison came amid ongoing unrest sparked by the death of 22-year-old Mahsa Amini.",
  },
];

const WorldNewsCenter = () => {
  return (
    <div>
      <ul>
        {stories.map(({ category, date, title, _id, urlimg, description }) => (
          <li key={_id}>
            <Story category={category}>
              <Story.Title to="/" className="mb-2 text-3xl">
                {title}
              </Story.Title>
              <Story.Time className={"mb-3"}>{date}</Story.Time>
              {urlimg && (
                <Story.Image
                  src={urlimg}
                  className="rounded-xl mb-3"
                  alt={title}
                />
              )}
              <Story.Description>{description}</Story.Description>
            </Story>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldNewsCenter;
