import Navbar from "./Navbar.jsx";
import MoviePage from "./MoviePage.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MoviePage mediaType="movie" mediaID="786892" />
    </>
  );
};

export default HomePage;
