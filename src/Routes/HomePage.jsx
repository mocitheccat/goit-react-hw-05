import Billboard from "../Components/Billboard.jsx";
import PopularToday from "../Components/PopularToday.jsx";
import { useTMDB } from "../hooks/useTMDB.js";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const tmdb = useRef(useTMDB()).current;
  const [trending, setTrending] = useState({
    trendingMovies: [],
    trendingSeries: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      // setIsLoading(true);
      try {
        const trendingMovies = await tmdb.getTrending("day", "movie");
        const trendingSeries = await tmdb.getTrending("day", "tv");
        const trending = {
          trendingMovies,
          trendingSeries,
        };
        setTrending(trending);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
      // finally {
      //   setIsLoading(false);
      // }
    };

    fetchTrending();
  }, [tmdb]);

  return (
    <>
      <Billboard />
      <PopularToday data={trending} isLoading={isLoading} />
    </>
  );
};

export default HomePage;
