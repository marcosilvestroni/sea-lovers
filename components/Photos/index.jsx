import Text from "components/Text";
import Image from "next/image";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { withMediaQueries } from "utils/withMediaQueries";

import { imagesApt, imagesNbh } from "./images";
import { ImagesWrapper, TitleWrapper, GalleryWrapper } from "./style";

const images = [...imagesApt, ...imagesNbh];
const Photos = ({ mediaIsDesktop, t }) => {
  return mediaIsDesktop ? (
    <GalleryWrapper>
      <Gallery images={images} enableImageSelection={false} rowHeight={360} />
    </GalleryWrapper>
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

