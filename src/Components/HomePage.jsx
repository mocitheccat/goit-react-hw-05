import Billboard from "./Billboard.jsx";
import Navbar from "./Navbar.jsx";
// import MoviePage from "./MoviePage.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* <MoviePage mediaType="movie" mediaID="786892" /> */}
      <Billboard />
    </>
  );
};

export default HomePage;

// import { useEffect, useState } from "react";
// import Navbar from "./Navbar.jsx";
// import MoviePage from "./MoviePage.jsx";
// import TMDB from "../API/api.js";
//
// const tmdb = new TMDB(import.meta.env.VITE_TMDB_API_KEY);
//
// const HomePage = () => {
//   const [trending, setTrending] = useState(null);
//
//   useEffect(() => {
//     const fetchTrending = async () => {
//       try {
//         const trendingData = await tmdb.getTrending();
//         setTrending(trendingData);
//         console.log(trendingData);
//       } catch (error) {
//         console.error("Error fetching trending data:", error);
//       }
//     };
//
//     fetchTrending();
//   }, []);
//
//   return (
//     <>
//       <Navbar />
//       <MoviePage mediaType="movie" mediaID="786892" />
//       {trending && <div>{JSON.stringify(trending, null, 2)}</div>}
//     </>
//   );
// };
//
// export default HomePage;
