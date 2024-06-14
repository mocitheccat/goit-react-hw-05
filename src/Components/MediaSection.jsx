import MediaItem from "./MediaItem.jsx";
import { Link } from "react-router-dom";
import MediaSectionPlaceholder from "./Placeholders/MediaSectionPlaceholder.jsx";

const MediaSection = ({ title, link, mediaData }) => {
  if (mediaData?.length === 0) return <MediaSectionPlaceholder />;

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
      <div className="relative h-[52vw] md:h-[39vw] lg:h-[13.8vw]">
        {mediaData?.length > 0 && (
          <div className="scrollbar-custom flex space-x-4 overflow-x-auto">
            {mediaData.map((media) => (
              <div
                key={media.id}
                className="flex-shrink-0 w-[35vw] md:w-[25vw] h-[52vw] md:h-[39vw] lg:h-[13.8vw] snap-align-none"
              >
                <MediaItem mediaData={media} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaSection;
