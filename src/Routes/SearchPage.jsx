import { useState, useEffect, useCallback } from "react";
import SearchBar from "../Components/SearchBar";
import { useSearchParams } from "react-router-dom";
import { useTMDB } from "../hooks/useTMDB";
import { filterResultsByMediaType } from "../utils/helpers";
import MediaSection from "../Components/MediaSection.jsx";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  const tmdb = useTMDB();
  const [searchParams, setSearchParams] = useSearchParams();

  const performSearch = useCallback(
    async (query) => {
      // setIsLoading(true);
      try {
        const searchResults = await tmdb.multiSearch(query);
        const filteredResults = filterResultsByMediaType(
          searchResults.results,
          ["movie", "tv"],
        );
        setResults(filteredResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        // setIsLoading(false);
      }
    },
    [tmdb],
  );

  useEffect(() => {
    const initialQuery =
      searchParams.get("q") || sessionStorage.getItem("searchQuery") || "";
    setQuery(initialQuery);
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [performSearch, searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ q: query });
    sessionStorage.setItem("searchQuery", query);
    performSearch(query);
  };

  const { movie: movies, tv: series } = results;

  console.log("movies", movies);
  console.log("series", series);

  return (
    <div className="relative overflow-y-scroll z-10 rounded-b-xl top-20 md:top-24 px-4 md:px-16 pb-20 text-white grid grid-cols-1 gap-3 md:flex md:flex-wrap md:gap-x-10 md:gap-y-3 lg:grid lg:grid-cols-3">
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSubmit={handleSubmit}
      />
      <div className="px-4 md:px-12 mt-8 space-y-2 pb-2">
        <MediaSection title="Founded movies" mediaData={movies} showMore />

        <MediaSection title="Founded series" mediaData={series} showMore />
      </div>
    </div>
  );
};

export default SearchPage;
