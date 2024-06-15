import SearchBar from "../Components/SearchBar.jsx";
import { useLocation } from "react-router-dom";
import { useTMDB } from "../hooks/useTMDB.js";

const SearchPage = () => {
  const location = useLocation();
  const results = location.state?.results || [];
  const tmdb = useTMDB();

  return (
    <div className="relative overflow-y-scroll rounded-b-xl top-20 md:top-24 px-4 md:px-16 pb-20 text-white">
      <SearchBar tmdb={tmdb} />
      <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-x-10 md:gap-y-3 lg:grid lg:grid-cols-3 mt-6">
        {results.map((result) => (
          <div key={result.id} className="bg-gray-800 p-4 rounded-md">
            <h3>{result.name || result.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
