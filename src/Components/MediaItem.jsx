import { createFullImgUrl } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import posterPlaceholder from "../../public/images/poster-placeholder.png";

const MediaItem = ({ mediaData, mediaType, isGrid }) => {
  const navigate = useNavigate();
  const posterUrl = createFullImgUrl(500, mediaData?.poster_path);

  const handleClick = () => {
    navigate(`/${mediaType || mediaData?.media_type}/${mediaData?.id}`);
  };

  return (
    <div className="flex flex-col">
      <div
        className={`bg-zinc-900 border-2 border-gray-600 hover:border-gray-200 hover:border-2 rounded-xl overflow-hidden ${!isGrid ? "min-w-[35vw] max-w-[35vw] md:min-w-[18vw] lg:min-w-[25vw] min-h-[52vw] max-h-[52vw] md:min-h-[25vw] md:max-h-[25vw] lg:min-h-[14vw] lg:max-h-[14vw]" : "w-full min-h-[70vw] max-h-[70vw] md:min-h-[30vw] md:max-h-[30vw] lg:min-h-[32vw] lg:max-h-[32vw]"}`}
        onClick={handleClick}
      >
        {mediaData?.poster_path ? (
          <img
            src={posterUrl}
            alt={mediaData?.media_type}
            draggable={false}
            className="cursor-pointer object-cover rounded-md w-full h-full"
          />
        ) : (
          <img
            src={posterPlaceholder}
            alt={mediaData?.media_type}
            draggable={false}
            className="cursor-pointer object-cover rounded-md w-full h-full"
          />
        )}
      </div>
      <div className="p-2 bg-zinc-900 rounded-b-xl">
        <h2 className="text-gray-200 text-lg md:text-xl lg:text-2xl">
          {mediaData?.title || mediaData?.name}
        </h2>
        <p className="text-gray-300 text-sm md:text-base lg:text-lg">
          {new Date(
            mediaData?.release_date || mediaData?.first_air_date,
          ).getFullYear() || "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default MediaItem;
