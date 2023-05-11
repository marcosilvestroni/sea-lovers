import Text from "../Text";
import Image from "next/image";
import { Gallery } from "react-grid-gallery";
import { withMediaQueries } from "../../utils/withMediaQueries";

import { imagesApt, imagesNbh } from "./images";
import { ImagesWrapper, TitleWrapper, GalleryWrapper } from "./style";

const images = [...imagesApt, ...imagesNbh];

const Photos = ({ mediaIsDesktop, t }) => {
  return (
    <GalleryWrapper>
      <Gallery images={images} enableImageSelection={false} rowHeight={360} />
    </GalleryWrapper>
  );
};

export default withMediaQueries(Photos);

