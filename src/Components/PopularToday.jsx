import MediaSection from "./MediaSection.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularToday = ({ data }) => {
  return (
    <div className="px-4 md:px-12 mt-8 space-y-8">
      <p className="text-white text-md md:text-2xl lg:text-4xl font-semibold">
        Popular Today
      </p>

      <MediaSection
        title="Popular Movies"
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
