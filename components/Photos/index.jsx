import Text from "components/Text";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { withMediaQueries } from "utils/withMediaQueries";

import { imagesApt, imagesNbh } from "./images";
import { ImagesWrapper, TitleWrapper } from "./style";

const images = [...imagesApt, ...imagesNbh];
const Photos = ({ mediaIsDesktop }) => {
  const [index, setIndex] = useState(-1);
  const [navParams, setNavParams] = useState({
    nextIndex: 0,
    nextImage: "",
    prevIndex: 0,
    prevImage: "",
  });

  useEffect(() => {
    if (index > -1) {
      const currentImage = images[index];
      setNavParams({
        nextIndex: (index + 1) % images.length,
        nextImage: images[(index + 1) % images.length] || currentImage,
        prevIndex: (index + images.length - 1) % images.length,
        prevImage:
          images[(index + images.length - 1) % images.length] || currentImage,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

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
      {/* {!!index > -1 && (
        <Lightbox
          mainSrc={images[index]?.src}
          imageTitle={images[index]?.caption}
          mainSrcThumbnail={images[index]?.src}
          nextSrc={navParams.nextImage?.original}
          nextSrcThumbnail={navParams.nextImage?.src}
          prevSrc={navParams.prevImage?.original}
          prevSrcThumbnail={navParams.prevImage?.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )} */}
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

