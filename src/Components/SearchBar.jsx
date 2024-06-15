// import { useCallback, useEffect, useRef, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { RiSearch2Line } from "react-icons/ri";
//
// const SearchBar = ({ tmdb }) => {
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [query, setQuery] = useState("");
//
//   const inputRef = useRef(null);
//   const navigate = useNavigate();
//
//   const performSearch = useCallback(
//     async (query) => {
//       setResults([]);
//       setIsLoading(true);
//       try {
//         if (query) {
//           const searchResults = await tmdb.multiSearch(query);
//           setResults(searchResults.results);
//         } else {
//           setResults([]);
//         }
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     },
//     [tmdb],
//   );
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/search?q=${query}`, { state: { res: results } });
//     sessionStorage.setItem("searchQuery", query);
//     performSearch(query);
//   };
//
//   useEffect(() => {
//     const initialQuery =
//       searchParams.get("q") || sessionStorage.getItem("searchQuery") || "";
//     setQuery(initialQuery);
//     setSearchParams({ q: initialQuery });
//     if (initialQuery) {
//       performSearch(initialQuery);
//     }
//   }, [performSearch, searchParams, setSearchParams]);
//
//   return (
//     <div className="w-full p-4 bg-gray-800 rounded-md shadow-lg">
//       <form onSubmit={handleSubmit} className="flex items-center space-x-2">
//         <input
//           ref={inputRef}
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="relative w-full px-12 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
//           placeholder="Search for movies, TV shows, and people..."
//         />
//         <RiSearch2Line className="absolute inset-y-0 text text-red-500 w-8 h-8 top-[22px]" />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//         >
//           Search
//         </button>
//       </form>
//       {/*{isLoading && <p className="text-white mt-2">Loading...</p>}*/}
//       {/*<ul className="mt-4 space-y-2">*/}
//       {/*  {results.map((result) => (*/}
//       {/*    <li key={result.id} className="text-white p-2 bg-gray-700 rounded-md">*/}
//       {/*      {result.name || result.title}*/}
//       {/*    </li>*/}
//       {/*  ))}*/}
//       {/*</ul>*/}
//     </div>
//   );
// };
//
// export default SearchBar;

import { RiSearch2Line } from "react-icons/ri";

const SearchBar = ({ query, onQueryChange, onSubmit }) => {
  return (
    <div className="w-full p-4 bg-gray-800 rounded-md shadow-lg">
      <form onSubmit={onSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="relative w-full px-12 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Search for movies, TV shows, and people..."
        />
        <RiSearch2Line className="absolute inset-y-0 text text-red-500 w-8 h-8 top-[22px]" />
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
