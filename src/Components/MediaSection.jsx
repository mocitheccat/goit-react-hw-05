import MediaItem from "./MediaItem.jsx";
import { Link } from "react-router-dom";
import MediaSectionPlaceholder from "./Placeholders/MediaSectionPlaceholder.jsx";
import { useState } from "react";

const MediaSection = ({ title, link, mediaData, showMore }) => {
  const [isMoreResults, setIsMoreResults] = useState(false);

  const handleMoreClick = () => {
    setIsMoreResults(!isMoreResults);
  };

  if (!mediaData) return <MediaSectionPlaceholder />;

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
        {showMore && (
          <button
            className="text-white text-[8px] md:text-base border border-gray-400 bg-gray-400/30 rounded-md px-2 py-0.5 hover:border-red-500 hover:bg-gray-400/50"
            onClick={handleMoreClick}
          >
            {`Show ${!isMoreResults ? "more" : "less"}`}
          </button>
        )}
      </div>

      {!isMoreResults ? (
        <div className="flex scrollbar-custom overflow-x-auto space-x-2 py-3">
          {mediaData?.slice(0, 10).map((media) => (
            <MediaItem key={media.id} mediaData={media} />
            // <PersonMiniCard key={castMember.id} person={castMember} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {mediaData?.map((media) => (
            <MediaItem key={media.id} mediaData={media} />
            // <PersonMiniCard key={castMember.id} person={castMember} />
          ))}
        </div>
      )}
      {/*<div className="relative py-2">*/}
      {/*  {mediaData?.length > 0 && (*/}
      {/*    <div className="scrollbar-custom flex space-x-4 overflow-x-auto">*/}
      {/*      {mediaData.map((media) => (*/}
      {/*        <div*/}
      {/*          key={media.id}*/}
      {/*          className="flex-shrink-0 w-[35vw] md:w-[25vw] h-[52vw] md:h-[39vw] lg:h-[14vw] snap-align-none"*/}
      {/*        >*/}
      {/*          <MediaItem mediaData={media} />*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  );
};

export default MediaSection;
