import { createFullImgUrl } from "../utils/helpers.js";
import { useNavigate } from "react-router-dom";

const MediaItem = ({ mediaData }) => {
  const navigate = useNavigate();
  const posterUrl = createFullImgUrl(500, mediaData?.poster_path);
  const handleClick = () => {
    navigate(`${mediaData.media_type}/${mediaData.id}`);
  };
  return (
    <div
      className="group bg-zinc-900 border-2 border-gray-600 hover:border-gray-200 hover:border-4 rounded-xl overflow-hidden col-span relative h-[93%] lg:h-[91%] m-1.5"
      onClick={handleClick}
    >
      <img
        onClick={() => {}}
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
      {/*<div*/}
      {/*  className="*/}
      {/*  opacity-0*/}
      {/*  absolute*/}
      {/*  top-0*/}
      {/*  transition*/}
      {/*  duration-200*/}
      {/*  z-10*/}
      {/*  invisible*/}
      {/*  sm:visible*/}
      {/*  delay-300*/}
      {/*  w-full*/}
      {/*  scale-0*/}
      {/*  group-hover:scale-110*/}
      {/*  group-hover:-translate-y-[6vw]*/}
      {/*  group-hover:translate-x-[2vw]*/}
      {/*  group-hover:opacity-100*/}
      {/*"*/}
      {/*>*/}
      {/*  <img*/}
      {/*    onClick={() => {}}*/}
      {/*    src={posterUrl}*/}
      {/*    alt={mediaData.media_type}*/}
      {/*    draggable={false}*/}
      {/*    className="*/}
      {/*    cursor-pointer*/}
      {/*    object-cover*/}
      {/*    transition*/}
      {/*    duration*/}
      {/*    shadow-xl*/}
      {/*    rounded-t-md*/}
      {/*    w-full*/}
      {/*    h-[12vw]*/}
      {/*  "*/}
      {/*  />*/}
      {/*  <div*/}
      {/*    className="*/}
      {/*    z-10*/}
      {/*    bg-zinc-800*/}
      {/*    p-2*/}
      {/*    lg:p-4*/}
      {/*    absolute*/}
      {/*    w-full*/}
      {/*    transition*/}
      {/*    shadow-md*/}
      {/*    rounded-b-md*/}
      {/*    "*/}
      {/*  >*/}
      {/*    /!*  Додатковий контент можна додати тут *!/*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default MediaItem;
