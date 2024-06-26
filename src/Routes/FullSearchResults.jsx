import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTMDB } from "../hooks/useTMDB.js";
import SearchBar from "../Components/SearchBar.jsx";
import MediaSection from "../Components/MediaSection.jsx";

const FullSearchResults = () => {
  const tmdb = useTMDB();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [mediaType, setMediaType] = useState(
    searchParams.get("type") || "movie",
  );
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [isLoading, setIsLoading] = useState(false);
  // const [response, setResponse] = useState();
  const [response, setResponse] = useState({
    moviesResponse: { results: [] },
    seriesResponse: { results: [] },
  });
  const performSearch = useCallback(
    async (query, page = 1) => {
      setIsLoading(true);
      try {
        const results = {};
        const moviesResponse = await tmdb.searchMovies(query, { page });
        const seriesResponse = await tmdb.searchSeries(query, { page });
        results.moviesResponse = moviesResponse;
        results.seriesResponse = seriesResponse;
        setResponse(results);
        console.log(results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [tmdb],
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchParams({ q: query, type: "movie", page: page });
    await performSearch(query);
  };

  const changeResults = (mediaType) => {
    setMediaType(mediaType);
    const newParams = { q: query, type: mediaType, page: 1 };
    setSearchParams(newParams);
    sessionStorage.setItem("searchParams", JSON.stringify(newParams)); // Оновлення sessionStorage
  };

  useEffect(() => {
    const savedParams = JSON.parse(sessionStorage.getItem("searchParams"));
    if (savedParams) {
      console.log("Перший юзефект");
      setSearchParams(savedParams);

      setQuery(savedParams.q);
      setMediaType(savedParams.type);
      setPage(savedParams.page);
      performSearch(savedParams.q, Number(savedParams.page));
    }
  }, [performSearch]);

  useEffect(() => {
    if (searchParams.get("q")) {
      console.log("другий юзефект");
      sessionStorage.setItem(
        "searchParams",
        JSON.stringify({
          q: searchParams.get("q"),
          type: searchParams.get("type"),
          page: searchParams.get("page"),
        }),
      );
    } else {
      sessionStorage.clear();
    }
  }, [searchParams]);

  useEffect(() => {
    console.log("scroll");
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        if (
          mediaType === "movie" &&
          page < response.moviesResponse.total_pages
        ) {
          const savedParams = JSON.parse(
            sessionStorage.getItem("searchParams"),
          );
          setSearchParams({
            ...savedParams,
            page: Number(savedParams.page) + 1,
          });

          setQuery(savedParams.q);
          setMediaType(savedParams.type);
          setPage(savedParams.page);
          performSearch(savedParams.q, Number(savedParams.page));
        } else if (
          mediaType === "tv" &&
          page < response.seriesResponse.total_pages
        ) {
          searchParams.set("page", Number(searchParams.get("page")) + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    mediaType,
    page,
    response.moviesResponse.total_pages,
    response.seriesResponse.total_pages,
  ]);

  return (
    <div className="relative overflow-y-scroll z-10 rounded-b-xl top-20 md:top-24 px-4 md:px-16 pb-20 text-white grid grid-cols-1 gap-3 md:flex md:flex-wrap md:gap-y-3 lg:grid lg:grid-cols-3">
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSubmit={handleSubmit}
      />

      {response?.seriesResponse.total_results ||
      response?.moviesResponse.total_results ? (
        <div className="flex mx-auto gap-3 my-4">
          <div className="relative">
            <button
              className={`border border-gray-400 rounded-md py-4 md:py-5 px-6 md:px-7 w-[30vw] text-base lg:text-lg font-semibold transition ${mediaType === "movie" ? "bg-gray-100 text-red-600 border-red-500" : "text-gray-200"}`}
              onClick={() => changeResults("movie")}
            >
              Movies
            </button>
            <div className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full min-h-8 min-w-8 flex justify-center items-center text-xs lg:text-sm font-bold">
              <span>{response.moviesResponse.total_results}</span>
            </div>
          </div>
          <div className="relative">
            <button
              className={`border border-gray-400 rounded-md py-4 md:py-5 px-6 md:px-7 w-[30vw] text-base lg:text-lg font-semibold transition ${mediaType === "tv" ? "bg-gray-100 text-red-600 border-red-500" : "text-gray-200"}`}
              onClick={() => changeResults("tv")}
            >
              Series
            </button>
            <div className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full min-h-8 min-w-8 flex justify-center items-center text-xs lg:text-sm font-bold">
              <span>{response.seriesResponse.total_results}</span>
            </div>
          </div>
        </div>
      ) : null}
      <MediaSection
        displayGrid
        mediaData={
          mediaType === "movie"
            ? response?.moviesResponse.results
            : response?.seriesResponse.results
        }
        mediaType={mediaType}
        isLoading={isLoading}
      />
    </div>
  );
};

export default FullSearchResults;

// import { useCallback, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useTMDB } from "../hooks/useTMDB.js";
// import SearchBar from "../Components/SearchBar.jsx";
// import MediaSection from "../Components/MediaSection.jsx";
//
// const FullSearchResults = () => {
//   const tmdb = useTMDB();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [query, setQuery] = useState(searchParams.get("q") || "");
//   const [mediaType, setMediaType] = useState(
//     searchParams.get("type") || "movie",
//   );
//   const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [response, setResponse] = useState({
//     moviesResponse: { results: [] },
//     seriesResponse: { results: [] },
//   });
//
//   const performSearch = useCallback(
//     async (query, page = 1, appendResults = false) => {
//       setIsLoading(true);
//       try {
//         const moviesResponse = await tmdb.searchMovies(query, { page });
//         const seriesResponse = await tmdb.searchSeries(query, { page });
//
//         setResponse((prevResponse) => ({
//           moviesResponse: {
//             ...moviesResponse,
//             results: appendResults
//               ? [
//                   ...prevResponse.moviesResponse.results,
//                   ...moviesResponse.results,
//                 ]
//               : moviesResponse.results,
//           },
//           seriesResponse: {
//             ...seriesResponse,
//             results: appendResults
//               ? [
//                   ...prevResponse.seriesResponse.results,
//                   ...seriesResponse.results,
//                 ]
//               : seriesResponse.results,
//           },
//         }));
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     [tmdb],
//   );
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSearchParams({ q: query, type: mediaType, page: 1 });
//     await performSearch(query, 1, false);
//   };
//
//   const changeResults = (mediaType) => {
//     setMediaType(mediaType);
//     const newParams = { q: query, type: mediaType, page: 1 };
//     setSearchParams(newParams);
//     sessionStorage.setItem("searchParams", JSON.stringify(newParams));
//     setPage(1);
//     performSearch(query, 1, false);
//   };
//
//   useEffect(() => {
//     const savedParams = JSON.parse(sessionStorage.getItem("searchParams"));
//     if (savedParams) {
//       setSearchParams(savedParams);
//       setQuery(savedParams.q);
//       setMediaType(savedParams.type);
//       setPage(savedParams.page);
//       performSearch(savedParams.q, savedParams.page, true);
//     }
//   }, [performSearch]);
//
//   useEffect(() => {
//     if (searchParams.get("q")) {
//       sessionStorage.setItem(
//         "searchParams",
//         JSON.stringify({
//           q: searchParams.get("q"),
//           type: searchParams.get("type"),
//           page: searchParams.get("page"),
//         }),
//       );
//     } else {
//       sessionStorage.clear();
//     }
//   }, [searchParams]);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop >=
//           document.documentElement.offsetHeight - 50 &&
//         !isLoading
//       ) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     };
//
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isLoading]);
//
//   useEffect(() => {
//     if (page > 1) {
//       performSearch(query, page, true);
//     }
//   }, [page, query, performSearch]);
//
//   return (
//     <div className="relative overflow-y-scroll z-10 rounded-b-xl top-20 md:top-24 px-4 md:px-16 pb-20 text-white grid grid-cols-1 gap-3 md:flex md:flex-wrap md:gap-y-3 lg:grid lg:grid-cols-3">
//       <SearchBar
//         query={query}
//         onQueryChange={setQuery}
//         onSubmit={handleSubmit}
//       />
//
//       {response?.seriesResponse.total_results ||
//       response?.moviesResponse.total_results ? (
//         <div className="flex mx-auto gap-3 my-4">
//           <div className="relative">
//             <button
//               className={`border border-gray-400 rounded-md py-4 md:py-5 px-6 md:px-7 w-[30vw] text-base lg:text-lg font-semibold transition ${
//                 mediaType === "movie"
//                   ? "bg-gray-100 text-red-600 border-red-500"
//                   : "text-gray-200"
//               }`}
//               onClick={() => changeResults("movie")}
//             >
//               Movies
//             </button>
//             <div className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full min-h-8 min-w-8 flex justify-center items-center text-xs lg:text-sm font-bold">
//               <span>{response.moviesResponse.total_results}</span>
//             </div>
//           </div>
//           <div className="relative">
//             <button
//               className={`border border-gray-400 rounded-md py-4 md:py-5 px-6 md:px-7 w-[30vw] text-base lg:text-lg font-semibold transition ${
//                 mediaType === "tv"
//                   ? "bg-gray-100 text-red-600 border-red-500"
//                   : "text-gray-200"
//               }`}
//               onClick={() => changeResults("tv")}
//             >
//               Series
//             </button>
//             <div className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full min-h-8 min-w-8 flex justify-center items-center text-xs lg:text-sm font-bold">
//               <span>{response.seriesResponse.total_results}</span>
//             </div>
//           </div>
//         </div>
//       ) : null}
//       <MediaSection
//         displayGrid
//         mediaData={
//           mediaType === "movie"
//             ? response?.moviesResponse.results
//             : response?.seriesResponse.results
//         }
//         mediaType={mediaType}
//         isLoading={isLoading}
//       />
//     </div>
//   );
// };
//
// export default FullSearchResults;
