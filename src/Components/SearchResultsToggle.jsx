const SearchResultsToggle = ({ isActive, onClick, count, children }) => {
  return (
    <div className="relative">
      <button
        className={`border border-gray-400 rounded-md py-4 md:py-5 px-6 md:px-7 w-[30vw] text-base lg:text-lg font-semibold transition ${
          isActive ? "bg-gray-100 text-red-600 border-red-500" : "text-gray-200"
        }`}
        onClick={onClick}
      >
        {children}
      </button>
      <div className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full min-h-8 min-w-8 flex justify-center items-center text-xs lg:text-sm font-bold">
        <span>{count}</span>
      </div>
    </div>
  );
};

export default SearchResultsToggle;
