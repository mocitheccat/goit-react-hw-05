import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const TrailerModal = ({
  closeModal,
  info: { tmdb, mediaID, mediaType, title },
}) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    setError(false);
    const fetchTrailer = async () => {
      try {
        const url = await tmdb.getTrailer(mediaType, mediaID);
        if (url) {
          setTrailerUrl(url);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setError(true);
      }
    };

    fetchTrailer();
  }, [mediaID, mediaType, tmdb]);

  return (
    <div className="z-[100] bg-gradient-to-b from-red-950 to-stone-900 absolute w-screen h-screen top-0 flex flex-col items-center justify-center">
      <h2 className="text-2xl text-white md:text-5xl font-bold mb-1">
        {title}
      </h2>
      <div className="relative md:w-2/3 w-full h-[35vh] md:h-1/2 p-4 rounded-md drop-shadow-2xl">
        {error ? (
          <div className="flex text-white justify-center items-center h-full w-full bg-gray-500/30 rounded-md">
            <h2 className="text-2xl text-[#f01a3e] md:text-5xl font-bold mb-1 underline">
              Trailer not found
            </h2>
          </div>
        ) : (
          trailerUrl && (
            <iframe
              className="w-full h-full rounded-lg drop-shadow-2xl shadow-xl shadow-gray-400/60"
              src={trailerUrl}
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )
        )}
        {!trailerUrl && !error && (
          <div className="relative w-full h-1/2 p-4 shimmer rounded-md"></div>
        )}
      </div>
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 p-1 close-btn rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-gray-200"
      >
        <RiCloseCircleLine className="w-8 h-8 text-red-500" />
      </button>
    </div>
  );
};

export default TrailerModal;
