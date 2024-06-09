import MediaItem from "./MediaItem.jsx";
import { Link } from "react-router-dom";

const PopularToday = ({ data }) => {
  return (
    <div className="px-4 md:px-12 mt-8 space-y-8">
      <div>
        <p className="text-white text-md md:text-2xl lg:text-4xl font-semibold mb-4">
          Popular Today
        </p>
        <div className="flex justify-between items-center text-white mb-6 ">
          <p className="text-white text-xs md:text-lg lg:text-xl">
            Popular Movies
          </p>
          <Link
            to="/movies"
            className="text-white text-[8px] md:text-base border-2 border-gray-200  borbg-gray-900 rounded-md px-1 py-0.5 hover:border-red-500"
          >
            Show More
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 lg:gap-3 grid-cols-2 gap-4">
          {data.trendingMovies?.map((media) => (
            <MediaItem key={media.id} mediaData={media} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center text-white mb-6 ">
          <p className="text-white text-xs md:text-lg lg:text-xl">
            Popular Series
          </p>
          <Link
            to="/movies"
            className="text-white text-[8px] md:text-base border-2 border-gray-200  borbg-gray-900 rounded-md px-1 py-0.5 hover:border-red-500"
          >
            Show More
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-3 gap-4">
          {data.trendingSeries?.map((media) => (
            <MediaItem key={media.id} mediaData={media} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularToday;
