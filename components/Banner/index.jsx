import Image from "next/image";
import Text from "components/Text";
import { TextWapper } from "./style";

import imageBanner from "assets/img/pool.webp";
import { ContentWrapper, Overlay } from "styles/commons";

const Banner = () => {
  return (
    <>
      <Image src={imageBanner} alt="Sea Lovers Home" fill />
      <ContentWrapper>
        <Overlay />
        <TextWapper>
          <Text tag={"h1"} variant="heading">
            Sea Lovers Apartment Porto Recanati
          </Text>
          <Text tag={"h2"} variant="sub-heading">
            La tua casa fuori casa
          </Text>
        </TextWapper>
      </ContentWrapper>
    </>
  );
};

export default Banner;

