import MediaSection from "./MediaSection.jsx";

const PopularToday = ({ data }) => {
  return (
    <div className="px-4 md:px-12 mt-8 space-y-8 pb-20">
      <p className="text-white text-md md:text-2xl lg:text-4xl font-semibold">
        Popular Today
      </p>

      <MediaSection
        title="Popular MoviesPage"
        link="/movies"
        mediaData={data.trendingMovies}
      />

      <MediaSection
        title="Popular Series"
        link="/series"
        mediaData={data.trendingSeries}
      />
    </div>
  );
};

export default PopularToday;
