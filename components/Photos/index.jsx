import Text from "../Text";
import Image from "next/image";
import { Gallery } from "react-grid-gallery";
import { withMediaQueries } from "../../utils/withMediaQueries";

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
          {t("galleryPageheader1")}
        </Text>
      </TitleWrapper>
      {imagesApt.map((img, i) => (
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={`${t("imageGenericCaption")} ${t("imageTypeApartment")} ${i}`}
          key={img.src}
        />
      ))}
      <TitleWrapper id="nbh">
        <Text tag="h2" variant="header">
          {t("galleryPageheader2")}
        </Text>
      </TitleWrapper>

      {imagesNbh.map((img, i) => (
        <Image
          src={img.src}
          width={img.width}
          height={img.height}
          alt={`${t("imageGenericCaption")} ${t("imageTypeNeibour")} ${i}`}
          key={img.src}
        />
      ))}
    </ImagesWrapper>
  );
};

export default withMediaQueries(Photos);

