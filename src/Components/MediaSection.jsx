import MediaItem from "./MediaItem.jsx";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ThreeDots } from "react-loader-spinner";

const MediaSection = ({ title, link, mediaData }) => {
  const scrollContainerRef = useRef(null);

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
      <div className="relative">
        <div ref={scrollContainerRef} className="scrollbar-custom">
          {mediaData ? (
            mediaData?.map((media) => (
              <div
                key={media.id}
                className="flex-shrink-0 w-[35vw] md:w-[25vw] h-[52vw] md:h-[39vw] lg:h-[13.8vw] snap-align-none"
              >
                <MediaItem mediaData={media} />
              </div>
            ))
          ) : (
            <div className="absolute inset-0 flex items-center justify-center h-[48vw] md:h-[36vw] lg:h-[12vw]">
              <ThreeDots color="#FFFFFF" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
