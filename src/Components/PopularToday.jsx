import MediaSection from "./MediaSection";

const PopularToday = ({ data }) => {
  const isLoading = !data.trendingSeries.length && !data.trendingMovies.length;

  return (
    <div className="px-4 md:px-12 mt-8 pb-20">
      <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
        Popular Today
      </p>
      {isLoading ? (
        <>
          <MediaSection title="Trending Movies" isLoading />
          <MediaSection title="Trending Series" isLoading />
        </>
      ) : (
        <>
          <MediaSection
            title="Trending Movies"
            mediaData={data.trendingMovies}
          />
          <MediaSection
            title="Trending Series"
            mediaData={data.trendingSeries}
          />
        </>
      )}
    </div>
  );
};

export default PopularToday;
