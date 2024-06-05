export const createFullImgUrl = (imageWidth, imageObjArray) => {
  if (!Array.isArray(imageObjArray)) {
    throw new Error("imageObjArray must be an array");
  }

  return imageObjArray.map(
    (image) =>
      `https://image.tmdb.org/t/p/${
        imageWidth > 1 ? `w${imageWidth}` : "original"
      }${image.file_path}`
  );
};

export const createRandomMediaBackdropImage = (imageUrlsArray) => {
  return imageUrlsArray[Math.floor(Math.random() * imageUrlsArray.length)];
};
