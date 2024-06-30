import { useTMDB } from "../hooks/useTMDB.js";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar.jsx";
import MediaSection from "../Components/MediaSection.jsx";
import SearchResultsToggle from "../Components/SearchResultsToggle.jsx";
import Pagination from "../Components/Pagination.jsx";

const Search = () => {
  const tmdb = useTMDB();
  const initialResults = {
    movies: {
      results: [],
      total_results: 0,
      total_pages: 0,
      mediaType: "movie",
    },
    series: {
      results: [],
      total_results: 0,
      total_pages: 0,
      mediaType: "tv",
    },
  };
  const [query, setQuery] = useState("");
  const [inputQuery, setInputQuery] = useState("");
  const [mediaType, setMediaType] = useState(initialResults.movies.mediaType);
  const [moviesPage, setMoviesPage] = useState(1);
  const [seriesPage, setSeriesPage] = useState(1);
  const [results, setResults] = useState(initialResults);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const performSearch = async () => {
    setIsLoading(true);
    try {
      let result;
      const movieSearchResponse = await tmdb.searchMovies(query, {
        page: moviesPage,
      });
      const seriesSearchResponse = await tmdb.searchSeries(query, {
        page: seriesPage,
      });
      result = {
        movies: { ...initialResults.movies, ...movieSearchResponse },
        series: { ...initialResults.series, ...seriesSearchResponse },
      };
      console.log(result);
      setResults(result);
    } catch (error) {
      console.error("Error performing search:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault();
    setQuery(inputQuery);
    const params = {
      q: inputQuery,
      type: mediaType,
      page: String(
        mediaType === initialResults.movies.mediaType ? moviesPage : seriesPage,
      ),
    };
    setSearchParams(params);
    // sessionStorage.setItem("searchParams", JSON.stringify(params)); // Оновлення sessionStorage
  };

  const changeResults = (mediaType) => {
    setMediaType(mediaType);
    const newParams = {
      q: query,
      type: mediaType,
      page: String(
        mediaType === initialResults.movies.mediaType ? moviesPage : seriesPage,
      ),
    };
    setSearchParams(newParams);
    // sessionStorage.setItem("searchParams", JSON.stringify(newParams)); // Оновлення sessionStorage
  };

  useEffect(() => {
    console.log("Перший юзефект");
    const savedParams = JSON.parse(sessionStorage.getItem("searchParams"));
    if (savedParams) {
      savedParams.mediaType === initialResults.movies.mediaType
        ? setSearchParams(savedParams.movie)
        : setSearchParams(savedParams.tv);
    }
  }, []);

  useEffect(() => {
    const initializeSearchOnQueryParams = async () => {
      console.log("initializeSearchOnQueryParams");
      if (searchParams.size) {
        const newSessionParams = {
          mediaType: searchParams.get("type"),
          movie: {
            q: searchParams.get("q"),
            type: initialResults.movies.mediaType,
            page:
              searchParams.get("type") === initialResults.movies.mediaType
                ? Number(searchParams.get("page"))
                : moviesPage,
          },
          tv: {
            q: searchParams.get("q"),
            type: initialResults.series.mediaType,
            page:
              searchParams.get("type") === initialResults.series.mediaType
                ? Number(searchParams.get("page"))
                : seriesPage,
          },
        };

        const newQueryParams =
          searchParams.get("type") === initialResults.movies.mediaType
            ? newSessionParams.movie
            : newSessionParams.tv;

        setQuery(newQueryParams.q);
        setInputQuery(newQueryParams.q);
        setMediaType(newQueryParams.type);
        setMoviesPage(newSessionParams.movie.page);
        setSeriesPage(newSessionParams.tv.page);
        sessionStorage.setItem(
          "searchParams",
          JSON.stringify(newSessionParams),
        );
      }
    };
    initializeSearchOnQueryParams();
  }, [
    initialResults.movies.mediaType,
    query,
    searchParams,
    seriesPage,
    moviesPage,
  ]);

  useEffect(() => {
    console.log("performSearchOnQuery");
    const performSearchOnQuery = async () => {
      query && (await performSearch());
    };
    performSearchOnQuery();
  }, [query, moviesPage, seriesPage]);

  const handlePageChange = (page) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev.entries()),
      page: page,
    }));
    if (mediaType === initialResults.movies.mediaType) {
      setMoviesPage(page);
    } else {
      setSeriesPage(page);
    }
  };

  return (
    <div className="relative overflow-y-scroll z-10 rounded-b-xl top-20 md:top-24 px-4 md:px-16 pb-20 text-white grid grid-cols-1 gap-3 md:flex md:flex-wrap md:gap-y-3 lg:grid lg:grid-cols-3">
      <SearchBar
        query={inputQuery}
        onQueryChange={setInputQuery}
        onSubmit={handleSubmit}
      />

      {results.movies.total_results || results.series.total_results ? (
        <>
          <div className="flex mx-auto gap-3 my-4">
            <SearchResultsToggle
              isActive={mediaType === initialResults.movies.mediaType}
              onClick={() => changeResults(initialResults.movies.mediaType)}
              count={results.movies.total_results}
            >
              Movies
            </SearchResultsToggle>
            <SearchResultsToggle
              isActive={mediaType === initialResults.series.mediaType}
              onClick={() => changeResults(initialResults.series.mediaType)}
              count={results.series.total_results}
            >
              Series
            </SearchResultsToggle>
          </div>
          <MediaSection
            mediaData={
              mediaType === initialResults.movies.mediaType
                ? results.movies.results
                : results.series.results
            }
            mediaType={mediaType}
            displayGrid
            isLoading={isLoading}
          />
          <Pagination
            currentPage={
              mediaType === initialResults.movies.mediaType
                ? moviesPage
                : seriesPage
            }
            totalPages={
              mediaType === initialResults.movies.mediaType
                ? results.movies.total_pages
                : results.series.total_pages
            }
            onPageChange={handlePageChange}
          />
        </>
      ) : !isLoading && !query ? (
        <div className="text-center mt-10">
          Here will be displayed results of the search if something would be
          found.
        </div>
      ) : (
        !isLoading && (
          <div className="text-center mt-10">
            No results found. Please try a different search.
          </div>
        )
      )}
    </div>
  );
};

export default Search;
