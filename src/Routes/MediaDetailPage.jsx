import { useTMDB } from "../hooks/useTMDB.js";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import {
  RiCalendar2Line,
  RiPlanetLine,
  RiBarChart2Line,
  RiTimeLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { createFullImgUrl } from "../utils/helpers.js";

const MediaDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const mediaType = location.pathname.split("/")[1]; // Можливо, замінити на useParams для типу
  const mediaID = id;
  const tmdb = useTMDB();
  const [fullMediaData, setFullMediaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieData = async () => {
      setLoading(true);
      try {
        const data = await tmdb.getFullMediaData(mediaType, mediaID);
        setFullMediaData(data);
      } catch (error) {
        setError(error.message);
      } finally {
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

  if (error) return <div>Error: {error}</div>;

  if (!fullMediaData) return <div>No data available</div>;

  return (
    <>
      <div className="fixed w-screen h-screen">
        {fullMediaData.backdrop_path ? (
          <img
            src={createFullImgUrl("original", fullMediaData.backdrop_path)}
            alt="Backdrop"
            className="absolute inset-0 w-screen h-screen object-cover brightness-[40%]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ThreeDots color="#FFFFFF" />
          </div>
        )}
      </div>
      <div className="relative overflow-y-scroll z-10 rounded-b-xl top-20 md:top-24 px-4 md:px-16 pb-20 text-white grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-10 lg:grid lg:grid-cols-3">
        <img
          className="w-[40vw] h-full md:w-[25vw] lg:w-[20vw] rounded-xl border-2 border-gray-200 shadow-2xl shadow-gray-200/50"
          src={createFullImgUrl(500, fullMediaData.poster_path)}
          alt={fullMediaData.title || fullMediaData.name}
        />

        <div className="flex flex-col justify-center gap-3 mr-auto md:ml-16">
          <div className="flex items-center gap-2 md:gap-3">
            <RiCalendar2Line className="w-6 h-6" />
            <p className="text-sm font-semibold md:text-lg">
              {fullMediaData?.release_date?.split("-")[0] ||
                fullMediaData?.first_air_date?.split("-")[0]}
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-3 md:hidden">
            <RiPlanetLine className="w-6 h-6" />
            <p className="text-sm md:text-lg">
              {fullMediaData?.production_countries
                .map((country) => country.iso_3166_1)
                .join(", ")}
            </p>
          </div>
          <div className="hidden md:flex md:items-center gap-2 md:gap-3">
            <RiPlanetLine className="w-6 h-6" />
            <p className="text-sm md:text-lg">
              {fullMediaData?.production_countries
                .map((country) => country.name)
                .join(", ")}
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <MdOutlineTheaterComedy className="w-6 h-6" />
            <p className="text-sm md:text-lg">
              {fullMediaData?.genres.map((genre) => genre.name)[0]}
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <RiBarChart2Line className="w-6 h-6" />
            <p className="text-sm md:text-lg">{fullMediaData?.vote_average}</p>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <RiTimeLine className="w-6 h-6" />
            <p className="text-sm md:text-lg">{`${fullMediaData?.runtime} хв`}</p>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <RiMoneyDollarCircleLine className="w-6 h-6" />
            <p className="text-sm md:text-lg">
              {fullMediaData?.budget || "Невідомо"}
            </p>
          </div>
        </div>
        <div className="col-span-2 md:w-[60vw] lg:grid-cols-2">
          <h1 className="text-3xl font-bold mb-6 w-[60vw]">
            {fullMediaData.title || fullMediaData.name}
          </h1>

          <h2 className="text-2xl font-semibold mb-1">Overview</h2>
          <p className="text-lg">{fullMediaData.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MediaDetailPage;
