import { useTMDB } from "../hooks/useTMDB.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { RiCalendar2Line } from "react-icons/ri";
import { createFullImgUrl } from "../utils/helpers.js";

const MediaDetailPage = () => {
  const tmdb = useTMDB();
  const location = useLocation();
  const mediaType = location.pathname.split("/")[1];
  const mediaID = location.pathname.split("/")[2];
  const [fullMediaData, setFullMediaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const data = await tmdb.getFullMediaData(mediaType, mediaID);
        setFullMediaData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getMovieData();
  }, [tmdb, mediaType, mediaID]);

  if (loading)
    return (
      <div className="relative top-20 px-4 md:px-12 space-y-8 pb-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <ThreeDots color="#FFFFFF" />
        </div>
      </div>
    );

  return (
    <>
      <div className="fixed w-screen h-screen">
        {fullMediaData.poster_path ? (
          <img
            src={createFullImgUrl("original", fullMediaData.backdrop_path)}
            alt="Poster"
            className="absolute inset-0 w-screen h-screen object-cover brightness-[40%]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ThreeDots color="#FFFFFF" />
          </div>
        )}
      </div>
      <div className="relative overflow-y-scroll z-10 rounded-b-xl top-20 px-4 pb-20 text-white grid grid-cols-2 gap-1">
        <img
          className="w-[40vw] h-[65vw] mb-5 rounded-xl border-2 border-gray-200  shadow-2xl shadow-gray-200/50"
          src={createFullImgUrl(500, fullMediaData.poster_path)}
          alt={fullMediaData.title || fullMediaData.name}
        />

        <div className="flex gap-3">
          <RiCalendar2Line className="w-6 h-6" />
          <p className="text-sm font-semibold mb-1">
            {fullMediaData.release_date.split("-")[0]}
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-6 w-[40vw]">
            {fullMediaData.title || fullMediaData.name}
          </h1>

          <h2 className="text-2xl font-semibold mb-1">Overview</h2>
          <p className="text-lg">{fullMediaData.overview}</p>
        </div>
      </div>
    </>

    // <div className="relative top-20 px-4 md:px-12 space-y-8 pb-20 text-white">
    //   <h1 className="text-3xl font-bold mb-4">
    //     {fullMediaData.title || fullMediaData.name}
    //   </h1>
    //   <div className="grid grid-cols-2 gap-2 w-full">
    //     <img
    //       className="w-[40vw] h-[65vw] mb-4 rounded-xl border-2 border-gray-200"
    //       src={`https://image.tmdb.org/t/p/w500${fullMediaData.poster_path}`}
    //       alt={fullMediaData.title || fullMediaData.name}
    //     />
    //
    //     <div>
    //       <p className="mb-2 text-sm">
    //         <strong>Overview:</strong> {fullMediaData.overview}
    //       </p>
    //       <p className="mb-2">
    //         <strong>Release Date:</strong> {Date(fullMediaData.release_date)}
    //       </p>
    //       <p className="mb-2">
    //         <strong>Genres:</strong>{" "}
    //         {fullMediaData.genres.map((genre) => genre.name).join(", ")}
    //       </p>
    //       <p className="mb-2">
    //         <strong>Runtime:</strong> {fullMediaData.runtime} minutes
    //       </p>
    //     </div>
    //     <div className="">
    //       <p className="mb-2">
    //         <p>Vote Average:</p>
    //         <p>{fullMediaData.vote_average}</p>
    //       </p>
    //       <p className="mb-2">
    //         <strong>Production Companies:</strong>{" "}
    //         {fullMediaData.production_companies
    //           .map((company) => company.name)
    //           .join(", ")}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MediaDetailPage;
