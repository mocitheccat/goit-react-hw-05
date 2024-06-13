import { createFullImgUrl } from "../utils/helpers.js";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const MediaItem = ({ isLoading, mediaData }) => {
  const navigate = useNavigate();
  // let posterUrl;
  const posterUrl = createFullImgUrl(500, mediaData?.poster_path);
  const handleClick = () => {
    navigate(`${mediaData.media_type}/${mediaData.id}`);
  };
  return (
    <div
      className="group bg-zinc-900 border-2 border-gray-600 hover:border-gray-200 hover:border-4 rounded-xl overflow-hidden col-span relative h-[93%] lg:h-[91%] m-1.5"
      onClick={handleClick}
    >
      {!isLoading ? (
        <img
          src={posterUrl}
          alt={mediaData.media_type}
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
        <div className="flex text-white justify-center items-center h-full">
          <ThreeDots color="#FFFFFF" />
        </div>
      )}
    </div>
  );
};

export default MediaItem;
