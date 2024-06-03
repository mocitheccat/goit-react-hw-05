import axios from "axios";

class TMDB {
  #apiKey;
  #baseUrl;
  #multiSearchParams;
  #fullMediaData;
  #baseLanguage;

  constructor(apiKey) {
    this.#apiKey = apiKey;
    this.#baseUrl = import.meta.env.VITE_BASE_API_URL;
    this.#baseLanguage = "uk-UA";
    this.#multiSearchParams = {
      query: "",
      include_adult: false,
      language: this.#baseLanguage,
      page: 1,
    };
    this.#fullMediaData = {
      language: this.#baseLanguage,
    };
  }

  createUrl(endpoint) {
    return `${this.#baseUrl}${endpoint}`;
  }

  async makeRequest(endpoint, params = {}) {
    const url = this.createUrl(endpoint);
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
   * @param {string} [params.query] - The search query for filtering results.
   * @param {boolean} [params.include_adult] - Include adult content in the search results.
   * @param {string} [params.language] - The language of the search results.
   * @param {number} [params.page] - The page number of the search results.
   * @returns {Promise<object>} - A promise that resolves to the search results.
   * @throws {Error} - If an error occurs during the request.
   */
  async multiSearch(query, params = {}) {
    const searchParams = { ...this.#multiSearchParams, ...params, query };
    return await this.makeRequest("/search/multi", searchParams);
  }

  /**
   * Retrieves full details for a specific media item (movie, TV show, etc.) by its ID.
   *
   * @param {string} mediatype - The type of media to retrieve details for.
   * @param {number} mediaID - The ID of the media item to retrieve details for.
   * @param {object} [params] - Additional parameters for the request.
   * @param {string} [params.language] - The language of the requested details.
   * @returns {Promise<object>} - A promise that resolves to the full details of the media item.
   * @throws {Error} - If an error occurs during the request.
   */
  async getFullMediaData(mediatype, mediaID, params = {}) {
    const fullMediaDataParams = { ...this.#fullMediaData, ...params };
    return await this.makeRequest(
      `/${mediatype}/${mediaID}`,
      fullMediaDataParams,
    );
  }
}

export default TMDB;
