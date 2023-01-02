const importAll = (r) => {
  const cache = {};
  r.keys().forEach((key) => (cache[key] = r(key)));
  return Object.values(cache).map(({ default: { src, width, height } }) => ({
    src,
    width,
    height,
    caption: "Sea Lovers Italy Apartment",
  }));
};

export const images = importAll(require.context("assets/gallery", false));

