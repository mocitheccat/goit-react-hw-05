// import { useRef } from "react";
// import TMDB from "../API/api"
// import useBillboard from "../hooks/useBillboard";

// const Billboard = () => {
//     const tmdb = useRef(new TMDB(import.meta.env.VITE_TMDB_API_KEY));
//     const {billBoaedData, BillboardRandomImg} = useBillboard(tmdb.current, 500)

//   return (
//     <div>
//         <h1>Billboard</h1>
//         <img src={BillboardRandomImg} alt="Billboard" width={500}/>
//         {/* <h2>{billBoaedData.title}</h2>
//         <p>{billBoaedData.overview}</p>
//         <p>{billBoaedData.release_date}</p>
//         <p>{billBoaedData.vote_average}</p>
//         <p>{billBoaedData.vote_count}</p>
//         <p>{billBoaedData.original_title}</p>
//         <p>{billBoaedData.original_language}</p>
//         <p>{billBoaedData.original_name}</p>
//         <p>{billBoaedData.popularity}</p>
//         <p>{billBoaedData.backdrop_path}</p>
//         <p>{billBoaedData.adult}</p> */}
//         <p className="text-white">{JSON.stringify(billBoaedData)}
//             </p>
//     </div>
//   )
// }

// export default Billboard

import useBillboard from "../hooks/useBillboard";
import { useTMDB } from "../hooks/useTMDB.js";
import { ThreeDots } from "react-loader-spinner";
import { FaCircleInfo } from "react-icons/fa6";
import TrailerPlayer from "../unusedComponents(forNow)/TrailerPlayer.jsx";
import { Link } from "react-router-dom";

const Billboard = () => {
  const tmdb = useTMDB();
  const { randomMediaDataShort, randomBackdropImgForMedia } =
    useBillboard(tmdb);

  return (
    <div className="relative h-[56.25vw]">
      {randomBackdropImgForMedia ? (
        <img
          src={randomBackdropImgForMedia}
          alt="Billboard"
          className="absolute inset-0 w-full h-[56.25vw] object-cover brightness-50"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <ThreeDots color="#FFFFFF" />
        </div>
      )}
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        {randomMediaDataShort && (
          <>
            <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
              {randomMediaDataShort.title || randomMediaDataShort.name}
            </p>
            <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
              {randomMediaDataShort.overview}
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
                      text-xs lg:text-lg
                      font-semibold
                      flex
                      flex-row
                      items-center
                      hover:bg-opacity-20
                      transition
                    "
              >
                <FaCircleInfo className="w-4 md:w-7 mr-1" />
                More Info
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // return (
  //     <div className="relative w-full h-96 bg-gray-900">
  //         {randomBackdropImgForMedia ? (
  //             <img
  //                 src={randomBackdropImgForMedia}
  //                 alt="Billboard"
  //                 className="absolute inset-0 w-full h-full object-cover"
  //             />
  //         ) : (
  //             <div className="absolute inset-0 flex items-center justify-center">
  //                 <ThreeDots color="#FFFFFF" />
  //             </div>
  //         )}
  //         <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 bg-gradient-to-t from-black via-transparent to-transparent">
  //             {randomMediaDataShort && (
  //                 <>
  //                     <h1 className="text-4xl font-bold text-white">
  //                         {randomMediaDataShort.title || randomMediaDataShort.name}
  //                     </h1>
  //                     <p className="mt-4 text-lg text-white max-w-prose">
  //                         {randomMediaDataShort.overview}
  //                     </p>
  //                     <p className="mt-2 text-sm text-gray-300">
  //                         Release Date:{" "}
  //                         {randomMediaDataShort.release_date ||
  //                             randomMediaDataShort.first_air_date}
  //                     </p>
  //                     <p className="mt-1 text-sm text-gray-300">
  //                         Rating: {randomMediaDataShort.vote_average} (
  //                         {randomMediaDataShort.vote_count} votes)
  //                     </p>
  //                 </>
  //             )}
  //         </div>
  //     </div>
  // );
};

export default Billboard;
