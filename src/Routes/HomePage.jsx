import Billboard from "../Components/Billboard.jsx";
import PopularToday from "../Components/PopularToday.jsx";
import { useTMDB } from "../hooks/useTMDB.js";
import { useEffect, useState } from "react";

const HomePage = () => {
  const tmdb = useTMDB();
  const [trending, setTrending] = useState({
    trendingMovies: [],
    trendingSeries: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      setIsLoading(true);
      try {
        const trendingMovies = await tmdb.getTrending("day", "movie");
        const trendingSeries = await tmdb.getTrending("day", "tv");
        console.log("MoviesPage ==>", trendingMovies);
        console.log("TVs ==>", trendingSeries);
        const trending = {
          trendingMovies,
          trendingSeries,
        };
        setIsLoading(false);
        setTrending(trending);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      } finally {
        setIsLoading(false);
      }
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
