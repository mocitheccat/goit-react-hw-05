import { RiSearch2Line } from "react-icons/ri";

const SearchBar = ({ query, onQueryChange, onSubmit }) => {
  return (
    <div className="w-full p-4 rounded-2xl border-2 border-gray-600 shadow-inner shadow-gray-200/20">
      <form onSubmit={onSubmit} className="flex items-center space-x-4">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="relative w-full mr-auto px-2 py-2 text-gray-400 rounded-xl border border-gray-400 bg-gray-400/30 focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Search for movies, TV shows..."
        />
        <button type="submit" className="p-1 text-gray-300 hover:text-red-800">
          <RiSearch2Line className="inset-y-0 text w-8 h-8" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
