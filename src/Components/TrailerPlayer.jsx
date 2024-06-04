import { useEffect, useState } from "react";
// import TMDB from "../API/api.js";

// const tmdb = new TMDB(import.meta.env.VITE_TMDB_API_KEY);

const TrailerPlayer = ({ mediaType, mediaID }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const url = await tmdb.getTrailer(mediaType, mediaID);
        setTrailerUrl(url);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [mediaID, mediaType]);

  return (
    <div>
      {trailerUrl ? (
        <video
          width="560"
          height="315"
          src={trailerUrl}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default TrailerPlayer;
