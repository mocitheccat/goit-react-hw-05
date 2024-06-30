import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { online } from "../utils/helpers.js";

const TrailerModal = ({
  closeModal,
  info: { tmdb, mediaID, mediaType, title },
  isOnlineWatch,
}) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [error, setError] = useState(false);
  const [iframe, setIframe] = useState();

  console.log(isOnlineWatch);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    if (!isOnlineWatch) {
      setError(false);
      const fetchTrailer = async () => {
        try {
          const url = await tmdb.getTrailer(mediaType, mediaID);
          if (url) {
            setTrailerUrl(url);
          } else {
            setError(true);
          }
        } catch (error) {
          console.error("Error fetching trailer:", error);
          setError(true);
        }
      };

      fetchTrailer();
    } else {
      setError(false);
      const getIframe = async () => {
        try {
          const iframe = await online(tmdb, mediaType, mediaID);
          setIframe(iframe);
        } catch (error) {
          console.error("Error fetching iframe:", error);
        }
      };
      getIframe();
    }
  }, []);

  return (
    <div className="z-[100] bg-gradient-to-b from-red-950 to-stone-900 fixed w-screen h-screen top-0 flex flex-col items-center justify-center">
      <h2 className="text-2xl text-gray-200 md:text-5xl font-bold mb-1">
        {title}
      </h2>
      <div className="relative md:w-2/3 w-full h-[35vh] md:h-1/2 p-2 rounded-md drop-shadow-2xl">
        {error ? (
          <div className="flex text-white justify-center items-center h-full w-full bg-gray-500/30 rounded-lg">
            <h2 className="text-2xl text-gray-400  md:text-5xl font-bold mb-1">
              Trailer not found
            </h2>
          </div>
        ) : trailerUrl ? (
          <iframe
            className="w-full h-full rounded-lg drop-shadow-2xl shadow-xl shadow-gray-400/60"
            src={trailerUrl}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          iframe && (
            <div className="relative w-full h-full p-4 rounded-lg border-none">
              <iframe
                className="w-full h-full"
                src={iframe}
                title="Online"
                allowFullScreen
              ></iframe>
            </div>
          )
        )}
        {!trailerUrl && !error && !isOnlineWatch && (
          <div className="relative w-full h-full p-4 shimmer rounded-lg"></div>
        )}
      </div>
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 p-2 rounded-full text-gray-300 bg-gray-400/30 shadow-md focus:outline-none focus:bg-zinc-800/90 focus:text-red-500 hover:bg-zinc-800/90 hover:text-red-500"
      >
        <RiCloseCircleLine className="w-8 h-8" />
      </button>
    </div>
  );
};

export default TrailerModal;

// import { useEffect, useState } from "react";
// import { RiCloseCircleLine } from "react-icons/ri";
// import { online } from "../utils/helpers.js";
//
// const TrailerModal = ({
//   closeModal,
//   info: { tmdb, mediaID, mediaType, title },
//   isOnlineWatch,
// }) => {
//   const [trailerUrl, setTrailerUrl] = useState("");
//   const [error, setError] = useState(false);
//   const [iframe, setIframe] = useState("");
//
//   useEffect(() => {
//     document.body.classList.add("overflow-hidden");
//
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, []);
//
//   useEffect(() => {
//     if (isOnlineWatch) {
//       setError(false);
//       const fetchIframe = async () => {
//         try {
//           const iframeUrl = await online(tmdb, mediaType, mediaID);
//           console.log(iframeUrl);
//           if (iframeUrl) {
//             setIframe(iframeUrl);
//           } else {
//             setError(true);
//           }
//         } catch (error) {
//           console.error("Error fetching iframe:", error);
//           setError(true);
//         }
//       };
//
//       fetchIframe();
//     } else {
//       setError(false);
//       const fetchTrailer = async () => {
//         try {
//           const url = await tmdb.getTrailer(mediaType, mediaID);
//           if (url) {
//             setTrailerUrl(url);
//           } else {
//             setError(true);
//           }
//         } catch (error) {
//           console.error("Error fetching trailer:", error);
//           setError(true);
//         }
//       };
//
//       fetchTrailer();
//     }
//   }, [isOnlineWatch, mediaID, mediaType, tmdb]);
//
//   return (
//     <div className="z-[100] bg-gradient-to-b from-red-950 to-stone-900 fixed w-screen h-screen top-0 flex flex-col items-center justify-center">
//       <h2 className="text-2xl text-gray-200 md:text-5xl font-bold mb-1">
//         {title}
//       </h2>
//       <div className="relative md:w-2/3 w-full h-[35vh] md:h-1/2 p-4 rounded-md drop-shadow-2xl">
//         {error ? (
//           <div className="flex text-white justify-center items-center h-full w-full bg-gray-500/30 rounded-lg">
//             <h2 className="text-2xl text-gray-400 md:text-5xl font-bold mb-1">
//               {isOnlineWatch
//                 ? "Online watch not available"
//                 : "Trailer not found"}
//             </h2>
//           </div>
//         ) : isOnlineWatch ? (
//           iframe && (
//             <iframe
//               className="w-full h-full rounded-lg drop-shadow-2xl shadow-xl shadow-gray-400/60"
//               src={iframe}
//               title="Online Watch"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           )
//         ) : (
//           trailerUrl && (
//             <iframe
//               className="w-full h-full rounded-lg drop-shadow-2xl shadow-xl shadow-gray-400/60"
//               src={trailerUrl}
//               title="Trailer"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           )
//         )}
//         {!trailerUrl && !iframe && !error && (
//           <div className="relative w-full h-full p-4 shimmer rounded-lg"></div>
//         )}
//       </div>
//       <button
//         onClick={closeModal}
//         className="absolute top-4 right-4 p-2 rounded-full text-gray-300 bg-gray-400/30 shadow-md focus:outline-none focus:bg-zinc-800/90 focus:text-red-500 hover:bg-zinc-800/90 hover:text-red-500"
//       >
//         <RiCloseCircleLine className="w-8 h-8" />
//       </button>
//     </div>
//   );
// };
//
// export default TrailerModal;
