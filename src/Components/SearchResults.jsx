// import React from "react";
// import MediaSection from "./MediaSection.jsx";
//
// const SearchResults = ({ isLoading, movies, series, changeResults }) => {
//   return (
//     <>
//       <div className="flex mx-auto gap-3 my-4">
//         <div className="relative">
//           <button
//             className="bg-white
//               text-white
//               bg-opacity-30
//               rounded-md
//               py-4 md:py-5
//               px-6 md:px-7
//               w-[30vw]
//               text-base lg:text-lg
//               font-semibold
//               hover:bg-opacity-20
//               transition"
//             onClick={changeResults}
//           >
//             Movies
//           </button>
//           <div className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full min-h-8 min-w-8 flex justify-center items-center text-xs lg:text-sm font-bold">
//             <span>{movies.totalMatch}</span>
//           </div>
//         </div>
//         <div className="relative">
//           <button
//             className="bg-white
//               text-white
//               bg-opacity-30
//               rounded-md
//               py-4 md:py-5
//               px-6 md:px-7
//               w-[30vw]
//               text-base lg:text-lg
//               font-semibold
//               hover:bg-opacity-20
//               transition"
//             onClick={changeResults}
//           >
//             Series
//           </button>
//           <div className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full min-h-8 min-w-8 flex justify-center items-center text-xs lg:text-sm font-bold">
//             <span>{series.totalMatch}</span>
//           </div>
//         </div>
//       </div>
//
//       <MediaSection displayGrid mediaData={movies.results} />
//     </>
//   );
// };
//
// export default SearchResults;
//
// import React from "react";
// import MediaSection from "./MediaSection";
//
// const SearchResults = ({
//   isLoading,
//   movies,
//   series,
//   currentType,
//   changeResults,
//   loadMore,
// }) => {
//   const results = currentType === "movies" ? movies : series;
//
//   return (
//     <>
//       <div className="flex mx-auto gap-3 my-4">
//         <div className="relative">
//           <button
//             className={`bg-white text-white bg-opacity-30 rounded-md py-4 md:py-5 px-6 md:px-7 w-[30vw] text-base lg:text-lg font-semibold hover:bg-opacity-20 transition ${currentType === "movies" ? "bg-opacity-50" : ""}`}
//             onClick={() => changeResults("movies")}
//           >
//             Movies
//           </button>
//           <div className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full min-h-8 min-w-8 flex justify-center items-center text-xs lg:text-sm font-bold">
//             <span>{movies.totalMatch}</span>
//           </div>
//         </div>
//         <div className="relative">
//           <button
//             className={`bg-white text-white bg-opacity-30 rounded-md py-4 md:py-5 px-6 md:px-7 w-[30vw] text-base lg:text-lg font-semibold hover:bg-opacity-20 transition ${currentType === "series" ? "bg-opacity-50" : ""}`}
//             onClick={() => changeResults("series")}
//           >
//             Series
//           </button>
//           <div className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full min-h-8 min-w-8 flex justify-center items-center text-xs lg:text-sm font-bold">
//             <span>{series.totalMatch}</span>
//           </div>
//         </div>
//       </div>
//       <MediaSection displayGrid mediaData={results.results} />
//       {results.results.length > 0 && !isLoading && (
//         <div className="w-full flex justify-center mt-4">
//           <button
//             onClick={loadMore}
//             className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </>
//   );
// };
//
// export default SearchResults;
