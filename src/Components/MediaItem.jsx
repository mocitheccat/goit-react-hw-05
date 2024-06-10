import { createFullImgUrl } from "../utils/helpers.js";

const MediaItem = ({ mediaData }) => {
  const posterUrl = createFullImgUrl(500, mediaData?.poster_path);
  return (
    <div className="group bg-zinc-900 col-span relative h-[35vw] md:h-[30vw] lg:h-[12vw] m-1">
      <img
        onClick={() => {}}
        src={posterUrl}
        alt={mediaData.media_type}
        draggable={false}
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[35vw]
        md:h-[30vw]
        lg:h-[12vw]
      "
      />
      <div
        className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
      "
      >
        <img
          onClick={() => {}}
          src={posterUrl}
          alt={mediaData.media_type}
          draggable={false}
          className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        "
        />
        <div
          className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          "
        >
          {/*  Додатковий контент можна додати тут */}
        </div>
      </div>
    </div>
  );
};

export default MediaItem;
