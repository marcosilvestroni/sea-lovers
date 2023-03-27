const importAll = (r) => {
  const cache = {};
  r.keys().forEach((key) => (cache[key] = r(key)));
  return Object.values(cache).map(({ default: { src, width, height } }) => ({
    src,
    width,
    height,
  }));
};

export const imagesApt = importAll(
  require.context("/assets/gallery/apt", false)
);
export const imagesNbh = importAll(
  require.context("/assets/gallery/neighborhood", false)
);

