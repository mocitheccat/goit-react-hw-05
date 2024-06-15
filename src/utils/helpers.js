export const createFullImgUrlForBillBoard = (imageWidth, imageObjArray) => {
  if (!Array.isArray(imageObjArray)) {
    throw new Error("imageObjArray must be an array");
  }

  return imageObjArray.map(
    (image) =>
      `https://image.tmdb.org/t/p/${
        imageWidth > 1 ? `w${imageWidth}` : "original"
      }${image.file_path}`,
  );
};

export const createFullImgUrl = (imageWidth, imagePath) => {
  return `https://image.tmdb.org/t/p/${
    imageWidth > 1 ? `w${imageWidth}` : "original"
  }${imagePath}`;
};

export const createRandomMediaBackdropImage = (imageUrlsArray) => {
  return imageUrlsArray[Math.floor(Math.random() * imageUrlsArray.length)];
};

/**
 * Filters the given results by the specified types.
 *
 * @param {Array} results - The array of results to be filtered.
 * @param {Array} types - The array of types to filter by.
 *
 * @returns {Object} An object containing filtered results for each type.
 */
export const filterResultsByMediaType = (results, types) => {
  return types.reduce((acc, type) => {
    acc[type] = results.filter((result) => result.media_type === type);
    return acc;
  }, {});
};
