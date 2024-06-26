import MediaItem from "./MediaItem";
import MediaItemsPlaceholder from "./Placeholders/MediaItemsPlaceholder.jsx";

const MediaSection = ({
  title,
  mediaData = [],
  onClick,
  isLoading,
  displayGrid,
  mediaType,
}) => {
  return (
    <>
      <div className="flex justify-between items-center text-white">
        <p className="text-white text-lg md:text-xl lg:text-2xl">{title}</p>
        {onClick && (
          <button
            onClick={onClick}
            className="text-white text-[8px] md:text-base border border-gray-400 bg-gray-400/30 rounded-md px-2 py-0.5 hover:border-red-500 hover:bg-gray-400/50"
          >
            Show More
          </button>
        )}
      </div>

      <div
        className={
          !displayGrid
            ? "flex scrollbar-custom overflow-x-auto space-x-2 py-2 md:py-3 lg:py-4 mb-6"
            : "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-2"
        }
      >
        {isLoading ? (
          <MediaItemsPlaceholder />
        ) : (
          mediaData
            .slice(0, 10)
            .map((media) => (
              <MediaItem
                key={media.id}
                mediaData={media}
                isGrid={displayGrid}
                mediaType={mediaType}
              />
            ))
        )}
      </div>
    </>
  );
};

export default MediaSection;
