import TrailerPlayer from "./TrailerPlayer";

const MoviePage = ({ mediaType, mediaID }) => {
  return (
    <div>
      <TrailerPlayer mediaType={mediaType} mediaID={mediaID} />
    </div>
  );
};

export default MoviePage;
