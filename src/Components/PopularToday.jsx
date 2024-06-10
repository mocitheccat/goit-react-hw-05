import MediaSection from "./MediaSection.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularToday = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    lazyLoad: true,
    arrows: false,
  };

  return (
    <div className="px-4 md:px-12 mt-8 space-y-8">
      <p className="text-white text-md md:text-2xl lg:text-4xl font-semibold">
        Popular Today
      </p>

      <MediaSection
        title="Popular Movies"
        link="/movies"
        mediaData={data.trendingMovies}
        settings={settings}
      />

      <MediaSection
        title="Popular Series"
        link="/series"
        mediaData={data.trendingSeries}
        settings={settings}
      />
    </div>
  );
};

export default PopularToday;
