import Story from "../../../../../components/commons/Story";

const stories = [
  {
    _id: 1,
    category: "World",
    title: "New UK finance minister vows to show markets he can fix budget",
    date: "3:36 AM GMT-5",
    urlimg:
      "https://www.reuters.com/resizer/ceyaA2muMMC6GWpYY5NSlFOFmwE=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BFLDIOGG3NI5DNOWGINMU53ROE.jpg",
  },
  {
    _id: 2,
    category: "World",
    title:
      "Biden calls testimony, video from Jan. 6 committee hearing 'devastating'",
    date: "2:11 AM GMT-5",
    urlimg:
      "https://www.reuters.com/resizer/U3nQBmdfi9PUicjkdjXvLtv21J0=/480x251/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TKEA3GJNLJKS5N2EXY3EUMVDAA.jpg",
  },
  {
    _id: 3,
    category: "Technology",
    title:
      "Elon Musk says SpaceX will keep funding Starlink in Ukraine despite losing money",
    date: "October 15, 2022",
    description:
      "Musk tweeted: the hell with it … even though starlink is still losing money & other companies are getting billions of taxpayer $, we'll just keep funding ukraine govt for free",
  },
  {
    _id: 4,
    category: "World",
    title:
      "In letter to North Korea's Kim, China's Xi calls for communication, unity and cooperation",
    date: "October 15, 2022",
  },
];

const WorldNewsRight = () => {
  return (
    <div>
      <ul>
        {stories.map(({ category, date, title, _id, urlimg, description }) => (
          <li key={_id}>
            <Story category={category}>
              <Story.Title to="/" className="mb-2">
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
              {description && (
                <Story.Description>{description}</Story.Description>
              )}
            </Story>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldNewsRight;
