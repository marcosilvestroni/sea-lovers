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
  fileNames.map((fileName) => imageFromName(folder, fileName, portraitList));

const aptFiles = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "10.jpg",
  "11.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
];

const aptPortrait = ["1.jpg", "2.jpg", "7.jpg", "19.jpg", "23.jpg"];

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

