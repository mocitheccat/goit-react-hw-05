// import { useState, useEffect, useCallback } from "react";
// import SearchBar from "../Components/SearchBar";
// import {
//   useNavigate,
//   useSearchParams,
//   Outlet,
//   useLocation,
// } from "react-router-dom";
// import { useTMDB } from "../hooks/useTMDB";
// import MediaSection from "../Components/MediaSection";
//
// const SearchPage = () => {
//   const initialState = {
//     movies: { results: [], totalMatch: 0, mediaType: "movie" },
//     series: { results: [], totalMatch: 0, mediaType: "tv" },
//   };
//   const tmdb = useTMDB();
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState(initialState);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//
//   const performSearch = useCallback(
//     async (query) => {
//       setIsLoading(true);
//       try {
//         const [moviesResponse, seriesResponse] = await Promise.all([
//           tmdb.searchMovies(query),
//           tmdb.searchSeries(query),
//         ]);
//
//         setResults({
//           movies: {
//             ...initialState.movies,
//             results: moviesResponse.results,
//             totalMatch: moviesResponse.total_results,
//           },
//           series: {
//             ...initialState.series,
//             results: seriesResponse.results,
//             totalMatch: seriesResponse.total_results,
//           },
//         });
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     [tmdb],
//   );
//
//   useEffect(() => {
//     const initiateSearchIfQueryExists = async () => {
//       const initialQuery =
//         searchParams.get("q") || sessionStorage.getItem("searchQuery") || "";
//       setQuery(initialQuery);
//       if (initialQuery) {
//         await performSearch(initialQuery);
//       }
//     };
//     initiateSearchIfQueryExists();
//   }, [performSearch, searchParams]);
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSearchParams({ q: query });
//     sessionStorage.setItem("searchQuery", query);
//     await performSearch(query);
//   };
//
//   const handleShowMore = (mediaType) => {
//     navigate(`ultra-search/${mediaType}`, { state: { query, page: 1 } });
//   };
//
//   const { movies, series } = results;
//
//   const isNestedRoute = location.pathname.includes("ultra-search");
//
//   return (
//     <div className="relative overflow-y-scroll z-10 rounded-b-xl top-20 md:top-24 px-4 md:px-16 pb-20 text-white grid grid-cols-1 gap-3 md:flex md:flex-wrap md:gap-x-10 md:gap-y-3 lg:grid lg:grid-cols-3">
//       <SearchBar
//         query={query}
//         onQueryChange={setQuery}
//         onSubmit={handleSubmit}
//       />
//       {isNestedRoute ? (
//         <Outlet />
//       ) : (
//         <>
//           {isLoading ? (
//             <div className="mt-8 space-y-2 pb-2">
//               <MediaSectionPlaceholder />
//               <MediaSectionPlaceholder />
//             </div>
//           ) : (
//             <>
//               {movies.results && movies.results.length > 0 && (
//                 <div className="mt-8 space-y-2 pb-2">
//                   <MediaSection
//                     title="Founded movies"
//                     mediaData={movies}
//                     onMoreClick={() => handleShowMore(movies.mediaType)}
//                     totalMatch={movies.totalMatch}
//                   />
//                 </div>
//               )}
//               {series.results && series.results.length > 0 && (
//                 <div className="mt-8 space-y-2 pb-2">
//                   <MediaSection
//                     title="Founded series"
//                     mediaData={series}
//                     onMoreClick={() => handleShowMore(series.mediaType)}
//                     totalMatch={series.totalMatch}
//                   />
//                 </div>
//               )}
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );
// };
//
// export default SearchPage;

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar.jsx";

const SearchPage = () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [inputQuery, setInputQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputQuery);
    console.log("inputQuery", inputQuery);
    setUrlSearchParams({ q: searchQuery });
    console.log("searchQuery", searchQuery);
  };

  return (
    <div className="relative overflow-y-scroll z-10 rounded-b-xl top-20 md:top-24 px-4 md:px-16 pb-20 text-white grid grid-cols-1 gap-3 md:flex md:flex-wrap md:gap-x-10 md:gap-y-3 lg:grid lg:grid-cols-3">
      <SearchBar
        query={inputQuery}
        onQueryChange={setInputQuery}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SearchPage;
