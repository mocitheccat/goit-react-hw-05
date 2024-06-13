// const Credits = ({ data }) => {
//   return (
//     <>
//       <h2 className="text-xl text-gray-400 md:text-3xl font-semibold mb-6 mt-8">
//         Cast
//       </h2>
//       <div className="flex overflow-x-auto space-x-4 p-4">
//         {data.cast.map((castMember) => (
//           <div
//             key={castMember.id}
//             className="bg-gray-400/10 rounded-lg p-4 flex flex-col items-center min-w-[200px] hover:border-2 border-gray-200"
//           >
//             <img
//               src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
//               alt={castMember.name}
//               className="w-24 h-24 rounded-full object-cover mb-4"
//             />
//             <h3 className="text-lg font-semibold text-white text-center">
//               {castMember.name}
//             </h3>
//             <p className="text-sm text-gray-400 text-center">
//               as {castMember.character}
//             </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Credits;


// import React from 'react';

// const Credits = ({ data }) => {
//   return (
//     <>
//       <h2 className="text-xl text-gray-400 md:text-3xl font-semibold mb-3 mt-4">
//         Cast
//       </h2>
//       <div className="flex overflow-x-auto space-x-4 p-4">
//         {data.cast.map((castMember) => (
//           <div
//             key={castMember.id}
//             className="bg-gray-400/10 rounded-lg p-2 flex flex-col items-center min-w-[150px] max-h-[200px] border-2 border-transparent hover:border-gray-200"
//           >
//             <img
//               src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
//               alt={castMember.name}
//               className="w-12 h-12 rounded-full object-cover mb-2"
//             />
//             <h3 className="text-sm font-semibold text-white text-center">
//               {castMember.name}
//             </h3>
//             <p className="text-xs text-gray-400 text-center">
//               as {castMember.character}
//             </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Credits;


import React from 'react';

const Credits = ({ data }) => {
  return (
    <>
      <h2 className="text-xl text-gray-400 md:text-3xl font-semibold mb-3 mt-4">
        Cast
      </h2>
      <div className="flex overflow-x-auto space-x-4 p-4 -ml-4">
        {data.cast.map((castMember) => (
          <div
            key={castMember.id}
            className="bg-gray-400/20 rounded-lg p-2 flex flex-col items-center min-w-[150px] max-h-[200px] border-2 border-transparent hover:border-gray-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
              alt={castMember.name}
              className="w-12 h-12 rounded-full object-cover mb-2"
            />
            <h3 className="text-sm font-semibold text-white text-center">
              {castMember.name}
            </h3>
            <p className="text-xs text-gray-400 text-center">
              as {castMember.character}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Credits;