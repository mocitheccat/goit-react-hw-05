import MediaSection from "./MediaSection.jsx";

const PopularToday = ({ data }) => {
  return (
    <div className="px-4 md:px-12 mt-8 space-y-2 pb-20">
      <p className="text-white text-xl md:text-2xl lg:text-4xl font-semibold">
        Popular Today
      </p>

      <MediaSection
        title="Trending Movies"
        link="/movies"
        mediaData={data.trendingMovies}
      />

      <MediaSection
        title="Trending Series"
        link="/series"
        mediaData={data.trendingSeries}
      />
    </div>
  );
};

export default PopularToday;
