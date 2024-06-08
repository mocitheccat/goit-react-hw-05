import { Link } from "react-router-dom";
import MediaItem from "./MediaItem.jsx";

const MediaList = ({ mediaData, info }) => {
  return (
    <>
      <div className="flex justify-between items-center text-white mb-6 ">
        <p className="text-white text-xs md:text-lg lg:text-xl">
          {info.sectionTitle}
        </p>
        <Link
          to="/movies"
          className="text-white text-[8px] md:text-base border-2 border-gray-200 bg-gray-900 rounded-md px-1 py-0.5 hover:border-red-500"
        >
          Show More
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {info.mediaType === "movie"
          ? mediaData.trendingMovies?.map((media) => (
              <MediaItem key={media.id} mediaData={media} />
            ))
          : mediaData.trendingSeries?.map((media) => (
              <MediaItem key={media.id} mediaData={media} />
            ))}
      </div>
    </>
  );
};

export default MediaList;
