import Slider from "react-slick";
import MediaItem from "./MediaItem.jsx";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MediaSection = ({ title, link, mediaData, settings }) => {
  return (
    <div>
      <div className="flex justify-between items-center text-white mb-6">
        <p className="text-white text-xs md:text-lg lg:text-xl">{title}</p>
        <Link
          to={link}
          className="text-white text-[8px] md:text-base border-2 border-gray-200 bg-gray-900 rounded-md px-1 py-0.5 hover:border-red-500"
        >
          Show More
        </Link>
      </div>
      <Slider {...settings}>
        {mediaData?.map((media) => (
          <MediaItem key={media.id} mediaData={media} />
        ))}
      </Slider>
    </div>
  );
};

export default MediaSection;
