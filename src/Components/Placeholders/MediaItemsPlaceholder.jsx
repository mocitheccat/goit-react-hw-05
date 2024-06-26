const MediaItemsPlaceholder = () => {
  return (
    <>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="shimmer bg-gray-800 border-2 border-gray-600 rounded-xl min-w-[35vw] md:min-w-[18vw] lg:min-w-[25vw] min-h-[52vw] md:min-h-[25vw] md:max-h-[25vw] lg:min-h-[14vw] lg:max-h-[14vw]"
          ></div>
        ))}
    </>
  );
};

export default MediaItemsPlaceholder;
