import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Story from "../../../Story";

const stories = [
  {
    _id: 1,
    category: "World",
    title:
      "Gunmen kill 11 at Russian army base in new blow to Moscow's Ukraine campaign",
    date: "October 16, 2022 · 4:03 AM GMT-5",
    urlimg:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ICIOH3RD5BJMJFPK7UZKXGLXYI.jpg",
  },
  {
    _id: 2,
    category: "World",
    title:
      "China's Xi talks up security, reiterates COVID stance as congress opens",
    date: "3:04 AM GMT-5",
    urlimg:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/3MPXIDA7TFL73O33CJ2TSNYQ7A.jpg",
  },
  {
    _id: 3,
    category: "World",
    title:
      "Iran airs video from Evin prison hours after fire, tells Biden to stop interfering",
    date: "3:43 AM GMT-5",
    urlimg:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ICIOH3RD5BJMJFPK7UZKXGLXYI.jpg",
  },
  {
    _id: 4,
    category: "World",
    title:
      "Iran airs video from Evin prison hours after fire, tells Biden to stop interfering",
    date: "3:43 AM GMT-5",
    urlimg:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/MN5WUCZMZJLDXHSBNWW52PYQUU.jpg",
  },
  {
    _id: 5,
    category: "World",
    title:
      "Iran airs video from Evin prison hours after fire, tells Biden to stop interfering",
    date: "3:43 AM GMT-5",
    urlimg:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ICIOH3RD5BJMJFPK7UZKXGLXYI.jpg",
  },
];

const LatestSlide = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} lazyLoad="ondemand">
      {stories.map(
        ({ category, date, title, _id, urlimg, description }: any) => (
          <Story category={category} key={_id} className="border-none mr-3">
            {urlimg && (
              <Story.Image
                src={urlimg}
                className="rounded-xl mb-3"
                alt={title}
              />
            )}
            <Story.Title to="/" className="mb-2">
              {title}
            </Story.Title>
            <Story.Time className={"mb-3"}>{date}</Story.Time>
            <Story.Description>{description}</Story.Description>
          </Story>
        )
      )}
    </Slider>
  );
};

export default LatestSlide;
