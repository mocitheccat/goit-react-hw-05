import Billboard from "../Components/Billboard.jsx";
import Navbar from "../Components/Navbar.jsx";
import PopularToday from "../Components/PopularToday.jsx";
import { useTMDB } from "../hooks/useTMDB.js";
import { useEffect, useState } from "react";

const HomePage = () => {
  const tmdb = useTMDB();
  const [trending, setTrending] = useState({
    trendingMovies: [],
    trendingSeries: [],
  });

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendingMovies = await tmdb.getTrending("day", "movie");
        const trendingSeries = await tmdb.getTrending("day", "tv");
        console.log("Movies ==>", trendingMovies);
        console.log("TVs ==>", trendingSeries);
        const trending = {
          trendingMovies,
          trendingSeries,
        };
        setTrending(trending);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <PopularToday data={trending} />
      </div>
    </>
  );
};

export default HomePage;
