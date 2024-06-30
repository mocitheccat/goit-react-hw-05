import useBillboard from "../hooks/useBillboard";
import { useTMDB } from "../hooks/useTMDB.js";

import { Link } from "react-router-dom";
import { RiInformation2Line } from "react-icons/ri";
import BillboardPlaceholder from "./Placeholders/BillboardPlaceholder.jsx";

const Billboard = () => {
  const tmdb = useTMDB();
  const { randomMediaDataShort, randomBackdropImgForMedia } =
    useBillboard(tmdb);

  if (!randomMediaDataShort) {
    return <BillboardPlaceholder />;
  }

  return (
    <div className="relative h-[70vw] lg:h-[70vh] overflow-hidden rounded-b-xl shadow-2xl shadow-red-900/70">
      <img
        src={randomBackdropImgForMedia}
        alt="Billboard"
        className="absolute inset-0 w-full h-[70vw] lg:h-[70vh] object-cover brightness-[40%]"
      />
      <div className="relative h-[70vw] lg:h-[70vh] overflow-hidden rounded-b-xl flex items-center top-6">
        <div className="ml-4 md:ml-16">
          <p className="text-white text-2xl md:text-4xl h-full w-[80%] lg:text-6xl font-bold drop-shadow-xl">
            {randomMediaDataShort.title || randomMediaDataShort.name}
          </p>
          <p className="text-white text-[10px] md:text-lg lg:text-xl mt-1 md:mt-3 w-[90%] sm:w-[95%] lg:w-[60%] drop-shadow-xl">
            {`${randomMediaDataShort.overview.slice(0, 300)}...`}
          </p>
          <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
            <Link
              to={`/${randomMediaDataShort.media_type}/${randomMediaDataShort.id}`}
              className="
                bg-white
                text-white
                bg-opacity-30
                rounded-md
                py-1 md:py-2
                px-2 md:px-4
                w-auto
                text-sm lg:text-lg
                font-semibold
                flex flex-row items-center
                hover:bg-opacity-20
                transition
              "
            >
              <RiInformation2Line className="w-4 mr-1" />
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
