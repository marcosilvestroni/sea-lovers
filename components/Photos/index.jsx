import Text from "components/Text";
import Image from "next/image";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { withMediaQueries } from "utils/withMediaQueries";

import { imagesApt, imagesNbh } from "./images";
import { ImagesWrapper, TitleWrapper } from "./style";

const images = [];
const Photos = ({ mediaIsDesktop }) => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return mediaIsDesktop ? (
    <>
      <Gallery
        images={images}
        onClick={mediaIsDesktop ? handleClick : () => null}
        enableImageSelection={mediaIsDesktop}
        rowHeight={360}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </>
  ) : (
    <ImagesWrapper>
      <TitleWrapper id="apt">
        <Text tag="h2" variant="header">
          L'appartamento
        </Text>
      </TitleWrapper>
      {imagesApt.map((img) => (
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={img.caption}
          key={img.src}
        />
      ))}
      <TitleWrapper id="nbh">
        <Text tag="h2" variant="header">
          Dintorni
        </Text>
      </TitleWrapper>

      {imagesNbh.map((img) => (
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={img.caption}
          key={img.src}
        />
      ))}
    </ImagesWrapper>
  );
};

export default withMediaQueries(Photos);

