import { useEffect, useState, useCallback } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useTMDB } from "../hooks/useTMDB";
import MediaItem from "../Components/MediaItem";
import Pagination from "../Components/Pagination";

const FullSearchResults = () => {
  const tmdb = useTMDB();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { mediaType } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const query =
      location.state?.query || sessionStorage.getItem("searchQuery") || "";
    const page = parseInt(searchParams.get("page")) || 1;
    setQuery(query);
    setCurrentPage(page);
    setSearchParams({ query, page });
  }, [location.state?.query, searchParams, setSearchParams]);

  const performSearch = useCallback(async () => {
    setIsLoading(true);
    try {
      const response =
        mediaType === "movie"
          ? await tmdb.searchMovies(query, { page: currentPage })
          : await tmdb.searchSeries(query, { page: currentPage });

      setResults(response.results);
      setTotalPages(response.total_pages);
      setTotalResults(response.total_results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  }, [tmdb, mediaType, query, currentPage]);

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [performSearch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ query, page });
    sessionStorage.setItem("page", page);
  };

  return (
    <div className="text-white">
      <h2 className="text-xl mb-4">{`Full Results for "${query}" in ${mediaType}`}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((media) => (
              <MediaItem
                key={media.id}
                mediaData={media}
                mediaType={mediaType}
              />
            ))}
          </div>
          {totalResults > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default FullSearchResults;
