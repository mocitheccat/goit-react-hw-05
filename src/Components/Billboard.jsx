import useBillboard from "../hooks/useBillboard";
import { useTMDB } from "../hooks/useTMDB.js";
import { ThreeDots } from "react-loader-spinner";
import { FaCircleInfo } from "react-icons/fa6";
// import TrailerPlayer from "../unusedComponents(forNow)/TrailerPlayer.jsx";
import { Link } from "react-router-dom";

const Billboard = () => {
  const tmdb = useTMDB();
  const { randomMediaDataShort, randomBackdropImgForMedia } =
    useBillboard(tmdb);

  return (
    <div className="relative h-[70vw] lg:h-[70vh] overflow-hidden rounded-b-xl shadow-2xl shadow-red-900/70">
      {randomBackdropImgForMedia ? (
        <img
          src={randomBackdropImgForMedia}
          alt="Billboard"
          className="absolute inset-0 w-full h-[70vw] lg:h-[70vh] object-cover brightness-[40%]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <ThreeDots color="#FFFFFF" />
        </div>
      )}
      <div className="absolute top-[25%] ml-4 md:ml-16">
        {randomMediaDataShort && (
          <>
            <p className="text-white text-2xl md:text-4xl h-full w-[80%] lg:text-6xl font-bold drop-shadow-xl">
              {randomMediaDataShort.title || randomMediaDataShort.name}
            </p>
            <p className="text-white text-[10px] md:text-lg lg:text-xl mt-1 md:mt-3 w-[90%] sm:w-[95%] lg:w-[60%] drop-shadow-xl">
              {`${randomMediaDataShort.overview.slice(0, 300)}...`}
            </p>
            <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
              {/*<TrailerPlayer />*/}
              <Link
                to={`/${randomMediaDataShort.media_type}/${randomMediaDataShort.id}`}
                // onClick={handleOpenModal}
                className="
                    bg-white
                    text-white
                      bg-opacity-30
                      rounded-md
                      py-1 md:py-2
                      px-2 md:px-4
                      w-auto
                      text-sm  lg:text-lg
                      font-semibold
                      flex
                      flex-row
                      items-center
                      hover:bg-opacity-20
                      transition
                    "
              >
                <FaCircleInfo className="w-4 mr-1" />
                More Info
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Billboard;
