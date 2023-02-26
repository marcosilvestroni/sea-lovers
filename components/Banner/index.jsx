import Image from "next/image";
import Text from "components/Text";
import { TextWapper } from "./style";

import imageBanner from "assets/img/pool.webp";
import { ContentWrapper, Overlay } from "styles/commons";

const Banner = ({ t }) => {
  return (
    <>
      <Image src={imageBanner} alt="Sea Lovers Home" fill />
      <ContentWrapper>
        <Overlay />
        <TextWapper>
          <Text tag={"h1"} variant="heading-shadow">
            {t("homeBannerTitle")}
          </Text>
          <Text tag={"h2"} variant="sub-heading-shadow">
            {t("homeBannerSubTitle")}
          </Text>
        </TextWapper>
      </ContentWrapper>
    </>
  );
};

export default Banner;

