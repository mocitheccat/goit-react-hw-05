import axios from "axios";

class TMDB {
  #apiKey;
  #baseUrl;
  #baseLanguage;
  #multiSearchParams;
  #fullMediaData;
  #trailerParams;
  #trendingParams;
  #creditsParams;
  #movieSearchParams;
  #seriesSearchParams;

  constructor(apiKey) {
    this.#apiKey = apiKey;
    this.#baseUrl = import.meta.env.VITE_BASE_API_URL;
    this.#baseLanguage = "en-US";
    this.#multiSearchParams = {
      include_adult: false,
      language: this.#baseLanguage,
      page: 1,
    };
    this.#fullMediaData = {
      language: this.#baseLanguage,
    };
    this.#trailerParams = {
      language: this.#baseLanguage,
    };
    this.#trendingParams = {
      language: this.#baseLanguage,
    };
    this.#creditsParams = {
      language: this.#baseLanguage,
    };
    this.#movieSearchParams = {
      include_adult: false,
      language: this.#baseLanguage,
      primary_release_year: undefined,
      page: 1,
      region: undefined,
      year: undefined,
    };
    this.#seriesSearchParams = {
      first_air_date_year: undefined,
      include_adult: false,
      language: this.#baseLanguage,
      page: 1,
      year: undefined,
    };
  }

  #createUrl(endpoint) {
    return `${this.#baseUrl}${endpoint}`;
  }

  async #makeRequest(endpoint, params = {}) {
    const url = this.#createUrl(endpoint);
    try {
      const response = await axios.get(url, {
        params: {
          ...params,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${this.#apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Searches for movies, TV shows, and people using a multi-search endpoint.
   *
   * @param {string} query - The search query.
   * @param {object} [params] - Additional parameters for the search.
   * @param {boolean} [params.include_adult] - Include adult content in the search results.
   * @param {string} [params.language] - The language of the search results.
   * @param {number} [params.page] - The page number of the search results.
   * @returns {Promise<object>} - A promise that resolves to the search results.
   * @throws {Error} - If an error occurs during the request.
   */
  async multiSearch(query, params = {}) {
    const searchParams = { ...this.#multiSearchParams, ...params, query };
    return await this.#makeRequest("/search/multi", searchParams);
  }

  /**
   * Searches for movies, TV shows, and people using a multi-search endpoint.
   *
   * @param {string} query - The search query.
   * @param {object} [params] - Additional parameters for the search.
   * @param {boolean} [params.include_adult] - Include adult content in the search results.
   * @param {string} [params.language] - The language of the search results.
   * @param {string} [params.primary_release_year] - The primary release year
   * @param {number} [params.page] - The page number of the search results.
   * @param {string} [params.region] - The region where movies was made.
   * @param {string} [params.year] - The exact year when movie was made.
   * @returns {Promise<object>} - A promise that resolves to the search results.
   * @throws {Error} - If an error occurs during the request.
   */
  async searchMovies(query, params = {}) {
    const searchParams = { ...this.#movieSearchParams, ...params, query };
    return await this.#makeRequest("/search/movie", searchParams);
  }

  /**
   * Searches for TV shows using a multi-search endpoint.
   *
   * @param {string} query - The search query.
   * @param {object} [params] - Additional parameters for the search.
   * @param {number} [params.first_air_date_year] - The year of the first air of the TV shows. Search only the first air date. Valid values are: 1000..9999
   * @param {boolean} [params.include_adult] - Include adult content in the search results.
   * @param {string} [params.language] - The language of the search results.
   * @param {number} [params.page] - The page number of the search results.
   * @param {number} [params.year] - Search the first air date and all episode air dates. Valid values are: 1000..9999
   * @returns {Promise<object>} - A promise that resolves to the search results.
   * @throws {Error} - If an error occurs during the request.
   */
  async searchSeries(query, params = {}) {
    const searchParams = { ...this.#seriesSearchParams, ...params, query };
    return await this.#makeRequest("/search/tv", searchParams);
  }

  /**
   * Retrieves full details for a specific media item (movie, TV show, etc.) by its ID.
   *
   * @param {string} mediaType - The type of media to retrieve details for.
   * @param {number} mediaID - The ID of the media item to retrieve details for.
   * @param {object} [params] - Additional parameters for the request.
   * @param {string} [params.language] - The language of the requested details.
   * @returns {Promise<object>} - A promise that resolves to the full details of the media item.
   * @throws {Error} - If an error occurs during the request.
   */
  async getFullMediaData(mediaType, mediaID, params = {}) {
    const fullMediaDataParams = { ...this.#fullMediaData, ...params };
    return await this.#makeRequest(
      `/${mediaType}/${mediaID}`,
      fullMediaDataParams,
    );
  }

  async getMediaImages(mediaType, mediaID) {
    const imageObjArray = await this.#makeRequest(
      `/${mediaType}/${mediaID}/images`,
      {
        include_image_language: null,
      },
    );
    return imageObjArray.backdrops;
  }

  //
  // Youtube trailers (direct links to videos) [it needs to be rewrotten to own backend in future or just use youtube <iframe>]
  //
  /**
  //  * Retrieves the URL of a YouTube video from its ID.
  //  *
  //  * @param {string} youtubeVideoURL - The URL of the YouTube video.
  //  * @returns {Promise<object>} - A promise that resolves to the video details.
  //  * @throws {Error} - If an error occurs during the request.
  //  */
  // async #getVideoUrl(youtubeVideoURL) {
  //   const options = {
  //     method: "GET",
  //     url: import.meta.env.VITE_X_RAPIDAPI_URL,
  //     params: {
  //       url: youtubeVideoURL,
  //     },
  //     headers: {
  //       "x-rapidapi-key": import.meta.env.VITE_X_RAPIDAPI_KEY,
  //       "x-rapidapi-host": import.meta.env.VITE_X_RAPIDAPI_HOST,
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

  /**
   * Retrieves the URL of a YouTube video from its ID.
   *
   * @param {string} mediaType - The type of media to retrieve details for.
   * @param {number} mediaID - The ID of the media item to retrieve details for.
   * @param {object} [params] - Additional parameters for the request.
   * @param {string} [params.language] - The language of the requested details.
   * @returns {Promise<object>} - A promise that resolves to the full details of the media item.
   * @throws {Error} - If an error occurs during the request.
   */
  async getTrailer(mediaType, mediaID, params = {}) {
    const trailerParams = { ...this.#trailerParams, ...params };
    const response = await this.#makeRequest(
      `/${mediaType}/${mediaID}/videos`,
      trailerParams,
    );
    const videos = response.results;

    const trailer = videos.find(
      (video) => video?.type === "Trailer" && video?.site === "YouTube",
    );
    if (trailer) {
      return `https://www.youtube.com/embed/${trailer.key}`;
      // return `https://www.youtube.com/watch?v=${trailer.key}`; // for iframe;
      // const videoData = await this.#getVideoUrl(
      //   `https://youtu.be/${trailer.key}`,
      // );
      // console.log(videoData);
      // let videoUrl = this.#findFittableQualityMp4Trailer(
      //   videoData?.data?.video_without_audio,
      // );
      // if (!videoUrl) {
      //   videoUrl = this.#findFittableQualityMp4Trailer(
      //     videoData?.data?.video_with_audio,
      //   );
      // }
      //
      // if (!videoUrl) {
      //   throw new Error("Trailer not found");
      // }
      // return videoUrl;
    } else {
      throw new Error("Trailer not found");
    }
  }

  // /**
  //  * Finds a fitting quality MP4 trailer from the provided videos.
  //  *
  //  * @param {Array<Object>} videos - An array of video objects.
  //  * @returns {string|null} - The URL of the fitting quality MP4 trailer, or null if no suitable trailer is found.
  //  */
  // #findFittableQualityMp4Trailer(videos) {
  //   const maxQuality = 480; // Max default q-ty, may change later

  //   const mp4VideoWithoutAudio = videos
  //     .filter((video) => video.mimeType.includes("video/mp4"))
  //     .filter((video) => {
  //       const quality = parseInt(video.quality, 10);
  //       return quality <= maxQuality;
  //     })
  //     .sort((trailer1, trailer2) => {
  //       const resolution1 = parseInt(trailer1.quality, 10);
  //       const resolution2 = parseInt(trailer2.quality, 10);
  //       return resolution2 - resolution1;
  //     });

  //   if (mp4VideoWithoutAudio.length === 0) {
  //     return null;
  //   }

  //   return mp4VideoWithoutAudio[0].url;
  // }

  /**
   * Retrieves the trending media items for a specified time window.
   *
   * @param {string} [timeWindow="day"] - The time window for the trending data. Can be "day" or "week". Defaults to "day".
   * @param {string} [mediaType="all"] - Type of media to fetch. Default to "all".
   * @param {object} [params] - Additional parameters for the request.
   * @param {string} [params.language] - The language of the requested trending data.
   * @returns {Promise<object>} - A promise that resolves to the trending data.
   * @throws {Error} - If an error occurs during the request.
   */
  async getTrending(timeWindow = "day", mediaType = "all", params = {}) {
    const trendingParams = { ...this.#trendingParams, ...params };
    const trendingArray = await this.#makeRequest(
      `/trending/${mediaType}/${timeWindow}`,
      trendingParams,
    );
    return mediaType === "all"
      ? trendingArray.results.filter(
          (media) => media.media_type === "movie" || media.media_type === "tv",
        )
      : trendingArray.results;
  }

  /**
   * Retrieves the credits for a specific media item (movie, TV show, etc.) by its ID.
   *
   * @param {object} settings - An object containing the media type and ID.
   * @param {string} settings.mediaType - The type of media to retrieve credits for.
   * @param {number} settings.mediaID - The ID of the media item to retrieve credits for.
   * @param {object} [settings.params] - Additional parameters for the request.
   * @param {string} [settings.params.language] - Language parameter.
   * @returns {Promise<object>} - A promise that resolves to the credits of the media item.
   * @throws {Error} - If an error occurs during the request.
   */
  async getCredits(settings = {}) {
    const creditsParams = { ...this.#creditsParams, ...settings.params };
    return await this.#makeRequest(
      `/${settings.mediaType}/${settings.mediaID}/credits`,
      creditsParams,
    );
  }

  async getIMDBId(id, mediaType) {
    const response = await this.#makeRequest(
      `/${mediaType}/${id}/external_ids`,
    );
    return response.imdb_id;
  }
}

export default TMDB;
