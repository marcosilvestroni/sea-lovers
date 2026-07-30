const LANDSCAPE = { width: "600", height: "400" };
const PORTRAIT = { width: "600", height: "900" };

const imageFromName = (folder, fileName, portraitList = []) => {
  const isPortrait = portraitList.includes(fileName);

  return {
    src: `/assets/gallery/${folder}/${fileName}`,
    ...(isPortrait ? PORTRAIT : LANDSCAPE),
  };
};

const createImages = (folder, fileNames, portraitList = []) =>
  [...fileNames]
    .sort((first, second) => first.localeCompare(second, "it", { sensitivity: "base" }))
    .map((fileName) => imageFromName(folder, fileName, portraitList));

const aptFiles = [
  "a.jpg",
  "c1.jpeg",
  "c2.jpeg",
  "c4.jpeg",
  "d.jpg",
  "e.jpg",
  "f.jpg",
  "g.jpg",
  "h.jpg",
  "i.jpg",
  "m.jpg",
  "o.jpg",
  "p.jpg",
  "q.jpg",
  "r.jpg",
  "s.jpg",
];

const aptPortrait = ["a.jpg", "e.jpg", "g.jpg", "r.jpg", "s.jpg"];

const neighborhoodFiles = [
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "22.jpg",
  "24.jpg",
];

const neighborhoodPortrait = [
  "12.jpg",
  "15.jpg",
  "17.jpg",
  "18.jpg",
  "22.jpg",
  "24.jpg",
];

export const imagesApt = createImages("apt", aptFiles, aptPortrait);
export const imagesNbh = createImages(
  "neighborhood",
  neighborhoodFiles,
  neighborhoodPortrait,
);

