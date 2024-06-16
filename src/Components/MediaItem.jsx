import { createFullImgUrl } from "../utils/helpers.js";
import { useNavigate } from "react-router-dom";

const MediaItem = ({ mediaData, mediaType }) => {
  const navigate = useNavigate();
  const posterUrl = createFullImgUrl(500, mediaData?.poster_path);
  // console.log(mediaData);
  const handleClick = () => {
    {
      mediaType
        ? navigate(`/${mediaType}/${mediaData?.id}`)
        : navigate(`/${mediaData?.media_type}/${mediaData?.id}`);
    }
  };

  return (
    <div
      className="bg-zinc-900 border-2 border-gray-600 hover:border-gray-200 hover:border-2 rounded-xl overflow-hidden min-w-[35vw] md:min-w-[25vw] min-h-[52vw] md:min-h-[39vw] lg:min-h-[14vw]"
      onClick={handleClick}
    >
      {mediaData?.poster_path ? (
        <img
          src={posterUrl}
          alt={mediaData?.media_type}
          draggable={false}
          className="
            cursor-pointer
            object-cover
            rounded-md
            w-full
            h-full
          "
        />
      ) : (
        <div className="flex text-white justify-center items-center h-full w-full bg-gray-500/30">
          <p>No image available</p>
        </div>
      )}
    </div>
  );
};

export default MediaItem;
