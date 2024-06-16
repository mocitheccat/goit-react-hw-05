import MediaItem from "./MediaItem";
import { Link } from "react-router-dom";

const MediaSection = ({ title, link, mediaData, onMoreClick }) => {
  return (
    <div className="grid grid-rows-1">
      <div className="flex justify-between items-center text-white mb-2">
        <p className="text-white text-xs md:text-lg lg:text-xl">{title}</p>
        {link && (
          <Link
            to={link}
            className="text-white text-[8px] md:text-base border border-gray-400 bg-gray-400/30 rounded-md px-2 py-0.5 hover:border-red-500 hover:bg-gray-400/50"
          >
            Show More
          </Link>
        )}
        {!link && (
          <button
            onClick={onMoreClick}
            className="text-white text-[8px] md:text-base border border-gray-400 bg-gray-400/30 rounded-md px-2 py-0.5 hover:border-red-500 hover:bg-gray-400/50"
          >
            Show More
          </button>
        )}
      </div>

      <div className="flex scrollbar-custom overflow-x-auto space-x-2 py-3">
        {mediaData.results
          ? mediaData.results
              .slice(0, 10)
              .map((media) => (
                <MediaItem
                  key={media.id}
                  mediaData={media}
                  mediaType={mediaData.mediaType}
                />
              ))
          : mediaData
              ?.slice(0, 10)
              .map((media) => <MediaItem key={media.id} mediaData={media} />)}
      </div>
    </div>
  );
};

export default MediaSection;
