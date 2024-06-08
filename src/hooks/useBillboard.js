import { useState, useEffect } from "react";
import {
  createFullImgUrlForBillBoard,
  createRandomMediaBackdropImage,
} from "../utils/helpers";

const useBillboard = (tmdb, imageWidth = 0) => {
  const [randomMediaDataShort, setRandomMediaDataShort] = useState(null);
  const [randomBackdropImgForMedia, setRandomBackdropImgForMedia] =
    useState(null);

  useEffect(() => {
    const getRandomMovieData = async () => {
      try {
        const trending = await tmdb.getTrending();
        const randomMediaDataShort =
          trending[Math.floor(Math.random() * trending.length)];

        const mediaImages = await tmdb.getMediaImages(
          randomMediaDataShort.media_type,
          randomMediaDataShort.id,
        );

        const randomBackdropImgForMedia = createRandomMediaBackdropImage(
          createFullImgUrlForBillBoard(imageWidth, mediaImages),
        );

        setRandomMediaDataShort(randomMediaDataShort);
        // console.log(randomMediaDataShort);
        setRandomBackdropImgForMedia(randomBackdropImgForMedia);
        // console.log(randomBackdropImgForMedia);
      } catch (error) {
        console.error("Error fetching random movie data:", error);
      }
    };

    getRandomMovieData();
  }, [tmdb, imageWidth]);

  return { randomMediaDataShort, randomBackdropImgForMedia };
};

export default useBillboard;
