import Image from "next/image";
import Text from "../Text";
import { TextWapper } from "./style";

import BannerImg from "/assets/img/pool.webp";

import { ContentWrapper, Overlay } from "styles/commons";

const Banner = ({ t }) => {
  return (
    <>
      <Image src={BannerImg} alt={t("imageGenericCaption")} fill />
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

