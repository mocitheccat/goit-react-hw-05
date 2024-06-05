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



import { useRef } from "react";
import TMDB from "../API/api";
import useBillboard from "../hooks/useBillboard";

const Billboard = () => {
  const tmdb = useRef(new TMDB(import.meta.env.VITE_TMDB_API_KEY));
  const { randomMediaDataShort, randomBackdropImgForMedia } = useBillboard(tmdb.current);

  return (
    <div className="relative w-full h-96 bg-gray-900">
      {randomBackdropImgForMedia ? (
        <img
          src={randomBackdropImgForMedia}
          alt="Billboard"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white">Loading...</p>
        </div>
      )}
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 bg-gradient-to-t from-black via-transparent to-transparent">
        {randomMediaDataShort && (
          <>
            <h1 className="text-4xl font-bold text-white">
              {randomMediaDataShort.title || randomMediaDataShort.name}
            </h1>
            <p className="mt-4 text-lg text-white max-w-prose">
              {randomMediaDataShort.overview}
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Release Date: {randomMediaDataShort.release_date || randomMediaDataShort.first_air_date}
            </p>
            <p className="mt-1 text-sm text-gray-300">
              Rating: {randomMediaDataShort.vote_average} ({randomMediaDataShort.vote_count} votes)
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Billboard;

