const MediaSectionPlaceholder = ({ more = 1 }) => {
  const placeholders = new Array(3).fill(null);

  if (more > 1) {
    placeholders.push(...new Array(5).fill(null));
    return (
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {placeholders?.map((_, index) => (
            <div
              key={index}
              className="bg-zinc-900 border-2 border-gray-600 hover:border-gray-200 hover:border-2 rounded-xl overflow-hidden min-w-[35vw] md:min-w-[25vw] h-[52vw] md:min-h-[39vw] lg:min-h-[14vw] shimmer"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-transparent">
      <div className="flex justify-between items-center  mb-6">
        <p className=" shimmer rounded-md  border-2 border-gray-600 text-xs md:text-lg lg:text-xl">
          TrendingMovies
        </p>
        <div className="shimmer text-[8px] md:text-base border-2 border-gray-600 bg-gray-900 rounded-md px-1 py-0.5">
          Show More
        </div>
      </div>
      <div className="relative h-[52vw] md:h-[39vw] lg:h-[13.8vw]">
        <div className="scrollbar-custom flex space-x-4 overflow-x-auto h-[52vw] md:h-[39vw] lg:h-[13.8vw]">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[35vw] md:w-[25vw] snap-align-none"
            >
              <div className="border-2 border-gray-600 rounded-xl relative h-[93%] lg:h-[91%]">
                <div className="rounded-md w-full h-full shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaSectionPlaceholder;
